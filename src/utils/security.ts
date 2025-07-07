// Security utilities for client-side protection
export class SecurityUtils {
  // Rate limiting for form submissions
  private static submissionTimes: Map<string, number[]> = new Map();
  
  // Check for suspicious patterns in user input
  static sanitizeInput(input: string): string {
    // Remove potentially dangerous characters
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .trim();
  }

  // Basic rate limiting for form submissions
  static checkRateLimit(identifier: string, maxRequests: number = 5, timeWindow: number = 60000): boolean {
    const now = Date.now();
    const times = this.submissionTimes.get(identifier) || [];
    
    // Remove old entries outside time window
    const recentTimes = times.filter(time => now - time < timeWindow);
    
    if (recentTimes.length >= maxRequests) {
      return false; // Rate limit exceeded
    }
    
    recentTimes.push(now);
    this.submissionTimes.set(identifier, recentTimes);
    return true;
  }

  // Validate email format
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate phone number format
  static isValidPhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  }

  // Check for suspicious content
  static detectSuspiciousContent(content: string): boolean {
    const suspiciousPatterns = [
      /\b(eval|exec|system|shell_exec)\b/i,
      /<script/i,
      /javascript:/i,
      /vbscript:/i,
      /onload|onerror|onclick/i,
      /\b(union|select|insert|delete|drop|create|alter)\b.*\b(from|into|table|database)\b/i
    ];
    
    return suspiciousPatterns.some(pattern => pattern.test(content));
  }

  // Generate CSRF-like token for forms
  static generateFormToken(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  // Basic XSS protection
  static escapeHtml(unsafe: string): string {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Check if request is from suspicious source
  static checkRequestOrigin(): boolean {
    if (typeof window === 'undefined') return true;
    
    const allowedOrigins = [
      window.location.origin,
      'https://mcraft.boats',
      'https://www.mcraft.boats'
    ];
    
    return allowedOrigins.includes(window.location.origin);
  }

  // Monitor for unusual activity patterns
  static logSecurityEvent(event: string, details: any): void {
    const securityLog = {
      timestamp: new Date().toISOString(),
      event,
      details,
      userAgent: navigator.userAgent,
      url: window.location.href,
      ip: 'client-side' // Cannot get real IP from client
    };
    
    // In production, send to security monitoring service
    console.warn('Security Event:', securityLog);
    
    // Store locally for analysis
    const logs = JSON.parse(localStorage.getItem('security_logs') || '[]');
    logs.push(securityLog);
    
    // Keep only last 100 logs
    if (logs.length > 100) {
      logs.splice(0, logs.length - 100);
    }
    
    localStorage.setItem('security_logs', JSON.stringify(logs));
  }
}

// Content Security Policy helpers
export class CSPUtils {
  static setSecurityHeaders(): void {
    // These would typically be set by the server, but we can add meta tags
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' data:;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https: blob:;
      font-src 'self' data:;
      connect-src 'self' https:;
      frame-src 'none';
      object-src 'none';
      base-uri 'self';
      form-action 'self';
    `.replace(/\s+/g, ' ').trim();
    
    document.head.appendChild(meta);
  }
}

// Bot detection utilities
export class BotDetection {
  private static suspiciousActivity = 0;
  
  static checkForBot(): boolean {
    // Check for common bot indicators
    const botIndicators = [
      !navigator.webdriver === undefined, // Selenium
      navigator.userAgent.includes('bot'),
      navigator.userAgent.includes('crawler'),
      navigator.userAgent.includes('spider'),
      window.navigator.webdriver === true,
      !window.chrome && navigator.userAgent.includes('Chrome'), // Headless Chrome
    ];
    
    return botIndicators.some(indicator => indicator);
  }
  
  static trackMouseMovement(): void {
    let mouseMovements = 0;
    
    const trackMouse = () => {
      mouseMovements++;
      if (mouseMovements > 10) {
        document.removeEventListener('mousemove', trackMouse);
      }
    };
    
    document.addEventListener('mousemove', trackMouse);
    
    // Check after 5 seconds
    setTimeout(() => {
      if (mouseMovements === 0) {
        this.suspiciousActivity++;
        SecurityUtils.logSecurityEvent('no_mouse_movement', { 
          timeChecked: 5000,
          suspiciousActivity: this.suspiciousActivity 
        });
      }
    }, 5000);
  }
  
  static checkInteractionPatterns(): void {
    let interactions = 0;
    const startTime = Date.now();
    
    const trackInteraction = () => {
      interactions++;
    };
    
    ['click', 'scroll', 'keypress', 'touchstart'].forEach(event => {
      document.addEventListener(event, trackInteraction, { once: true });
    });
    
    setTimeout(() => {
      const timeSpent = Date.now() - startTime;
      if (interactions === 0 && timeSpent > 10000) {
        this.suspiciousActivity++;
        SecurityUtils.logSecurityEvent('no_user_interaction', {
          timeSpent,
          interactions,
          suspiciousActivity: this.suspiciousActivity
        });
      }
    }, 10000);
  }
}