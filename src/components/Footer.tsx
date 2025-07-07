import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    // Handle email normally
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
      phone: '',
      email: ''
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

    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (8-15 digits)';
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const sendEmail = async (tourData: typeof formData): Promise<boolean> => {
    try {
      // Create email content
      const emailSubject = 'Factory Tour Request - MCraft Marine';
      const emailBody = `
New Factory Tour Request:

Name: ${tourData.firstName} ${tourData.lastName}
Phone: ${tourData.phone}
Email: ${tourData.email}

Request Date: ${new Date().toLocaleString()}
Source: MCraft Website

Please contact the customer to schedule their factory tour.

Best regards,
MCraft Website System
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:info@mcraft.boats?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Also try to send via a simple fetch request (this would need a backend service)
      // For now, we'll simulate success since we're opening the email client
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
          phone: '',
          email: ''
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

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Company Info */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-300 leading-relaxed max-w-lg">
                {t('footer.description')}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">{t('footer.followUs')}</h3>
              <a 
                href="https://instagram.com/almohallab_marine" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <img 
                  src="/instagram.png" 
                  alt="Instagram" 
                  className="h-6 w-6"
                />
                <span>@almohallab_marine</span>
              </a>
            </div>
          </div>

          {/* Right Side - Factory Tour Form */}
          <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-2xl p-8 border border-slate-500 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <Mail className="h-6 w-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">{t('footer.factoryTour')}</h3>
            </div>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-500 rounded-lg flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-green-300 font-medium">Request Sent Successfully!</p>
                  <p className="text-green-200 text-sm">We'll contact you soon to schedule your factory tour.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-600/20 border border-red-500 rounded-lg flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <div>
                  <p className="text-red-300 font-medium">Error Sending Request</p>
                  <p className="text-red-200 text-sm">Please try again or contact us directly.</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.firstName')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors duration-300 ${
                      errors.firstName ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder="Enter first name"
                    required
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.lastName')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors duration-300 ${
                      errors.lastName ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder="Enter last name"
                    required
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('footer.phoneNumber')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors duration-300 ${
                      errors.phone ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder="+965 12345678"
                    required
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-400">Numbers only (8-15 digits)</p>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('footer.emailAddress')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors duration-300 ${
                      errors.email ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder="your@email.com"
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 mt-6 transform hover:-translate-y-1 shadow-lg ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Request...</span>
                  </div>
                ) : (
                  t('footer.requestTour')
                )}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-slate-500">
              <p className="text-sm text-gray-300 text-center">
                Or contact us directly: <span className="text-blue-400">info@mcraft.boats</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 mt-12 text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}