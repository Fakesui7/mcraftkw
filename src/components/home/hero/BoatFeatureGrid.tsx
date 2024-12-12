import React from 'react';
import { BoatFeatureCard } from './BoatFeatureCard';
import { boats } from '../../../data/boats';

const featuredBoats = boats.filter(boat => 
  ['mc_12', 'mc_23', 'mc_36', 'mc_40'].includes(boat.id)
);

export const BoatFeatureGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {featuredBoats.map((boat) => (
        <BoatFeatureCard key={boat.id} boat={boat} />
      ))}
    </div>
  );
};