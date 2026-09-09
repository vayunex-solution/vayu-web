import React from 'react';
import InventoryNexPage from '../../../pages-source/products/InventoryNexPage';

export const metadata = {
  title: 'InventoryNex | Enterprise Multi-Location Inventory & Warehouse ERP | Vayunex Solution',
  description: 'InventoryNex provides automated stock replenishment, batch & expiry tracking, barcode warehouse receiving, and multi-channel inventory sync.',
  alternates: {
    canonical: 'https://www.vayunexsolution.com/products/inventorynex/'
  },
  openGraph: {
    title: 'InventoryNex | Enterprise Warehouse ERP',
    description: 'Next-Gen multi-warehouse stock replenishment, batch & expiry tracking, and barcode warehouse receiving.',
    url: 'https://www.vayunexsolution.com/products/inventorynex/'
  }
};

export default function Page() {
  return <InventoryNexPage />;
}
