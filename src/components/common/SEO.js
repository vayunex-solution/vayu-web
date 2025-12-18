import React from 'react';
import { Helmet } from 'react-helmet';

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
  const siteUrl = 'https://vayunexsolution.com';
  const defaultImage = `${siteUrl}/og-image.png`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : siteUrl;
  const canonical = canonicalUrl || currentUrl;

  // Organization Schema
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
      "telephone": "+91-9518051255",
      "contactType": "customer service",
      "email": "info@vayunexsolution.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/vayunexsolution",
      "https://www.instagram.com/vayunexsolution",
      "https://www.linkedin.com/company/vayunexsolution",
      "https://twitter.com/vayunexsolution"
    ]
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonical,
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "name": siteName,
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    }
  };

  // FAQ Schema for AEO/GEO
  const faqSchema = faqData ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": canonical
      }
    ]
  };

  return (
    <Helmet>
      {/* --- Primary Meta Tags --- */}
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`Vayunex, Vayunex Solution, ${keywords}`} />
      <meta name="author" content="Vayunex Solution" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonical} />

      {/* --- Language and Region --- */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-PB" />
      <meta name="geo.placename" content="Mohali, Punjab" />
      <meta name="geo.position" content="30.7046;76.7179" />
      <meta name="ICBM" content="30.7046, 76.7179" />

      {/* --- Open Graph Tags (Facebook, LinkedIn) --- */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* --- Twitter Card Tags --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vayunexsolution" />
      <meta name="twitter:creator" content="@vayunexsolution" />
      <meta name="twitter:title" content={`${title} | ${siteName}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl || defaultImage} />

      {/* --- Structured Data (JSON-LD) for SEO/AEO/GEO --- */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
