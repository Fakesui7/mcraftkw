import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { boats } from '../../data/boats';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-50 lg:hidden
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      {/* Menu Panel */}
      <div
        className={`fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl transition-transform duration-300 transform
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <Link to="/" onClick={onClose}>
            <img 
              src="/assets/images/logo.png" 
              alt="MCraft Logo" 
              className="h-16 w-auto"
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="py-4 px-4 space-y-1 overflow-y-auto max-h-[calc(100vh-5rem)]">
          {/* Boat Models Section */}
          <div className="mb-6">
            <div className="text-sm font-medium text-gray-500 mb-2 px-3">
              BOAT MODELS
            </div>
            <div className="space-y-1">
              {boats.map((boat) => (
                <Link
                  key={boat.id}
                  to={`/boat-details/${boat.id}`}
                  className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-lg"
                  onClick={onClose}
                >
                  {boat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Other Menu Items */}
          <Link
            to="#build"
            className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-lg"
            onClick={onClose}
          >
            BUILD YOUR BOAT
          </Link>
          <Link
            to="#company"
            className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-lg"
            onClick={onClose}
          >
            COMPANY
          </Link>
          <Link
            to="#service"
            className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-lg"
            onClick={onClose}
          >
            SERVICE & WARRANTY
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-lg"
            onClick={onClose}
          >
            CONTACT & LOCATION
          </Link>

          {/* Social Links */}
          <div className="mt-6 px-3 pt-6 border-t">
            <a
              href="https://www.instagram.com/almohallab_marine/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-700 hover:text-gray-900"
              onClick={onClose}
            >
              <img
                src="/assets/images/instagram.png"
                alt="Instagram"
                className="h-6 w-6"
              />
              <span>Follow us on Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};