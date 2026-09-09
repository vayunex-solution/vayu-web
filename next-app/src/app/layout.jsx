import React from 'react';
import Script from 'next/script';
import ClientLayout from '../components/layout/ClientLayout';

import '../styles/variables.css';
import '../styles/main.css';
import '../styles/InnerPage.css';
import '../components/layout/Navbar/Navbar.css';
import '../components/layout/Footer/Footer.css';
import '../components/common/WhatsAppButton.css';
import '../components/common/BackToTop.css';
import '../components/common/ScrollProgress.css';
import '../components/common/CookieConsent.css';
import '../components/common/ProductsPopup.css';

export const metadata = {
  metadataBase: new URL('https://www.vayunexsolution.com'),
  title: {
    default: 'Vayunex Solution | Enterprise AI, Cloud & Software Engineering',
    template: '%s | Vayunex Solution',
  },
  description: 'Leading IT company in Chandigarh & Mohali delivering cutting-edge web development, AI & data science, SaaS products, tech recruitment, and digital marketing.',
  keywords: [
    'Vayunex Solution',
    'web development',
    'AI solutions',
    'enterprise software',
    'SaaS products',
    'Jwelnex ERP',
    'PayNex billing',
    'SocialNex',
    'SchoolDost student network',
    'tech hiring Chandigarh',
    'SEO growth',
    'digital marketing Mohali',
    'Generative Engine Optimization',
    'Agent Engine Optimization'
  ],
  other: {
    'ai-content': 'index, follow',
    'geo.region': 'IN-PB',
    'geo.placename': 'Mohali, Chandigarh Tricity',
    'geo.position': '30.7046;76.7179',
    'ICBM': '30.7046, 76.7179',
  },
  authors: [{ name: 'Vayunex Solution' }],
  creator: 'Vayunex Solution',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Vayunex Solution | Enterprise AI, Cloud & Software Engineering',
    description: 'Transform your business with intelligent software systems, enterprise SaaS products, and custom AI architecture.',
    url: 'https://www.vayunexsolution.com',
    siteName: 'Vayunex Solution',
    images: [
      {
        url: '/assets/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Vayunex Solution Enterprise Engineering',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vayunex Solution | Enterprise AI, Cloud & Software Engineering',
    description: 'Transform your business with intelligent software systems and enterprise SaaS products.',
    images: ['/assets/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.vayunexsolution.com/#organization',
      'name': 'Vayunex Solution',
      'legalName': 'Vayunex Solution Private Limited',
      'url': 'https://www.vayunexsolution.com',
      'logo': 'https://www.vayunexsolution.com/images/vayunex-logo.webp',
      'description': 'Premier enterprise technology and SaaS company headquartered in Chandigarh/Mohali, operating a dual-engine model: proprietary software products and advanced digital engineering.',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Mohali',
        'addressRegion': 'Punjab',
        'postalCode': '160071',
        'addressCountry': 'IN',
      },
      'founders': [
        {
          '@type': 'Person',
          'name': 'Yash Kumar',
          'jobTitle': 'Founder & Product Lead',
        },
        {
          '@type': 'Person',
          'name': 'Rajesh Kumar',
          'jobTitle': 'Technology & Systems Lead',
        },
      ],
      'employee': [
        {
          '@type': 'Person',
          'name': 'Ved Prakash',
          'jobTitle': 'Project Head',
          'url': 'https://www.vayunexsolution.com/people/ved-prakash/',
          'alumniOf': 'Punjab University',
          'description': 'Over 20 years of enterprise software engineering, ERP architecture, and delivery governance leadership.',
        },
        {
          '@type': 'Person',
          'name': 'Sandeep Kumar',
          'jobTitle': 'Technical Head',
          'url': 'https://www.vayunexsolution.com/people/sandeep-kumar/',
          'alumniOf': 'Punjab University',
          'description': 'Over 17 years of distributed backend systems architecture, database optimization, and AI inference engineering.',
        },
      ],
      'knowsAbout': [
        'Generative Engine Optimization (GEO)',
        'Agent Engine Optimization (AEO)',
        'Artificial Intelligence & Machine Learning',
        'Autonomous AI Agents & RAG Architecture',
        'Enterprise ERP Systems',
        'Full-Stack Next.js Software Engineering',
        'Multi-Tenant SaaS Backends',
      ],
      'makesOffer': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'SoftwareApplication',
            'name': 'SocialNex',
            'url': 'https://socialnex.vayunexsolution.com/',
            'applicationCategory': 'BusinessApplication',
            'description': 'AI-powered social media operations and command center.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'WebApplication',
            'name': 'SchoolDost',
            'url': 'https://schooldost.com/',
            'applicationCategory': 'EducationalApplication',
            'description': "India's verified academic and student community network.",
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'SoftwareApplication',
            'name': 'PayNex',
            'url': 'https://paynex.vayunexsolution.com/',
            'applicationCategory': 'FinanceApplication',
            'description': 'Intelligent payment links and GST-compliant invoicing infrastructure.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'SoftwareApplication',
            'name': 'Jwelnex ERP',
            'url': 'https://www.vayunexsolution.com/products/jwelnex/',
            'applicationCategory': 'BusinessApplication',
            'description': 'End-to-end jewellery retail ERP with RFID tray scanning and live MCX sync.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'SoftwareApplication',
            'name': 'InventoryNex',
            'url': 'https://www.vayunexsolution.com/products/inventorynex/',
            'applicationCategory': 'BusinessApplication',
            'description': 'Real-time multi-warehouse inventory telemetry and stock control.',
          },
        },
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91-8930733725',
        'contactType': 'customer service',
        'availableLanguage': ['English', 'Hindi'],
      },
      'sameAs': [
        'https://www.linkedin.com/company/vayunex-solution/',
        'https://www.instagram.com/vayunexsolution',
        'https://www.facebook.com/share/1B52ioXjqw/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.vayunexsolution.com/#website',
      'url': 'https://www.vayunexsolution.com',
      'name': 'Vayunex Solution',
      'publisher': {
        '@id': 'https://www.vayunexsolution.com/#organization',
      },
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://www.vayunexsolution.com/blog?search={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': [
          'h1',
          '.hero-title',
          '.hero-description',
          '.speakable-headline',
          '.speakable-summary',
          'p.lead',
        ],
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('vayunex-theme');
                  if (saved === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* Machine-Readable AI & LLM Discovery Links (AEO / GEO Standard) */}
        <link rel="alternate" type="text/markdown" href="https://www.vayunexsolution.com/llms.txt" title="LLM Context Summary" />
        <link rel="alternate" type="text/markdown" href="https://www.vayunexsolution.com/llms-full.txt" title="Full LLM Knowledge Graph" />
        <link rel="alternate" type="application/json" href="https://www.vayunexsolution.com/ai-facts.json" title="Machine-Readable AI Facts" />
        {/* Google Fonts — optimized weights only */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        
        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-T7WDSBNNRH"
        />
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T7WDSBNNRH', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
