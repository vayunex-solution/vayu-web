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

export default function Page({ params }) {
  return <CityTemplate city={params?.city} />;
}
