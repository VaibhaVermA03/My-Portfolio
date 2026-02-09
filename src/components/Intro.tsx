import { useEffect, useState } from 'react';
import { motion, cubicBezier } from 'framer-motion';

const Intro = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // --- CURVE LOGIC (As requested: Kept exactly same) ---
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
      
      {/* TEXT CONTAINER - Zig Zag Layout with Super Smooth Entry */}
      <div className="flex flex-col items-center justify-center z-50 px-4 relative w-full max-w-6xl">
        
        {/* TOP TEXT: Font-Hand, Smooth Slide from Left */}
        <motion.p 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.6, x: -40 }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }} // Custom Smooth Ease
          className="self-start md:ml-20 font-hand text-3xl sm:text-4xl md:text-5xl text-gray-400 select-none mb-2"
        >
          Vaibhav Verma
        </motion.p>

        {/* MIDDLE TEXT: Font-Heading, Bold, Smooth Scale Up */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
          className="font-heading text-6xl sm:text-8xl md:text-[9rem] lg:text-[11rem] leading-none text-white z-10 relative text-center tracking-tighter"
        >
          VAIBHAV VERMA
        </motion.h1>

        {/* BOTTOM TEXT: Font-Hand, Smooth Slide from Right */}
        <motion.p 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.6, x: 40 }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
          className="self-end md:mr-20 font-hand text-3xl sm:text-4xl md:text-5xl text-gray-400 select-none mt-2"
        >
          Vaibhav Verma
        </motion.p>

      </div>

      {/* SVG Curve Background - ONLY RENDER ON DESKTOP */}
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