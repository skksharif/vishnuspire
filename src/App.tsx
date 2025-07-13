import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smooth scroll updates
      requestAnimationFrame(() => {
        setScrollPosition(window.scrollY);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative overflow-x-hidden">
        <Navbar scrollPosition={scrollPosition} />
        <main>
          <Hero scrollPosition={scrollPosition} />
          <About />
          <Services />
          <HowWeWork />
          <Solutions />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop scrollPosition={scrollPosition} />
      </div>
    </ThemeProvider>
  );
}

export default App;