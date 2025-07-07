import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PageHero from './PageHero';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validation functions
  const validateName = (name: string): boolean => {
    const nameRegex = /^[a-zA-Z\u0600-\u06FF\s]+$/; // English and Arabic letters only
    return nameRegex.test(name.trim()) && name.trim().length >= 2;
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[0-9]{8,15}$/; // Numbers only, 8-15 digits, optional +
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Handle phone number - only allow numbers, +, spaces, hyphens, parentheses
    if (name === 'phone') {
      const cleanValue = value.replace(/[^0-9\+\s\-\(\)]/g, '');
      setFormData(prev => ({ ...prev, [name]: cleanValue }));
    }
    // Handle names - only allow letters and spaces
    else if (name === 'firstName' || name === 'lastName') {
      const cleanValue = value.replace(/[^a-zA-Z\u0600-\u06FF\s]/g, '');
      setFormData(prev => ({ ...prev, [name]: cleanValue }));
    }
    // Handle email and message normally - NO RESTRICTIONS ON MESSAGE
    else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    };

    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (!validateName(formData.firstName)) {
      newErrors.firstName = 'First name must contain only letters';
    }

    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (!validateName(formData.lastName)) {
      newErrors.lastName = 'Last name must contain only letters';
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (8-15 digits)';
    }

    // Validate message - ONLY CHECK IF NOT EMPTY, NO CHARACTER RESTRICTIONS
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const sendEmail = async (contactData: typeof formData): Promise<boolean> => {
    try {
      // Create email content
      const emailSubject = 'Contact Form Submission - MCraft Marine';
      const emailBody = `
New Contact Form Submission:

Name: ${contactData.firstName} ${contactData.lastName}
Email: ${contactData.email}
Phone: ${contactData.phone}

Message:
${contactData.message}

Submission Date: ${new Date().toLocaleString()}
Source: MCraft Website Contact Form

Please respond to the customer inquiry promptly.

Best regards,
MCraft Website System
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:info@mcraft.boats?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email
      const emailSent = await sendEmail(formData);
      
      if (emailSent) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const googleMapsUrl = "https://maps.app.goo.gl/nSjEABFB8aQHcU639";

  return (
    <>
      {/* Page Hero */}
      <PageHero 
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        imageSrc="/92184b6c-e852-4831-bae5-063104dcb76b.JPG"
      />
      
      <section id="contact" className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 min-h-screen relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone Card */}
            <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-xl p-6 text-center border border-slate-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('contact.phone')}</h3>
              <p className="text-gray-300 text-sm mb-2">{t('contact.mobile')}: +965 51333995</p>
              <p className="text-gray-300 text-sm">{t('contact.tel')}: +965 22250050</p>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-xl p-6 text-center border border-slate-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('contact.email')}</h3>
              <p className="text-gray-300 text-sm mb-2">info@mcraft.boats</p>
              <p className="text-blue-400 text-xs">{t('contact.emailResponse')}</p>
            </div>

            {/* Location Card */}
            <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-xl p-6 text-center border border-slate-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('contact.location')}</h3>
              <p className="text-gray-300 text-sm mb-2">253 Street 36</p>
              <p className="text-gray-300 text-sm">Kuwait</p>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-xl p-8 mb-12 text-center max-w-md mx-auto border border-slate-500">
            <h3 className="text-2xl font-bold text-white mb-2">{t('contact.visitShowroom')}</h3>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm hover:text-blue-300 transition-colors duration-300 cursor-pointer underline"
              >
                {t('contact.getDirections')}
              </a>
            </div>
            
            {/* Custom QR Code Image */}
            <div className="inline-block bg-white rounded-lg p-3 mb-6 shadow-lg">
              <img 
                src="/qrcode.png" 
                alt="QR Code for showroom location" 
                className="w-48 h-48 object-cover"
              />
            </div>
            
            <div className="text-gray-300">
              <div className="mb-2">
                <span className="text-orange-400 font-semibold">{t('contact.openingHours')}</span>
              </div>
              <p className="text-sm">{t('contact.hours')}</p>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-xl p-8 border border-slate-500">
            <div className="flex items-center space-x-3 mb-6">
              <Send className="h-6 w-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">{t('contact.sendMessage')}</h3>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-500 rounded-lg flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-green-300 font-medium">Message Sent Successfully!</p>
                  <p className="text-green-200 text-sm">We'll respond to your inquiry within 24 hours.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-600/20 border border-red-500 rounded-lg flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <div>
                  <p className="text-red-300 font-medium">Error Sending Message</p>
                  <p className="text-red-200 text-sm">Please try again or contact us directly at info@mcraft.boats</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.firstName')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors duration-300 ${
                      errors.firstName ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder="Enter first name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-400">Letters only</p>
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.lastName')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors duration-300 ${
                      errors.lastName ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder="Enter last name"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-400">Letters only</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('common.email')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors duration-300 ${
                      errors.email ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('common.phone')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors duration-300 ${
                      errors.phone ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder="+965 12345678"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-400">Numbers only (8-15 digits)</p>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.message')} <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors duration-300 resize-vertical ${
                    errors.message ? 'border-red-500' : 'border-slate-600'
                  }`}
                  placeholder={t('contact.requirements')}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
                <p className="mt-1 text-xs text-gray-400">
                  Write anything you want - letters, numbers, symbols, etc. ({formData.message.length} characters)
                </p>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:-translate-y-1 shadow-lg ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>{t('contact.sendBtn')}</span>
                  </>
                )}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-slate-500">
              <p className="text-sm text-gray-300 text-center">
                Or email us directly: <span className="text-blue-400">info@mcraft.boats</span>
              </p>
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
            <linearGradient id="dividerGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25"
            fill="url(#dividerGradient3)"
          />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5"
            fill="url(#dividerGradient3)"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="url(#dividerGradient3)"
          />
        </svg>
      </div>
    </>
  );
}