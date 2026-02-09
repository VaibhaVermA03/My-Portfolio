import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// --- 1. THE NOISE SHADER FUNCTION (Exact copy from reference) ---
const noise = `
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy; 
    vec3 x3 = x0 - D.yyy;      

    i = mod289(i); 
    vec4 p = permute( permute( permute( 
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    float n_ = 0.142857142857; 
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                  dot(p2,x2), dot(p3,x3) ) );
  }
`;

const HalftonePlane = () => {
  const { viewport } = useThree();
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  
  // Use a ref to store the time value so we can access it inside onBeforeCompile
  const uniformsRef = useRef({ time: { value: 0 } });

  useFrame((_state, delta) => {
    // Update the uniform time value on every frame
    uniformsRef.current.time.value += delta;
  });

  const onBeforeCompile = (shader: any) => {
    // Inject the uniform into the shader
    shader.uniforms.time = uniformsRef.current.time;

    // 1. Inject Noise Function & getValue Helper
    shader.fragmentShader = `
      uniform float time;
      ${noise}

      float getValue(vec2 uv){
        vec2 cID = floor(uv);
        vec2 cUV = fract(uv);
        
        // --- CONFIGURATION ---
        // Grid Scale (0.05) and Animation Speed (0.1)
        float n = snoise(vec3(cID * 0.05, time * 0.1)); 
        
        n = abs(n);
        float r = sqrt(2.) * (1. - n * 0.5);
        float fw = length(fwidth(uv));
        
        // Circle drawing logic
        float fCircle = smoothstep(r, r + fw, length(cUV - 0.5) * 1.9);
        return fCircle;
      }
      ${shader.fragmentShader}
    `;

    // 2. Replace the Color Logic to Create RGB Split
    shader.fragmentShader = shader.fragmentShader.replace(
      'vec4 diffuseColor = vec4( diffuse, opacity );',
      `
      vec3 col = diffuse;
      
      // --- GRID DENSITY ---
      // 80.0 controls how many dots fit on screen (Higher = smaller dots)
      vec2 uv = (vUv - 0.5) * 80.0; 
      
      // --- RGB SHIFT AMOUNT ---
      vec2 shift = vec2(0, 1.7);
      
      // Calculate RGB channels independently
      col.r = getValue(uv - shift);
      col.g = getValue(uv);
      col.b = getValue(uv + shift);
      
      // Mix with Dark Grey Background (#222222)
      // If col (dot) is active, show dot, else show background
      vec3 bg = vec3(0.133, 0.133, 0.133); // #222222 converted to 0-1 range
      vec3 finalCol = col + bg; // Additive mix
      
      vec4 diffuseColor = vec4( finalCol, opacity );
      `
    );
  };

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial 
        ref={materialRef}
        color="white" // Base color for the dots
        onBeforeCompile={onBeforeCompile}
        toneMapped={false} // Important for vibrant colors
      />
    </mesh>
  );
};

const HalftoneBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#222]">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 50 }} 
        gl={{ alpha: true, antialias: true }}
      >
        <HalftonePlane />
      </Canvas>
    </div>
  );
};

export default HalftoneBackground;