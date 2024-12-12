import React from 'react';
import { useParams } from 'react-router-dom';
import { Ship } from 'lucide-react';
import { boatDetails } from '../../../data/boatDetails';
import { BoatHero } from './BoatHero';
import { TechnicalSpecs } from './TechnicalSpecs';
import { StandardFeatures } from './StandardFeatures';
import { BoatGallery } from './BoatGallery';

export const BoatDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const boat = id ? boatDetails[id] : null;

  if (!boat) {
    return (
      <div className="min-h-screen bg-[#444444] pt-20 flex items-center justify-center">
        <div className="text-center">
          <Ship className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-white text-xl">Boat model not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#444444] pt-20">
      <BoatHero boat={boat} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <BoatGallery images={boat.gallery} name={boat.name} />
          <TechnicalSpecs boat={boat} />
          <StandardFeatures boat={boat} />
        </div>
      </div>
    </div>
  );
};