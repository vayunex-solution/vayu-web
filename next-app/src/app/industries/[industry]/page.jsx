import React from 'react';
import IndustryTemplate from '../../../pages-source/programmatic/IndustryTemplate';

export function generateStaticParams() {
  return [
    { industry: 'technology' },
    { industry: 'automobile' },
    { industry: 'jewellery' },
    { industry: 'education' },
    { industry: 'retail' },
    { industry: 'healthcare' },
    { industry: 'real-estate' },
    { industry: 'fintech' }
  ];
}

export default function Page({ params }) {
  return <IndustryTemplate industry={params?.industry} />;
}
