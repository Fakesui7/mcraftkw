import { BoatDetails } from '../types/boats';

export const boatDetails: Record<string, BoatDetails> = {
  mc_12: {
    id: 'mc_12',
    name: 'MC-12',
    type: 'Center Console',
    image: '/assets/images/mc_12.jpg',
    description: 'The MC-12 is our compact yet capable vessel, perfect for day trips and casual fishing.',
    specs: {
      length: '12 FT',
      beam: '3.5 FT',
      weight: '145 KG',
      capacity: '4 Persons',
      engines: 'Single 40HP',
      fuelTank: '25 L'
    },
    features: [
      'Navigation & anchor light',
      'Four cleats SS',
      'Tow SS handles',
      'Copper hook',
      'Black defender',
      'Aluminum engine bracket',
      'SS drain plug'
    ],
    gallery: ['/assets/images/mc_12.jpg']
  },
  mc_17: {
    id: 'mc_17',
    name: 'MC-17',
    type: 'Center Console',
    image: '/assets/images/mc_17.jpg',
    description: 'The MC-17 combines comfort with performance, ideal for family outings and fishing adventures.',
    specs: {
      length: '17 FT',
      beam: '5.8 FT',
      weight: '645 KG',
      capacity: '6 Persons',
      engines: 'Single 90HP',
      fuelTank: '95 L',
      waterTank: '40 L'
    },
    features: [
      'Driver seat',
      'Four storages',
      'Black defender',
      'Navigation & anchor light',
      'Four cleats SS',
      'Tow SS handles',
      'Copper hook',
      'Aluminum engine bracket',
      'SS drain plug'
    ],
    gallery: ['/assets/images/mc_17.jpg']
  },
  mc_23: {
    id: 'mc_23',
    name: 'MC-23',
    type: 'Center Console',
    image: '/assets/images/mc_23.jpg',
    description: 'Available in two configurations, the MC-23 offers versatility for different boating needs.',
    specs: {
      length: '23 FT',
      beam: '5.5 FT',
      weight: '650 KG',
      capacity: '8 Persons',
      engines: 'Single 200HP',
      fuelTank: '135 - 180 L'
    },
    features: [
      'Console with wind screen',
      'Navigation & anchor light',
      'Four cleats SS',
      'Tow SS handles',
      'Copper hook',
      'Black defender',
      'Aluminum engine bracket',
      'SS drain plug'
    ],
    gallery: ['/assets/images/mc_23.jpg']
  },
  mc_25: {
    id: 'mc_25',
    name: 'MC-25',
    type: 'Center Console',
    image: '/assets/images/mc_25.jpg',
    description: 'The MC-25 delivers exceptional performance with premium amenities for extended trips.',
    specs: {
      length: '25 FT',
      beam: '7.5 FT',
      weight: '1250 KG',
      capacity: '10 Persons',
      engines: 'Twin 150HP',
      fuelTank: '350 L',
      waterTank: '90 L'
    },
    features: [
      'Driver seat',
      'One icebox',
      'Five storages',
      'Navigation & anchor light',
      'Four cleats SS',
      'Tow SS handles',
      'Copper hook',
      'Aluminum engine bracket',
      'Black defender',
      'SS drain plug'
    ],
    gallery: ['/assets/images/mc_25.jpg']
  },
  mc_28: {
    id: 'mc_28',
    name: 'MC-28',
    type: 'Center Console',
    image: '/assets/images/mc_28.jpg',
    description: 'The MC-28 offers luxurious amenities and powerful performance for serious boating enthusiasts.',
    specs: {
      length: '28 FT',
      beam: '8.5 FT',
      weight: '1650 KG',
      capacity: '12 Persons',
      engines: 'Twin 200HP',
      fuelTank: '620 L',
      waterTank: '180 L'
    },
    features: [
      'Marine toilet',
      'Driver seat',
      'One icebox',
      'Five storages',
      'Navigation & anchor light',
      'Four cleats SS',
      'Aluminum engine bracket',
      'SS drain plug',
      'Copper hook',
      'Black defender',
      'Tow SS handles'
    ],
    gallery: ['/assets/images/mc_28.jpg']
  },
  mc_32: {
    id: 'mc_32',
    name: 'MC-32',
    type: 'Center Console',
    image: '/assets/images/mc_32.jpg',
    description: 'The MC-32 is a premium vessel offering exceptional comfort and performance for extended cruising.',
    specs: {
      length: '32 FT',
      beam: '8.5 FT',
      weight: '1800 KG',
      capacity: '14 Persons',
      engines: 'Twin 300HP',
      fuelTank: '620 L',
      waterTank: '180 L',
      depth: '5 FT',
      maxHp: '600 HP'
    },
    features: [
      'Console with wind screen',
      'Marine toilet',
      'Two iceboxes',
      'Driver seat & companion seat',
      'Fresh water tank with shower',
      'Black defender',
      'Anchor compartment & stern storage under seat',
      'SS Cleats',
      'Deck drain',
      'Bilge pump'
    ],
    gallery: ['/assets/images/mc_32.jpg']
  },
  mc_36: {
    id: 'mc_36',
    name: 'MC-36',
    type: 'Center Console',
    image: '/assets/images/mc_36.jpg',
    description: 'The MC-36 represents the pinnacle of luxury and performance in our mid-range lineup.',
    specs: {
      length: '36 FT',
      beam: '9 FT',
      weight: '2700 KG',
      capacity: '16 Persons',
      engines: 'Triple 300HP'
    },
    features: [
      'Marine toilet',
      'Driver seat',
      'One icebox',
      'Five storages',
      'Navigation & anchor light',
      'Four cleats SS',
      'Aluminum engine bracket',
      'SS drain plug',
      'Copper hook',
      'Black defender',
      'Tow SS handles'
    ],
    gallery: ['/assets/images/mc_36.jpg']
  },
  mc_40: {
    id: 'mc_40',
    name: 'MC-40',
    type: 'Center Console',
    image: '/assets/images/mc_40.jpg',
    description: 'Our flagship MC-40 delivers unmatched luxury, space, and performance for the most discerning boaters.',
    specs: {
      length: '40 FT',
      beam: '9.5 FT',
      weight: '2600 KG',
      capacity: '18 Persons',
      engines: 'Triple 425HP',
      fuelTank: '1100 L',
      waterTank: '180 L',
      depth: '5 FT',
      maxHp: '1000 HP'
    },
    features: [
      'Console with wind screen',
      'Marine toilet',
      'Driver seat & companion seat',
      'Fresh water tank with shower',
      'Black defender',
      'Anchor compartment & stern storage under seat',
      'SS Cleats',
      'Deck drain',
      'Bilge pump'
    ],
    gallery: ['/assets/images/mc_40.jpg']
  }
};