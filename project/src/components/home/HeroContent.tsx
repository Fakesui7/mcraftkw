import React from 'react';
import { ChevronDown } from 'lucide-react';

export const HeroContent = () => {
  return (
    <div className="absolute inset-0 bg-black/30">
      {/* Content positioned in bottom left */}
      <div className="absolute bottom-32 left-8 md:left-16 lg:left-24 max-w-xl text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome to Al Mohalab Marine
        </h1>
        <p className="text-xl mb-8 drop-shadow-md">
          Your premier destination for exceptional boats and marine services. Explore our fishing and cruising models for the ultimate experience on the water.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </div>
  );
};