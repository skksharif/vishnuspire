import { useState, useEffect, useCallback } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  maxOffset?: number;
}

export default function useParallax({
  speed = 0.5,
  direction = 'up',
  maxOffset = 100
}: ParallaxOptions = {}) {
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const newOffset = Math.min(scrollY * speed, maxOffset);
      setOffset(newOffset);
    });
  }, [speed, maxOffset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const getStyle = () => {
    switch (direction) {
      case 'up':
        return { transform: `translateY(-${offset}px)` };
      case 'down':
        return { transform: `translateY(${offset}px)` };
      case 'left':
        return { transform: `translateX(-${offset}px)` };
      case 'right':
        return { transform: `translateX(${offset}px)` };
      default:
        return { transform: `translateY(-${offset}px)` };
    }
  };

  return { offset, style: getStyle() };
}