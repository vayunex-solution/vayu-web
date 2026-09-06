'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SEO from './SEO';
import Breadcrumbs from './Breadcrumbs';
import LeadCaptureModal from './LeadCaptureModal';
import ServiceTrustLayer from './ServiceTrustLayer';
import FAQAccordion from './FAQAccordion';
import SmartIcon from './SmartIcon';
import '../../styles/InnerPage.css';
import '../../styles/ServicesPage.css';

export default function ServiceSubpageTemplate({
  serviceName,
  parentService,
  parentUrl,
  currentUrl,
  accentColor = '#3B82F6',
  badgeText = 'Specialized Capability',
  headline,
  subheadline,
  capabilities = [],
  techStack = [],
  processSteps = [],
  outcomes = [],
  faqs = []
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "provider": {
      "@type": "Organization",
      "name": "Vayunex Solution",
      "url": "https://www.vayunexsolution.com"
    },
    "description": subheadline,
    "serviceType": serviceName,
    "areaServed": "Global"
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  return (
    <div className="services-page inner-page">
      <SEO
        title={`${serviceName} | Vayunex Solution Engineering`}
        description={subheadline}
        canonicalUrl={`https://www.vayunexsolution.com${currentUrl}`}
        structuredData={structuredData}
        faqData={faqSchema}
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Services', to: '/#outcomes' },
            { label: parentService, to: parentUrl },
            { label: serviceName, to: currentUrl }
          ]}
        />

        {/* Hero Section */}
        <section style={{ textAlign: 'center', padding: '4rem 0 3rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              background: `rgba(${accentColor === '#6366F1' ? '99,102,241' : '59,130,246'}, 0.12)`,
              border: `1px solid ${accentColor}44`,
              borderRadius: '9999px',
              color: accentColor,
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1.5rem'
            }}
          >
            <span>⚡ {badgeText}</span>
          </div>

          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, marginBottom: '1.25rem', color: '#F9FAFB', lineHeight: 1.2 }}>
            {headline}
          </h1>

          <p style={{ maxWidth: '780px', margin: '0 auto 2.5rem', color: '#9CA3AF', fontSize: '1.18rem', lineHeight: 1.7 }}>
            {subheadline}
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn-primary"
              onClick={() => setIsModalOpen(true)}
              style={{
                background: accentColor,
                color: '#fff',
                fontWeight: 700,
                padding: '14px 30px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Consult with Lead Architect →
            </button>
            <a
              href="https://wa.me/918930733725"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                padding: '14px 28px',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </section>

        {/* Deliverables / Capabilities */}
        {capabilities.length > 0 && (
          <section style={{ margin: '4rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ color: accentColor, fontSize: '0.88rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Core Deliverables</span>
              <h2 style={{ fontSize: '2.4rem', color: '#fff', marginTop: '0.5rem' }}>Engineered For Production Scale</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {capabilities.map((cap, cIdx) => (
                <div
                  key={cIdx}
                  style={{
                    background: 'rgba(15, 15, 25, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '18px',
                    padding: '2.2rem 1.8rem',
                    backdropFilter: 'blur(12px)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease'
                  }}
                >
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '14px',
                    background: `rgba(99, 102, 241, 0.12)`,
                    border: `1px solid rgba(99, 102, 241, 0.25)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    color: accentColor
                  }}>
                    <SmartIcon icon={cap.icon || '⚡'} size={26} color={accentColor} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', color: '#F9FAFB', marginBottom: '0.75rem' }}>{cap.title}</h3>
                  <p style={{ fontSize: '0.94rem', color: '#9CA3AF', lineHeight: 1.6, margin: 0 }}>{cap.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack Banner */}
        {techStack.length > 0 && (
          <section style={{ margin: '4rem 0', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', padding: '2.5rem 2rem' }}>
            <span style={{ color: accentColor, fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', textAlign: 'center', marginBottom: '1.5rem' }}>
              Battle-Tested Technologies
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  style={{
                    padding: '8px 18px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '9999px',
                    color: '#E5E7EB',
                    fontSize: '0.9rem',
                    fontWeight: 500
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Process Steps */}
        {processSteps.length > 0 && (
          <section style={{ margin: '5rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ color: accentColor, fontSize: '0.88rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Delivery Framework</span>
              <h2 style={{ fontSize: '2.4rem', color: '#fff', marginTop: '0.5rem' }}>From Scoping to Production</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {processSteps.map((step, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    background: 'rgba(15, 15, 25, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '16px',
                    padding: '2rem 1.5rem',
                    position: 'relative'
                  }}
                >
                  <span style={{ fontSize: '2.8rem', fontWeight: 900, color: 'rgba(255,255,255,0.07)', position: 'absolute', top: '12px', right: '16px' }}>
                    0{sIdx + 1}
                  </span>
                  <h4 style={{ fontSize: '1.2rem', color: accentColor, marginBottom: '0.6rem' }}>{step.step}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#9CA3AF', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Trust Layer */}
        <ServiceTrustLayer />

        {/* FAQs */}
        {faqs.length > 0 && (
          <section style={{ margin: '5rem 0' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '2.5rem', color: '#fff' }}>
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </section>
        )}
      </div>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="demo"
        productName={`${serviceName} Consultation`}
        productId={currentUrl.replace(/[^a-zA-Z0-9]/g, '-')}
      />
    </div>
  );
}
