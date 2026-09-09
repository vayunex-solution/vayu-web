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

export default function SchooldostFeaturesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featurePillars = [
    {
      category: 'Verified Student Identity & Profiles',
      icon: '🎓',
      features: [
        {
          title: 'University ID & Email Verification',
          desc: 'Strict multi-stage authentication ensures every profile belongs to an active, verified college student.'
        },
        {
          title: 'Authentic Academic Profile',
          desc: 'Showcase your course, college department, graduation year, core technical skills, and campus club affiliations.'
        },
        {
          title: 'Privacy & Anonymous Peer Asking',
          desc: 'Ask sensitive academic questions or seek advice within your college community with custom privacy and identity controls.'
        }
      ]
    },
    {
      category: 'Hyper-Local Campus Discovery & Feeds',
      icon: '📢',
      features: [
        {
          title: 'Campus-Specific Real-Time Feed',
          desc: 'Stay informed about what is genuinely happening at your university—from annual fest updates to guest lectures.'
        },
        {
          title: 'Registered Student Club Broadcasting',
          desc: 'Official club heads and student societies publish verified event notices, recruiting drives, and workshop registrations.'
        },
        {
          title: 'Intra-College Discussion Forums',
          desc: 'Structured, noise-free channels dedicated to exams, syllabus notes, campus housing, and cafeteria recommendations.'
        }
      ]
    },
    {
      category: 'Micro-Communities & Peer Collaboration',
      icon: '🤝',
      features: [
        {
          title: 'Skill & Interest-Based Hubs',
          desc: 'Join hyper-focused micro-communities for coding, robotics, competitive exams, photography, or fine arts.'
        },
        {
          title: 'Hackathon & Project Partner Finder',
          desc: 'Connect with complementary peers across disciplines—pair engineers with designers and business minds.'
        },
        {
          title: 'Senior-Junior Peer Mentorship',
          desc: 'Direct mentorship channels connecting underclassmen with experienced seniors for placement and internship guidance.'
        }
      ]
    },
    {
      category: 'Safe Peer Exchange & Academic Marketplace',
      icon: '📚',
      features: [
        {
          title: 'Verified Student Marketplace',
          desc: 'Buy, sell, or loan textbooks, reference manuals, calculators, and campus gear directly to peers on your campus.'
        },
        {
          title: 'Peer Study Notes Repository',
          desc: 'Share and access curated semester lecture notes, previous-year question analyses, and practical lab resources.'
        },
        {
          title: 'Secure Peer-to-Peer Messaging',
          desc: 'Collaborate and chat safely without exchanging personal phone numbers or exposing private social media handles.'
        }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How is SchoolDost different from mainstream social networks?',
      answer: 'Mainstream platforms are cluttered with bots, commercial ads, and strangers. SchoolDost is strictly gated for verified college students, creating an authentic, high-trust academic environment.'
    },
    {
      question: 'Is student personal data protected?',
      answer: 'Yes. SchoolDost implements stringent privacy standards. We never sell student data or personal contact details to third-party ad networks.'
    },
    {
      question: 'Can student clubs create official accounts?',
      answer: 'Yes! Registered university clubs and student societies can claim official verified pages to broadcast events and announcements directly to their student body.'
    }
  ];

  return (
    <div className="product-page inner-page">
      <SEO
        title="SchoolDost Features | Verified Student Network & Campus Communities"
        description="Explore the features powering SchoolDost: verified university identity, campus feeds, interest micro-communities, and peer collaboration."
        canonicalUrl="https://www.vayunexsolution.com/products/schooldost/features"
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Products', to: '/products' },
            { label: 'SchoolDost', to: '/products/schooldost' },
            { label: 'Features', to: '/products/schooldost/features' }
          ]}
        />

        <header className="page-header" style={{ textAlign: 'center', margin: '3rem 0 4rem' }}>
          <div className="badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(6, 182, 212, 0.15)', border: '1px solid rgba(6, 182, 212, 0.3)', borderRadius: '9999px', color: '#06B6D4', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.25rem' }}>
            <span>Verified Student Network</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1rem', color: '#F9FAFB' }}>
            Platform Architecture & <span style={{ color: '#06B6D4' }}>Features</span>
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Discover the verified modules powering real campus connections, academic discovery, and trusted peer collaboration.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a 
              href="https://schooldost.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
              style={{ background: '#06B6D4', color: '#000', fontWeight: 700, padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              Explore SchoolDost Platform &rarr;
            </a>
          </div>
        </header>

        {/* Feature Pillars */}
        <section className="features-container" style={{ margin: '3rem 0 5rem' }}>
          {featurePillars.map((pillar, idx) => (
            <div key={idx} style={{ marginBottom: '3.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>{pillar.icon}</span>
                <h2 style={{ fontSize: '1.6rem', color: '#F9FAFB', margin: 0, fontWeight: 700 }}>{pillar.category}</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {pillar.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    style={{
                      background: 'rgba(15, 15, 25, 0.6)',
                      border: '1px solid rgba(6, 182, 212, 0.15)',
                      borderRadius: '12px',
                      padding: '1.75rem',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <h3 style={{ fontSize: '1.15rem', color: '#F9FAFB', marginBottom: '0.6rem', fontWeight: 600 }}>{feat.title}</h3>
                    <p style={{ fontSize: '0.92rem', color: '#9CA3AF', lineHeight: 1.6, margin: 0 }}>{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <ServiceTrustLayer />

        <div style={{ margin: '4rem 0' }}>
          <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />
        </div>
      </div>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="partnership"
        productName="SchoolDost"
        productId="schooldost"
      />
    </div>
  );
}
