import React from 'react';
import { Award, Users, Anchor, Shield, Star, Globe, TrendingUp, MapPin, Calendar, Trophy, Sparkles, Zap, Target, Wrench, Lightbulb, UserCheck, CheckCircle, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PageHero from './PageHero';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { 
      number: '30+', 
      label: t('about.yearsExperience'),
      icon: <Calendar className="h-8 w-8" />,
      description: t('about.yearsExperienceDesc'),
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      number: '2000+', 
      label: t('about.soldVessels'),
      icon: <Anchor className="h-8 w-8" />,
      description: t('about.soldVesselsDesc'),
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      number: '9+', 
      label: t('about.countriesShipTo'),
      icon: <Globe className="h-8 w-8" />,
      description: t('about.countriesShipToDesc'),
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      number: '5', 
      label: t('about.yearsWarranty'),
      icon: <Shield className="h-8 w-8" />,
      description: t('about.yearsWarrantyDesc'),
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const values = [
    {
      icon: <Wrench className="h-12 w-12" />,
      title: t('about.craftsmanship'),
      description: t('about.craftsmanshipDesc'),
      gradient: 'from-blue-400 via-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      delay: '0s'
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: t('about.innovation'),
      description: t('about.innovationDesc'),
      gradient: 'from-blue-400 via-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      delay: '0.1s'
    },
    {
      icon: <UserCheck className="h-12 w-12" />,
      title: t('about.customerExperience'),
      description: t('about.customerExperienceDesc'),
      gradient: 'from-blue-400 via-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      delay: '0.2s'
    },
    {
      icon: <CheckCircle className="h-12 w-12" />,
      title: t('about.integrity'),
      description: t('about.integrityDesc'),
      gradient: 'from-blue-400 via-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      delay: '0.3s'
    }
  ];

  const certifications = [
    // Removed all certifications except ISO which is now handled separately
  ];

  return (
    <>
      {/* Page Hero */}
      <PageHero 
        title={t('about.title')}
        subtitle={t('about.subtitle')}
        imageSrc="/IMG_3159.JPG"
      />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 min-h-screen relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Stats Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-blue-400 mr-3" />
                {t('about.achievements')}
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {t('about.achievementsSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background Gradient Card */}
                  <div className="relative bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-2xl p-8 text-center overflow-hidden border border-slate-500 hover:border-blue-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Icon with Gradient Background */}
                    <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}>
                      <div className="text-white">
                        {stat.icon}
                      </div>
                    </div>
                    
                    {/* Main Number */}
                    <div className={`relative text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <div className="relative text-white font-semibold text-lg mb-2">
                      {stat.label}
                    </div>
                    
                    {/* Description */}
                    <div className="relative text-gray-300 text-sm">
                      {stat.description}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>

                  {/* Floating Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10`}></div>
                </div>
              ))}
            </div>

            {/* Additional Achievement Highlights - Updated with blue colors and backgrounds */}
            <div className="mt-16 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-2xl p-8 border border-slate-500">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <TrendingUp className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{t('about.industryLeader')}</h3>
                  <p className="text-gray-300">{t('about.industryLeaderDesc')}</p>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{t('about.expertTeam')}</h3>
                  <p className="text-gray-300">{t('about.expertTeamDesc')}</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{t('about.globalPresence')}</h3>
                  <p className="text-gray-300">{t('about.globalPresenceDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{t('about.story')}</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  {t('about.storyPara1')}
                </p>
                <p>
                  {t('about.storyPara2')}
                </p>
                <p>
                  {t('about.storyPara3')}
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/aboutpteam.jpeg"
                alt="MCraft team at the factory"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center justify-center">
                  <span className="font-bold text-lg">{t('about.meetTheTeam')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Values Section - Updated Heart icon to blue */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 mb-6 shadow-2xl">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">{t('about.values')}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {t('about.valuesSubtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="group relative"
                  style={{ animationDelay: value.delay }}
                >
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-3xl p-8 border border-slate-500 hover:border-transparent transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl overflow-hidden">
                    {/* Background Pattern */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: value.bgGradient }}
                    ></div>
                    
                    {/* Floating Orbs */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-30 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                    <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full opacity-20 group-hover:opacity-80 transition-all duration-700 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                        <div className="text-white">
                          {value.icon}
                        </div>
                      </div>
                      
                      {/* Sparkle Effect */}
                      <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500">
                        {value.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                        {value.description}
                      </p>
                    </div>
                    
                    {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${value.gradient} group-hover:w-full transition-all duration-700`}></div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* ISO Certification Section */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-3xl p-8 lg:p-16 border border-slate-500 overflow-hidden">
              {/* Floating Background Elements */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
              
              <div className="relative">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 mb-8 shadow-2xl">
                    <Award className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Quality Certification
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Our commitment to quality is backed by international standards and rigorous quality management systems.
                  </p>
                </div>

                {/* ISO Certification Card */}
                <div className="max-w-md mx-auto">
                  <div className="group relative">
                    <div className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 rounded-2xl p-8 text-center border border-slate-600 hover:border-transparent transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl overflow-hidden">
                      {/* Dynamic Background Pattern */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
                      
                      {/* Icon with Animated Border */}
                      <div className="relative mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Award className="h-8 w-8 text-white" />
                        </div>
                        
                        {/* Rotating Border Effect */}
                        <div className="absolute inset-0 w-16 h-16 mx-auto rounded-xl border-2 border-transparent group-hover:border-blue-400 group-hover:animate-spin transition-all duration-1000" style={{ animationDuration: '3s' }}></div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-500">
                          ISO 9001:2015
                        </h3>
                        <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-500 mb-4">
                          Quality Management Systems
                        </p>
                        <div className="bg-blue-600/20 rounded-lg p-3 border border-blue-500/30">
                          <p className="text-blue-300 font-semibold text-sm">
                            Valid: 2022 - 2024
                          </p>
                        </div>
                      </div>
                      
                      {/* Success Indicator */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                      
                      {/* Bottom Glow Line */}
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 group-hover:w-full transition-all duration-700"></div>
                    </div>
                    
                    {/* Outer Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"></div>
                  </div>
                </div>
                
                {/* Bottom Achievement Banner */}
                <div className="mt-16 text-center">
                  <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-full px-8 py-4 border border-blue-500/50">
                    <Zap className="h-6 w-6 text-blue-400" />
                    <span className="text-white font-semibold">Certified Excellence Since 1995</span>
                    <Target className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
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
            <linearGradient id="aboutDividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25"
            fill="url(#aboutDividerGradient)"
          />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5"
            fill="url(#aboutDividerGradient)"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="url(#aboutDividerGradient)"
          />
        </svg>
      </div>
    </>
  );
}