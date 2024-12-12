import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-[#444444]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <Phone className="h-6 w-6 text-blue-400 flex-shrink-0" />
            <span className="ml-3 text-gray-200">(555) 123-4567</span>
          </div>
          <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <Mail className="h-6 w-6 text-blue-400 flex-shrink-0" />
            <span className="ml-3 text-gray-200">contact@mcraft.com</span>
          </div>
          <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <MapPin className="h-6 w-6 text-blue-400 flex-shrink-0" />
            <span className="ml-3 text-gray-200">123 Marina Bay, Coastal City</span>
          </div>
        </div>
      </div>
    </section>
  );
};