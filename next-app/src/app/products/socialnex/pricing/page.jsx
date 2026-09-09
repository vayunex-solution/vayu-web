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

  const plans = [
    {
      name: 'Public Beta Access',
      tagline: 'Full platform access during our active beta rollout cohort',
      price: 'Free',
      period: 'during active public beta',
      highlight: true,
      badge: 'Current Status',
      features: [
        'Omnichannel Visual Content Calendar',
        'Multi-Channel Post Scheduling & Drafts',
        'Integrated AI Copy Co-Pilot & Ideas',
        'Audience Engagement & Velocity Metrics',
        'Draft Preview for Visual Networks',
        'Direct Developer Feedback Channel'
      ],
      cta: 'Access Beta Platform',
      externalUrl: 'https://socialnex.vayunexsolution.com/'
    },
    {
      name: 'Early Adopter Team',
      tagline: 'For marketing teams and boutique creative agencies testing workflows',
      price: 'Early Adopter',
      period: 'priority access tier',
      highlight: false,
      features: [
        'Multi-User Team Collaboration Roles',
        'Client Draft Approvals & Review Feeds',
        'Unlimited AI Content Prompts',
        'Consolidated Social Mentions Stream',
        'Priority Technical Support & Onboarding',
        'Founder Pricing Grandfathered at Launch'
      ],
      cta: 'Join Early Adopter Cohort',
      isModalTrigger: true
    },
    {
      name: 'Enterprise Agency Custom',
      tagline: 'For large agencies requiring bespoke SLAs and custom integrations',
      price: 'Custom',
      period: 'tailored enterprise agreement',
      highlight: false,
      features: [
        'Unlimited Client Brand Workspaces',
        'Custom Webhooks & Content Sync Pipeline',
        'Dedicated Technical Account Engineer',
        'SOC-2 Compliant Security & Audit Trail',
        'Custom Single Sign-On (SSO)',
        'Guaranteed Response Time SLA'
      ],
      cta: 'Contact Enterprise Team',
      isModalTrigger: true
    }
  ];

  const faqs = [
    {
      question: 'Is SocialNex currently free to use during the Beta period?',
      answer: 'Yes! The SocialNex Beta platform is currently open at socialnex.vayunexsolution.com. Users can test our omnichannel calendar and AI copy assistant without commercial subscription lock-in.'
    },
    {
      question: 'What happens when SocialNex transitions out of Beta?',
      answer: 'All early beta users and early adopter cohort participants will receive grandfathered lifetime early-supporter benefits and transparent advance notification before commercial tiers activate.'
    },
    {
      question: 'Can agencies test multi-client workflows during the beta?',
      answer: 'Yes. Agencies can contact our engineering team to enable multi-workspace testing and client draft approval configurations.'
    }
  ];

  return (
    <div className="product-page inner-page">
      <SEO
        title="SocialNex Access & Beta Program | Social Media Command Center"
        description="Access SocialNex during the active public beta. Discover our transparent early-adopter program for creators, brands, and digital agencies."
        canonicalUrl="https://www.vayunexsolution.com/products/socialnex/pricing"
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Products', to: '/products' },
            { label: 'SocialNex', to: '/products/socialnex' },
            { label: 'Beta & Pricing', to: '/products/socialnex/pricing' }
          ]}
        />

        <header className="page-header" style={{ textAlign: 'center', margin: '3rem 0 4rem' }}>
          <div className="badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(6, 182, 212, 0.15)', border: '1px solid rgba(6, 182, 212, 0.3)', borderRadius: '9999px', color: '#22d3ee', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.25rem' }}>
            <span>BETA AVAILABLE • EARLY ACCESS</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1rem', color: '#F9FAFB' }}>
            Transparent Beta & <span style={{ color: '#8B5CF6' }}>Early Adopter Access</span>
          </h1>
          <p style={{ maxWidth: '680px', margin: '0 auto', color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.7 }}>
            SocialNex is currently available in public beta. Join our growing cohort of marketing teams shaping the future of multi-channel publishing.
          </p>
        </header>

        {/* Pricing Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          {plans.map((plan, idx) => (
            <div
              key={idx}
              style={{
                background: plan.highlight ? 'rgba(139, 92, 246, 0.08)' : 'rgba(15, 15, 25, 0.7)',
                border: plan.highlight ? '2px solid #8B5CF6' : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                backdropFilter: 'blur(16px)'
              }}
            >
              {plan.badge && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#8B5CF6',
                    color: '#fff',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    padding: '4px 14px',
                    borderRadius: '9999px'
                  }}
                >
                  {plan.badge}
                </span>
              )}

              <h2 style={{ fontSize: '1.4rem', color: '#F9FAFB', marginBottom: '0.5rem', fontWeight: 700 }}>{plan.name}</h2>
              <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '40px', lineHeight: 1.5 }}>{plan.tagline}</p>

              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>{plan.price}</span>
                <span style={{ color: '#6B7280', fontSize: '0.85rem', display: 'block', marginTop: '4px' }}>{plan.period}</span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#D1D5DB', fontSize: '0.92rem' }}>
                    <span style={{ color: '#8B5CF6', fontWeight: 800 }}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {plan.externalUrl ? (
                <a
                  href={plan.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    background: '#8B5CF6',
                    color: '#fff',
                    textAlign: 'center',
                    padding: '14px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'block'
                  }}
                >
                  {plan.cta} &rarr;
                </a>
              ) : (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-secondary"
                  style={{
                    padding: '14px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#fff',
                    cursor: 'pointer'
                  }}
                >
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>

        <div style={{ margin: '4rem 0' }}>
          <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />
        </div>
      </div>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="early-access"
        productName="SocialNex"
        productId="socialnex"
      />
    </div>
  );
}
