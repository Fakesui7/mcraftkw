import React from 'react';

export const HeroBanner = () => {
  return (
    <section className="hero-banner relative bg-[#444444] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-content text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Explore Our Premium Boat Models</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Engineered for performance, crafted for elegance. Find the perfect boat for your adventures.
          </p>
        </div>
      </div>
    </section>
  );
};