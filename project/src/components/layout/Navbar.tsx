import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import { boats } from '../../data/boats';
import { useDelayedHover } from '../../hooks/useDelayedHover';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isOpen, onMouseEnter, onMouseLeave } = useDelayedHover(200);

  // Split boats array into two groups of 4
  const firstColumnBoats = boats.slice(0, 4);
  const secondColumnBoats = boats.slice(4);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg mr-2"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6 text-gray-500" />
              </button>
              <Link to="/">
                <img 
                  src="/assets/images/logo.png" 
                  alt="MCraft Logo" 
                  className="h-[150px] w-auto"
                />
              </Link>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <div 
                className="relative group"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link
                  to="/boat-models"
                  className="flex items-center font-medium text-gray-900 hover:text-blue-600 transition-colors"
                >
                  BOAT MODELS
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </Link>
                
                {/* Split Dropdown Menu */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white/95 backdrop-blur-sm shadow-xl rounded-lg transition-all duration-200 transform ${
                    isOpen 
                      ? 'opacity-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="flex p-4">
                    {/* First Column */}
                    <div className="flex-1 border-r border-gray-100">
                      {firstColumnBoats.map((boat) => (
                        <Link
                          key={boat.id}
                          to={`/boat-details/${boat.id}`}
                          className="block px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="font-medium text-gray-900">{boat.name}</div>
                          <div className="text-sm text-gray-500">
                            {boat.specs.length} | {boat.specs.engines}
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Second Column */}
                    <div className="flex-1 pl-4">
                      {secondColumnBoats.map((boat) => (
                        <Link
                          key={boat.id}
                          to={`/boat-details/${boat.id}`}
                          className="block px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="font-medium text-gray-900">{boat.name}</div>
                          <div className="text-sm text-gray-500">
                            {boat.specs.length} | {boat.specs.engines}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href="#build" 
                className="font-medium text-gray-900 hover:text-blue-600 transition-colors"
              >
                BUILD YOUR BOAT
              </a>
              <a 
                href="#company" 
                className="font-medium text-gray-900 hover:text-blue-600 transition-colors"
              >
                COMPANY
              </a>
              <a 
                href="#service" 
                className="font-medium text-gray-900 hover:text-blue-600 transition-colors"
              >
                SERVICE & WARRANTY
              </a>
              <Link 
                to="/contact" 
                className="font-medium text-gray-900 hover:text-blue-600 transition-colors"
              >
                CONTACT & LOCATION
              </Link>
              <a 
                href="https://www.instagram.com/almohallab_marine/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center"
              >
                <img 
                  src="/assets/images/instagram.png" 
                  alt="Instagram" 
                  className="h-6 w-6 hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};