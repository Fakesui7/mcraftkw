import React from 'react';
import { ArrowRight, Anchor, Ruler, Users } from 'lucide-react';
import type { BoatModel } from '../../types/boats';

interface BoatCardProps {
  boat: BoatModel;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

export const BoatCard: React.FC<BoatCardProps> = ({ boat, isHovered, onHover }) => {
  return (
    <div
      className="group relative bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500"
      onMouseEnter={() => onHover(boat.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
        <img
          src={boat.image}
          alt={boat.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{boat.name}</h3>
        <p className="text-blue-600 font-medium mb-4">{boat.type}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <Ruler className="w-5 h-5 mr-3" />
            <span>{boat.specs.length}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-5 h-5 mr-3" />
            <span>{boat.specs.capacity}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Anchor className="w-5 h-5 mr-3" />
            <span>{boat.specs.engines}</span>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
          <span className="mr-2">Build Your Boat</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};