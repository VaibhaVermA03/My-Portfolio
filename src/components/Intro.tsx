import { useEffect, useState } from 'react';
import { motion, cubicBezier } from 'framer-motion';

const Intro = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

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
  }

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
      initial={{ y: 0 }}
      exit={{ 
        y: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
      }}
    >
      
      <div className="flex flex-col items-center justify-center z-50 px-4">
        
        {/* LINE 1: Vaibhav Verma */}
        <div className="overflow-hidden mb-2 md:mb-4">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-wide text-center whitespace-nowrap"
          >
            VAIBHAV VERMA
          </motion.h1>
        </div>

        {/* LINE 2: Welcomes You */}
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 }} 
            className="font-body uppercase text-xl md:text-3xl text-gray-300 tracking-[0.5em] text-center"
          >
            Welcomes You
          </motion.h2>
        </div>

      </div>

      <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none -z-10 fill-black">
        <motion.path 
          variants={curve} 
          initial="initial" 
          exit="exit" 
        />
      </svg>
      
    </motion.div>
  );
};

export default Intro;