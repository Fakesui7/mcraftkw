import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.models': 'BOAT MODELS',
    'nav.build': 'BUILD YOUR BOAT',
    'nav.company': 'COMPANY',
    'nav.service': 'SERVICE & WARRANTY',
    'nav.contact': 'CONTACT & LOCATION',
    
    // Hero
    'hero.welcome': 'Welcome to',
    'hero.description': 'Discover our premium collection of boats and yachts, crafted for those who demand excellence on the water. Experience luxury, performance, and unmatched quality.',
    'hero.explore': 'Explore Our Fleet',
    'hero.contact': 'Contact Us',
    
    // Vessels
    'vessels.title': 'Explore Our Premium Collection',
    'vessels.subtitle': 'Precision-crafted boats designed to elevate your on-water experience',
    'vessels.viewDetails': 'View Details',
    'vessels.viewAllModels': 'View All Models',
    'vessels.length': 'Length',
    'vessels.capacity': 'Capacity',
    'vessels.engines': 'Engines',
    
    // About
    'about.title': 'About MCraft',
    'about.subtitle': 'From Kuwaiti Excellence to Global Waters',
    'about.achievements': 'Our Achievements',
    'about.achievementsSubtitle': 'Three decades of excellence in marine vessel manufacturing',
    'about.yearsExperience': 'Years Experience',
    'about.yearsExperienceDesc': 'Decades of maritime excellence',
    'about.soldVessels': 'Sold Vessels',
    'about.soldVesselsDesc': 'Boats delivered worldwide',
    'about.countriesShipTo': 'Countries Ship To',
    'about.countriesShipToDesc': 'Global reach and presence',
    'about.yearsWarranty': 'Years of Warranty',
    'about.yearsWarrantyDesc': 'Comprehensive protection',
    'about.industryLeader': 'Industry Leader',
    'about.industryLeaderDesc': 'Premier boat manufacturer in Kuwait and the Gulf region',
    'about.expertTeam': 'Expert Team',
    'about.expertTeamDesc': 'Skilled craftsmen and marine engineers',
    'about.globalPresence': 'Global Presence',
    'about.globalPresenceDesc': 'Serving customers across multiple continents',
    'about.story': 'Our Story',
    'about.storyPara1': 'At MCraft, we understand your passion for the water—that\'s why we dedicate ourselves to engineering and building the finest marine vessels in Kuwait. Since 1995, our commitment to quality, performance, and value has been matched only by the loyalty of our customers.',
    'about.storyPara2': 'Headquartered in Kuwait, MCraft specializes in manufacturing fiberglass fishing and sport boats ranging from 9 to 40 feet, producing over 70 boats annually. Having established itself as the premier fishing boat manufacturer in Kuwait, MCraft proudly offers a complete range of engines, boats, services, and parts for recreational, commercial, and government marine sectors.',
    'about.storyPara3': 'Additionally, MCraft stands as a leading manufacturer for boats and yachts Dealer, complementing MCraft\'s mission to serve the marine community with excellence.',
    'about.values': 'Our Core Values',
    'about.valuesSubtitle': 'The principles that guide everything we do and ensure every client receives an exceptional maritime experience.',
    'about.craftsmanship': 'Craftsmanship',
    'about.craftsmanshipDesc': 'Commitment to precision engineering, superior materials, and attention to detail in every vessel we build.',
    'about.innovation': 'Innovation',
    'about.innovationDesc': 'Constantly advancing marine technology and design to deliver performance, safety, and comfort on the water.',
    'about.customerExperience': 'Customer Experience',
    'about.customerExperienceDesc': 'Putting our customers first with personalized service, quality assurance, and long-term support.',
    'about.integrity': 'Integrity',
    'about.integrityDesc': 'Building trust through transparency, ethical practices, and delivering on our promises—on time and to spec.',
    'about.certifications': 'Certifications & Standards',
    'about.certificationsSubtitle': 'Our commitment to quality is backed by industry-leading certifications and adherence to the highest maritime standards.',
    'about.certifiedExcellence': 'Certified Excellence Since 1995',
    'about.meetTheTeam': 'Meet The Team',
    
    // Models
    'models.title': 'Explore Our Premium Boat Models',
    'models.subtitle': 'Engineered for performance, crafted for elegance. Find the perfect boat for your adventures.',
    'models.ourModels': 'Our Models',
    'models.ourModelsSubtitle': 'Precision-crafted boats designed to elevate your on-water experience',
    'models.filterVessels': 'Filter Vessels',
    'models.searchVessels': 'Search vessels...',
    'models.allTypes': 'All Types',
    'models.fishingBoat': 'Fishing Boat',
    'models.sportBoat': 'Sport Boat',
    'models.centerConsole': 'Center Console',
    'models.cabinCruiser': 'Cabin Cruiser',
    'models.sportCruiser': 'Sport Cruiser',
    'models.expressCruiser': 'Express Cruiser',
    'models.sportYacht': 'Sport Yacht',
    'models.luxuryYacht': 'Luxury Yacht',
    'models.allCapacities': 'All Capacities',
    'models.capacity1to6': '1-6 guests',
    'models.capacity7to12': '7-12 guests',
    'models.capacity13to20': '13-20 guests',
    'models.capacity20plus': '20+ guests',
    'models.allPrices': 'All Prices',
    'models.under50k': 'Under $50K',
    'models.50kto100k': '$50K - $100K',
    'models.100kto200k': '$100K - $200K',
    'models.over200k': 'Over $200K',
    'models.showing': 'Showing',
    'models.of': 'of',
    'models.vessels': 'vessels',
    'models.clearFilters': 'Clear Filters',
    'models.noVessels': 'No vessels match your current filters.',
    'models.maxSpeed': 'Max Speed',
    
    // Boat Details
    'boatDetails.backToModels': 'Back to Models',
    'boatDetails.boatNotFound': 'Boat Not Found',
    'boatDetails.gallery': 'Gallery',
    'boatDetails.technicalSpecs': 'Technical Specifications',
    'boatDetails.standardFeatures': 'Standard Features',
    'boatDetails.length': 'Length',
    'boatDetails.beam': 'Beam',
    'boatDetails.weight': 'Weight',
    'boatDetails.capacity': 'Capacity',
    'boatDetails.fuelTank': 'Fuel Tank',
    'boatDetails.waterTank': 'Water Tank',
    'boatDetails.engines': 'Engines',
    
    // Contact
    'contact.title': 'Contact & Location',
    'contact.subtitle': 'Get in touch with our team to learn more about our premium marine vessels and schedule a visit to our showroom',
    'contact.phone': 'Phone',
    'contact.mobile': 'Mobile',
    'contact.tel': 'Tel',
    'contact.email': 'Email',
    'contact.emailResponse': 'We\'ll respond within 24 hours',
    'contact.location': 'Location',
    'contact.visitShowroom': 'Visit Our Showroom',
    'contact.getDirections': 'Get Directions',
    'contact.openingHours': 'Opening Hours:',
    'contact.hours': 'Sunday - Thursday, 9:00 AM - 5:00 PM',
    'contact.sendMessage': 'Send us a Message',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.message': 'Message',
    'contact.sendBtn': 'Send Message',
    'contact.requirements': 'Tell us about your requirements...',
    
    // Footer
    'footer.description': 'Crafting exceptional marine vessels since 1995. Our commitment to quality and innovation drives us to create the finest boats for our discerning customers.',
    'footer.followUs': 'Follow Us',
    'footer.factoryTour': 'Schedule a Factory Tour',
    'footer.requestTour': 'Request Tour',
    'footer.copyright': '© 2025 MCraft Marine Vessels. All rights reserved.',
    'footer.phoneNumber': 'Phone Number',
    'footer.emailAddress': 'Email Address',
    
    // Build Your Boat
    'build.title': 'Build Your Dream Boat',
    'build.subtitle': 'Create a custom vessel tailored to your exact specifications and desires. Our expert team will guide you through every step of the design and build process.',
    'build.boatType': 'Boat Type',
    'build.chooseBoatType': 'Choose Your Boat Type',
    'build.luxuryYacht': 'Luxury Yacht',
    'build.luxuryYachtDesc': 'Ultimate comfort and elegance',
    'build.sportYacht': 'Sport Yacht',
    'build.sportYachtDesc': 'Performance meets luxury',
    'build.motorYacht': 'Motor Yacht',
    'build.motorYachtDesc': 'Power and sophistication',
    'build.catamaran': 'Catamaran',
    'build.catamaranDesc': 'Stability and space',
    'build.specifications': 'Specifications',
    'build.length': 'Length',
    'build.selectLength': 'Select length',
    'build.length40to60': '40-60 feet',
    'build.length60to80': '60-80 feet',
    'build.length80to120': '80-120 feet',
    'build.length120to150': '120-150 feet',
    'build.length150plus': '150+ feet',
    'build.guestCapacity': 'Guest Capacity',
    'build.selectCapacity': 'Select capacity',
    'build.capacity6to8': '6-8 guests',
    'build.capacity8to12': '8-12 guests',
    'build.capacity12to16': '12-16 guests',
    'build.capacity16to20': '16-20 guests',
    'build.capacity20plus': '20+ guests',
    'build.budgetRange': 'Budget Range',
    'build.selectBudget': 'Select budget',
    'build.budget1to5M': '$1M - $5M',
    'build.budget5to10M': '$5M - $10M',
    'build.budget10to20M': '$10M - $20M',
    'build.budget20Mplus': '$20M+',
    'build.timeline': 'Timeline',
    'build.selectTimeline': 'Select timeline',
    'build.timeline12to18': '12-18 months',
    'build.timeline18to24': '18-24 months',
    'build.timeline24to36': '24-36 months',
    'build.timeline36plus': '36+ months',
    'build.features': 'Features',
    'build.selectFeatures': 'Select Features',
    'build.contactInfo': 'Contact Information',
    'build.fullName': 'Full Name',
    'build.emailAddress': 'Email Address',
    'build.phoneNumber': 'Phone Number',
    'build.additionalRequirements': 'Additional Requirements',
    'build.additionalRequirementsPlaceholder': 'Tell us about any specific requirements, design preferences, or questions...',
    'build.previous': 'Previous',
    'build.nextStep': 'Next Step',
    'build.submitRequest': 'Submit Request',
    'build.configurationSummary': 'Your Configuration Summary',
    'build.notSelected': 'Not selected',
    'build.selected': 'selected',
    
    // Service & Warranty
    'service.title': 'Warranty Coverage',
    'service.subtitle': 'Comprehensive 3-year warranty protection designed to safeguard your investment and ensure your vessel remains in perfect condition.',
    'service.warrantyOverview': 'Warranty Overview',
    'service.warrantyOverviewDesc': 'MCraft provides comprehensive warranty coverage for all our marine vessels, ensuring your peace of mind and protecting your investment.',
    'service.yearsWarranty': 'Years Warranty Coverage',
    'service.yearsWarrantyDesc': 'Complete protection for hull, gas tank, and water tank systems',
    'service.hullWarranty': 'Hull Warranty',
    'service.hullWarrantyDesc': 'Complete structural protection for your vessel\'s hull and deck systems.',
    'service.gasTankWarranty': 'Gas Tank Warranty',
    'service.gasTankWarrantyDesc': 'Full coverage for fuel tank integrity and fuel system components.',
    'service.waterTankWarranty': 'Water Tank Warranty',
    'service.waterTankWarrantyDesc': 'Comprehensive protection for fresh water tank systems and plumbing.',
    'service.warrantyBenefits': 'Warranty Benefits',
    'service.warrantyBenefitsDesc': 'Our warranty program offers comprehensive protection and peace of mind for your marine investment.',
    'service.comprehensiveCoverage': 'Comprehensive Coverage',
    'service.comprehensiveCoverageDesc': 'Complete protection for all covered components and systems.',
    'service.quickResponse': 'Quick Response',
    'service.quickResponseDesc': '24-48 hour response time for warranty claims and support.',
    'service.qualityAssurance': 'Quality Assurance',
    'service.qualityAssuranceDesc': 'Guaranteed quality workmanship and genuine replacement parts.',
    'service.expertSupport': 'Expert Support',
    'service.expertSupportDesc': 'Dedicated warranty specialists and technical support team.',
    'service.warrantyProcess': 'Warranty Process',
    'service.warrantyProcessDesc': 'Simple and straightforward warranty claim process to get you back on the water quickly.',
    'service.step1Title': 'Contact Us',
    'service.step1Desc': 'Report your warranty issue via phone or email with your vessel details.',
    'service.step2Title': 'Assessment',
    'service.step2Desc': 'Our technical team will assess the issue and determine warranty coverage.',
    'service.step3Title': 'Resolution',
    'service.step3Desc': 'We\'ll repair or replace covered components using genuine MCraft parts.',
    'service.needWarrantySupport': 'Need Warranty Support?',
    'service.warrantyContactDesc': 'Our warranty support team is ready to assist you with any warranty claims or questions about your coverage.',
    'service.warrantyHotline': 'Warranty Hotline',
    'service.dedicatedWarrantyTeam': 'Dedicated Warranty Team',
    'service.contactWarranty': 'Contact Warranty Team',
    
    // Common
    'common.contactForPrice': 'Contact for Price',
    'common.persons': 'Persons',
    'common.required': '*',
    'common.email': 'Email',
    'common.phone': 'Phone',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language] = useState<'en'>('en');

  useEffect(() => {
    // Set document direction to LTR for English only
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en';
    
    // Remove Arabic-specific body class
    document.body.classList.remove('arabic-layout');
  }, []);

  // Simplified toggle function (no-op since we only have English)
  const toggleLanguage = () => {
    // No-op - only English is supported now
  };

  const t = (key: string): string => {
    return translations.en[key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}