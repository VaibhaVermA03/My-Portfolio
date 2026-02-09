import { motion } from 'framer-motion';

const Footer = () => {

  return (
    <footer id='contact' className="relative z-0 w-full py-12 md:py-20 px-5 md:px-20 overflow-hidden text-white flex flex-col justify-between">
      
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content Row */}
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 mb-16 md:mb-24 mt-4">
        
        {/* Left Side: Headings Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <h2 className="font-heading text-6xl md:text-[11rem] lg:text-[13rem] leading-[0.8] mb-2">
            LET'S
          </h2>
          <h2 className="font-heading text-6xl md:text-[11rem] lg:text-[13rem] leading-[0.8] text-transparent stroke-text">
            CONNECT
          </h2>
        </motion.div>

        {/* Right Side: Text & Button Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2 md:pl-10 mt-0 md:mt-8"
        >
          
          <p className="font-hand text-2xl md:text-5xl text-gray-300 leading-relaxed">
            I'm always interested in cool stuff. Want me to create a project for you? &nbsp;
            
            {/* INLINE BUTTON */}
            <motion.a 
              href="https://wa.me/918130675823" 
              target="_blank"
              className="relative inline-block overflow-hidden cursor-pointer group align-bottom"
              initial="initial"
              whileHover="hover"
            >
               {/* 1. Static Text */}
               <motion.span 
                 className="block font-hand font-bold text-orange-400 decoration-orange-400/30 underline-offset-8"
                 variants={{ 
                   initial: { opacity: 1 }, 
                   hover: { opacity: 0 } 
                 }}
                 transition={{ duration: 0.1 }}
               >
                 Let's Talk.
               </motion.span>

               {/* 2. Marquee Text */}
               <motion.span
                 className="absolute inset-0 flex items-center opacity-0 group-hover:opacity-100"
                 variants={{ 
                   initial: { opacity: 0 }, 
                   hover: { opacity: 1 } 
                 }}
               >
                  {/* Sliding Container */}
                  <motion.span 
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }} 
                    transition={{ 
                      repeat: Infinity, 
                      ease: "linear", 
                      duration: 3 
                    }}
                  >
                     {/* Text Set 1 */}
                     <span className="font-hand font-bold text-2xl md:text-5xl text-orange-400 pr-3">
                        Let's Talk.
                     </span>
                     
                     {/* Text Set 2 */}
                     <span className="font-hand font-bold text-2xl md:text-5xl text-orange-400 pr-3">
                        Let's Talk.
                     </span>
                  </motion.span>
               </motion.span>
            </motion.a>
          </p>

        </motion.div>
      </div>

      {/* COPYRIGHT & LINKS SECTION */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 w-full border-t border-white/20 pt-6 md:pt-8 flex flex-col-reverse gap-6 md:flex-row justify-between items-center text-xs md:text-sm font-body uppercase tracking-wider text-white"
      >
        
        <p className="text-center md:text-left">© 2026 Vaibhav Verma. All Rights Reserved.</p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <a href="https://www.instagram.com/vaibhav._verma._" target='_blank' className="hover:text-white hover:underline transition-all">Instagram</a>
            <a href="https://www.linkedin.com/in/vaibhav-verma-a9624b252/" target='_blank' className="hover:text-white hover:underline transition-all">LinkedIn</a>
            <a href="https://github.com/VaibhaVermA03" target='_blank' className="hover:text-white hover:underline transition-all">Github</a>
            <a href="https://x.com/VaIbHaVeRmA0307" target='_blank' className="hover:text-white hover:underline transition-all">Twitter</a>
            
            <span className="hidden md:block h-4 w-[1px] bg-white/30"></span>

            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-hand text-sm md:text-sm text-white hover:text-gray-300 hover:-translate-y-1 transition-transform"
            >
              Back to top
            </button>
        </div>
      </motion.div>

    </footer>
  );
};

export default Footer;