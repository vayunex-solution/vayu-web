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
      category: 'Admissions & Student Lifecycle',
      icon: '🎓',
      features: [
        {
          title: 'Paperless Digital Admissions Portal',
          desc: 'Custom online application forms, digital document verification, merit list generation, and instant student ID allocation.'
        },
        {
          title: '360° Comprehensive Student Dossier',
          desc: 'Single unified profile tracking student medical records, disciplinary history, extracurricular achievements, and multi-year academic progression.'
        },
        {
          title: 'Alumni Network & TC Generation',
          desc: 'One-click automated generation of compliant Transfer Certificates (TC), character certificates, and alumni directory tracking.'
        }
      ]
    },
    {
      category: 'Fee Automation & Financial Ledger',
      icon: '💰',
      features: [
        {
          title: 'Dynamic Multi-Tier Fee Structures',
          desc: 'Configure flexible fee heads (tuition, transport, lab, sports) tailored by grade, scholarship waivers, and sibling concessions.'
        },
        {
          title: 'Instant Online UPI & Card Fee Payment',
          desc: 'Parents pay fees via integrated UPI QR codes or net banking with zero counter queues. Instant digital receipt sent via WhatsApp and email.'
        },
        {
          title: 'Automated Defaulter Recovery Alerts',
          desc: 'Scheduled automated SMS and WhatsApp reminders for overdue payments, complete with custom late fee calculation.'
        }
      ]
    },
    {
      category: 'Attendance, RFID & Fleet Safety',
      icon: '🚌',
      features: [
        {
          title: 'Biometric & RFID Gate Entry Tracking',
          desc: 'Students tap RFID cards or scan biometrics upon entering school gates. Parents receive an instant arrival notification.'
        },
        {
          title: 'Live School Bus GPS Tracking',
          desc: 'Parents and administration view real-time bus locations on mobile maps with geofenced arrival alerts 10 minutes prior to stops.'
        },
        {
          title: 'Driver Speed & Route Telemetry',
          desc: 'Automatic alerts if a school vehicle deviates from planned routes or exceeds authorized school zone speed limits.'
        }
      ]
    },
    {
      category: 'Academics, LMS & Parent Mobile App',
      icon: '📱',
      features: [
        {
          title: 'CBSE & ICSE Compliant Report Cards',
          desc: 'Automate grade calculations, co-scholastic marks, and teacher remarks. Generate beautiful printable report cards with barcode validation.'
        },
        {
          title: 'Daily Digital Homework & Assignment Diary',
          desc: 'Teachers upload worksheets, syllabus outlines, and audio clips directly to student mobile apps with submission deadlines.'
        },
        {
          title: 'Parent-Teacher Communication Hub',
          desc: 'Facilitate direct, respectful two-way messaging between parents and class teachers without exposing personal mobile numbers.'
        }
      ]
    }
  ];

  const faqs = [
    {
      question: 'Can SchoolDost integrate with our existing biometric attendance machines?',
      answer: 'Yes. SchoolDost supports standard TCP/IP biometric fingerprint devices, facial recognition terminals, and RFID flap barriers.'
    },
    {
      question: 'Is student and academic data secure and compliant with data privacy laws?',
      answer: 'Absolutely. All databases are hosted on ISO-certified secure Indian cloud infrastructure with automated daily encrypted backups and strict role-based access.'
    },
    {
      question: 'How long does staff training take for teachers and administrative clerks?',
      answer: 'SchoolDost features an intuitive, zero-training UI. We provide complete onboarding webinars, interactive video guides, and in-person workshops within 3 to 5 business days.'
    }
  ];

  return (
    <div className="product-page inner-page">
      <SEO
        title="SchoolDost Features | Complete School ERP, LMS & Bus Tracking"
        description="Discover SchoolDost ERP features: Digital admissions, automated fee recovery, biometric attendance, GPS bus tracking, and CBSE report card generation."
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

        <section style={{ textAlign: 'center', padding: '4rem 0 3rem' }}>
          <div className="badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '9999px', color: '#10B981', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <span>🏫 Complete Campus Operating System</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.25rem', color: '#F9FAFB' }}>
            Modernize Your Institution with <span style={{ color: '#10B981' }}>SchoolDost</span>
          </h1>
          <p style={{ maxWidth: '760px', margin: '0 auto 2.5rem', color: '#9CA3AF', fontSize: '1.15rem', lineHeight: 1.7 }}>
            Explore every module designed to eliminate paperwork, safeguard student transit, and streamline multi-crore fee collections.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/products/schooldost/demo" className="btn-primary" style={{ background: '#10B981', color: '#000', fontWeight: 700, padding: '14px 28px', borderRadius: '10px' }}>
              Schedule Institutional Demo
            </Link>
            <button onClick={() => setIsModalOpen(true)} className="btn-secondary" style={{ padding: '14px 28px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: '#fff', cursor: 'pointer' }}>
              Download Brochure PDF
            </button>
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
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  borderRadius: '16px',
                  padding: '2rem',
                  backdropFilter: 'blur(12px)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2rem' }}>{pillar.icon}</span>
                  <h3 style={{ fontSize: '1.4rem', color: '#10B981', margin: 0 }}>{pillar.category}</h3>
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
            School Administration FAQ
          </h2>
          <FAQAccordion faqs={faqs} />
        </section>
      </div>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="demo"
        productName="SchoolDost Institutional Overview"
        productId="schooldost"
      />
    </div>
  );
}
