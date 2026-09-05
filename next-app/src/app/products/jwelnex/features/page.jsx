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

export default function JwelnexFeaturesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featurePillars = [
    {
      category: 'Inventory & Vault Control',
      icon: '💎',
      features: [
        {
          title: 'Precision RFID & Barcode Item Tagging',
          desc: 'Scan trays of jewellery in 3 seconds with high-frequency RFID reader guns. Track metal gross weight, net weight, stone weight, and fine purity to 0.001 gram precision.'
        },
        {
          title: 'Real-Time Multi-Branch Stock Rebalancing',
          desc: 'Instant inventory visibility across all showrooms and warehouses. Centralized approvals for branch transfers with transit insurance and OTP receipts.'
        },
        {
          title: 'Vault & Counter Daily Audit Reconciler',
          desc: 'End-of-day discrepancy alert engine that matches physical counter scans against opening balance and invoices within minutes.'
        }
      ]
    },
    {
      category: 'Billing, POS & Compliance',
      icon: '⚡',
      features: [
        {
          title: 'Live Bullion Rate Sync Engine',
          desc: 'Integrates real-time MCX / IBJA gold, silver, and platinum rates. Instant automatic recalculation of making charges, stone cost, and metal value at checkout.'
        },
        {
          title: 'Automated GST & E-Invoicing Gateway',
          desc: 'One-click generation of IRN numbers, QR codes, and e-Way bills. Complete support for old gold exchange with tax adjustments and melting loss ledgers.'
        },
        {
          title: 'Split Multi-Mode Payment Settlement',
          desc: 'Accept cash, credit cards, bank NEFT, EMI, and loyalty schemes on a single invoice with instantaneous reconciliation.'
        }
      ]
    },
    {
      category: 'Manufacturing & Karigar Accounting',
      icon: '⚒️',
      features: [
        {
          title: 'Karigar Issue & Receipt Ledger',
          desc: 'Digitally track raw metal given to artisans, design specifications, gemstone allocation, and return weights with automatic wastage calculations.'
        },
        {
          title: 'Melting & Refining Wastage Optimization',
          desc: 'Analyze karigar yield efficiency over time. Spot recurring metal leakages and optimize workshop profitability.'
        },
        {
          title: 'Custom Order Job Cards',
          desc: 'Photo-enabled custom jewelry work orders with customer advance payments, milestone approvals, and delivery deadline tracking.'
        }
      ]
    },
    {
      category: 'CRM, Chit Funds & Loyalty',
      icon: '🤝',
      features: [
        {
          title: 'Jewelry Monthly Scheme (Chit Fund) Engine',
          desc: 'Digital passbooks for installment schemes (11+1 month plans). Automated WhatsApp payment reminders, UPI links, and redemption bonuses.'
        },
        {
          title: 'Customer Purchase & Milestone Intelligence',
          desc: 'Track ring sizes, preferred design styles, wedding anniversaries, and birthdays with targeted automated promotion alerts.'
        },
        {
          title: 'VIP Lounge & Counter Loyalty Points',
          desc: 'Configurable reward tiers that incentivize repeat family purchases and bridal trousseau referrals.'
        }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How fast can our jewelry showroom switch to Jwelnex RFID tagging?',
      answer: 'Our onboarding team migrates existing legacy software databases (Excel, Tally, or legacy desktop ERPs) within 48 to 72 hours. RFID tags and thermal printers can be calibrated on-site or configured remotely.'
    },
    {
      question: 'Does Jwelnex handle old gold exchange and custom melting loss?',
      answer: 'Yes. Jwelnex has a specialized old gold purchase and melting loss calculator that adjusts GST input tax credits and creates accurate purity credit notes.'
    },
    {
      question: 'Can managers monitor branch sales from mobile devices?',
      answer: 'Absolutely. Jwelnex provides a cloud executive dashboard accessible on smartphones, tablets, and laptops with end-to-end encryption and multi-factor authentication.'
    }
  ];

  return (
    <div className="product-page inner-page">
      <SEO
        title="Jwelnex Features | Advanced Jewelry ERP & RFID Inventory Suite"
        description="Explore Jwelnex ERP features: RFID tray scanning, karigar job cards, live MCX metal rate sync, multi-branch inventory, and automated GST billing."
        canonicalUrl="https://www.vayunexsolution.com/products/jwelnex/features"
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Products', to: '/products' },
            { label: 'Jwelnex ERP', to: '/products/jwelnex' },
            { label: 'Features', to: '/products/jwelnex/features' }
          ]}
        />

        <section className="product-hero" style={{ textAlign: 'center', padding: '4rem 0 3rem' }}>
          <div className="badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '9999px', color: '#F59E0B', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <span>⚡ Deep Dive Architecture</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.25rem', color: '#F9FAFB' }}>
            Built for High-Precision <span style={{ color: '#F59E0B' }}>Jewelry Retailers</span>
          </h1>
          <p style={{ maxWidth: '760px', margin: '0 auto 2.5rem', color: '#9CA3AF', fontSize: '1.15rem', lineHeight: 1.7 }}>
            Discover every tool inside Jwelnex ERP designed to stop stock theft, accelerate counter billing by 300%, and eliminate artisan accounting errors.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => setIsModalOpen(true)} style={{ background: '#F59E0B', color: '#000', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', border: 'none' }}>
              Request Live Interactive Demo
            </button>
            <Link href="/products/jwelnex/pricing" className="btn-secondary" style={{ padding: '14px 28px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: '#fff' }}>
              View Pricing Tiers →
            </Link>
          </div>
        </section>

        {/* Feature Pillars Grid */}
        <section style={{ margin: '4rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {featurePillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 15, 25, 0.7)',
                  border: '1px solid rgba(245, 158, 11, 0.2)',
                  borderRadius: '16px',
                  padding: '2rem',
                  backdropFilter: 'blur(12px)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2rem' }}>{pillar.icon}</span>
                  <h3 style={{ fontSize: '1.4rem', color: '#F59E0B', margin: 0 }}>{pillar.category}</h3>
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

        {/* Architecture Trust Layer */}
        <ServiceTrustLayer />

        {/* FAQ Section */}
        <section style={{ margin: '5rem 0' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '2.5rem', color: '#fff' }}>
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={faqs} />
        </section>
      </div>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="demo"
        productName="Jwelnex ERP Features"
        productId="jwelnex"
      />
    </div>
  );
}
