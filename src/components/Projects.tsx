import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, AlertCircle } from 'lucide-react';

const projectData = [
  {
    id: 1,
    title: "GARVIT GEMS & JEWELS",
    subtitle: "E-Commerce / Full Stack",
    image: "/project-1.jpg", 
    description: "A comprehensive e-commerce platform for jewelry with secure payment gateways, admin dashboard, and inventory management.",
    placeholder: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2000&auto=format&fit=crop",
    liveLink: "https://garvitgemsandjewels.vercel.app/" 
  },
  {
    id: 2,
    title: "JAGRUK",
    subtitle: "Civic Tech / MERN",
    image: "/project-2.jpg",
    description: "Community issue reporting system empowering citizens to report local problems directly to authorities.",
    placeholder: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop",
    liveLink: null 
  },
  {
    id: 3,
    title: "NAUKRISETU",
    subtitle: "Job Portal Platform",
    image: "/project-3.jpg",
    description: "A bridge between job seekers and employers focusing on blue-collar job opportunities with resume building tools.",
    placeholder: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2000&auto=format&fit=crop",
    liveLink: null 
  },
  {
    id: 4,
    title: "STUDENT ANALYTICS",
    subtitle: "Data Analysis / React",
    image: "/project-4.jpg",
    description: "Dashboard for visualizing student performance metrics and attendance trends over time using interactive charts.",
    placeholder: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    liveLink: null 
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectData[0] | null>(null);
  const [showDevToast, setShowDevToast] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const handleLiveSiteClick = (e: React.MouseEvent, link: string | null) => {
    e.preventDefault();
    if (link) {
      window.open(link, '_blank');
    } else {
      setShowDevToast(true);
      setTimeout(() => setShowDevToast(false), 3000);
    }
  };

  return (
    <section id="work" className="relative bg-dark-grey w-full px-5 md:px-20 py-20 md:py-32 z-10">
      
      {/* Title Animation */}
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-12 md:mb-24 leading-none text-white whitespace-nowrap"
      >
        MY <span className="text-transparent stroke-text">PROJECTS -</span>
      </motion.h2>

      {/* Projects List */}
      <div className="flex flex-col gap-16 md:gap-32">
        {projectData.map((project, index) => (
          /* Card Scroll Animation */
          <motion.div 
            key={project.id} 
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col md:flex-row gap-6 md:gap-12 items-center cursor-pointer group ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
            onClick={() => setSelectedProject(project)}
          >
            <div className="w-full md:w-1/2 aspect-video overflow-hidden rounded-sm">
              <img 
                src={project.placeholder} 
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
            <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
              <h3 className="font-heading text-4xl md:text-7xl mb-2 text-white group-hover:text-gray-300 transition-colors">
                {project.title}
              </h3>
              <p className="font-body uppercase text-sm md:text-xl text-gray-400 tracking-wider">
                {project.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {mounted && createPortal(
        <AnimatePresence mode="wait">
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }} 
              className="fixed inset-0 z-[99999] bg-[#111] text-white flex flex-col md:flex-row overflow-y-auto md:overflow-hidden w-full h-full"
            >
              
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                className="
                  absolute z-[10000] 
                  font-body font-bold uppercase tracking-widest text-white 
                  hover:text-gray-400 transition-colors cursor-pointer 
                  /* Mobile: Smaller, pill shaped, visible background */
                  top-4 right-4 text-xs 
                  bg-black/60 backdrop-blur-md px-4 py-2 rounded-full
                  /* Desktop: Larger, transparent */
                  md:top-8 md:right-8 md:text-xl md:bg-transparent md:backdrop-blur-none md:px-0 md:py-0 md:rounded-none
                "
              >
                CLOSE
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-full bg-gray-900 relative shrink-0">
                 <img 
                    src={selectedProject.placeholder} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center px-6 md:px-20 py-10 md:py-12 bg-[#111] relative">
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3 }}
                 >
                   <p className="font-body uppercase text-gray-500 tracking-[0.2em] mb-4 text-xs md:text-sm">
                      {selectedProject.subtitle}
                   </p>
                   <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6 md:mb-8 text-white">
                      {selectedProject.title}
                   </h2>
                   <p className="font-body uppercase text-justify text-gray-400 text-sm md:text-xl leading-relaxed mb-10 md:mb-16 max-w-md">
                      {selectedProject.description}
                   </p>
                   <button 
                     onClick={(e) => handleLiveSiteClick(e, selectedProject.liveLink)}
                     className="group flex items-center gap-4 md:gap-6 font-heading text-3xl md:text-5xl text-white hover:text-gray-300 transition-colors border-b-2 border-white pb-2"
                   >
                      VISIT LIVE SITE
                      <span className="bg-white text-black rounded-full p-2 md:p-3 group-hover:rotate-45 transition-transform duration-300">
                        <ArrowUpRight size={20} className="md:w-7 md:h-7" />
                      </span>
                   </button>
                 </motion.div>

                 <AnimatePresence>
                   {showDevToast && (
                     <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: 20 }}
                       className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-auto flex items-center gap-3 bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 md:px-6 md:py-4 rounded-lg backdrop-blur-md shadow-xl z-[100000]"
                     >
                       <AlertCircle size={20} />
                       <span className="font-body uppercase text-xs font-bold tracking-widest">
                         Project is still under development
                       </span>
                     </motion.div>
                   )}
                 </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Projects;