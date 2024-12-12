import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Company Info & Social */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-400 max-w-md">
                Crafting exceptional marine vessels since 1970. Our commitment to quality and innovation drives us to create the finest boats for our discerning customers.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <a
                href="https://www.instagram.com/almohallab_marine/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <img 
                  src="/assets/images/instagram.png" 
                  alt="Instagram" 
                  className="h-6 w-6"
                />
                <span>@almohallab_marine</span>
              </a>
            </div>
          </div>

          {/* Right Column - Factory Tour Form */}
          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Schedule a Factory Tour</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-1">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full px-4 py-3 bg-black rounded-lg border border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-1">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full px-4 py-3 bg-black rounded-lg border border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-3 bg-black rounded-lg border border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 bg-black rounded-lg border border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Request Tour
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-zinc-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Al Mohalab Marine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};