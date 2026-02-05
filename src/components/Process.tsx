import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    text: "First, we connect to discuss your vision. I analyze your requirements, target audience, and business goals to create a solid roadmap."
  },
  {
    number: "02",
    title: "Design & Structure",
    text: "I create wireframes and visual structures. We focus on User Experience (UX) ensuring the flow is logical and the design is modern."
  },
  {
    number: "03",
    title: "Development",
    text: "This is where the magic happens. I write clean, scalable code using the MERN stack or Next.js to bring the designs to life."
  },
  {
    number: "04",
    title: "Testing & Launch",
    text: "After rigorous testing for bugs and responsiveness, we deploy your project. I ensure everything runs smoothly on the live server."
  },
  {
    number: "05",
    title: "Maintenance & Support",
    text: "The journey doesn't end at launch. I provide ongoing support, updates, and optimization to ensure your application stays secure and performs at its peak."
  }
];

const Process = () => {
  return (
    <section className="relative w-full px-5 md:px-20 py-20 md:py-32 bg-transparent text-white z-10 overflow-hidden">
      
      {/* Title & Subtitle */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 md:mb-32 text-center"
      >
        <h2 className="font-heading text-5xl md:text-7xl lg:text-9xl leading-none mb-4 md:mb-6">
          WORK <span className="text-transparent stroke-text">PROCESS</span>
        </h2>
        <p className="font-hand text-xl md:text-3xl text-gray-400">
          A step-by-step guide on how I turn your ideas into reality.
        </p>
      </motion.div>

      {/* Process Steps (Zig-Zag Timeline) */}
      <div className="relative flex flex-col gap-12 md:gap-0 max-w-7xl mx-auto">
        
        {/* Central Vertical Line (Visible on Desktop) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />

        {steps.map((step, index) => (
          <div 
            key={index}
            className={`relative flex flex-col md:flex-row items-center w-full 
              ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
          >
            
            {/* Timeline Dot (Center) */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 z-20 hidden md:block shadow-[0_0_10px_white]"></div>

            {/* Content Card */}
            <motion.div 
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`
                relative w-full md:w-[45%] p-8 md:p-10 
                bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-500 group
                ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}
              `}
            >
              {/* Background Number */}
              <span className="absolute top-2 right-4 font-heading text-6xl md:text-8xl text-transparent stroke-text opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="font-heading text-3xl md:text-4xl text-white mb-4 relative z-10">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-body uppercase text-gray-400 text-sm md:text-lg leading-relaxed relative z-10">
                {step.text}
              </p>

              {/* Decorative Corner Glow */}
              <div className={`absolute bottom-0 w-20 h-20 bg-white/5 blur-2xl rounded-full z-0 transition-all duration-500 group-hover:bg-white/10
                 ${index % 2 === 0 ? 'left-0' : 'right-0'}
              `} />
            </motion.div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Process;