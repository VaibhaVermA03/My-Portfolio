import { useEffect, useState } from 'react';
import { motion, cubicBezier } from 'framer-motion';

const Intro = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(true); // Default to true (Safe mode)

  useEffect(() => {
    // Screen size calculate karo
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    
    // Check karo agar device mobile hai (width < 768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // SVG Paths (Sirf Desktop ke liye calculate honge)
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: cubicBezier(0.76, 0, 0.24, 1) }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: cubicBezier(0.76, 0, 0.24, 1), delay: 0.3 }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black cursor-default"
      initial={{ y: 0 }}
      exit={{ 
        y: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
      }}
    >
      {/* CSS STYLES - Sirf Desktop par heavy glitch chalayenge */}
      <style>{`
        /* Desktop Glitch Effect */
        @media (min-width: 768px) {
          .glitch-wrapper { position: relative; }
          
          .glitch {
            position: relative;
            color: white;
            font-weight: bold;
            text-transform: uppercase;
            display: inline-block;
            animation: flicker 2s infinite; 
          }

          .glitch::before, .glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: black;
          }

          .glitch::before {
            left: 2px;
            text-shadow: -2px 0 #ff00c1;
            clip-path: inset(44% 0 61% 0);
            animation: glitch-anim-1 2.5s infinite linear alternate-reverse;
          }

          .glitch::after {
            left: -2px;
            text-shadow: -2px 0 #00fff9;
            clip-path: inset(50% 0 30% 0);
            animation: glitch-anim-2 2.5s infinite linear alternate-reverse;
          }
        }

        /* Common Flicker Animation */
        @keyframes flicker {
          0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 0.99; }
          20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.4; }
        }

        @keyframes glitch-anim-1 {
          0% { clip-path: inset(20% 0 80% 0); } 100% { clip-path: inset(30% 0 20% 0); }
        }
        @keyframes glitch-anim-2 {
          0% { clip-path: inset(10% 0 60% 0); } 100% { clip-path: inset(40% 0 50% 0); }
        }
      `}</style>

      <div className="flex flex-col items-center justify-center z-50 px-4">
        
        {/* TEXT CONTAINER */}
        <div className="glitch-wrapper mb-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            // Mobile: Simple White Text with Flicker (No heavy glitch)
            // Desktop: Full Glitch Effect
            className={`
              font-heading text-4xl sm:text-6xl md:text-7xl lg:text-9xl tracking-wider text-center text-white
              ${isMobile ? 'animate-pulse' : 'glitch'} 
            `}
            data-text="VAIBHAV VERMA"
          >
            VAIBHAV VERMA
          </motion.h1>
        </div>

      </div>

      {/* SVG Curve Background - ONLY RENDER ON DESKTOP (!isMobile) */}
      {/* Mobile crash se bachne ke liye SVG hata diya hai */}
      {!isMobile && dimension.width > 0 && (
        <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none -z-10 fill-black">
          <motion.path 
            variants={curve} 
            initial="initial" 
            exit="exit" 
          />
        </svg>
      )}
      
    </motion.div>
  );
};

export default Intro;