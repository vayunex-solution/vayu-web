'use client';

import React, { useEffect } from 'react';

const SEO = ({
  title,
  description,
  keywords,
  imageUrl,
  type = 'website',
  canonicalUrl,
  structuredData,
  faqData
}) => {
  const siteName = 'Vayunex Solution';
  const siteUrl = 'https://www.vayunexsolution.com';
  const defaultImage = `${siteUrl}/assets/og-default.jpg`;
  
  let rawUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : siteUrl);
  rawUrl = rawUrl.replace(/^http:\/\//i, 'https://');
  if (rawUrl.startsWith('https://vayunexsolution.com')) {
    rawUrl = rawUrl.replace('https://vayunexsolution.com', 'https://www.vayunexsolution.com');
  }
  if (rawUrl.endsWith('/') && rawUrl !== 'https://www.vayunexsolution.com/') {
    rawUrl = rawUrl.slice(0, -1);
  }
  const canonical = rawUrl;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vayunex Solution",
    "alternateName": "Vayunex",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "Leading IT company in Chandigarh providing web development, AI solutions, recruitment, and digital marketing services.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mohali",
      "addressRegion": "Punjab",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8930733725",
      "contactType": "customer service",
      "email": "info@vayunexsolution.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/share/1B52ioXjqw/",
      "https://www.instagram.com/vayunexsolution?igsh=cW1qZ3llODhzcm52",
      "https://www.linkedin.com/company/vayunex-solution/",
      "https://twitter.com/vayunexsolution"
    ]
  };

  const finalStructuredData = structuredData || organizationSchema;

  useEffect(() => {
    if (title && typeof document !== 'undefined') {
      document.title = title.includes('Vayunex') ? title : `${title} | Vayunex Solution`;
    }
    if (description && typeof document !== 'undefined') {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }
  }, [title, description]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(finalStructuredData) }}
      />
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      )}
    </>
  );
};

export default SEO;
