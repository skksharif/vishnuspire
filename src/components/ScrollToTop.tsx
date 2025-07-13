import React from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  scrollPosition: number;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ scrollPosition }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Only show the button when scrolled down
  const isVisible = scrollPosition > 500;
  
  return (
    <button
      onClick={handleScrollToTop}
      className={`fixed bottom-6 right-6 z-50 bg-skin-primary hover:bg-skin-primary-light text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;