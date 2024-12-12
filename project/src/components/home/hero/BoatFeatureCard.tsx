import React from 'react';
import { Anchor, Ruler, Users } from 'lucide-react';
import type { BoatModel } from '../../../types/boats';

interface BoatFeatureCardProps {
  boat: BoatModel;
}

export const BoatFeatureCard: React.FC<BoatFeatureCardProps> = ({ boat }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
      <h3 className="text-xl font-bold text-white mb-2">{boat.name}</h3>
      <div className="space-y-2">
        <div className="flex items-center text-white/80">
          <Ruler className="w-4 h-4 mr-2" />
          <span className="text-sm">{boat.specs.length}</span>
        </div>
        <div className="flex items-center text-white/80">
          <Users className="w-4 h-4 mr-2" />
          <span className="text-sm">{boat.specs.capacity}</span>
        </div>
        <div className="flex items-center text-white/80">
          <Anchor className="w-4 h-4 mr-2" />
          <span className="text-sm">{boat.specs.engines}</span>
        </div>
      </div>
    </div>
  );
};