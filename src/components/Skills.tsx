import { motion } from 'framer-motion';

// --- CUSTOM SVG ICONS ---
// Updated to Real AWS Logo
const AWSIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.13 1.307c-2.332 0-4.316 1.35-5.346 3.348-.39.754-.618 1.602-.618 2.498 0 2.22 1.392 4.137 3.394 5.03A5.405 5.405 0 0 0 6.43 15.3c0 2.597 2.103 4.7 4.7 4.7 2.597 0 4.7-2.103 4.7-4.7 0-1.398-1-2.6-2.152-3.114 2.002-.894 3.394-2.812 3.394-5.033 0-.896-.228-1.744-.618-2.5-1.03-1.998-3.014-3.348-5.346-3.348zm0 2.2c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4-2.4-1.1-2.4-2.4 1.1-2.4 2.4-2.4zm0 9.4c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4-2.4-1.1-2.4-2.4 1.1-2.4 2.4-2.4z"/>
    <path d="M17.3 22.8l-1.2-1.7c-.2-.3-.1-.7.2-.9.3-.2.7-.1.9.2l.9 1.3 2.6-4.5c.2-.3.6-.4.9-.2.3.2.4.6.2.9l-3 5.2c-.2.3-.6.4-.9.2-.2 0-.4-.2-.5-.5z"/>
  </svg>
);

const CSSIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 0h21l-1.91 21.605L12 24 3.41 21.605 1.5 0zm17.14 8.71L19.5 2.25H4.5l.34 3.75h10.96l-.42 5.04H15.1l.66 2.45-3.76 1.05-3.76-1.05-.28-3.14H5.32l.53 5.92 6.15 1.72 6.15-1.72 1.15-12.87-.26-3.14z"/>
  </svg>
);

const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "Framer", icon: "framer" },
      { name: "Redux", icon: "redux" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "custom-css" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Prisma", icon: "prisma" },
      { name: "GraphQL", icon: "graphql" }
    ]
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "custom-aws" },
      { name: "Vercel", icon: "vercel" },
      { name: "Figma", icon: "figma" },
      { name: "Postman", icon: "postman" }
    ]
  }
];

const Skills = () => {
  return (
    <section className="relative w-full px-5 md:px-20 py-20 md:py-32 bg-transparent text-white z-10 overflow-hidden">
      
      {/* Title & Subtitle */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 md:mb-32 text-center md:text-left"
      >
        <h2 className="font-heading text-5xl md:text-7xl lg:text-9xl leading-none mb-4 md:mb-6">
          MY <span className="text-transparent stroke-text">SKILLS</span>
        </h2>
        {/* ADDED SUBTITLE HERE */}
        <p className="font-hand text-xl md:text-3xl text-gray-400">
          The tools & technologies I use to bring ideas to life.
        </p>
      </motion.div>

      {/* Skills Categories Container */}
      <div className="flex flex-col gap-12 md:gap-16">
        {skillsData.map((group, index) => (
          <div key={index} className="flex flex-col w-full">
            
            {/* --- LINE ABOVE --- */}
            <div className="w-full h-[1px] bg-white/20 mb-8 md:mb-12" />

            {/* Content Wrapper */}
            <div className="flex flex-col gap-8 md:gap-10">
              
              {/* Category Title */}
              <motion.div
                 initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className={`flex w-full ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}
              >
                 <h3 className="font-heading text-4xl md:text-6xl text-gray-300">
                   {group.category}
                 </h3>
              </motion.div>

              {/* Cards Grid */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-4 md:gap-8 w-full justify-center"
              >
                {group.items.map((item, i) => (
                  <div 
                    key={i}
                    className="group relative flex flex-col items-center justify-center gap-4 
                               w-28 h-28 md:w-44 md:h-44 
                               bg-white/5 border border-white/10 rounded-2xl 
                               hover:bg-white hover:border-white transition-all duration-300 cursor-pointer"
                  >
                    
                    {/* ICON RENDERING LOGIC */}
                    <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center transition-all duration-300 group-hover:invert group-hover:scale-110 text-white">
                      {item.icon === "custom-aws" ? (
                        <AWSIcon />
                      ) : item.icon === "custom-css" ? (
                        <CSSIcon />
                      ) : (
                        <img 
                          src={`https://cdn.simpleicons.org/${item.icon}/white`}
                          alt={item.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                    </div>
                    
                    {/* Skill Name */}
                    <span className="font-body uppercase text-xs md:text-sm tracking-widest text-gray-400 group-hover:text-black group-hover:font-bold transition-colors">
                      {item.name}
                    </span>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  </div>
                ))}
              </motion.div>
            
            </div>

            {/* --- LINE BELOW --- */}
            {index === skillsData.length - 1 && (
              <div className="w-full h-[1px] bg-white/20 mt-12 md:mt-16" />
            )}

          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;