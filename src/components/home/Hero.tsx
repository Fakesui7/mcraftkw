import React from 'react';
import { BackgroundVideo } from '../ui/BackgroundVideo';
import { HeroContent } from './HeroContent';

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-10" />
      <BackgroundVideo
        videoSrc="/assets/videos/sea_boats.mp4"
        fallbackImage="https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=2000&q=80"
      />
      <HeroContent />
    </div>
  );
};