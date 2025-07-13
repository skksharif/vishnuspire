import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Image } from 'lucide-react';

interface NavbarProps {
  scrollPosition: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollPosition }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#how-we-work' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const isScrolled = scrollPosition > 20;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container-section !py-0">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center" onClick={handleNavLinkClick}>
            <img src = "./logo.png" className="w-8 h-8 text-green-600" />
            <span className="ml-2 text-xl font-bold font-serif">Vishnuspire</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={handleNavLinkClick}
                className="relative text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-600 transition-colors after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-skin-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
            
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </nav>
          
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleTheme}
              className="mr-2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      <div className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out transform ${
        mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="p-4 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <a href="#home" className="flex items-center" onClick={handleNavLinkClick}>
              <Leaf className="w-8 h-8 text-green-600" />
              <span className="ml-2 text-xl font-bold">Vishnuspire</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 mt-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-600 transition-colors"
                onClick={handleNavLinkClick}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="mt-auto mb-8">
            <a
              href="#contact"
              className="btn btn-primary w-full text-center"
              onClick={handleNavLinkClick}
            >
              Let's Grow Together
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar