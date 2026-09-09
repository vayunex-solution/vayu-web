import React from 'react';
import CityTemplate from '../../../pages-source/programmatic/CityTemplate';

export function generateStaticParams() {
  return [
    { city: 'chandigarh' },
    { city: 'mohali' },
    { city: 'panchkula' },
    { city: 'delhi-ncr' },
    { city: 'gurugram' },
    { city: 'noida' },
    { city: 'bangalore' },
    { city: 'mumbai' }
  ];
}

export function generateMetadata({ params }) {
  const rawCity = params?.city || 'chandigarh';
  const formattedCity = rawCity
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const siteUrl = 'https://www.vayunexsolution.com';
  const pageUrl = `${siteUrl}/city/${rawCity}/`;

  return {
    title: `Top IT & Software Development Company in ${formattedCity} | Vayunex Solution`,
    description: `Leading IT, enterprise software development, AI automation, and custom SaaS engineering company serving businesses in ${formattedCity}. Partner with Vayunex Solution.`,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `Top IT & Software Company in ${formattedCity} | Vayunex Solution`,
      description: `Enterprise software development, AI solutions, and SaaS products in ${formattedCity}.`,
      url: pageUrl,
      type: 'website',
      siteName: 'Vayunex Solution',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Top IT & Software Company in ${formattedCity} | Vayunex Solution`,
      description: `Enterprise software, AI automation, and SaaS engineering for ${formattedCity} businesses.`,
    },
  };
}

export default function Page({ params }) {
  return <CityTemplate city={params?.city} />;
}
