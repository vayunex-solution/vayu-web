import React from 'react';
import JwelnexPage from '../../../pages-source/products/JwelnexPage';

export const metadata = {
  title: 'Jwelnex ERP | Jewellery Business Operating System | Vayunex Solution',
  description: 'Jwelnex is an all-in-one ERP software designed specifically for the jewelry industry: RFID inventory, bullion rate sync, GST billing, and CRM.',
  alternates: {
    canonical: 'https://www.vayunexsolution.com/products/jwelnex/'
  },
  openGraph: {
    title: 'Jwelnex ERP | Jewellery Operating System',
    description: 'End-to-end jewellery ERP for independent showrooms and multi-branch chains.',
    url: 'https://www.vayunexsolution.com/products/jwelnex/'
  }
};

export default function Page() {
  return <JwelnexPage />;
}
