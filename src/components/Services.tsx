import { motion } from 'framer-motion';
import { Code, Palette, Layers, Zap, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Web Development",
    description: "Building fast, responsive, and scalable websites using modern technologies like MERN Stack and Next.js.",
    icon: <Code size={40} />
  },
  {
    id: "02",
    title: "UI/UX Design",
    description: "Translating design mockups into interactive, pixel-perfect, and smooth user interfaces with animations.",
    icon: <Palette size={40} />
  },
  {
    id: "03",
    title: "Full Stack Solutions",
    description: "Handling everything from database architecture to frontend interactivity for complete web applications.",
    icon: <Layers size={40} />
  },
  {
    id: "04",
    title: "Optimization",
    description: "Auditing and improving website speed, SEO, and accessibility to ensure the best user experience.",
    icon: <Zap size={40} />
  }
];

const Services = () => {
  return (
    <section className="relative w-full px-5 md:px-20 py-20 md:py-32 bg-transparent text-white z-10">
      
      {/* Header Section - Stacked Layout (Heading + Subtitle below) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-24"
      >
        <h2 className="font-heading text-5xl md:text-7xl lg:text-9xl leading-none mb-4">
          WHAT I <span className="text-transparent stroke-text">DO</span>
        </h2>
        
        {/* Subtitle just below Heading */}
        <p className="font-hand text-xl md:text-3xl text-gray-400">
          Services I Provide to help your business grow.
        </p>
      </motion.div>

      {/* Services Grid (Strict 2x2 Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative w-full h-[350px] md:h-[400px] border border-white/10 overflow-hidden bg-white/5"
          >
            
            {/* HOVER FILL EFFECT LAYER */}
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
              
              {/* Top Section: Icon & ID */}
              <div className="flex justify-between items-start">
                <div className="text-white group-hover:text-black transition-colors duration-500">
                  {service.icon}
                </div>
                <span className="font-heading text-4xl text-transparent stroke-text group-hover:text-black/10 transition-colors duration-500">
                  {service.id}
                </span>
              </div>

              {/* Bottom Section: Title, Description & Arrow */}
              <div>
                <h3 className="font-heading text-3xl md:text-5xl mb-4 text-white group-hover:text-black transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="font-body uppercase text-gray-400 text-sm md:text-lg mb-6 line-clamp-3 group-hover:text-gray-600 transition-colors duration-500">
                  {service.description}
                </p>
                
                {/* Arrow Button */}
                <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-black/20 flex items-center justify-center transition-colors duration-500">
                   <ArrowUpRight className="text-white group-hover:text-black group-hover:rotate-45 transition-all duration-500" size={24} />
                </div>
              </div>

            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Services;