import { motion } from 'framer-motion';

const About = () => {
  // Animation settings for paragraphs
  const paragraphAnim = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 } 
    }
  };

  return (
    <section id="about" className="relative w-full min-h-screen flex flex-col md:flex-row z-10 bg-dark-grey">
      
      {/* Background Video */}
      <div className="absolute inset-0 -z-20 h-full w-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#1a1a1a]/70 backdrop-blur-3xl" />
      </div>

      {/* LEFT: IMAGE SECTION (40%) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-[40%] relative order-2 md:order-1 min-h-[50vh] md:min-h-auto"
      >
        <img 
          src="/vaibhav.jpg" 
          alt="Vaibhav Verma" 
          className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* RIGHT: CONTENT SECTION (60%) */}
      <div className="w-full md:w-[60%] order-1 md:order-2 px-5 md:px-12 py-16 md:py-24 flex flex-col justify-center">
        
        {/* Heading Container */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-2 leading-none text-white whitespace-nowrap">
              HELLO, <span className="text-transparent stroke-text">I AM VAIBHAV</span>
            </h2>
            
            <p className="font-hand text-xl md:text-3xl text-gray-400 mb-8 md:mb-10">
              Vaibhav Verma
            </p>
        </motion.div>

        {/* Bio Content */}
        <div className="font-body uppercase text-sm md:text-lg leading-relaxed tracking-wide text-gray-300 border-l-2 border-white/20 pl-6 md:pl-8 flex flex-col gap-5 md:gap-6">
          
          <motion.p
            variants={paragraphAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            I’m a Full Stack Developer who enjoys turning complex problems into clean, efficient, and user-friendly digital solutions. I focus on building applications that are not just functional, but also intuitive and scalable.
          </motion.p>
          
          <motion.p
            variants={paragraphAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            My journey into development started with curiosity about how real-world systems work behind the scenes. That curiosity evolved into a strong interest in software engineering, web technologies, and machine learning-based systems. I enjoy working across both frontend and backend, ensuring seamless performance and great user experience.
          </motion.p>
          
          <motion.p
            variants={paragraphAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            I’ve worked on projects involving secure systems, data-driven applications, and modern web platforms, where I apply structured problem-solving and clean coding practices. I believe good software is a balance of logic, performance, and design.
          </motion.p>

          <motion.p
            variants={paragraphAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Beyond coding, I’m always learning — exploring new technologies, improving system design skills, and staying updated with industry trends. My goal is to grow as a developer who builds impactful products that solve real problems.
          </motion.p>

        </div>

      </div>
    </section>
  );
};

export default About;