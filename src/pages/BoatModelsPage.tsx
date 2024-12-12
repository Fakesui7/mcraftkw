import React from 'react';
import { HeroBanner } from '../components/boats/HeroBanner';
import { ModelsGrid } from '../components/boats/ModelsGrid';

export const BoatModelsPage = () => {
  return (
    <div className="min-h-screen bg-[#444444] pt-20">
      <HeroBanner />
      <ModelsGrid />
    </div>
  );
};