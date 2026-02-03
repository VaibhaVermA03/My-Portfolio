import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Intro duration ke hisab se timeout set karein (jitna time intro leta hai)
    // Ya fir Intro component ke andar exit complete hone ka wait karein
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Intro ka total time (approx 2-2.5 sec)

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-dark-grey min-h-screen">
      <AnimatePresence mode='wait'>
        {isLoading && <Intro key="intro" />}
      </AnimatePresence>

      {/* Navbar ko bhi hide rakh sakte hain jab tak loading hai */}
      {!isLoading && <Navbar />}

      {/* Hero ko isLoading prop pass karein */}
      <Hero isLoading={isLoading} />
      
      <About />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;