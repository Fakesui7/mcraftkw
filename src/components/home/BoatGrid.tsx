import React, { useState } from 'react';
import { ArrowRight, Anchor, Ruler, Users } from 'lucide-react';
import { boats } from '../../data/boats';

// Filter only the requested boats
const selectedBoats = boats.filter(boat => 
  ['mc_12', 'mc_23', 'mc_36', 'mc_40'].includes(boat.id)
);

export const BoatGrid = () => {
  const [hoveredBoat, setHoveredBoat] = useState<string | null>(null);

  return (
    <section id="models" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">BOAT MODELS</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our signature models, each crafted with precision and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {selectedBoats.map((boat) => (
            <div
              key={boat.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 border border-gray-100"
              onMouseEnter={() => setHoveredBoat(boat.id)}
              onMouseLeave={() => setHoveredBoat(null)}
            >
              <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                <img
                  src={boat.image}
                  alt={boat.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredBoat === boat.id ? 'scale-110' : 'scale-100'
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
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};