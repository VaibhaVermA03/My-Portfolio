import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-dark-grey min-h-screen">
      <AnimatePresence mode='wait'>
        {isLoading && <Intro key="intro" />}
      </AnimatePresence>

      {!isLoading && <Navbar />}

      <Hero isLoading={isLoading} />
      
      {/* FIXED GRADIENT WRAPPER:
        1. bg-[linear-gradient(...)]: Upar se neeche straight color change.
           - 0% (#222): About Section (Grey)
           - 40% (#111): Projects Section (Darker)
           - 80-100% (#000): Process Section (Pure Black)
        2. border-t border-white/10: Glassy Edge at the top.
      */}
      <div className="relative w-full border-t border-white/10 bg-[linear-gradient(to_bottom,#222222_0%,#111111_40%,#000000_80%,#000000_100%)]">
        
        {/* Subtle Noise Texture for Glass Feel (Optional) */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay"></div>
        
        <About />
        <Skills />
        <Projects />
        <Services />
        <Process />
      </div>
      
      <Footer />
    </main>
  );
}

export default App;