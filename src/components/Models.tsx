import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import PageHero from './PageHero';

export default function Models() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const vessels = [
    {
      id: 'mc-12',
      model: 'MC-12',
      name: 'MC-12',
      type: t('models.fishingBoat'),
      image: '/11dfc83a-e443-44d8-b663-3206ea9a0306.JPG',
      capacity: '4 ' + t('common.persons'),
      maxSpeed: '35 mph',
      length: '12 FT',
      beam: '3.5 FT',
      draft: '1.2 FT',
      fuelCapacity: '25 L',
      engines: 'Single 40HP',
      year: '2024',
      price: t('common.contactForPrice')
    },
    {
      id: 'mc-17',
      model: 'MC-17',
      name: 'MC-17',
      type: t('models.sportBoat'),
      image: '/92184b6c-e852-4831-bae5-063104dcb76b.JPG',
      capacity: '6 ' + t('common.persons'),
      maxSpeed: '40 mph',
      length: '17 FT',
      beam: '5.8 FT',
      draft: '1.8 FT',
      fuelCapacity: '95 L',
      engines: 'Single 90HP',
      year: '2024',
      price: t('common.contactForPrice')
    },
    {
      id: 'mc-23',
      model: 'MC-23',
      name: 'MC-23',
      type: t('models.centerConsole'),
      image: '/coming soon.png',
      capacity: '8 ' + t('common.persons'),
      maxSpeed: '45 mph',
      length: '23 FT',
      beam: '5.5 FT',
      draft: '2.1 FT',
      fuelCapacity: '135 - 180 L',
      engines: 'Single 200HP',
      year: '2024',
      price: t('common.contactForPrice')
    },
    {
      id: 'mc-25',
      model: 'MC-25',
      name: 'MC-25',
      type: t('models.centerConsole'),
      image: '/IMG_3159.JPG',
      capacity: '10 ' + t('common.persons'),
      maxSpeed: '42 mph',
      length: '25 FT',
      beam: '7.5 FT',
      draft: '2.5 FT',
      fuelCapacity: '350 L',
      engines: 'Twin 150HP',
      year: '2024',
      price: t('common.contactForPrice')
    },
    {
      id: 'mc-28',
      model: 'MC-28',
      name: 'MC-28',
      type: t('models.sportCruiser'),
      image: '/coming soon.png',
      capacity: '12 ' + t('common.persons'),
      maxSpeed: '48 mph',
      length: '28 FT',
      beam: '8.5 FT',
      draft: '2.8 FT',
      fuelCapacity: '620 L',
      engines: 'Twin 200HP',
      year: '2024',
      price: t('common.contactForPrice')
    },
    {
      id: 'mc-32',
      model: 'MC-32',
      name: 'MC-32',
      type: t('models.expressCruiser'),
      image: '/trm2.PNG',
      capacity: '14 ' + t('common.persons'),
      maxSpeed: '50 mph',
      length: '32 FT',
      beam: '8.5 FT',
      draft: '3.2 FT',
      fuelCapacity: '620 L',
      engines: 'Twin 300HP',
      year: '2024',
      price: t('common.contactForPrice')
    },
    {
      id: 'mc-36',
      model: 'MC-36',
      name: 'MC-36',
      type: t('models.sportYacht'),
      image: '/mc36out.JPG',
      capacity: '16 ' + t('common.persons'),
      maxSpeed: '55 mph',
      length: '36 FT',
      beam: '9 FT',
      draft: '3.2 FT',
      fuelCapacity: '200 Gallons',
      engines: 'Triple 300HP',
      year: '2024',
      price: t('common.contactForPrice')
    },
    {
      id: 'mc-40',
      model: 'MC-40',
      name: 'MC-40',
      type: t('models.luxuryYacht'),
      image: '/9d9cce5b-6a03-473c-8c69-ae1b1b125981.JPG',
      capacity: '18 ' + t('common.persons'),
      maxSpeed: '65 mph',
      length: '40 FT',
      beam: '9.5 FT',
      draft: '3.8 FT',
      fuelCapacity: '1100 L',
      engines: 'Triple 425HP',
      year: '2024',
      price: t('common.contactForPrice')
    }
  ];

  const handleViewDetails = (vesselId: string) => {
    navigate(`/models/${vesselId}`);
  };

  return (
    <>
      {/* Page Hero */}
      <PageHero 
        title={t('models.title')}
        subtitle={t('models.subtitle')}
        imageSrc="/f2294cf7-2494-4c0f-88bf-6ce3f642b45d.JPG"
      />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 min-h-screen relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t('models.ourModels')}</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {t('models.ourModelsSubtitle')}
            </p>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-300">
              {t('models.showing')} {vessels.length} {t('models.vessels')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {vessels.map((vessel) => (
              <div 
                key={vessel.id} 
                className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-slate-500 mcraft-card-hover"
                onClick={() => handleViewDetails(vessel.id)}
              >
                <div className="relative">
                  <img 
                    src={vessel.image} 
                    alt={vessel.name}
                    className={`w-full h-48 hover:scale-105 transition-transform duration-300 ${
                      vessel.image.includes('coming soon') 
                        ? 'object-contain bg-gradient-to-br from-slate-600 to-slate-500' 
                        : 'object-cover'
                    }`}
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{vessel.name}</h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>{t('vessels.length')}:</span>
                      <span className="font-medium text-white">{vessel.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('vessels.capacity')}:</span>
                      <span className="font-medium text-white">{vessel.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('vessels.engines')}:</span>
                      <span className="font-medium text-white">{vessel.engines}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('models.maxSpeed')}:</span>
                      <span className="font-medium text-white">{vessel.maxSpeed}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewDetails(vessel.id);
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                  >
                    {t('vessels.viewDetails')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Curved Divider */}
      <div className="relative">
        <svg 
          className="w-full h-16" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="modelsDividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25"
            fill="url(#modelsDividerGradient)"
          />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5"
            fill="url(#modelsDividerGradient)"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="url(#modelsDividerGradient)"
          />
        </svg>
      </div>
    </>
  );
}