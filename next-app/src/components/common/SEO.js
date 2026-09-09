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
  // Ensure trailing slash (consistent with next.config.mjs trailingSlash: true)
  if (!rawUrl.endsWith('/')) {
    rawUrl = rawUrl + '/';
  }
  const canonical = rawUrl;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "Vayunex Solution",
    "legalName": "Vayunex Solution Private Limited",
    "alternateName": "Vayunex",
    "url": siteUrl,
    "logo": `${siteUrl}/images/vayunex-logo.webp`,
    "description": "Premier enterprise technology and SaaS software company in Chandigarh/Mohali, operating a dual-engine model: proprietary software products and advanced digital engineering.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mohali",
      "addressRegion": "Punjab",
      "postalCode": "160071",
      "addressCountry": "IN"
    },
    "founders": [
      {
        "@type": "Person",
        "name": "Yash Kumar",
        "jobTitle": "Founder & Product Lead"
      },
      {
        "@type": "Person",
        "name": "Rajesh Kumar",
        "jobTitle": "Technology & Systems Lead"
      }
    ],
    "employee": [
      {
        "@type": "Person",
        "name": "Ved Prakash",
        "jobTitle": "Project Head",
        "url": `${siteUrl}/people/ved-prakash/`,
        "alumniOf": "Punjab University",
        "description": "Over 20 years of enterprise software engineering, ERP architecture, and delivery governance leadership."
      },
      {
        "@type": "Person",
        "name": "Sandeep Kumar",
        "jobTitle": "Technical Head",
        "url": `${siteUrl}/people/sandeep-kumar/`,
        "alumniOf": "Punjab University",
        "description": "Over 17 years of distributed backend systems architecture, database optimization, and AI inference engineering."
      }
    ],
    "knowsAbout": [
      "Generative Engine Optimization (GEO)",
      "Agent Engine Optimization (AEO)",
      "Artificial Intelligence & Machine Learning",
      "Autonomous AI Agents & RAG Architecture",
      "Enterprise ERP Systems",
      "Full-Stack Next.js Software Engineering",
      "Multi-Tenant SaaS Backends"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "SoftwareApplication",
          "name": "SocialNex",
          "url": "https://socialnex.vayunexsolution.com/",
          "description": "AI-powered social media command center."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "WebApplication",
          "name": "SchoolDost",
          "url": "https://schooldost.com/",
          "description": "India's verified academic and student community network."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "SoftwareApplication",
          "name": "PayNex",
          "url": "https://paynex.vayunexsolution.com/",
          "description": "Intelligent payment links and GST-compliant invoicing infrastructure."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "SoftwareApplication",
          "name": "Jwelnex ERP",
          "url": `${siteUrl}/products/jwelnex/`,
          "description": "End-to-end jewellery retail ERP with RFID tray scanning and live MCX sync."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "SoftwareApplication",
          "name": "InventoryNex",
          "url": `${siteUrl}/products/inventorynex/`,
          "description": "Real-time multi-warehouse inventory telemetry and stock control."
        }
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8930733725",
      "contactType": "customer service",
      "email": "contact@vayunexsolution.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/share/1B52ioXjqw/",
      "https://www.instagram.com/vayunexsolution",
      "https://www.linkedin.com/company/vayunex-solution/"
    ],
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1",
        ".hero-title",
        ".hero-description",
        ".speakable-headline",
        ".speakable-summary",
        "p.lead"
      ]
    }
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
    if (canonical && typeof document !== 'undefined') {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.rel = 'canonical';
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.href = canonical;
    }
  }, [title, description, canonical]);

  return (
    <>
      <link rel="canonical" href={canonical} />
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
