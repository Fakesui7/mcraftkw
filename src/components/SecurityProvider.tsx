import React, { useEffect } from 'react';
import { CSPUtils } from '../utils/security';
import { useSecurityMonitoring } from '../hooks/useSecurityMonitoring';

interface SecurityProviderProps {
  children: React.ReactNode;
}

export default function SecurityProvider({ children }: SecurityProviderProps) {
  useSecurityMonitoring();

  useEffect(() => {
    // Set security headers
    CSPUtils.setSecurityHeaders();

    // Disable right-click context menu (basic protection)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable F12, Ctrl+Shift+I, Ctrl+U (basic protection)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u')
      ) {
        e.preventDefault();
      }
    };

    // Disable text selection (optional)
    const handleSelectStart = (e: Event) => {
      // Allow selection in form inputs
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }
      e.preventDefault();
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);

    // Monitor for DevTools
    let devtools = false;
    const threshold = 160;

    const checkDevTools = () => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools) {
          devtools = true;
          console.clear();
          console.warn('Developer tools detected. Monitoring enabled.');
        }
      } else {
        devtools = false;
      }
    };

    const devToolsInterval = setInterval(checkDevTools, 500);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      clearInterval(devToolsInterval);
    };
  }, []);

  return <>{children}</>;
}