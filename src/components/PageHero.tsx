import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  className?: string;
}

export default function PageHero({ title, subtitle, imageSrc, className = '' }: PageHeroProps) {
  // Check if the image is a "coming soon" placeholder
  const isComingSoonImage = imageSrc.includes('coming soon');

  return (
    <div className={`relative h-64 md:h-80 lg:h-96 overflow-hidden ${className}`}>
      {/* Background Image */}
      <div 
        className={`absolute inset-0 bg-no-repeat ${
          isComingSoonImage 
            ? 'bg-center page-hero-coming-soon' 
            : 'bg-cover bg-center'
        }`}
        style={{ backgroundImage: `url('${imageSrc}')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}