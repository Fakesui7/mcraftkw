import { useEffect, useCallback } from 'react';

export const usePerformance = (componentName: string) => {
  const measurePerformance = useCallback(() => {
    const timing = window.performance.now();
    return () => {
      const duration = window.performance.now() - timing;
      console.log(`${componentName} render time: ${duration}ms`);
    };
  }, [componentName]);

  useEffect(() => {
    const cleanup = measurePerformance();
    return cleanup;
  }, [measurePerformance]);
};