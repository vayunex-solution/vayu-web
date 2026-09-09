/**
 * Central Product Source of Truth — Vayunex Solution
 *
 * This file serves as the canonical, authoritative data model for all
 * products across the website (Homepage Ecosystem, Products Page,
 * Navigation, Footer, Popups, and Structured Data).
 */

export const PRODUCT_STATUS = {
  LIVE: {
    key: 'LIVE',
    label: 'LIVE',
    type: 'live',
    pulse: true,
    dotColor: '#10B981'
  },
  BETA_AVAILABLE: {
    key: 'BETA_AVAILABLE',
    label: 'BETA AVAILABLE',
    type: 'beta',
    pulse: true,
    dotColor: '#06B6D4'
  },
  PUBLIC_BETA: {
    key: 'PUBLIC_BETA',
    label: 'PUBLIC BETA',
    type: 'beta',
    pulse: true,
    dotColor: '#10B981'
  },
  PRIVATE_BETA: {
    key: 'PRIVATE_BETA',
    label: 'PRIVATE BETA',
    type: 'private-beta',
    pulse: false,
    dotColor: '#F59E0B'
  },
  COMING_SOON: {
    key: 'COMING_SOON',
    label: 'COMING SOON',
    type: 'soon',
    pulse: false,
    dotColor: '#9CA3AF'
  }
};

export const PRODUCTS_DATA = [
  {
    id: 'socialnex',
    name: 'SocialNex',
    slug: 'socialnex',
    category: 'AI Social Media Operations',
    status: 'BETA_AVAILABLE',
    statusLabel: 'BETA AVAILABLE',
    statusType: 'beta',
    tagline: 'AI-powered social media command center',
    valueProposition: 'Centralize social media scheduling, AI content drafting, and multi-channel performance from one unified command dashboard.',
    problem: 'Marketing teams waste hours manually drafting posts, designing graphics, and switching between multiple social platforms.',
    solution: 'A centralized dashboard that leverages AI to generate captions and imagery, while automating cross-platform scheduling.',
    outcome: 'Scale content output efficiently without expanding team size, and maintain a consistent, data-driven brand presence.',
    targetAudience: 'Marketing agencies, brand managers, and growth teams.',
    bestFor: ['Marketing Agencies', 'Brand Managers', 'Content Creators', 'Growth Teams'],
    capabilities: [
      'Multi-Channel Scheduling',
      'AI Content Co-Pilot',
      'Unified Social Inbox',
      'Cross-Platform Analytics'
    ],
    officialUrl: 'https://socialnex.vayunexsolution.com/',
    internalRoute: '/products/socialnex',
    primaryCTA: {
      label: 'Access Beta',
      url: 'https://socialnex.vayunexsolution.com/',
      external: true
    },
    secondaryCTA: {
      label: 'Overview',
      url: '/products/socialnex',
      external: false
    },
    accentA: '#8B5CF6',
    accentB: '#EC4899',
    color: '#8B5CF6',
    logoUrl: '/images/socialnex-logo.webp',
    heroImageUrl: '/images/socialnex-hero.webp',
    schemaType: 'SoftwareApplication'
  },
  {
    id: 'schooldost',
    name: 'SchoolDost',
    slug: 'schooldost',
    category: 'Verified Educational Network',
    status: 'LIVE',
    statusLabel: 'LIVE',
    statusType: 'live',
    tagline: 'India’s verified campus & student network',
    valueProposition: 'A trusted academic community connecting verified students, educators, and alumni through verified academic identity and campus collaboration.',
    problem: 'College students and academic communities struggle with noisy, unverified social apps and fragmented campus communication channels.',
    solution: 'A strictly verified educational network built around academic identity, verified student communities, and peer collaboration.',
    outcome: 'Connect with genuine college peers, discover academic micro-communities, and navigate student life safely.',
    targetAudience: 'College students, university clubs, educators, and alumni.',
    bestFor: ['Verified College Students', 'Campus Clubs', 'Alumni Networks', 'Academic Mentors'],
    capabilities: [
      'Strict Academic ID Verification',
      'Campus Micro-Communities',
      'Peer Academic Discovery',
      'Encrypted Peer Collaboration'
    ],
    officialUrl: 'https://schooldost.com/',
    internalRoute: '/products/schooldost',
    primaryCTA: {
      label: 'Explore SchoolDost',
      url: 'https://schooldost.com/',
      external: true
    },
    secondaryCTA: {
      label: 'Overview',
      url: '/products/schooldost',
      external: false
    },
    accentA: '#06B6D4',
    accentB: '#3B82F6',
    color: '#06B6D4',
    logoUrl: '/images/schooldost-logo.webp',
    heroImageUrl: '/images/schooldost-hero.webp',
    schemaType: 'WebApplication'
  },
  {
    id: 'paynex',
    name: 'PayNex',
    slug: 'paynex',
    category: 'Financial Infrastructure',
    status: 'PUBLIC_BETA',
    statusLabel: 'PUBLIC BETA',
    statusType: 'beta',
    tagline: 'Intelligent payment & billing infrastructure',
    valueProposition: 'Automate multi-mode invoicing, instant UPI payment links, and GST compliance reporting for scaling Indian enterprises.',
    problem: 'Modern businesses face slow settlements, manual calculation errors, and complex reconciliation processes across payment channels.',
    solution: 'An intelligent payment and billing system with automated multi-mode invoicing, instant UPI payment links, and real-time cash flow visibility.',
    outcome: 'Accelerate payment collection, eliminate manual tax reconciliation errors, and get real-time visibility into revenue streams.',
    targetAudience: 'SaaS platforms, e-commerce businesses, retailers, and growing digital operations.',
    bestFor: ['SaaS Companies', 'Retail Businesses', 'Service Agencies', 'High-Volume Merchants'],
    capabilities: [
      'Automated GST Invoicing',
      'Dynamic UPI Payment Links',
      'CA-Ready Tax Return Exports',
      'Real-Time Cash Flow Telemetry'
    ],
    officialUrl: 'https://paynex.vayunexsolution.com/',
    internalRoute: '/products/paynex',
    primaryCTA: {
      label: 'Launch PayNex',
      url: 'https://paynex.vayunexsolution.com/',
      external: true
    },
    secondaryCTA: {
      label: 'Overview',
      url: '/products/paynex',
      external: false
    },
    accentA: '#14B8A6',
    accentB: '#10B981',
    color: '#10B981',
    logoUrl: '/images/paynex-logo.webp',
    heroImageUrl: '/images/paynex-hero.webp',
    schemaType: 'SoftwareApplication'
  },
  {
    id: 'jwelnex',
    name: 'Jwelnex ERP',
    slug: 'jwelnex',
    category: 'Jewellery Business Operations',
    status: 'LIVE',
    statusLabel: 'LIVE',
    statusType: 'live',
    tagline: 'End-to-end jewellery business management',
    valueProposition: 'Unified operating system integrating precision RFID tray tagging, live bullion rate syncing, and GST-compliant invoicing.',
    problem: 'Jewellery retailers struggle with fragmented systems for stock, billing, and accounting, leading to inventory shrinkage and compliance risks.',
    solution: 'A unified, full-stack ERP system that integrates barcode/RFID tracking, GST-compliant invoicing, and Karigar manufacturing ledgers.',
    outcome: 'Eliminate reconciliation errors, track inventory with precision, and dramatically speed up retail counter checkouts.',
    targetAudience: 'Small to large jewellery retail businesses, multi-branch chains, and gold traders.',
    bestFor: ['Jewellery Showrooms', 'Multi-Branch Retailers', 'Wholesalers', 'Bullion Traders'],
    capabilities: [
      'Precision RFID & Barcode Tagging',
      'Live MCX Bullion Rate Sync',
      'GST & e-Way Bill Automation',
      'Karigar Manufacturing Ledger'
    ],
    officialUrl: null,
    internalRoute: '/products/jwelnex',
    primaryCTA: {
      label: 'Explore Jwelnex',
      url: '/products/jwelnex',
      external: false
    },
    secondaryCTA: {
      label: 'Request Demo',
      action: 'demo'
    },
    accentA: '#F59E0B',
    accentB: '#EA580C',
    color: '#F59E0B',
    logoUrl: null,
    heroImageUrl: '/images/jwelnex-hero.webp',
    schemaType: 'SoftwareApplication'
  },
  {
    id: 'inventorynex',
    name: 'InventoryNex',
    slug: 'inventorynex',
    category: 'Warehouse & Inventory Intelligence',
    status: 'COMING_SOON',
    statusLabel: 'COMING SOON',
    statusType: 'soon',
    tagline: 'Real-time multi-warehouse inventory telemetry',
    valueProposition: 'Optimize stock levels and warehouse movement with automated reorder alerts, batch/expiry controls, and high-speed barcode receiving.',
    problem: 'Supply chain businesses lose capital due to stockouts, overstocking, and poor visibility across multiple warehouse locations.',
    solution: 'An intelligent multi-warehouse management system with automated reorder thresholds and real-time inventory tracking.',
    outcome: 'Optimize stock levels, reduce carrying costs, and prevent stockouts across all fulfillment centers.',
    targetAudience: 'Wholesale distributors, manufacturing units, and retail chains.',
    bestFor: ['Wholesale Distributors', 'Manufacturing Units', 'Retail Chains', 'Logistics Hubs'],
    capabilities: [
      'Multi-Warehouse Mesh Control',
      'Batch & Expiry Lifecycle',
      'High-Speed Barcode Receiving',
      'Automated Purchase Orders'
    ],
    officialUrl: null,
    internalRoute: '/products/inventorynex',
    primaryCTA: {
      label: 'Request Early Access',
      action: 'early-access'
    },
    secondaryCTA: {
      label: 'Overview',
      url: '/products/inventorynex',
      external: false
    },
    accentA: '#F97316',
    accentB: '#EF4444',
    color: '#F97316',
    logoUrl: null,
    heroImageUrl: '/images/inventorynex-hero.webp',
    schemaType: 'SoftwareApplication'
  }
];

export const getProductById = (id) => PRODUCTS_DATA.find(p => p.id === id);
export const getProductBySlug = (slug) => PRODUCTS_DATA.find(p => p.slug === slug);
export const getAllProducts = () => PRODUCTS_DATA;
export const getProductStatus = (id) => {
  const p = getProductById(id);
  return p ? PRODUCT_STATUS[p.status] || PRODUCT_STATUS.COMING_SOON : PRODUCT_STATUS.COMING_SOON;
};
