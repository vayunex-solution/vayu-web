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
    url: 'https://www.vayunexsolution.com/products/'
  }
};

export default function Page() {
  return <ProductsPage />;
}
