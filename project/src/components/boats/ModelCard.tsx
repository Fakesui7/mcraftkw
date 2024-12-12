import React from 'react';
import type { BoatModel } from '../../types/boats';

interface ModelCardProps {
  boat: BoatModel;
}

export const ModelCard: React.FC<ModelCardProps> = ({ boat }) => {
  return (
    <div className="model-card bg-[#242729] rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-[1.02] duration-300">
      <div className="aspect-w-16 aspect-h-12">
        <img 
          src={boat.image} 
          alt={boat.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="model-info p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{boat.name}</h3>
        <p className="text-gray-300 mb-4">
          {boat.specs.length} | Beam: {boat.specs.beam} | Weight: {boat.specs.weight}
        </p>
        <a 
          href={`/boat-details/${boat.id}`} 
          className="inline-block w-full text-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          View Details
        </a>
      </div>
    </div>
  );
};