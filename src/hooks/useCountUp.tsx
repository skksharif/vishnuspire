import { useState, useEffect } from 'react';

interface CountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  formatter?: (value: number) => string;
}

export default function useCountUp({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  formatter = (value) => Math.floor(value).toString()
}: CountUpOptions) {
  const [count, setCount] = useState(start);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    let timeoutId: NodeJS.Timeout;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    if (isActive) {
      timeoutId = setTimeout(() => {
        animationFrame = requestAnimationFrame(animate);
      }, delay);
    }
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, start, duration, delay, isActive]);

  const startCount = () => setIsActive(true);
  const formattedValue = formatter(count);

  return { count, formattedValue, startCount };
}