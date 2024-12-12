import { useState, useCallback, useRef } from 'react';

export const useDelayedHover = (delay: number = 300) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const onMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, delay);
  }, [delay]);

  return {
    isOpen,
    onMouseEnter,
    onMouseLeave,
  };
};