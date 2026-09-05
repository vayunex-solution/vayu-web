'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../../../components/common/SEO';
import Breadcrumbs from '../../../../components/common/Breadcrumbs';
import LeadCaptureModal from '../../../../components/common/LeadCaptureModal';
import FAQAccordion from '../../../../components/common/FAQAccordion';
import '../../../../styles/InnerPage.css';
import '../../../../styles/ProductPage.css';

export default function PaynexPricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Growth');

  const plans = [
    {
      name: 'Starter Gateway',
      tagline: 'Ideal for early-stage digital startups and apps',
      price: '1.8%',
      period: 'per domestic transaction (₹0 monthly fee)',
      highlight: false,
      features: [
        'Drop-in React & Next.js Checkout SDK',
        'UPI Intent, Cards, NetBanking, Wallets',
        'Standard T+2 Bank Settlement',
        'Automated Tax Invoices & Receipts',
        'Webhook Event Notifications',
        'Standard Email Developer Support'
      ],
      cta: 'Start with PayNex Free'
    },
    {
      name: 'Growth Scale',
      tagline: 'For fast-growing SaaS products & multi-vendor marketplaces',
      price: '1.4%',
      period: '+ ₹1,999 / month flat platform fee',
      highlight: true,
      badge: 'Recommended',
      features: [
        'Smart Multi-Gateway Dynamic Failover',
        'Automated Subscription & Dunning AI',
        'Instant T+1 or Same-Day Settlement',
        'Marketplace Vendor Splits & Escrow',
        'Fraud Risk Scoring & Chargeback Defense',
        'Custom Branded Payment Links & Portal',
        'Priority Phone & Slack Developer Channel'
      ],
      cta: 'Choose Growth Scale'
    },
    {
      name: 'Custom Enterprise',
      tagline: 'High volume processors with > ₹50L monthly GMV',
      price: 'Custom',
      period: 'tailored interchange-plus pricing',
      highlight: false,
      features: [
        'Interchange-Plus or Sub-1% Volume Rates',
        'Direct Bank Payment Rail Integration',
        'Dedicated Cloud Micro-Tenant Deployment',
        'Custom ERP & Salesforce Ledger Sync',
        'White-Label Complete Checkout Domain',
        'Dedicated Solutions Architect & 24/7 SLA',
        'Dispute Defense Legal & Bank Liaison'
      ],
      cta: 'Talk to Enterprise Payments'
    }
  ];

  const faqs = [
    {
      question: 'Are there any hidden setup or maintenance fees?',
      answer: 'No. The Starter plan has zero maintenance or setup charges. You only pay the per-transaction fee when successful payments are captured.'
    },
    {
      question: 'What is the standard payout settlement cycle?',
      answer: 'Domestic transactions are settled to your linked verified bank account within T+1 or T+2 business days. Same-day settlement is available on the Growth and Enterprise tiers.'
    },
    {
      question: 'Can we use our existing Razorpay or Stripe account credentials?',
      answer: 'Yes. With PayNex BYOG (Bring Your Own Gateway), you can connect your existing merchant IDs and keep your existing bank negotiated rates while gaining PayNex routing and analytics.'
    }
  ];

  return (
    <div className="product-page inner-page">
      <SEO
        title="PayNex Pricing | Transparent Payment Gateway & Billing Plans"
        description="Competitive pricing for PayNex payments platform. Low MDR rates, zero hidden fees, automated subscription dunning, and custom enterprise volume discounts."
        canonicalUrl="https://www.vayunexsolution.com/products/paynex/pricing"
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Products', to: '/products' },
            { label: 'PayNex', to: '/products/paynex' },
            { label: 'Pricing', to: '/products/paynex/pricing' }
          ]}
        />

        <section style={{ textAlign: 'center', padding: '4rem 0 3rem' }}>
          <div className="badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '9999px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <span>💳 Fair &amp; Transparent</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.25rem', color: '#F9FAFB' }}>
            Pricing Engineered to <span style={{ color: '#3B82F6' }}>Maximize Revenue</span>
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto 3rem', color: '#9CA3AF', fontSize: '1.15rem', lineHeight: 1.7 }}>
            No surprise transaction surcharges. Scale from your first payment to millions in daily volume with transparent tiers.
          </p>
        </section>

        {/* Pricing Cards */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {plans.map((p, idx) => (
              <div
                key={idx}
                style={{
                  background: p.highlight ? 'linear-gradient(180deg, rgba(20, 30, 60, 0.9) 0%, rgba(15, 15, 25, 0.9) 100%)' : 'rgba(15, 15, 25, 0.7)',
                  border: p.highlight ? '2px solid #3B82F6' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  backdropFilter: 'blur(12px)',
                  boxShadow: p.highlight ? '0 10px 40px rgba(59, 130, 246, 0.25)' : 'none'
                }}
              >
                {p.badge && (
                  <span style={{ position: 'absolute', top: '-14px', right: '24px', background: '#3B82F6', color: '#fff', fontWeight: 700, fontSize: '0.75rem', padding: '4px 14px', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {p.badge}
                  </span>
                )}
                <h3 style={{ fontSize: '1.6rem', color: '#F9FAFB', marginBottom: '0.5rem' }}>{p.name}</h3>
                <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '1.5rem', minHeight: '40px' }}>{p.tagline}</p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <span style={{ fontSize: '2.8rem', fontWeight: 800, color: p.highlight ? '#3B82F6' : '#fff' }}>{p.price}</span>
                  <span style={{ color: '#6B7280', fontSize: '0.85rem', display: 'block', marginTop: '4px' }}>{p.period}</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
                  {p.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: '#D1D5DB' }}>
                      <span style={{ color: '#3B82F6', fontSize: '1.1rem' }}>✓</span>
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
                    background: p.highlight ? '#3B82F6' : 'rgba(255,255,255,0.08)',
                    color: '#fff',
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
            Billing &amp; Merchant Accounts FAQ
          </h2>
          <FAQAccordion faqs={faqs} />
        </section>
      </div>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="early_access"
        productName={`PayNex (${selectedPlan} Plan)`}
        productId="paynex"
      />
    </div>
  );
}
