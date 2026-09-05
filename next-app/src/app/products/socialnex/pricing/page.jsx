'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../../../components/common/SEO';
import Breadcrumbs from '../../../../components/common/Breadcrumbs';
import LeadCaptureModal from '../../../../components/common/LeadCaptureModal';
import FAQAccordion from '../../../../components/common/FAQAccordion';
import '../../../../styles/InnerPage.css';
import '../../../../styles/ProductPage.css';

export default function SocialnexPricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Growth Brand');

  const plans = [
    {
      name: 'Creator & Founder',
      tagline: 'For solo creators, thought leaders and early founders',
      price: '₹999',
      period: '/ month billed annually',
      highlight: false,
      features: [
        '5 Connected Social Accounts',
        'Unlimited Post Scheduling & Calendar',
        '50 AI Copywriting Prompts / Month',
        'Visual Instagram & LinkedIn Preview',
        'Basic Follower & Engagement Analytics',
        'Standard Email Community Support'
      ],
      cta: 'Choose Creator'
    },
    {
      name: 'Growth Brand',
      tagline: 'For growing businesses building an authoritative audience',
      price: '₹2,499',
      period: '/ month billed annually',
      highlight: true,
      badge: 'Popular',
      features: [
        '15 Connected Social Accounts',
        '3 Team Member Seats with Roles',
        'Unlimited AI Content Co-Pilot & Hooks',
        'Universal Social Inbox & Comment Manager',
        'Competitor Benchmarking & Growth Trends',
        'AI Sentiment Analysis & Priority Tagging',
        'Priority Chat & Email Support'
      ],
      cta: 'Start Brand Trial'
    },
    {
      name: 'Agency Scale',
      tagline: 'For marketing agencies managing multiple client brands',
      price: '₹5,999',
      period: '/ month billed annually',
      highlight: false,
      features: [
        'Unlimited Client Brand Workspaces',
        '10 Team Seats + External Client Portals',
        'One-Click Client Post Approvals via Link',
        'Automated White-Label PDF Analytics Reports',
        'Custom Webhooks & Content Sync API',
        'Dedicated Onboarding Account Manager',
        'Guaranteed 1-Hour SLA Support'
      ],
      cta: 'Deploy Agency Scale'
    }
  ];

  const faqs = [
    {
      question: 'Can I connect multiple accounts on the same platform (e.g. 3 LinkedIn profiles)?',
      answer: 'Yes. You can distribute your connected accounts across platforms however you prefer (e.g. 2 LinkedIn personal profiles, 1 company page, and 2 Instagram accounts).'
    },
    {
      question: 'Do you charge extra for scheduling video or carousel posts?',
      answer: 'No. All plans support unlimited video uploads, carousel formats, reels, shorts, and text threads with no hidden media fees.'
    },
    {
      question: 'Can our clients comment and approve drafts without an account?',
      answer: 'Yes, on the Agency plan, you generate a secure magic link for clients to review, comment, and click approve without requiring them to sign up or create passwords.'
    }
  ];

  return (
    <div className="product-page inner-page">
      <SEO
        title="SocialNex Pricing | Transparent Plans for Creators, Brands & Agencies"
        description="Affordable pricing for SocialNex AI social media suite. Scale from solo creator to multi-brand agency with AI copywriting and client approval portals."
        canonicalUrl="https://www.vayunexsolution.com/products/socialnex/pricing"
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Products', to: '/products' },
            { label: 'SocialNex', to: '/products/socialnex' },
            { label: 'Pricing', to: '/products/socialnex/pricing' }
          ]}
        />

        <section style={{ textAlign: 'center', padding: '4rem 0 3rem' }}>
          <div className="badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(236, 72, 153, 0.15)', border: '1px solid rgba(236, 72, 153, 0.3)', borderRadius: '9999px', color: '#EC4899', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <span>💰 Predictable Social ROI</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.25rem', color: '#F9FAFB' }}>
            Plans Tailored to Your <span style={{ color: '#EC4899' }}>Audience Growth</span>
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto 3rem', color: '#9CA3AF', fontSize: '1.15rem', lineHeight: 1.7 }}>
            Unlock automated publishing, AI copy co-pilot, and client approvals. Upgrade or pause anytime with zero penalty.
          </p>
        </section>

        {/* Pricing Cards */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {plans.map((p, idx) => (
              <div
                key={idx}
                style={{
                  background: p.highlight ? 'linear-gradient(180deg, rgba(40, 15, 30, 0.9) 0%, rgba(15, 15, 25, 0.9) 100%)' : 'rgba(15, 15, 25, 0.7)',
                  border: p.highlight ? '2px solid #EC4899' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  backdropFilter: 'blur(12px)',
                  boxShadow: p.highlight ? '0 10px 40px rgba(236, 72, 153, 0.25)' : 'none'
                }}
              >
                {p.badge && (
                  <span style={{ position: 'absolute', top: '-14px', right: '24px', background: '#EC4899', color: '#fff', fontWeight: 700, fontSize: '0.75rem', padding: '4px 14px', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {p.badge}
                  </span>
                )}
                <h3 style={{ fontSize: '1.6rem', color: '#F9FAFB', marginBottom: '0.5rem' }}>{p.name}</h3>
                <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '1.5rem', minHeight: '40px' }}>{p.tagline}</p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <span style={{ fontSize: '2.8rem', fontWeight: 800, color: p.highlight ? '#EC4899' : '#fff' }}>{p.price}</span>
                  <span style={{ color: '#6B7280', fontSize: '0.85rem', display: 'block', marginTop: '4px' }}>{p.period}</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
                  {p.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: '#D1D5DB' }}>
                      <span style={{ color: '#EC4899', fontSize: '1.1rem' }}>✓</span>
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
                    background: p.highlight ? '#EC4899' : 'rgba(255,255,255,0.08)',
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
            Subscription &amp; Team FAQ
          </h2>
          <FAQAccordion faqs={faqs} />
        </section>
      </div>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="early_access"
        productName={`SocialNex (${selectedPlan} Plan)`}
        productId="socialnex"
      />
    </div>
  );
}
