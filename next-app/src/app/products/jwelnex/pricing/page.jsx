'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../../../components/common/SEO';
import Breadcrumbs from '../../../../components/common/Breadcrumbs';
import LeadCaptureModal from '../../../../components/common/LeadCaptureModal';
import FAQAccordion from '../../../../components/common/FAQAccordion';
import '../../../../styles/InnerPage.css';
import '../../../../styles/ProductPage.css';

export default function JwelnexPricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Multi-Branch');

  const plans = [
    {
      name: 'Single Showroom',
      tagline: 'Ideal for independent jewelry retail stores',
      price: '₹2,499',
      period: '/ month billed annually',
      highlight: false,
      features: [
        'Up to 3 Counter POS Terminals',
        'Barcode & Thermal Tag Printing',
        'Instant GST & E-Invoicing',
        'Customer Profile & History CRM',
        'Live Gold / Silver Rate Ticker',
        'Daily Vault Reconciliation Alert',
        'Standard Email & Phone Support'
      ],
      cta: 'Choose Single Store'
    },
    {
      name: 'Multi-Branch',
      tagline: 'Designed for expanding jewelry retail chains',
      price: '₹5,999',
      period: '/ month per branch',
      highlight: true,
      badge: 'Most Popular',
      features: [
        'Unlimited POS Terminals per Branch',
        'RFID High-Speed Tray Scanner Support',
        'Central Head-Office Stock Transfers',
        'Complete Karigar / Artisan Tracking Ledger',
        'Jewelry Savings Scheme (Chit Fund) Engine',
        'Automated WhatsApp Invoices & Reminders',
        'Role-Based Staff Access & Activity Audit',
        'Priority 24/7 Dedicated Support'
      ],
      cta: 'Start Multi-Branch Trial'
    },
    {
      name: 'Enterprise & Foundry',
      tagline: 'For large jewelry houses, wholesalers & manufacturers',
      price: 'Custom',
      period: 'tailored enterprise contract',
      highlight: false,
      features: [
        'Custom Cloud / On-Premise Deployment',
        'Manufacturing & Melting Wastage Optimization',
        'Full ERP API & Webhook Access',
        'Legacy Data Migration from Tally/Excel',
        'Custom Hardware & Scanner Integration',
        'Dedicated Technical Account Manager',
        '99.99% Uptime Enterprise SLA'
      ],
      cta: 'Contact Enterprise Sales'
    }
  ];

  const faqs = [
    {
      question: 'Are hardware scanners and printers included in the subscription?',
      answer: 'Jwelnex software supports all standard certified RFID scanners, barcode guns, and thermal printers (Zebra, TSC, Citizen). We also offer turnkey hardware kits at discounted partner rates.'
    },
    {
      question: 'Can we upgrade our plan as we open new branches?',
      answer: 'Yes, Jwelnex scales elastically. You can add new branch licenses directly from your admin console with zero downtime.'
    },
    {
      question: 'Is there a free trial or proof-of-concept available?',
      answer: 'Yes, we provide a 14-day fully configured sandbox environment pre-loaded with sample jewelry stock so your store staff can test workflows.'
    }
  ];

  return (
    <div className="product-page inner-page">
      <SEO
        title="Jwelnex ERP Pricing | Flexible Plans for Jewelry Retailers & Chains"
        description="Affordable, transparent pricing for Jwelnex Jewelry ERP. Choose from Single Store, Multi-Branch, and Enterprise plans with RFID and GST billing."
        canonicalUrl="https://www.vayunexsolution.com/products/jwelnex/pricing"
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Products', to: '/products' },
            { label: 'Jwelnex ERP', to: '/products/jwelnex' },
            { label: 'Pricing', to: '/products/jwelnex/pricing' }
          ]}
        />

        <section style={{ textAlign: 'center', padding: '4rem 0 3rem' }}>
          <div className="badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '9999px', color: '#F59E0B', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <span>💰 Predictable ROI</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.25rem', color: '#F9FAFB' }}>
            Transparent Plans for Every <span style={{ color: '#F59E0B' }}>Jewelry Brand</span>
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto 3rem', color: '#9CA3AF', fontSize: '1.15rem', lineHeight: 1.7 }}>
            No hidden setup fees. Scale your jewelry business with precision stock control, RFID automation, and enterprise compliance.
          </p>
        </section>

        {/* Pricing Cards */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {plans.map((p, idx) => (
              <div
                key={idx}
                style={{
                  background: p.highlight ? 'linear-gradient(180deg, rgba(30, 25, 15, 0.9) 0%, rgba(15, 15, 25, 0.9) 100%)' : 'rgba(15, 15, 25, 0.7)',
                  border: p.highlight ? '2px solid #F59E0B' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  backdropFilter: 'blur(12px)',
                  boxShadow: p.highlight ? '0 10px 40px rgba(245, 158, 11, 0.2)' : 'none'
                }}
              >
                {p.badge && (
                  <span style={{ position: 'absolute', top: '-14px', right: '24px', background: '#F59E0B', color: '#000', fontWeight: 700, fontSize: '0.75rem', padding: '4px 14px', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {p.badge}
                  </span>
                )}
                <h3 style={{ fontSize: '1.6rem', color: '#F9FAFB', marginBottom: '0.5rem' }}>{p.name}</h3>
                <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '1.5rem', minHeight: '40px' }}>{p.tagline}</p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <span style={{ fontSize: '2.8rem', fontWeight: 800, color: p.highlight ? '#F59E0B' : '#fff' }}>{p.price}</span>
                  <span style={{ color: '#6B7280', fontSize: '0.9rem', marginLeft: '6px' }}>{p.period}</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
                  {p.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: '#D1D5DB' }}>
                      <span style={{ color: '#F59E0B', fontSize: '1.1rem' }}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setSelectedPlan(p.name);
                    setIsModalOpen(true);
                  }}
                  style={{
                    background: p.highlight ? '#F59E0B' : 'rgba(255,255,255,0.08)',
                    color: p.highlight ? '#000' : '#fff',
                    fontWeight: 700,
                    padding: '14px',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontSize: '1rem'
                  }}
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ margin: '5rem 0' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '2.5rem', color: '#fff' }}>
            Pricing &amp; Licensing FAQ
          </h2>
          <FAQAccordion faqs={faqs} />
        </section>
      </div>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="demo"
        productName={`Jwelnex ERP (${selectedPlan} Plan)`}
        productId="jwelnex"
      />
    </div>
  );
}
