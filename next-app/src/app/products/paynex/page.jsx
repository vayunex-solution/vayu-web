import React from 'react';
import PayNexPage from '../../../pages-source/products/PayNexPage';

export const metadata = {
  title: 'PayNex | Smart GST Invoicing & Billing Infrastructure | Vayunex Solution',
  description: 'PayNex is an automated GST billing, invoicing, and payment reconciliation platform. Collect payments 3x faster with embedded payment links.',
  alternates: {
    canonical: 'https://www.vayunexsolution.com/products/paynex/'
  },
  openGraph: {
    title: 'PayNex | Business Financial Infrastructure',
    description: 'Streamline invoicing, payments, and GST compliance from one intelligent dashboard.',
    url: 'https://www.vayunexsolution.com/products/paynex/'
  }
};

export default function Page() {
  return <PayNexPage />;
}
