import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Ruler, Users } from 'lucide-react';
import type { BoatModel } from '../../../types/boats';

interface BoatCardProps {
  boat: BoatModel;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

export const BoatCard: React.FC<BoatCardProps> = ({ boat, isHovered, onHover }) => {
  return (
    <Link 
      to={`/boat-details/${boat.id}`}
      className="block group"
      onMouseEnter={() => onHover(boat.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className={`bg-[#1a1a1a] rounded-lg overflow-hidden shadow-xl transition-all duration-300 flex flex-col max-w-sm mx-auto w-full
        ${isHovered ? 'transform -translate-y-2 shadow-2xl ring-2 ring-blue-500' : 'hover:shadow-2xl'}
      `}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={boat.image}
            alt={boat.name}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 
              ${isHovered ? 'scale-110' : 'scale-100'}
            `}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}/>
        </div>
        
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-blue-400 transition-colors">
            {boat.name}
          </h3>
          <div className="space-y-3 mb-5">
            <div className="flex items-center text-gray-400">
              <Ruler className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm">Length: {boat.specs.length}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Users className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm">Capacity: {boat.specs.capacity}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Anchor className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm">Engines: {boat.specs.engines}</span>
            </div>
          </div>

          <div className="mt-auto">
            <div className={`w-full bg-blue-600 text-white text-center py-2.5 px-4 rounded-lg transition-all duration-300
              ${isHovered ? 'bg-blue-500' : 'group-hover:bg-blue-700'}
            `}>
              <span className="text-sm font-medium">View Details</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};