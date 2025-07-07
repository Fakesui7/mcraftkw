import React, { useState } from 'react';
import { Shield, Phone, CheckCircle, Users, Anchor, Award, FileText, Clock, Star, ChevronDown, ChevronUp, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PageHero from './PageHero';

export default function ServiceWarranty() {
  const { t } = useLanguage();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    overview: true,
    coverage: true,
    process: true,
    documents: true
  });

  // Simplified warranty images - just the essentials
  const warrantyImages = [
    {
      id: 'warranty1',
      src: '/warranty1.JPG',
      title: 'Hull Warranty Certificate'
    },
    {
      id: 'warranty2',
      src: '/warranty2.JPG',
      title: 'Gas Tank Warranty'
    },
    {
      id: 'warranty3',
      src: '/warranty3.JPG',
      title: 'Water Tank Warranty'
    },
    {
      id: 'warranty4',
      src: '/warranty4.JPG',
      title: 'Warranty Terms & Conditions'
    },
    {
      id: 'warranty5',
      src: '/warranty5.JPG',
      title: 'Quality Assurance Standards'
    },
    {
      id: 'warranty6',
      src: '/warranty6.JPG',
      title: 'Warranty Claim Process'
    },
    {
      id: 'warranty7',
      src: '/warranty7.JPG',
      title: 'Component Coverage'
    },
    {
      id: 'warranty8',
      src: '/warranty8.JPG',
      title: 'Maintenance Requirements'
    },
    {
      id: 'warranty9',
      src: '/warranty9.JPG',
      title: 'International Coverage'
    },
    {
      id: 'warranty10',
      src: '/warranty10.JPG',
      title: 'Warranty Registration'
    }
  ];

  const warrantyFeatures = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('service.hullWarranty'),
      description: t('service.hullWarrantyDesc'),
      duration: '3 Years',
      coverage: [
        'Structural integrity protection',
        'Hull defects and manufacturing issues',
        'Fiberglass and composite materials',
        'Deck and superstructure coverage',
        'Water intrusion protection'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Anchor className="h-8 w-8" />,
      title: t('service.gasTankWarranty'),
      description: t('service.gasTankWarrantyDesc'),
      duration: '3 Years',
      coverage: [
        'Fuel tank integrity and sealing',
        'Tank mounting and connections',
        'Fuel system components',
        'Anti-corrosion protection',
        'Leak prevention guarantee'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: t('service.waterTankWarranty'),
      description: t('service.waterTankWarrantyDesc'),
      duration: '3 Years',
      coverage: [
        'Fresh water tank systems',
        'Tank materials and construction',
        'Plumbing connections',
        'Water quality protection',
        'System functionality guarantee'
      ],
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const warrantyBenefits = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: t('service.comprehensiveCoverage'),
      description: t('service.comprehensiveCoverageDesc')
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('service.quickResponse'),
      description: t('service.quickResponseDesc')
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: t('service.qualityAssurance'),
      description: t('service.qualityAssuranceDesc')
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t('service.expertSupport'),
      description: t('service.expertSupportDesc')
    }
  ];

  // Toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <>
      {/* Page Hero */}
      <PageHero 
        title={t('service.title')}
        subtitle={t('service.subtitle')}
        imageSrc="/trm2.PNG"
      />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 min-h-screen relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Warranty Coverage Overview */}
          <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-2xl border border-slate-500 overflow-hidden mb-12">
            <button
              onClick={() => toggleSection('overview')}
              className="w-full p-8 flex items-center justify-between hover:bg-slate-600/50 transition-colors duration-300"
            >
              <h2 className="text-3xl font-bold text-white flex items-center warranty-title">
                <Shield className="h-8 w-8 text-blue-400 mr-3" />
                {t('service.warrantyOverview')}
              </h2>
              {expandedSections.overview ? 
                <ChevronUp className="h-6 w-6 text-blue-400" /> : 
                <ChevronDown className="h-6 w-6 text-blue-400" />
              }
            </button>
            
            {expandedSections.overview && (
              <div className="px-8 pb-8">
                <p className="text-lg text-gray-300 max-w-3xl mb-12 leading-relaxed">
                  {t('service.warrantyOverviewDesc')}
                </p>

                {/* 3-Year Warranty Highlight */}
                <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-8 mb-12 border border-blue-500/30">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-blue-400 mb-4">3</div>
                    <h3 className="text-2xl font-bold text-white mb-4 warranty-title">{t('service.yearsWarranty')}</h3>
                    <p className="text-gray-300 leading-relaxed">{t('service.yearsWarrantyDesc')}</p>
                  </div>
                </div>

                {/* Warranty Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {warrantyFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 rounded-xl p-8 border border-slate-600 hover:shadow-lg transition-all duration-300 group">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {feature.icon}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white warranty-title">{feature.title}</h3>
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {feature.duration}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wide">Coverage Includes:</h4>
                        {feature.coverage.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Warranty Documentation Section - Simplified */}
          <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-2xl border border-slate-500 overflow-hidden mb-12">
            <button
              onClick={() => toggleSection('documents')}
              className="w-full p-8 flex items-center justify-between hover:bg-slate-600/50 transition-colors duration-300"
            >
              <h2 className="text-3xl font-bold text-white flex items-center warranty-title">
                <FileText className="h-8 w-8 text-blue-400 mr-3" />
                Warranty Documentation
              </h2>
              {expandedSections.documents ? 
                <ChevronUp className="h-6 w-6 text-blue-400" /> : 
                <ChevronDown className="h-6 w-6 text-blue-400" />
              }
            </button>
            
            {expandedSections.documents && (
              <div className="px-8 pb-8">
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Access comprehensive warranty documentation and certificates for your MCraft vessel.
                </p>

                {/* Simplified Warranty Images Grid - No filters, no search */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {warrantyImages.map((image, index) => (
                    <WarrantyDocumentCard key={image.id} image={image} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Warranty Benefits */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 warranty-title">{t('service.warrantyBenefits')}</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {t('service.warrantyBenefitsDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {warrantyBenefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-xl p-6 border border-slate-500 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/20 mb-4">
                    <div className="text-blue-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 warranty-title">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Warranty Process */}
          <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-2xl border border-slate-500 overflow-hidden mb-12">
            <button
              onClick={() => toggleSection('process')}
              className="w-full p-8 flex items-center justify-between hover:bg-slate-600/50 transition-colors duration-300"
            >
              <h2 className="text-3xl font-bold text-white flex items-center warranty-title">
                <Clock className="h-8 w-8 text-blue-400 mr-3" />
                {t('service.warrantyProcess')}
              </h2>
              {expandedSections.process ? 
                <ChevronUp className="h-6 w-6 text-blue-400" /> : 
                <ChevronDown className="h-6 w-6 text-blue-400" />
              }
            </button>
            
            {expandedSections.process && (
              <div className="px-8 pb-8">
                <p className="text-lg text-gray-300 max-w-3xl mb-12 leading-relaxed">
                  {t('service.warrantyProcessDesc')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 warranty-title">{t('service.step1Title')}</h3>
                    <p className="text-gray-300 leading-relaxed">{t('service.step1Desc')}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 warranty-title">{t('service.step2Title')}</h3>
                    <p className="text-gray-300 leading-relaxed">{t('service.step2Desc')}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 warranty-title">{t('service.step3Title')}</h3>
                    <p className="text-gray-300 leading-relaxed">{t('service.step3Desc')}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 warranty-title">{t('service.needWarrantySupport')}</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {t('service.warrantyContactDesc')}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-200" />
                    <span>{t('service.warrantyHotline')}: +965 51333995</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-200" />
                    <span>{t('service.dedicatedWarrantyTeam')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-blue-200" />
                    <span>Email: warranty@mcraft.boats</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Shield className="h-24 w-24 text-blue-200 mx-auto mb-6" />
                <button className="bg-blue-400 hover:bg-blue-300 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  {t('service.contactWarranty')}
                </button>
                <p className="text-blue-200 text-sm mt-4">
                  Available 24/7 for warranty support
                </p>
              </div>
            </div>
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
            <linearGradient id="serviceDividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25"
            fill="url(#serviceDividerGradient)"
          />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5"
            fill="url(#serviceDividerGradient)"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="url(#serviceDividerGradient)"
          />
        </svg>
      </div>
    </>
  );
}

// Simplified Warranty Document Card Component
interface WarrantyDocumentCardProps {
  image: {
    id: string;
    src: string;
    title: string;
  };
}

function WarrantyDocumentCard({ image }: WarrantyDocumentCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openFullScreen = () => {
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Handle modal backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isModalOpen && e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen]);

  return (
    <>
      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 rounded-xl overflow-hidden border border-slate-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden cursor-pointer" onClick={openFullScreen}>
          <img 
            src={image.src} 
            alt={image.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Overlay with View Action */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors duration-300">
              <Eye className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Content - Simplified */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-white mb-4 warranty-title leading-relaxed">
            {image.title}
          </h3>
          
          {/* View Full Screen Button */}
          <button 
            onClick={openFullScreen}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <Eye className="h-4 w-4" />
            <span>View Full Screen</span>
          </button>
        </div>
      </div>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Modal Content */}
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Main Modal Image */}
            <img 
              src={image.src} 
              alt={image.title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110 z-10"
              aria-label="Close modal"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Title */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-6 py-3 rounded-full text-lg font-medium backdrop-blur-sm z-10 max-w-4xl text-center">
              {image.title}
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center z-10">
            <p>Press ESC or click outside to close</p>
          </div>
        </div>
      )}
    </>
  );
}