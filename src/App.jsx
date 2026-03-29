import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader loading={loading} />
      
      {!loading && (
        <div className="relative min-h-screen">
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          
          <footer className="py-6 text-center text-slate-400 text-sm glass-dark mt-20 border-t border-white/10">
            <p>© {new Date().getFullYear()} Nandhakumar S. All rights reserved.</p>
            <p className="mt-1">Designed with React, Three.js & Tailwind</p>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
