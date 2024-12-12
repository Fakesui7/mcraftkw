import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SpecificationItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const SpecificationItem: React.FC<SpecificationItemProps> = ({
  icon: Icon,
  label,
  value,
}) => {
  return (
    <div className="flex items-center text-gray-300 bg-[#1e2021] p-4 rounded-lg">
      <Icon className="w-5 h-5 mr-3 text-blue-400" />
      <span className="w-32">{label}</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  );
};