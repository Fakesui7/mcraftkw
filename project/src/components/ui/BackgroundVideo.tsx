import React from 'react';

interface BackgroundVideoProps {
  videoSrc: string;
  fallbackImage: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ videoSrc, fallbackImage }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={fallbackImage}
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Fallback to image if video fails to load */}
        <img
          src={fallbackImage}
          alt="Luxury yacht background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </video>
    </div>
  );
};