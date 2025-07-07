import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  // Array of hero images to rotate
  const heroImages = [
    '/mc36zoom.JPG',
    '/f2294cf7-2494-4c0f-88bf-6ce3f642b45d.JPG',
    '/IMG_3156.JPG',
    '/92184b6c-e852-4831-bae5-063104dcb76b.JPG'
  ];
  
  // Select a random image or use the first one
  const heroImage = heroImages[0]; // Using MC-36 as the main hero image
  
  // Check if the image is a "coming soon" placeholder
  const isComingSoonImage = heroImage.includes('coming soon');

  const scrollToVessels = () => {
    // First check if we're on the home page
    if (window.location.pathname !== '/') {
      // If not on home page, navigate to home first
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector('#vessels');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // If already on home page, scroll directly
      const element = document.querySelector('#vessels');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <>
      <section id="home" className="relative h-screen flex items-center justify-start overflow-hidden">
        {/* Enhanced Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"></div>
          
          {/* Hero image overlay */}
          <div 
            className={`absolute inset-0 bg-no-repeat opacity-60 ${
              isComingSoonImage 
                ? 'bg-center hero-coming-soon' 
                : 'bg-cover bg-center'
            }`}
            style={{
              backgroundImage: `url('${heroImage}')`,
            }}
          ></div>
          
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-800/70 to-slate-900/60"></div>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/15 animate-gradient"></div>
        </div>
        
        <div className="relative z-10 text-left text-white px-4 sm:px-6 lg:px-8 max-w-2xl ml-8 lg:ml-16 animate-fade-in-up pt-24">
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 lg:mb-12 overflow-visible">
            <span className="text-white drop-shadow-2xl">{t('hero.welcome')}</span>
            <br />
            <span className="hero-gradient-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl">MCraft</span>
          </h1>
          
          <p className="text-lg sm:text-xl mb-8 lg:mb-12 text-gray-200 max-w-lg leading-relaxed drop-shadow-lg overflow-visible">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
            <button 
              onClick={scrollToVessels}
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-lg text-lg lg:text-xl font-semibold shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-pulse-glow"
            >
              {t('hero.explore')}
            </button>
            <button 
              onClick={handleContactClick}
              className="border-2 border-white/40 hover:bg-white/10 hover:border-white/60 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-lg text-lg lg:text-xl font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              {t('hero.contact')}
            </button>
          </div>
        </div>
        
        {/* Enhanced Scroll Down Arrow - Moved down and improved functionality */}
        <button
          onClick={scrollToVessels}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-blue-400 transition-colors duration-300 group cursor-pointer z-20"
          aria-label="Scroll to vessels section"
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full border-2 border-white/50 group-hover:border-blue-400 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 backdrop-blur-sm">
              <ChevronDown className="h-6 w-6 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-sm font-medium opacity-75 group-hover:opacity-100 transition-opacity duration-300">
              {t('hero.explore')}
            </span>
          </div>
        </button>
      </section>
      
      {/* Enhanced Curved Divider */}
      <div className="relative">
        <svg 
          className="w-full h-16 fill-slate-800" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25"
            fill="url(#dividerGradient)"
          />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5"
            fill="url(#dividerGradient)"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="url(#dividerGradient)"
          />
        </svg>
      </div>
    </>
  );
}