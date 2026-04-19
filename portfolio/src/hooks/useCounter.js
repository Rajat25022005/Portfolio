import { useState, useEffect, useRef } from 'react';

export function useCounter(targetValue, duration = 2000) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let startTime;
    let animationFrame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const updateCounter = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // ease out quart
            const easeOut = 1 - Math.pow(1 - percentage, 4);
            
            setCount(Math.floor(targetValue * easeOut));

            if (progress < duration) {
              animationFrame = requestAnimationFrame(updateCounter);
            } else {
              setCount(targetValue);
            }
          };
          animationFrame = requestAnimationFrame(updateCounter);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [targetValue, duration]);

  return { count, ref: elementRef };
}
