import React from 'react';

export const ContactHero = () => {
  return (
    <div className="relative h-[400px] mb-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/images/contact_location.jpg')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#444444]" />
      
      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Contact & Location
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Get in touch with us for inquiries, support, or to schedule a visit
          </p>
        </div>
      </div>
    </div>
  );
};