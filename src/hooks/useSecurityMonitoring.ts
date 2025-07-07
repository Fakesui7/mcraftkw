import { useEffect, useCallback } from 'react';
import { SecurityUtils, BotDetection } from '../utils/security';

export function useSecurityMonitoring() {
  const reportSuspiciousActivity = useCallback((activity: string, details: any) => {
    SecurityUtils.logSecurityEvent(activity, details);
  }, []);

  useEffect(() => {
    // Initialize security monitoring
    const initSecurity = () => {
      // Check if origin is allowed
      if (!SecurityUtils.checkRequestOrigin()) {
        SecurityUtils.logSecurityEvent('suspicious_origin', {
          origin: window.location.origin,
          referrer: document.referrer
        });
      }

      // Start bot detection
      if (BotDetection.checkForBot()) {
        SecurityUtils.logSecurityEvent('bot_detected', {
          userAgent: navigator.userAgent,
          webdriver: navigator.webdriver
        });
      }

      // Track mouse movements and interactions
      BotDetection.trackMouseMovement();
      BotDetection.checkInteractionPatterns();

      // Monitor for rapid form submissions
      let formSubmissions = 0;
      const formSubmissionHandler = () => {
        formSubmissions++;
        if (formSubmissions > 5) {
          SecurityUtils.logSecurityEvent('rapid_form_submissions', {
            count: formSubmissions,
            timeframe: '1_minute'
          });
        }
      };

      document.addEventListener('submit', formSubmissionHandler);

      // Monitor for suspicious console activity
      const originalConsole = { ...console };
      console.log = (...args) => {
        if (args.some(arg => typeof arg === 'string' && arg.includes('script'))) {
          SecurityUtils.logSecurityEvent('suspicious_console_activity', { args });
        }
        originalConsole.log(...args);
      };

      // Cleanup function
      return () => {
        document.removeEventListener('submit', formSubmissionHandler);
        Object.assign(console, originalConsole);
      };
    };

    const cleanup = initSecurity();
    return cleanup;
  }, []);

  return { reportSuspiciousActivity };
}