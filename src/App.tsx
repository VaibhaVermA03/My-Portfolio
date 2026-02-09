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
// Import the new Three.js background
import HalftoneBackground from './components/HalftoneBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20">
      
      {/* --- NEW 3D HALFTONE BACKGROUND --- */}
      <HalftoneBackground />
      
      {/* Layer 2: Vignette Mask (Optional for darker edges) */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)]" />

      {/* --- MAIN CONTENT --- */}
      <AnimatePresence mode='wait'>
        {isLoading && <Intro key="intro" />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative z-10">
          <Navbar />
          <Hero isLoading={isLoading} />
          
          <About />
          <Skills />
          <Projects />
          <Services />
          <Process />
          
          <Footer />
        </div>
      )}
    </main>
  );
}

export default App;