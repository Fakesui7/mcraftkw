import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-xl">
        <Phone className="h-8 w-8 text-blue-400 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
        <div className="space-y-2">
          <p className="text-gray-300">Mobile: +965 51333995</p>
          <p className="text-gray-300">Tel: +965 22250050</p>
        </div>
      </div>

      <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-xl">
        <Mail className="h-8 w-8 text-blue-400 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Email</h3>
        <p className="text-gray-300">info@mcraft.boats</p>
        <p className="text-gray-400 text-sm mt-4">We'll respond within 24 hours</p>
      </div>

      <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-xl">
        <MapPin className="h-8 w-8 text-blue-400 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Location</h3>
        <p className="text-gray-300">353 Street 36</p>
        <p className="text-gray-300">Kuwait</p>
      </div>
    </div>
  );
};