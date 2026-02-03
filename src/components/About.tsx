import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const myImages = [
  "/vaibhav-1.png", 
  "/vaibhav-2.webp", 
  "/vaibhav-3.png", 
  "/vaibhav-4.png", 
  "/vaibhav-5.png"
];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (myImages.length === 0) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % myImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative w-full px-5 md:px-20 pt-20 md:pt-32 pb-0 flex flex-col md:flex-row gap-12 md:gap-20 items-start z-10 overflow-hidden">

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full md:w-2/3 order-1 md:order-2"
      >
        {/* Heading Size adjusted slightly for better fit */}
        <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-2 leading-none text-white whitespace-nowrap">
          HELLO, <span className="text-transparent stroke-text">I AM VAIBHAV</span>
        </h2>
        
        <p className="font-hand text-xl md:text-3xl text-gray-400 mb-8 md:mb-12">
          Vaibhav Verma
        </p>

        <p className="font-body uppercase text-left text-base md:text-2xl leading-relaxed tracking-wide text-gray-300 border-l-2 border-white/20 pl-6 md:pl-8">
          Hi, I’m a Full Stack Web Developer who enjoys building websites and applications that are both useful and visually appealing. 
          I work with frontend and backend technologies to create smooth, end-to-end digital experiences. 
          I’m always curious, always learning, and always looking for better ways to build. 
          For me, coding isn’t just work — it’s something I genuinely enjoy.
        </p>
      </motion.div>

  
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/3 relative mt-0 md:mt-4 flex flex-col items-center order-2 md:order-1"
      >
        
        {/* Image Container */}
        <div className="w-full aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl shadow-black/40 relative z-10 bg-gray-800 border border-white">
            <AnimatePresence mode='popLayout'>
              <motion.img 
                key={currentImage} 
                src={myImages[currentImage]} 
                alt="Vaibhav Verma" 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/10" />
        </div>
        
        <div className="relative w-full mt-6 flex justify-center">
            <svg width="300" height="120" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white overflow-visible scale-75 md:scale-100">
                <text x="20" y="60" className="font-heading text-4xl tracking-wider" fill="currentColor">THIS IS</text>
                <text x="135" y="60" className="font-heading text-4xl tracking-wider" fill="currentColor">ME</text>
                <path d="M125,45 C115,25 155,15 175,35 C195,55 185,85 155,90 C125,95 105,70 115,50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white/80"/>
                <path d="M190,50 C 220,50 250,20 240,-20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white/80" fill="none"/>
                <path d="M 225,-10 L 240,-20 L 255,-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white/80"/>
            </svg>
        </div>
      </motion.div>

    </section>
  );
};

export default About;