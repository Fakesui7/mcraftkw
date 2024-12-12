import React from 'react';
import type { BoatDetails } from '../../../types/boats';

interface BoatHeroProps {
  boat: BoatDetails;
}

export const BoatHero: React.FC<BoatHeroProps> = ({ boat }) => {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      <img
        src={boat.image}
        alt={boat.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#181a1b] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">{boat.name}</h1>
          <p className="text-xl text-gray-300 max-w-2xl">{boat.description}</p>
        </div>
      </div>
    </div>
  );
};