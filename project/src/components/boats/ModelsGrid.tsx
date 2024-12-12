import React, { useState } from 'react';
import { boats } from '../../data/boats';
import { BoatCard } from './cards/BoatCard';

export const ModelsGrid = () => {
  const [hoveredBoat, setHoveredBoat] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#444444]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Our Models</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Precision-crafted boats designed to elevate your on-water experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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