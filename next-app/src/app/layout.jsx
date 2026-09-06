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
    'SchoolDost LMS',
    'tech hiring Chandigarh',
    'SEO growth',
    'digital marketing Mohali'
  ],
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
      'url': 'https://www.vayunexsolution.com',
      'logo': 'https://www.vayunexsolution.com/images/vayunex-logo.webp',
      'founder': {
        '@type': 'Person',
        'name': 'Yash Kumar',
      },
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
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
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
