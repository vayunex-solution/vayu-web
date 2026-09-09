import React from 'react';

export default function ProductSchema({ product }) {
  if (!product) return null;

  const siteUrl = 'https://www.vayunexsolution.com';
  const pageUrl = `${siteUrl}${product.internalRoute.endsWith('/') ? product.internalRoute : product.internalRoute + '/'}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${pageUrl}#software`,
    name: product.name,
    headline: product.tagline,
    description: product.valueProposition || product.tagline,
    applicationCategory: product.category,
    operatingSystem: 'Any (Web Browser)',
    url: pageUrl,
    creator: {
      '@type': 'Organization',
      name: 'Vayunex Solution',
      url: siteUrl,
      sameAs: [
        'https://www.linkedin.com/company/vayunex-solution/',
        'https://www.instagram.com/vayunexsolution?igsh=cW1qZ3llODhzcm52',
        'https://www.facebook.com/share/1B52ioXjqw/'
      ]
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vayunex Solution',
      url: siteUrl
    }
  };

  if (product.officialUrl) {
    schema.sameAs = product.officialUrl;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
