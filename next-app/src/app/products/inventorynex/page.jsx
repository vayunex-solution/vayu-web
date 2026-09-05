'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../../components/common/SEO';
import Breadcrumbs from '../../../components/common/Breadcrumbs';
import LeadCaptureModal from '../../../components/common/LeadCaptureModal';
import ServiceTrustLayer from '../../../components/common/ServiceTrustLayer';
import FAQAccordion from '../../../components/common/FAQAccordion';
import '../../../styles/InnerPage.css';
import '../../../styles/ProductPage.css';

export default function InventoryNexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: '📦',
      title: 'Multi-Warehouse Mesh Control',
      desc: 'Real-time sync across central warehouses, regional hubs, and retail outlets with automated replenishment thresholds.'
    },
    {
      icon: '🏷️',
      title: 'Batch, Lot & Expiry Lifecycle',
      desc: 'First-in, First-out (FIFO) and FEFO automated dispatch logic. Prevents dead capital and unsellable expired inventory.'
    },
    {
      icon: '⚡',
      title: 'High-Speed Barcode & QR Receiving',
      desc: 'Scan goods-inbound pallets with mobile cameras or handheld zebra terminals. Zero manual data entry errors.'
    },
    {
      icon: '🔄',
      title: 'Automated Purchase Orders',
      desc: 'Calculates lead times and average sales velocity to trigger auto-drafted vendor POs before stockouts occur.'
    },
    {
      icon: '📊',
      title: 'Inventory Valuation & Audit Reports',
      desc: 'Weighted average and standard cost reporting compliant with international GAAP and GST tax filings.'
    },
    {
      icon: '🔌',
      title: 'E-Commerce & ERP Integrations',
      desc: 'Seamless two-way stock synchronization with Shopify, Amazon, WooCommerce, Tally, and custom ERPs.'
    }
  ];

  const faqs = [
    {
      question: 'What types of businesses is InventoryNex suited for?',
      answer: 'InventoryNex is optimized for retail distribution chains, FMCG wholesalers, pharma stockists, e-commerce brands, and manufacturing warehouses.'
    },
    {
      question: 'Does InventoryNex work on mobile phones and tablets?',
      answer: 'Yes! Warehouse workers and store staff can use our responsive mobile progressive web app to perform physical counts, inbound receipts, and dispatch scans using phone cameras.'
    },
    {
      question: 'When will InventoryNex be officially available for live deployment?',
      answer: 'InventoryNex is currently in private pilot testing with select enterprise partners. You can join the early access waitlist today for priority deployment and locked-in founder pricing.'
    }
  ];

  return (
    <div className="product-page inner-page">
      <SEO
        title="InventoryNex | Enterprise Multi-Location Inventory & Warehouse ERP"
        description="InventoryNex provides automated stock replenishment, batch & expiry tracking, barcode warehouse receiving, and multi-channel inventory sync."
        canonicalUrl="https://www.vayunexsolution.com/products/inventorynex"
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Products', to: '/products' },
            { label: 'InventoryNex', to: '/products/inventorynex' }
          ]}
        />

        <section style={{ textAlign: 'center', padding: '4rem 0 3rem' }}>
          <div className="badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(6, 182, 212, 0.15)', border: '1px solid rgba(6, 182, 212, 0.3)', borderRadius: '9999px', color: '#06B6D4', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <span>🔒 Private Beta • Early Access</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.25rem', color: '#F9FAFB' }}>
            Next-Gen Multi-Warehouse <span style={{ color: '#06B6D4' }}>Inventory Engine</span>
          </h1>
          <p style={{ maxWidth: '740px', margin: '0 auto 2.5rem', color: '#9CA3AF', fontSize: '1.15rem', lineHeight: 1.7 }}>
            Stop stockouts and dead capital. InventoryNex delivers predictive replenishment, barcode receiving, and real-time inventory ledgering across all your fulfillment centers.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn-primary" onClick={() => setIsModalOpen(true)} style={{ background: '#06B6D4', color: '#000', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', border: 'none', cursor: 'pointer' }}>
              Request Early Access Invitation
            </button>
          </div>
        </section>

        {/* Feature Grid */}
        <section style={{ margin: '4rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {features.map((f, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 15, 25, 0.7)',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                  borderRadius: '16px',
                  padding: '2rem',
                  backdropFilter: 'blur(12px)'
                }}
              >
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{f.icon}</span>
                <h3 style={{ fontSize: '1.3rem', color: '#F9FAFB', marginBottom: '0.6rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#9CA3AF', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <ServiceTrustLayer />

        <section style={{ margin: '5rem 0' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '2.5rem', color: '#fff' }}>
            Warehouse &amp; Supply Chain FAQ
          </h2>
          <FAQAccordion faqs={faqs} />
        </section>
      </div>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="early_access"
        productName="InventoryNex Warehouse ERP"
        productId="inventorynex"
      />
    </div>
  );
}
