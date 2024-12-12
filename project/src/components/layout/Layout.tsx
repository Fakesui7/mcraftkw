import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#444444]">
      <Navbar />
      <main>{children}</main>
      
      {/* Decorative Footer Separator */}
      <div className="bg-[#181a1b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Wave Pattern */}
            <div className="absolute inset-x-0 -top-16">
              <svg
                className="w-full h-16 text-[#181a1b]"
                preserveAspectRatio="none"
                viewBox="0 0 1440 54"
                fill="currentColor"
              >
                <path d="M0 0L60 8C120 16 240 32 360 37.3C480 43 600 37 720 32.7C840 27 960 21 1080 24.3C1200 27 1320 37 1380 42.7L1440 48V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}