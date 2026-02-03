import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const SplitLink = ({ href, text }: { href: string; text: string }) => {
    return (
      <a href={href} className="relative group block cursor-pointer py-1 overflow-visible">
        <span className="invisible font-body uppercase text-xs md:text-sm tracking-widest font-medium">
          {text}
        </span>
        <span 
          className="absolute top-0 left-0 text-white/80 font-body uppercase text-xs md:text-sm tracking-widest font-medium transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[3px]"
          style={{ clipPath: 'inset(0 0 50% 0)' }}
        >
          {text}
        </span>
        <span 
          className="absolute top-0 left-0 text-white/80 font-body uppercase text-xs md:text-sm tracking-widest font-medium transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-[3px]"
          style={{ clipPath: 'inset(50% 0 0 0)' }}
        >
          {text}
        </span>
      </a>
    );
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full px-5 py-4 md:px-8 md:py-6 flex justify-between items-center z-50 transition-all duration-300 border-b
      ${scrolled 
        ? 'bg-black/40 backdrop-blur-xl border-white/10 shadow-lg' 
        : 'bg-black/10 backdrop-blur-md border-white/5'
      }`}
    >
      <div className="flex items-center gap-3 md:gap-4">
        <a href="#" className="cursor-pointer group">
          <h1 className="font-hand text-lg md:text-xl font-bold tracking-wide text-white drop-shadow-sm group-hover:text-gray-300 transition-colors">
            Vaibhav Verma
          </h1>
        </a>
        <span className="hidden md:block w-px h-6 bg-white/50"></span>
        <span className="font-body uppercase text-sm font-bold tracking-wider hidden md:block text-white/90">
          Full Stack Web Developer
        </span>
      </div>

      <div className="flex gap-4 md:gap-8">
        <SplitLink href="#about" text="About" />
        <SplitLink href="#work" text="Work" />
        <SplitLink href="#contact" text="Contact" />
      </div>
    </nav>
  );
};

export default Navbar;