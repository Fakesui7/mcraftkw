import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Ruler, Anchor, Gauge, Fuel, Award, Droplets, ChevronDown, ChevronUp, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ImageGallery from './ImageGallery';
import PageHero from './PageHero';

export default function BoatDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    specifications: true,
    features: true
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const vessels = [
    {
      id: 'mc-12',
      model: 'MC-12',
      name: 'MC-12',
      type: t('models.fishingBoat'),
      image: '/11dfc83a-e443-44d8-b663-3206ea9a0306.JPG',
      gallery: [
        '/11dfc83a-e443-44d8-b663-3206ea9a0306.JPG',
        '/219e57eb-5409-4961-bb6d-d267dd15d434.JPG',
        '/06ea7a08-bf03-4722-9e77-d3c34c1327c9.JPG',
      ],
      capacity: '4 ' + t('common.persons'),
      maxSpeed: '35 mph',
      length: '12 FT',
      beam: '3.5 FT',
      draft: '1.2 FT',
      fuelCapacity: '25 L',
      engines: 'Single 40HP',
      cruisingSpeed: '25 mph',
      range: '200 miles',
      weight: '145 KG',
      hullMaterial: 'Fiberglass',
      description: 'Compact and efficient fishing boat perfect for coastal waters and small group fishing trips.',
      standardFeatures: [
        'Navigation & anchor light',
        'Four cleats SS',
        'Tow SS handles',
        'Copper hook',
        'Black defender',
        'Aluminum engine bracket',
        'SS drain plug'
      ]
    },
    {
      id: 'mc-17',
      model: 'MC-17',
      name: 'MC-17',
      type: t('models.sportBoat'),
      image: '/92184b6c-e852-4831-bae5-063104dcb76b.JPG',
      gallery: [
        '/92184b6c-e852-4831-bae5-063104dcb76b.JPG',
        '/946f6f59-ae19-4bd7-b414-b8f275d4b327.JPG',
        '/d4964e6c-eb51-47b8-99bf-c050f3fc0a19.JPG',
        '/1976220d-5961-4a7e-8542-72d7411cc182.JPG',
        '/ae78aa29-c309-4fa4-aae2-e54872668d91.JPG'
      ],
      capacity: '6 ' + t('common.persons'),
      maxSpeed: '40 mph',
      length: '17 FT',
      beam: '5.8 FT',
      draft: '1.8 FT',
      fuelCapacity: '95 L',
      waterTank: '40 L',
      engines: 'Single 90HP',
      cruisingSpeed: '30 mph',
      range: '250 miles',
      weight: '645 KG',
      hullMaterial: 'Fiberglass',
      description: 'Versatile sport boat ideal for fishing, water sports, and recreational cruising.',
      standardFeatures: [
        'Driver seat',
        'Four storages',
        'Black defender',
        'Navigation & anchor light',
        'Four cleats SS',
        'Tow SS handles',
        'Copper hook',
        'Aluminum engine bracket',
        'SS drain plug'
      ]
    },
    {
      id: 'mc-23',
      model: 'MC-23',
      name: 'MC-23',
      type: t('models.centerConsole'),
      image: '/coming soon.png',
      gallery: [
        '/coming soon.png'
      ],
      capacity: '8 ' + t('common.persons'),
      maxSpeed: '45 mph',
      length: '23 FT',
      beam: '5.5 FT',
      draft: '2.1 FT',
      fuelCapacity: '135 - 180 L',
      engines: 'Single 200HP',
      cruisingSpeed: '32 mph',
      range: '350 miles',
      weight: '650 KG',
      hullMaterial: 'Fiberglass',
      description: 'Professional center console boat designed for serious fishing and offshore adventures.',
      standardFeatures: [
        'Console with wind screen',
        'Navigation & anchor light',
        'Four cleats SS',
        'Tow SS handles',
        'Copper hook',
        'Black defender',
        'Aluminum engine bracket',
        'SS drain plug'
      ]
    },
    {
      id: 'mc-25',
      model: 'MC-25',
      name: 'MC-25',
      type: t('models.centerConsole'),
      image: '/IMG_3159.JPG',
      gallery: [
        '/IMG_3159.JPG',
        '/IMG_3156.JPG',
        '/IMG_3160.JPG',
        '/IMG_3161.JPG',
        '/IMG_3158.JPG'
      ],
      capacity: '10 ' + t('common.persons'),
      maxSpeed: '42 mph',
      length: '25 FT',
      beam: '7.5 FT',
      draft: '2.5 FT',
      fuelCapacity: '350 L',
      waterTank: '90 L',
      engines: 'Twin 150HP',
      cruisingSpeed: '30 mph',
      range: '400 miles',
      weight: '1250 KG',
      hullMaterial: 'Fiberglass',
      description: 'Professional center console boat designed for serious fishing and offshore adventures with enhanced capacity.',
      standardFeatures: [
        'Console with wind screen',
        'Driver seat',
        'One icebox',
        'Five storages',
        'Navigation & anchor light',
        'Four cleats SS',
        'Tow SS handles',
        'Copper hook',
        'Aluminum engine bracket',
        'Black defender',
        'SS drain plug'
      ]
    },
    {
      id: 'mc-28',
      model: 'MC-28',
      name: 'MC-28',
      type: t('models.sportCruiser'),
      image: '/coming soon.png',
      gallery: [
        '/coming soon.png'
      ],
      capacity: '12 ' + t('common.persons'),
      maxSpeed: '48 mph',
      length: '28 FT',
      beam: '8.5 FT',
      draft: '2.8 FT',
      fuelCapacity: '620 L',
      waterTank: '180 L',
      engines: 'Twin 200HP',
      cruisingSpeed: '35 mph',
      range: '450 miles',
      weight: '1650 KG',
      hullMaterial: 'Fiberglass',
      description: 'Luxurious sport cruiser combining performance with comfort for the ultimate boating experience.',
      standardFeatures: [
        'Marine toilet',
        'Driver seat',
        'One icebox',
        'Five storages',
        'Navigation & anchor light',
        'Four cleats SS',
        'Aluminum engine bracket',
        'SS drain plug',
        'Copper hook',
        'Black defender',
        'Tow SS handles'
      ]
    },
    {
      id: 'mc-32',
      model: 'MC-32',
      name: 'MC-32',
      type: t('models.expressCruiser'),
      image: '/trm2.PNG',
      gallery: [
        '/trm2.PNG',
        '/mc_32.png',
        '/mc3.png',
        '/mc4.png',
        '/TRM1.PNG',
      ],
      capacity: '14 ' + t('common.persons'),
      maxSpeed: '50 mph',
      length: '32 FT',
      beam: '8.5 FT',
      draft: '3.2 FT',
      fuelCapacity: '620 L',
      waterTank: '180 L',
      engines: 'Twin 300HP',
      cruisingSpeed: '38 mph',
      range: '500 miles',
      weight: '1800 KG',
      hullMaterial: 'Fiberglass',
      description: 'Premium express cruiser offering luxury accommodations and exceptional performance.',
      standardFeatures: [
        'Console with wind screen',
        'Marine toilet',
        'Two iceboxes',
        'Driver seat & companion seat',
        'Fresh water tank with shower',
        'Black defender',
        'Anchor compartment & stern storage under seat',
        'SS Cleats',
        'Deck drain',
        'Bilge pump'
      ]
    },
    {
      id: 'mc-36',
      model: 'MC-36',
      name: 'MC-36',
      type: t('models.sportYacht'),
      image: '/mc36out.JPG',
      gallery: [
        '/mc36out.JPG',
        '/mc36zoom.JPG',
        '/mc36in.JPG',
        '/mc36front.JPG',
        '/mc36s.PNG'
      ],
      capacity: '16 ' + t('common.persons'),
      maxSpeed: '55 mph',
      length: '36 FT',
      beam: '9 FT',
      draft: '3.2 FT',
      fuelCapacity: '800 Gallons',
      waterTank: '180 L',
      engines: 'Triple 300HP',
      cruisingSpeed: '40 mph',
      range: '450 miles',
      weight: '2700 KG',
      hullMaterial: 'Carbon Fiber',
      description: 'High-performance sport yacht with luxury amenities and exceptional offshore capabilities.',
      standardFeatures: [
        'Marine toilet',
        'Driver seat',
        'One icebox',
        'Five storages',
        'Navigation & anchor light',
        'Four cleats SS',
        'Aluminum engine bracket',
        'SS drain plug',
        'Copper hook',
        'Black defender',
        'Tow SS handles'
      ]
    },
    {
      id: 'mc-40',
      model: 'MC-40',
      name: 'MC-40',
      type: t('models.luxuryYacht'),
      image: '/9d9cce5b-6a03-473c-8c69-ae1b1b125981.JPG',
      gallery: [
        '/9d9cce5b-6a03-473c-8c69-ae1b1b125981.JPG',
        '/f2294cf7-2494-4c0f-88bf-6ce3f642b45d.JPG',
        '/38e6447d-0b4c-48f9-8b09-708f42beb603.JPG',
        '/fdd21258-1d81-4b30-a2db-cbbcf520f1f8.JPG'
      ],
      capacity: '18 ' + t('common.persons'),
      maxSpeed: '65 mph',
      length: '40 FT',
      beam: '9.5 FT',
      draft: '3.8 FT',
      fuelCapacity: '1100 L',
      waterTank: '180 L',
      engines: 'Triple 425HP',
      cruisingSpeed: '45 mph',
      range: '500 miles',
      weight: '2600 KG',
      hullMaterial: 'Carbon Fiber',
      description: 'Flagship luxury yacht offering unparalleled comfort, performance, and style for discerning owners.',
      standardFeatures: [
        'Console with wind screen',
        'Marine toilet',
        'Driver seat & companion seat',
        'Fresh water tank with shower',
        'Black defender',
        'Anchor compartment & stern storage under seat',
        'SS Cleats',
        'Deck drain',
        'Bilge pump'
      ]
    }
  ];

  const boat = vessels.find(v => v.id === id);

  // Enhanced Back to Models Button Component
  const BackToModelsButton = ({ className = '' }: { className?: string }) => (
    <button
      onClick={() => navigate('/models')}
      className={`group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white px-8 py-5 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-lg border border-blue-500/30 backdrop-blur-sm text-xl ${className}`}
      aria-label={t('boatDetails.backToModels')}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
        <ArrowLeft className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <span className="text-xl font-medium group-hover:text-blue-100 transition-colors duration-300">
        {t('boatDetails.backToModels')}
      </span>
      <div className="w-2 h-2 rounded-full bg-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );

  // Toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (!boat) {
    return (
      <div className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative text-center">
          <h1 className="text-4xl font-bold text-white mb-8">{t('boatDetails.boatNotFound')}</h1>
          <BackToModelsButton />
        </div>
      </div>
    );
  }

  // Create technical specs array
  const technicalSpecs = [
    { label: t('boatDetails.length'), value: boat.length, icon: <Ruler className="h-5 w-5" /> },
    { label: t('boatDetails.beam'), value: boat.beam, icon: <Ruler className="h-5 w-5" /> },
    { label: t('boatDetails.weight'), value: boat.weight, icon: <Award className="h-5 w-5" /> },
    { label: t('boatDetails.capacity'), value: boat.capacity, icon: <Users className="h-5 w-5" /> },
    { label: t('boatDetails.fuelTank'), value: boat.fuelCapacity, icon: <Fuel className="h-5 w-5" /> },
    ...(boat.waterTank ? [{ label: t('boatDetails.waterTank'), value: boat.waterTank, icon: <Droplets className="h-5 w-5" /> }] : []),
    { label: t('boatDetails.engines'), value: boat.engines, icon: <Gauge className="h-5 w-5" /> },
    { label: 'Max Speed', value: boat.maxSpeed, icon: <Gauge className="h-5 w-5" /> },
    { label: 'Hull Material', value: boat.hullMaterial, icon: <Award className="h-5 w-5" /> }
  ];

  return (
    <>
      {/* Page Hero */}
      <PageHero 
        title={boat.model}
        subtitle={boat.description}
        imageSrc={boat.image}
      />
      
      <div className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 min-h-screen relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Key Specifications Bar */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-xl p-6 border border-slate-500/50 backdrop-blur-sm">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <Ruler className="h-6 w-6 text-blue-400" />
                  <span className="text-2xl font-bold text-white">{boat.length}</span>
                </div>
                <p className="text-gray-300 text-sm">Length Overall</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-xl p-6 border border-slate-500/50 backdrop-blur-sm">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <Users className="h-6 w-6 text-blue-400" />
                  <span className="text-2xl font-bold text-white">{boat.capacity}</span>
                </div>
                <p className="text-gray-300 text-sm">Maximum Capacity</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-xl p-6 border border-slate-500/50 backdrop-blur-sm">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <Gauge className="h-6 w-6 text-blue-400" />
                  <span className="text-2xl font-bold text-white">{boat.engines}</span>
                </div>
                <p className="text-gray-300 text-sm">Engine Configuration</p>
              </div>
            </div>
          </div>

          {/* Gallery Section - Full Width */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-2xl p-8 border border-slate-500 shadow-2xl">
              <h2 className="text-3xl font-bold text-white flex items-center mb-6">
                <Eye className="h-8 w-8 text-blue-400 mr-3" />
                {t('boatDetails.gallery')}
              </h2>
              
              <ImageGallery 
                images={boat.gallery} 
                title={boat.model}
                className="rounded-xl overflow-hidden"
              />
            </div>
          </div>

          {/* Detailed Specifications & Features */}
          <div className="space-y-8 mb-16">
            {/* Technical Specifications */}
            <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-2xl border border-slate-500 overflow-hidden">
              <button
                onClick={() => toggleSection('specifications')}
                className="w-full p-8 flex items-center justify-between hover:bg-slate-600/50 transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <Gauge className="h-6 w-6 text-blue-400 mr-3" />
                  {t('boatDetails.technicalSpecs')}
                </h3>
                {expandedSections.specifications ? 
                  <ChevronUp className="h-6 w-6 text-blue-400" /> : 
                  <ChevronDown className="h-6 w-6 text-blue-400" />
                }
              </button>
              
              {expandedSections.specifications && (
                <div className="px-8 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technicalSpecs.map((spec, index) => (
                      <div key={index} className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 rounded-lg p-6 border border-slate-600">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="text-blue-400">{spec.icon}</div>
                          <span className="text-gray-300 font-medium">{spec.label}</span>
                        </div>
                        <span className="text-white font-bold text-xl">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Standard Features */}
            <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-2xl border border-slate-500 overflow-hidden">
              <button
                onClick={() => toggleSection('features')}
                className="w-full p-8 flex items-center justify-between hover:bg-slate-600/50 transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <Award className="h-6 w-6 text-blue-400 mr-3" />
                  {t('boatDetails.standardFeatures')}
                </h3>
                {expandedSections.features ? 
                  <ChevronUp className="h-6 w-6 text-blue-400" /> : 
                  <ChevronDown className="h-6 w-6 text-blue-400" />
                }
              </button>
              
              {expandedSections.features && (
                <div className="px-8 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {boat.standardFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-slate-600/30 rounded-lg">
                        <div className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Back Button - Centered and Prominent */}
          <div className="flex justify-center">
            <BackToModelsButton className="shadow-2xl hover:shadow-blue-500/25" />
          </div>
        </div>
      </div>

      {/* Enhanced Curved Divider */}
      <div className="relative">
        <svg 
          className="w-full h-16" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="boatDetailsDividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25"
            fill="url(#boatDetailsDividerGradient)"
          />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5"
            fill="url(#boatDetailsDividerGradient)"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="url(#boatDetailsDividerGradient)"
          />
        </svg>
      </div>
    </>
  );
}
