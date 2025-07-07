import React, { useState } from 'react';
import { Anchor, CheckCircle, ArrowRight, Palette, Cog, Users, Compass } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function BuildYourBoat() {
  const { t } = useLanguage();
  const [selectedStep, setSelectedStep] = useState(1);
  const [formData, setFormData] = useState({
    boatType: '',
    length: '',
    capacity: '',
    features: [] as string[],
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const steps = [
    { id: 1, title: t('build.boatType'), icon: <Anchor className="h-6 w-6" /> },
    { id: 2, title: t('build.specifications'), icon: <Cog className="h-6 w-6" /> },
    { id: 3, title: t('build.features'), icon: <Palette className="h-6 w-6" /> },
    { id: 4, title: t('build.contactInfo'), icon: <Users className="h-6 w-6" /> }
  ];

  const boatTypes = [
    { id: 'luxury-yacht', name: t('build.luxuryYacht'), description: t('build.luxuryYachtDesc'), image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { id: 'sport-yacht', name: t('build.sportYacht'), description: t('build.sportYachtDesc'), image: 'https://images.pexels.com/photos/1534264/pexels-photo-1534264.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { id: 'motor-yacht', name: t('build.motorYacht'), description: t('build.motorYachtDesc'), image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
    { id: 'catamaran', name: t('build.catamaran'), description: t('build.catamaranDesc'), image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' }
  ];

  const features = [
    'Master Suite with Panoramic Views',
    'Professional Galley',
    'Flybridge with Wet Bar',
    'Water Sports Equipment',
    'Premium Sound System',
    'Air Conditioning',
    'Satellite Communication',
    'Tender Garage',
    'Spa and Wellness Center',
    'Helicopter Landing Pad',
    'Beach Club',
    'Infinity Pool'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Custom boat request:', formData);
    // Handle form submission
  };

  const renderStep = () => {
    switch (selectedStep) {
      case 1:
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">{t('build.chooseBoatType')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {boatTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => setFormData({ ...formData, boatType: type.id })}
                  className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    formData.boatType === type.id
                      ? 'border-blue-600 shadow-lg'
                      : 'border-slate-600 hover:border-blue-400'
                  }`}
                >
                  <img src={type.image} alt={type.name} className="w-full h-48 object-cover" />
                  <div className="p-4 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500">
                    <h4 className="text-lg font-bold text-white">{type.name}</h4>
                    <p className="text-gray-300">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">{t('build.specifications')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">{t('build.length')}</label>
                <select
                  name="length"
                  value={formData.length}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                >
                  <option value="">{t('build.selectLength')}</option>
                  <option value="40-60ft">{t('build.length40to60')}</option>
                  <option value="60-80ft">{t('build.length60to80')}</option>
                  <option value="80-120ft">{t('build.length80to120')}</option>
                  <option value="120-150ft">{t('build.length120to150')}</option>
                  <option value="150ft+">{t('build.length150plus')}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">{t('build.guestCapacity')}</label>
                <select
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                >
                  <option value="">{t('build.selectCapacity')}</option>
                  <option value="6-8">{t('build.capacity6to8')}</option>
                  <option value="8-12">{t('build.capacity8to12')}</option>
                  <option value="12-16">{t('build.capacity12to16')}</option>
                  <option value="16-20">{t('build.capacity16to20')}</option>
                  <option value="20+">{t('build.capacity20plus')}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">{t('build.budgetRange')}</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                >
                  <option value="">{t('build.selectBudget')}</option>
                  <option value="1-5M">{t('build.budget1to5M')}</option>
                  <option value="5-10M">{t('build.budget5to10M')}</option>
                  <option value="10-20M">{t('build.budget10to20M')}</option>
                  <option value="20M+">{t('build.budget20Mplus')}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">{t('build.timeline')}</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                >
                  <option value="">{t('build.selectTimeline')}</option>
                  <option value="12-18months">{t('build.timeline12to18')}</option>
                  <option value="18-24months">{t('build.timeline18to24')}</option>
                  <option value="24-36months">{t('build.timeline24to36')}</option>
                  <option value="36months+">{t('build.timeline36plus')}</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">{t('build.selectFeatures')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  onClick={() => handleFeatureToggle(feature)}
                  className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-300 ${
                    formData.features.includes(feature)
                      ? 'border-blue-600 bg-blue-600/20'
                      : 'border-slate-600 hover:border-blue-400'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle
                      className={`h-5 w-5 ${
                        formData.features.includes(feature) ? 'text-blue-400' : 'text-gray-400'
                      }`}
                    />
                    <span className="text-sm font-medium text-white">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">{t('build.contactInfo')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">{t('build.fullName')} {t('common.required')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">{t('build.emailAddress')} {t('common.required')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">{t('build.phoneNumber')}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">{t('build.additionalRequirements')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder={t('build.additionalRequirementsPlaceholder')}
                ></textarea>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 min-h-screen relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 mcraft-text-gradient">
              {t('build.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('build.subtitle')}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div
                    onClick={() => setSelectedStep(step.id)}
                    className={`cursor-pointer flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedStep === step.id
                        ? 'bg-blue-600 text-white'
                        : selectedStep > step.id
                        ? 'bg-green-500 text-white'
                        : 'bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 text-gray-300 hover:bg-slate-600 border border-slate-500'
                    }`}
                  >
                    {step.icon}
                    <span className="font-medium hidden sm:block">{step.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-2xl shadow-xl p-8 lg:p-12 mb-8 border border-slate-500">
            {renderStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={() => setSelectedStep(Math.max(1, selectedStep - 1))}
              disabled={selectedStep === 1}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedStep === 1
                  ? 'bg-slate-600 text-gray-400 cursor-not-allowed'
                  : 'bg-slate-600 hover:bg-slate-700 text-white'
              }`}
            >
              {t('build.previous')}
            </button>
            
            {selectedStep < 4 ? (
              <button
                onClick={() => setSelectedStep(selectedStep + 1)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                {t('build.nextStep')}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                {t('build.submitRequest')}
              </button>
            )}
          </div>

          {/* Summary */}
          {selectedStep === 4 && (
            <div className="mt-12 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-xl p-6 border border-slate-500">
              <h4 className="text-lg font-bold text-white mb-4">{t('build.configurationSummary')}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-300">{t('build.boatType')}:</span>
                  <p className="text-white">{formData.boatType || t('build.notSelected')}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-300">{t('build.length')}:</span>
                  <p className="text-white">{formData.length || t('build.notSelected')}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-300">{t('build.guestCapacity')}:</span>
                  <p className="text-white">{formData.capacity || t('build.notSelected')}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-300">{t('build.features')}:</span>
                  <p className="text-white">{formData.features.length} {t('build.selected')}</p>
                </div>
              </div>
            </div>
          )}
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
            <linearGradient id="buildDividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25"
            fill="url(#buildDividerGradient)"
          />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5"
            fill="url(#buildDividerGradient)"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="url(#buildDividerGradient)"
          />
        </svg>
      </div>
    </>
  );
}