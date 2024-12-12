import React from 'react';
import { Anchor } from 'lucide-react';

interface FeatureItemProps {
  feature: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => {
  return (
    <div className="flex items-center text-gray-300 bg-[#1e2021] p-4 rounded-lg">
      <Anchor className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
      <span>{feature}</span>
    </div>
  );
};