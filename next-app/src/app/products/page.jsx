import React from 'react';
import ProductsPage from '../../pages-source/ProductsPage';

export const metadata = {
  title: 'Enterprise Product Ecosystem & SaaS Platforms | Vayunex Solution',
  description: 'Explore Vayunex Solution enterprise software ecosystem: SocialNex, SchoolDost, PayNex, Jwelnex ERP, and InventoryNex.',
  alternates: {
    canonical: 'https://www.vayunexsolution.com/products/'
  },
  openGraph: {
    title: 'Enterprise Product Ecosystem | Vayunex Solution',
    description: 'Explore Vayunex Solution enterprise software ecosystem.',
    url: 'https://www.vayunexsolution.com/products/',
    images: [
      {
        url: 'https://www.vayunexsolution.com/assets/vayunex-brand-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Vayunex Solution Enterprise Product Ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Product Ecosystem | Vayunex Solution',
    description: 'Explore Vayunex Solution enterprise software ecosystem.',
    images: ['https://www.vayunexsolution.com/assets/vayunex-brand-banner.jpg'],
  },
};

export default function Page() {
  return <ProductsPage />;
}
