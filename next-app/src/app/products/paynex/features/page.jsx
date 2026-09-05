'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../../../components/common/SEO';
import Breadcrumbs from '../../../../components/common/Breadcrumbs';
import LeadCaptureModal from '../../../../components/common/LeadCaptureModal';
import ServiceTrustLayer from '../../../../components/common/ServiceTrustLayer';
import FAQAccordion from '../../../../components/common/FAQAccordion';
import '../../../../styles/InnerPage.css';
import '../../../../styles/ProductPage.css';

export default function PaynexFeaturesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featurePillars = [
    {
      category: 'Smart Routing & Gateway Fallback',
      icon: '⚡',
      features: [
        {
          title: 'Dynamic Multi-Rail Payment Routing',
          desc: 'Intelligently route each transaction through the fastest gateway with the lowest MDR (Razorpay, Stripe, Cashfree, PineLabs) based on real-time health telemetry.'
        },
        {
          title: 'Zero-Downtime Instant Failover',
          desc: 'If a bank server or gateway experiences downtime, PayNex silently retries via backup rail before the customer ever sees a failure screen.'
        },
        {
          title: 'Sub-Second Checkout Engine',
          desc: 'Optimized drop-in checkout modal supporting UPI intent, Cards, NetBanking, and global currencies with a 98.4% success rate.'
        }
      ]
    },
    {
      category: 'Subscription Billing & Dunning',
      icon: '🔄',
      features: [
        {
          title: 'Automated Recurring Invoicing',
          desc: 'Configure flexible billing schedules (daily, monthly, usage-based, or hybrid tiers) with automatic GST compliant invoice generation.'
        },
        {
          title: 'Smart Dunning & Payment Recovery',
          desc: 'Machine learning algorithms retry failed card payments at optimal times (e.g. after salary credits), recovering up to 43% of lost revenue.'
        },
        {
          title: 'Self-Serve Customer Billing Portal',
          desc: 'Allow your subscribers to update cards, view past tax invoices, and upgrade/downgrade subscription tiers without opening support tickets.'
        }
      ]
    },
    {
      category: 'Marketplace Splits & Payouts',
      icon: '🌐',
      features: [
        {
          title: 'Automated Vendor Split Settlements',
          desc: 'Split incoming customer payments automatically between platform commission and vendor payouts with configurable escrow holding periods.'
        },
        {
          title: 'Instant Bulk Payouts API',
          desc: 'Disburse partner earnings, driver commissions, or affiliate bonuses directly to bank accounts and UPI IDs 24/7 via IMPS/NEFT.'
        },
        {
          title: 'Compliance & TDS Ledgering',
          desc: 'Automatically deduct platform TDS and compile quarterly tax reports ready for your chartered accountant.'
        }
      ]
    },
    {
      category: 'Developer Experience & Security',
      icon: '🛡️',
      features: [
        {
          title: 'Unified RESTful API & Webhooks',
          desc: 'One clean SDK to accept payments, verify signatures, manage refunds, and listen to idempotent webhook events.'
        },
        {
          title: 'PCI-DSS Level 1 Compliant Vault',
          desc: 'Tokenized card vault with end-to-end 256-bit AES encryption. Never touch raw credit card numbers on your servers.'
        },
        {
          title: 'Real-Time Telemetry & Dispute Defense',
          desc: 'Automated fraud risk scoring and chargeback evidence pack generation to fight disputed payments with banks.'
        }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How does PayNex integrate with our existing website or app?',
      answer: 'PayNex offers lightweight React, Next.js, Flutter, and iOS/Android SDKs, plus standard REST APIs that can be integrated in under 30 minutes.'
    },
    {
      question: 'Can PayNex handle international payments in USD, EUR, and GBP?',
      answer: 'Yes. PayNex supports 135+ currencies with automated currency conversion, localized checkout experiences, and multi-currency payout settlement.'
    },
    {
      question: 'Does PayNex replace Stripe or Razorpay, or work alongside them?',
      answer: 'PayNex acts as a powerful orchestration layer. You can connect your existing Razorpay, Stripe, or bank merchant accounts and let PayNex manage intelligent routing, analytics, and failover.'
    }
  ];

  return (
    <div className="product-page inner-page">
      <SEO
        title="PayNex Features | Intelligent Billing & Payment Orchestration Suite"
        description="Discover PayNex features: Multi-rail smart checkout routing, recurring subscription dunning, split vendor settlements, and PCI-DSS compliance."
        canonicalUrl="https://www.vayunexsolution.com/products/paynex/features"
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Products', to: '/products' },
            { label: 'PayNex', to: '/products/paynex' },
            { label: 'Features', to: '/products/paynex/features' }
          ]}
        />

        <section style={{ textAlign: 'center', padding: '4rem 0 3rem' }}>
          <div className="badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '9999px', color: '#3B82F6', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <span>⚡ Next-Gen Payment Engine</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.25rem', color: '#F9FAFB' }}>
            Engineered for Maximum <span style={{ color: '#3B82F6' }}>Transaction Success</span>
          </h1>
          <p style={{ maxWidth: '760px', margin: '0 auto 2.5rem', color: '#9CA3AF', fontSize: '1.15rem', lineHeight: 1.7 }}>
            Explore the multi-gateway architecture, subscription recovery algorithms, and real-time ledgering that power PayNex.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => setIsModalOpen(true)} style={{ background: '#3B82F6', color: '#fff', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', border: 'none' }}>
              Request API Sandbox Access
            </button>
            <Link href="/products/paynex/pricing" className="btn-secondary" style={{ padding: '14px 28px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: '#fff' }}>
              Explore Pricing &amp; MDR →
            </Link>
          </div>
        </section>

        {/* Feature Pillars */}
        <section style={{ margin: '4rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {featurePillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 15, 25, 0.7)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  borderRadius: '16px',
                  padding: '2rem',
                  backdropFilter: 'blur(12px)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2rem' }}>{pillar.icon}</span>
                  <h3 style={{ fontSize: '1.4rem', color: '#3B82F6', margin: 0 }}>{pillar.category}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {pillar.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ borderTop: fIdx > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none', paddingTop: fIdx > 0 ? '1.25rem' : 0 }}>
                      <h4 style={{ fontSize: '1.05rem', color: '#F9FAFB', marginBottom: '0.4rem' }}>{feat.title}</h4>
                      <p style={{ fontSize: '0.9rem', color: '#9CA3AF', lineHeight: 1.6, margin: 0 }}>{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <ServiceTrustLayer />

        <section style={{ margin: '5rem 0' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '2.5rem', color: '#fff' }}>
            Technical &amp; Gateway Integration FAQ
          </h2>
          <FAQAccordion faqs={faqs} />
        </section>
      </div>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="early_access"
        productName="PayNex Features Sandbox"
        productId="paynex"
      />
    </div>
  );
}
