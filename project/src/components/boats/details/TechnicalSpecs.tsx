import React from 'react';
import { Ship, Ruler, Scale, Users, Fuel, Droplets, Gauge } from 'lucide-react';
import type { BoatDetails } from '../../../types/boats';
import { SpecificationItem } from './SpecificationItem';

interface TechnicalSpecsProps {
  boat: BoatDetails;
}

export const TechnicalSpecs: React.FC<TechnicalSpecsProps> = ({ boat }) => {
  return (
    <div className="bg-[#242729] rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
        <Ship className="w-6 h-6 mr-3 text-blue-400" />
        Technical Specifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <SpecificationItem icon={Ruler} label="Length" value={boat.specs.length} />
          <SpecificationItem icon={Scale} label="Beam" value={boat.specs.beam} />
          <SpecificationItem icon={Scale} label="Weight" value={boat.specs.weight} />
          <SpecificationItem icon={Users} label="Capacity" value={boat.specs.capacity} />
        </div>
        <div className="space-y-4">
          {boat.specs.fuelTank && (
            <SpecificationItem icon={Fuel} label="Fuel Tank" value={boat.specs.fuelTank} />
          )}
          {boat.specs.waterTank && (
            <SpecificationItem icon={Droplets} label="Water Tank" value={boat.specs.waterTank} />
          )}
          <SpecificationItem icon={Gauge} label="Engines" value={boat.specs.engines} />
        </div>
      </div>
    </div>
  );
};