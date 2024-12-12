import { useEffect } from 'react';

export const useAnalytics = (eventName: string, properties?: Record<string, any>) => {
  useEffect(() => {
    // Integration point for analytics platforms
    console.log(`Analytics event: ${eventName}`, properties);
  }, [eventName, properties]);
};