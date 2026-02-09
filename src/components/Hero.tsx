import { format } from 'date-fns';
import { motion } from 'framer-motion';

const Hero = ({ isLoading }: { isLoading: boolean }) => {
  const date = new Date();
  const day = format(date, 'dd');
  const month = format(date, 'MMMM');

  const MarqueeText = () => (
    <div className="flex items-center gap-8 px-4">
      <span className="font-bold">CONTACT ME</span>
      <span className="font-bold">CONTACT ME</span>
      <span className="font-bold">CONTACT ME</span>
      <span className="font-bold">CONTACT ME</span>
    </div>
  );

  return (
    
    <section className="relative z-0 min-h-[100dvh] md:min-h-[115vh] w-full overflow-hidden flex flex-col justify-end px-5 md:px-20 pb-20 md:pb-40">
      
      {/* Background Video */}
      <div className="absolute inset-0 -z-20">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Date & Availability Section */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={!isLoading ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="absolute top-24 right-5 md:top-28 md:right-20 flex items-center gap-3 md:gap-5"
      >
        <span className="font-heading text-transparent stroke-text text-4xl md:text-9xl text-white leading-none drop-shadow-md">
          {day}
        </span>
        <div className="flex flex-col justify-center">
          <span className="font-body uppercase text-lg md:text-4xl text-white leading-tight">
            {month}
          </span>
          <span className="font-body uppercase text-xs md:text-lg text-gray-400 mb-0 md:mb-4 leading-tight">
            Available for work
          </span>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="w-full flex flex-col md:flex-row justify-between items-end md:items-center">
        
        {/* Left Side: Main Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={!isLoading ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }} 
          className="relative z-10 w-full"
        >
          <h2 className="font-hand text-xl md:text-4xl mb-1 md:mb-2 text-gray-300 ml-1">
            Creative
          </h2>
          
          <h1 className="font-heading text-5xl sm:text-7xl md:text-[10rem] leading-[0.85] tracking-tighter text-white mix-blend-overlay">
            FULL STACK <br />
            <span className="text-white/80">WEB DEVELOPER</span>
          </h1>
        </motion.div>

        {/* Right Side Container: Bio & Button */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={!isLoading ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }} 
          className="max-w-xl mt-8 md:mt-24 flex flex-col w-full md:w-auto md:pl-10"
        > 
          
          <p className="self-start font-body uppercase text-sm md:text-xl leading-relaxed tracking-wide text-gray-200 mb-8 md:mb-10 text-left shadow-black drop-shadow-sm">
            I am a Computer Science engineering student and Full Stack Developer based in Delhi and NCR. 
            I specialize in the MERN stack and creating intuitive web experiences.
          </p>
          
          <motion.a 
            href="https://wa.me/918130675823" 
            className="self-end relative overflow-hidden w-48 h-14 md:w-64 md:h-20 rounded-full glass-panel flex items-center justify-center uppercase font-body text-base md:text-xl tracking-widest border border-white/30 group hover:bg-white hover:text-white transition-colors duration-300"
            initial="initial"
            whileHover="hover"
            target="_blank"
          >
            <motion.span 
              className="absolute font-bold"
              variants={{
                initial: { y: 0, opacity: 1 },
                hover: { y: "100%", opacity: 0 }
              }}
              transition={{ duration: 0.2 }}
            >
              Contact Me
            </motion.span>

            <motion.div
              className="absolute flex whitespace-nowrap opacity-0 group-hover:opacity-100 left-0"
              variants={{
                initial: { opacity: 0 },
                hover: { opacity: 1 }
              }}
            >
               <motion.div 
                 className="flex min-w-full"
                 animate={{ x: "-50%" }} 
                 transition={{ 
                   repeat: Infinity, 
                   ease: "linear", 
                   duration: 2 
                 }}
               >
                  <MarqueeText />
                  <MarqueeText />
               </motion.div>
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;