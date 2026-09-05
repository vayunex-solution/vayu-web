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

export default function SocialnexFeaturesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featurePillars = [
    {
      category: 'Omnichannel Publishing & Grid Planner',
      icon: '🚀',
      features: [
        {
          title: 'Single-Click Multi-Channel Syndication',
          desc: 'Draft once and publish simultaneously across LinkedIn, Instagram (Reels & Carousels), X/Twitter, Facebook, Threads, and YouTube Shorts.'
        },
        {
          title: 'Visual Drag-and-Drop Content Calendar',
          desc: 'Color-coded scheduling calendar with queue presets, timezone synchronizer, and preview grids for Instagram aesthetic alignment.'
        },
        {
          title: 'Evergreen Content Recycling',
          desc: 'Automatically re-queue top-performing educational posts, case studies, and customer testimonials at optimal intervals.'
        }
      ]
    },
    {
      category: 'Generative AI Content Co-Pilot',
      icon: '🧠',
      features: [
        {
          title: 'Brand-Tone Adapted Copywriter',
          desc: 'Fine-tuned LLM agents draft engaging hooks, body copy, bullet points, and calls to action that match your exact company voice.'
        },
        {
          title: 'Algorithmic Hashtag & Hook Predictor',
          desc: 'Scores your draft headlines against viral platform algorithms before publishing to maximize organic impressions and click-through rates.'
        },
        {
          title: 'Repurposing Engine',
          desc: 'Convert a single YouTube video or long-form blog post into a 5-part LinkedIn carousel, 3 Twitter threads, and 2 Instagram Reels scripts.'
        }
      ]
    },
    {
      category: 'Unified Social CRM & Community Inbox',
      icon: '💬',
      features: [
        {
          title: 'Universal Zero-Inbox Queue',
          desc: 'Consolidate comments, direct messages, and brand mentions across all platforms into one real-time customer support inbox.'
        },
        {
          title: 'AI Sentiment Triage & Auto-Replies',
          desc: 'Automatically flag negative feedback, high-intent lead inquiries, and spam. Deploy instant smart auto-replies for frequent questions.'
        },
        {
          title: 'Team Assignment & Internal Notes',
          desc: 'Assign sensitive customer inquiries to team members with private internal notes, preventing duplicate or conflicting replies.'
        }
      ]
    },
    {
      category: 'Analytics & Client Workspaces',
      icon: '📊',
      features: [
        {
          title: 'Competitor Benchmarking & Gap Analysis',
          desc: 'Monitor competitor follower growth, top-performing post themes, and engagement velocity to stay ahead of market trends.'
        },
        {
          title: 'Automated White-Label Client PDF Reports',
          desc: 'Generate executive analytics reports branded with your agency logo, showing follower growth, conversion ROI, and reach.'
        },
        {
          title: 'External Client Approval Portal',
          desc: 'Send clients private review links where they can approve, reject, or comment on upcoming scheduled posts without logging into social accounts.'
        }
      ]
    }
  ];

  const faqs = [
    {
      question: 'Which social platforms does SocialNex currently support?',
      answer: 'SocialNex supports LinkedIn (Profiles & Company Pages), Instagram (Reels, Feed, Carousels), X/Twitter, Facebook Pages, YouTube (Shorts & Community Posts), Threads, and Pinterest.'
    },
    {
      question: 'Can digital marketing agencies manage multiple client brands?',
      answer: 'Yes. SocialNex is designed with dedicated agency workspace architecture. You can manage unlimited isolated client brands with distinct social accounts, team permissions, and approval workflows.'
    },
    {
      question: 'Does SocialNex comply with official platform API guidelines?',
      answer: '100%. SocialNex connects only via official verified Meta, LinkedIn, and X developer APIs. Your accounts remain completely safe from shadowbans or bot detection penalties.'
    }
  ];

  return (
    <div className="product-page inner-page">
      <SEO
        title="SocialNex Features | AI Social Media Management & Omnichannel Suite"
        description="Explore SocialNex features: Multi-platform scheduling, AI copywriting co-pilot, universal community inbox, competitor intelligence, and client approval portals."
        canonicalUrl="https://www.vayunexsolution.com/products/socialnex/features"
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Products', to: '/products' },
            { label: 'SocialNex', to: '/products/socialnex' },
            { label: 'Features', to: '/products/socialnex/features' }
          ]}
        />

        <section style={{ textAlign: 'center', padding: '4rem 0 3rem' }}>
          <div className="badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(236, 72, 153, 0.15)', border: '1px solid rgba(236, 72, 153, 0.3)', borderRadius: '9999px', color: '#EC4899', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <span>⚡ AI Growth Suite</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.25rem', color: '#F9FAFB' }}>
            Scale Your Brand Voice with <span style={{ color: '#EC4899' }}>SocialNex</span>
          </h1>
          <p style={{ maxWidth: '760px', margin: '0 auto 2.5rem', color: '#9CA3AF', fontSize: '1.15rem', lineHeight: 1.7 }}>
            Discover the automated publishing engine, AI hook generation, and unified CRM built for high-growth brands and marketing agencies.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => setIsModalOpen(true)} style={{ background: '#EC4899', color: '#fff', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', border: 'none' }}>
              Join Early Access Waitlist
            </button>
            <Link href="/products/socialnex/pricing" className="btn-secondary" style={{ padding: '14px 28px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: '#fff' }}>
              Explore Subscription Tiers →
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
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  borderRadius: '16px',
                  padding: '2rem',
                  backdropFilter: 'blur(12px)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2rem' }}>{pillar.icon}</span>
                  <h3 style={{ fontSize: '1.4rem', color: '#EC4899', margin: 0 }}>{pillar.category}</h3>
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
            Social Architecture FAQ
          </h2>
          <FAQAccordion faqs={faqs} />
        </section>
      </div>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="early_access"
        productName="SocialNex Features Suite"
        productId="socialnex"
      />
    </div>
  );
}
