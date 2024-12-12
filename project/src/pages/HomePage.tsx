import React from 'react';
import { Hero } from '../components/home/Hero';
import { BoatDetailsGrid } from '../components/boats/BoatDetailsGrid';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <BoatDetailsGrid />
    </>
  );
};