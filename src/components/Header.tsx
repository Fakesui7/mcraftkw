import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModelsDropdownOpen, setIsModelsDropdownOpen] = useState(false);
  const [isMobileModelsOpen, setIsMobileModelsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      // Close menu when switching to desktop
      if (!mobile) {
        setIsMenuOpen(false);
        setIsMobileModelsOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Scroll to top whenever location changes
  useEffect(() => {
    window.scrollTo(0, 0);
    // Close mobile menu when navigating
    setIsMenuOpen(false);
    setIsMobileModelsOpen(false);
  }, [location.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setIsModelsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: t('nav.models'), href: '/models', type: 'route', hasDropdown: true },
    { name: t('nav.company'), href: '/about', type: 'route' },
    { name: t('nav.service'), href: '/service', type: 'route' },
    { name: t('nav.contact'), href: '/contact', type: 'route' }
  ];

  const boatModels = [
    { id: 'mc-12', name: 'MC-12', specs: '12 FT | Single 40HP' },
    { id: 'mc-17', name: 'MC-17', specs: '17 FT | Single 90HP' },
    { id: 'mc-23', name: 'MC-23', specs: '23 FT | Single 200HP' },
    { id: 'mc-25', name: 'MC-25', specs: '25 FT | Twin 150HP' },
    { id: 'mc-28', name: 'MC-28', specs: '28 FT | Twin 200HP' },
    { id: 'mc-32', name: 'MC-32', specs: '32 FT | Twin 300HP' },
    { id: 'mc-36', name: 'MC-36', specs: '36 FT | Triple 300HP' },
    { id: 'mc-40', name: 'MC-40', specs: '40 FT | Triple 425HP' }
  ];

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.type === 'route') {
      navigate(item.href);
    } else if (item.type === 'scroll') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
    setIsModelsDropdownOpen(false);
    setIsMobileModelsOpen(false);
  };

  const handleModelClick = (modelId: string) => {
    navigate(`/models/${modelId}`);
    setIsModelsDropdownOpen(false);
    setIsMenuOpen(false);
    setIsMobileModelsOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
    setIsMobileModelsOpen(false);
  };

  // Handle dropdown hover with proper timing for desktop only
  const handleDropdownMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      setIsModelsDropdownOpen(true);
    }
  };

  const handleDropdownMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setIsModelsDropdownOpen(false);
    }
  };

  // Handle mobile models toggle
  const handleMobileModelsToggle = () => {
    setIsMobileModelsOpen(!isMobileModelsOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 shadow-2xl border-b border-slate-500 backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-white hover:text-blue-400 hover:bg-slate-600/50' 
                : 'text-white hover:text-blue-400 hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 transition-transform hover:scale-105 duration-300 lg:mr-auto"
          >
            <img 
              src="/logo_only_M_red.png" 
              alt="MCraft Logo" 
              className="h-12 lg:h-16 w-auto drop-shadow-lg"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative dropdown-container">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <button
                      onClick={() => handleNavigation(item)}
                      className={`font-medium text-sm transition-all duration-300 hover:text-blue-400 hover:scale-105 px-3 py-2 rounded-lg flex items-center space-x-1 ${
                        isScrolled 
                          ? 'text-white hover:bg-slate-600/50' 
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isModelsDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Desktop Dropdown Menu */}
                    {isModelsDropdownOpen && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="h-2 bg-transparent w-96"></div>
                        <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 rounded-xl shadow-2xl border border-slate-500 overflow-hidden w-96">
                          <div className="grid grid-cols-2 gap-0">
                            {boatModels.map((model, index) => (
                              <button
                                key={model.id}
                                onClick={() => handleModelClick(model.id)}
                                className="p-3 lg:p-4 text-left hover:bg-slate-600/50 transition-all duration-200 border-b border-r border-slate-600 last:border-b-0 group"
                                style={{
                                  borderRight: index % 2 === 0 ? '1px solid rgb(71 85 105)' : 'none',
                                  borderBottom: index >= boatModels.length - 2 ? 'none' : '1px solid rgb(71 85 105)',
                                  minHeight: '55px'
                                }}
                              >
                                <div className="text-white font-semibold text-sm lg:text-base mb-1 group-hover:text-blue-400 transition-colors duration-200">
                                  {model.name}
                                </div>
                                <div className="text-gray-300 text-xs lg:text-sm group-hover:text-gray-200 transition-colors duration-200">
                                  {model.specs}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item)}
                    className={`font-medium text-sm transition-all duration-300 hover:text-blue-400 hover:scale-105 px-3 py-2 rounded-lg ${
                      isScrolled 
                        ? 'text-white hover:bg-slate-600/50' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Instagram Icon */}
          <div className="hidden lg:flex items-center">
            <a 
              href="https://instagram.com/almohallab_marine" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:scale-110 p-2 rounded-lg ${
                isScrolled 
                  ? 'hover:bg-slate-600/50' 
                  : 'hover:bg-white/10'
              }`}
            >
              <img 
                src="/instagram.png" 
                alt="Instagram" 
                className="h-6 w-6"
              />
            </a>
          </div>

          {/* Mobile placeholder for layout balance */}
          <div className="lg:hidden w-10"></div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden absolute top-full left-0 right-0 shadow-2xl rounded-b-lg border-t transition-all duration-300 backdrop-blur-md max-h-[calc(100vh-4rem)] overflow-y-auto z-50 ${
            isScrolled 
              ? 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 border-slate-500' 
              : 'bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-700/95 border-slate-600'
          }`}>
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {/* Main Navigation Item */}
                  <div className="flex items-center">
                    <button
                      onClick={() => handleNavigation(item)}
                      className={`flex-1 text-left px-4 py-3 rounded-md transition-all duration-300 font-medium text-base ${
                        isScrolled 
                          ? 'text-white hover:bg-slate-600/50 hover:text-blue-400' 
                          : 'text-white hover:bg-white/10 hover:text-blue-400'
                      }`}
                    >
                      {item.name}
                    </button>
                    
                    {/* Dropdown Toggle for Mobile */}
                    {item.hasDropdown && (
                      <button
                        onClick={handleMobileModelsToggle}
                        className={`p-3 rounded-md transition-all duration-300 ${
                          isScrolled 
                            ? 'text-white hover:bg-slate-600/50 hover:text-blue-400' 
                            : 'text-white hover:bg-white/10 hover:text-blue-400'
                        }`}
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileModelsOpen ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile dropdown for boat models */}
                  {item.hasDropdown && isMobileModelsOpen && (
                    <div className="ml-2 mt-2 space-y-2 max-h-64 overflow-y-auto">
                      {boatModels.map((model) => (
                        <button
                          key={model.id}
                          onClick={() => handleModelClick(model.id)}
                          className={`block w-full px-4 py-3 rounded-md transition-all duration-300 text-sm border border-slate-600/50 text-left ${
                            isScrolled 
                              ? 'text-gray-300 hover:bg-slate-600/30 hover:text-white hover:border-blue-400/50' 
                              : 'text-gray-300 hover:bg-white/5 hover:text-white hover:border-blue-400/50'
                          }`}
                          style={{ minHeight: '44px' }}
                        >
                          <div className="font-medium text-sm mb-1">
                            {model.name}
                          </div>
                          <div className="text-xs text-gray-400">
                            {model.specs}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Social Links */}
              <div className={`px-2 py-4 border-t ${
                isScrolled ? 'border-slate-500' : 'border-slate-600'
              }`}>
                <a 
                  href="https://instagram.com/almohallab_marine" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 transition-all duration-300 p-3 rounded-lg text-base ${
                    isScrolled 
                      ? 'text-white hover:text-blue-400 hover:bg-slate-600/50' 
                      : 'text-white hover:text-blue-400 hover:bg-white/10'
                  }`}
                >
                  <img 
                    src="/instagram.png" 
                    alt="Instagram" 
                    className="h-5 w-5"
                  />
                  <span>{t('footer.followUs')}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}