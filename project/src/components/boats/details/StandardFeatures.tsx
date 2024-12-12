import React from 'react';
import { FeatureItem } from './FeatureItem';
import type { BoatDetails } from '../../../types/boats';

interface StandardFeaturesProps {
  boat: BoatDetails;
}

export const StandardFeatures: React.FC<StandardFeaturesProps> = ({ boat }) => {
  return (
    <div className="bg-[#242729] rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-white mb-8">Standard Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {boat.features.map((feature, index) => (
          <FeatureItem key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};