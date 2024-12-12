import React from 'react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactInfo } from '../components/contact/ContactInfo';
import { ContactMap } from '../components/contact/ContactMap';
import { ContactForm } from '../components/contact/ContactForm';

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#444444] pt-20">
      <ContactHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Info Boxes */}
        <ContactInfo />
        
        {/* Visit Our Showroom Box */}
        <div className="mb-16">
          <ContactMap />
        </div>
        
        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
};