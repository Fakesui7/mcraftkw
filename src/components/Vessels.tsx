import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Ruler, Anchor, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Vessels() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const vessels = [
    {
      id: 'mc-12',
      image: '/11dfc83a-e443-44d8-b663-3206ea9a0306.JPG',
      model: 'MC-12',
      length: '12 FT',
      capacity: '4 ' + t('common.persons'),
      engines: 'Single 40HP'
    },
    {
      id: 'mc-17',
      image: '/92184b6c-e852-4831-bae5-063104dcb76b.JPG',
      model: 'MC-17',
      length: '17 FT',
      capacity: '6 ' + t('common.persons'),
      engines: 'Single 90HP'
    },
    {
      id: 'mc-25',
      image: '/IMG_3159.JPG',
      model: 'MC-25',
      length: '25 FT',
      capacity: '10 ' + t('common.persons'),
      engines: 'Twin 150HP'
    },
    {
      id: 'mc-36',
      image: '/mc36out.JPG',
      model: 'MC-36',
      length: '36 FT',
      capacity: '16 ' + t('common.persons'),
      engines: 'Triple 300HP'
    }
  ];

  const handleViewDetails = (vesselId: string) => {
    navigate(`/models/${vesselId}`);
  };

  const handleViewAllModels = () => {
    navigate('/models');
  };

  return (
    <>
      <section id="vessels" className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - Centered */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 mcraft-text-gradient">
              {t('vessels.title')}
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {t('vessels.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vessels.map((vessel, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-2xl shadow-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 cursor-pointer mcraft-card-hover border border-slate-500"
                     onClick={() => handleViewDetails(vessel.id)}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={vessel.image} 
                      alt={vessel.model}
                      className={`w-full h-48 group-hover:scale-110 transition-transform duration-700 ${
                        vessel.image.includes('coming soon') 
                          ? 'object-contain bg-gradient-to-br from-slate-600 to-slate-500' 
                          : 'object-cover'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">{vessel.model}</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Ruler className="h-4 w-4 text-blue-400" />
                        <span className="text-sm">{t('vessels.length')}: {vessel.length}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Users className="h-4 w-4 text-blue-400" />
                        <span className="text-sm">{t('vessels.capacity')}: {vessel.capacity}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Anchor className="h-4 w-4 text-blue-400" />
                        <span className="text-sm">{t('vessels.engines')}: {vessel.engines}</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetails(vessel.id);
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                    >
                      {t('vessels.viewDetails')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Models Button - Bottom Right */}
          <div className="flex justify-end mt-12">
            <button
              onClick={handleViewAllModels}
              className="group flex items-center space-x-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <span className="text-lg">{t('vessels.viewAllModels')}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Curved Divider */}
      <div className="relative">
        <svg 
          className="w-full h-16 rotate-180" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="dividerGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="50%" stopColor="#475569" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25"
            fill="url(#dividerGradient2)"
          />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5"
            fill="url(#dividerGradient2)"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="url(#dividerGradient2)"
          />
        </svg>
      </div>
    </>
  );
}