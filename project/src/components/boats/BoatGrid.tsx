import React, { useState } from 'react';
import { boats } from '../../data/boats';
import { BoatCard } from './BoatCard';

export const BoatGrid = () => {
  const [hoveredBoat, setHoveredBoat] = useState<string | null>(null);

  return (
    <section id="models" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">OUR FLEET</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of premium vessels, from the compact MC-12 to the flagship MC-40
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boats.map((boat) => (
            <BoatCard
              key={boat.id}
              boat={boat}
              isHovered={hoveredBoat === boat.id}
              onHover={setHoveredBoat}
            />
          ))}
        </div>
      </div>
    </section>
  );
};