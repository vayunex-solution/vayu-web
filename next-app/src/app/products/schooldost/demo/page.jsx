'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../../../components/common/SEO';
import Breadcrumbs from '../../../../components/common/Breadcrumbs';
import emailjs from 'emailjs-com';
import { trackDemoRequest } from '../../../../utils/analytics';
import '../../../../styles/InnerPage.css';
import '../../../../styles/ProductPage.css';

export default function SchooldostDemoPage() {
  const [formData, setFormData] = useState({
    institutionName: '',
    contactName: '',
    designation: 'Principal / Director',
    email: '',
    phone: '',
    studentCount: '1,000 - 2,500',
    preferredDate: '',
    interestedModules: ['Fee Management', 'Attendance & Bus GPS']
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const modulesList = [
    'Admissions & Enrollment',
    'Fee Management & UPI Gateway',
    'Attendance & Biometric Flap',
    'Live School Bus GPS Tracking',
    'CBSE / ICSE Report Card Engine',
    'Parent-Teacher Mobile App',
    'Library & Inventory System'
  ];

  const handleModuleToggle = (mod) => {
    if (formData.interestedModules.includes(mod)) {
      setFormData({
        ...formData,
        interestedModules: formData.interestedModules.filter(m => m !== mod)
      });
    } else {
      setFormData({
        ...formData,
        interestedModules: [...formData.interestedModules, mod]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    const serviceID = 'service_9esxtop';
    const templateID = 'template_2xw667y';
    const userID = 'UCd4OiGAJxWBBo0J6';

    const message = `SchoolDost Institutional Demo Request:
Institution: ${formData.institutionName}
Contact Person: ${formData.contactName} (${formData.designation})
Email: ${formData.email}
Phone: ${formData.phone}
Total Students: ${formData.studentCount}
Preferred Date/Time: ${formData.preferredDate || 'Earliest Available'}
Modules Requested: ${formData.interestedModules.join(', ')}

--
Tracking:
source=schooldost_demo_page
product=schooldost`;

    emailjs.send(serviceID, templateID, {
      name: formData.contactName,
      email: formData.email,
      subject: `[INSTITUTIONAL DEMO] ${formData.institutionName} - SchoolDost`,
      message: message
    }, userID).then(() => {
      setStatus('success');
      trackDemoRequest('SchoolDost Enterprise Demo');

      // Dispatch to database for admin telemetry
      try {
        fetch('https://api.web.vayunexsolution.com/api/analytics/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            eventType: 'lead_captured',
            pageUrl: '/products/schooldost/demo',
            sessionId: sessionStorage.getItem('vayunex_session_id') || 'sess_direct',
            product: 'SchoolDost',
            leadType: 'institutional_demo',
            leadData: formData
          })
        }).catch(() => {});
      } catch (err) {}
    }).catch(() => {
      setStatus('error');
    });
  };

  return (
    <div className="product-page inner-page">
      <SEO
        title="Schedule SchoolDost Demo | Live Institutional Walkthrough"
        description="Book a personalized live demonstration of SchoolDost School ERP. See automated fee collection, RFID bus tracking, and report card modules in action."
        canonicalUrl="https://www.vayunexsolution.com/products/schooldost/demo"
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Products', to: '/products' },
            { label: 'SchoolDost', to: '/products/schooldost' },
            { label: 'Book Demo', to: '/products/schooldost/demo' }
          ]}
        />

        <section style={{ textAlign: 'center', padding: '3.5rem 0 2rem' }}>
          <div className="badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '9999px', color: '#10B981', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <span>📅 Personalized Walkthrough</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1rem', color: '#F9FAFB' }}>
            Experience <span style={{ color: '#10B981' }}>SchoolDost</span> in Action
          </h1>
          <p style={{ maxWidth: '680px', margin: '0 auto', color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Schedule a 30-minute tailored demonstration for your management committee and administrative heads.
          </p>
        </section>

        {/* Demo Booking Grid */}
        <div style={{ maxWidth: '900px', margin: '2.5rem auto 5rem', background: 'rgba(15, 15, 25, 0.8)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '24px', padding: '3rem 2.5rem', backdropFilter: 'blur(16px)' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', border: '2px solid #10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', color: '#10B981', fontSize: '2.5rem' }}>
                ✓
              </div>
              <h2 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '1rem' }}>Demo Request Confirmed!</h2>
              <p style={{ color: '#9CA3AF', fontSize: '1.1rem', maxWidth: '540px', margin: '0 auto 2rem' }}>
                Thank you, {formData.contactName}. Our education technology specialist will reach out within 2 hours to confirm your video walkthrough meeting.
              </p>
              <Link href="/products/schooldost" style={{ display: 'inline-block', background: '#10B981', color: '#000', fontWeight: 700, padding: '14px 28px', borderRadius: '10px' }}>
                Return to SchoolDost Overview
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#D1D5DB', fontSize: '0.9rem', marginBottom: '8px', fontWeight: 500 }}>Institution Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. St. Xavier International School"
                    value={formData.institutionName}
                    onChange={e => setFormData({ ...formData, institutionName: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', color: '#fff', fontSize: '1rem', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#D1D5DB', fontSize: '0.9rem', marginBottom: '8px', fontWeight: 500 }}>Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Rajesh Sharma"
                    value={formData.contactName}
                    onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', color: '#fff', fontSize: '1rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#D1D5DB', fontSize: '0.9rem', marginBottom: '8px', fontWeight: 500 }}>Official Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="principal@school.edu.in"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', color: '#fff', fontSize: '1rem', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#D1D5DB', fontSize: '0.9rem', marginBottom: '8px', fontWeight: 500 }}>Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', color: '#fff', fontSize: '1rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#D1D5DB', fontSize: '0.9rem', marginBottom: '8px', fontWeight: 500 }}>Approximate Student Strength</label>
                  <select
                    value={formData.studentCount}
                    onChange={e => setFormData({ ...formData, studentCount: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', background: '#121224', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', color: '#fff', fontSize: '1rem', outline: 'none' }}
                  >
                    <option value="Under 500">Under 500 Students</option>
                    <option value="500 - 1,000">500 - 1,000 Students</option>
                    <option value="1,000 - 2,500">1,000 - 2,500 Students</option>
                    <option value="2,500+">2,500+ Students (Multi-Campus)</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', color: '#D1D5DB', fontSize: '0.9rem', marginBottom: '8px', fontWeight: 500 }}>Preferred Demonstration Date / Slot</label>
                  <input
                    type="text"
                    placeholder="e.g. Next Tuesday at 11:00 AM"
                    value={formData.preferredDate}
                    onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', color: '#fff', fontSize: '1rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: '#D1D5DB', fontSize: '0.9rem', marginBottom: '12px', fontWeight: 500 }}>Modules of Highest Interest</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {modulesList.map((mod, mIdx) => {
                    const isSelected = formData.interestedModules.includes(mod);
                    return (
                      <button
                        type="button"
                        key={mIdx}
                        onClick={() => handleModuleToggle(mod)}
                        style={{
                          padding: '8px 16px',
                          borderRadius: '9999px',
                          border: isSelected ? '1px solid #10B981' : '1px solid rgba(255,255,255,0.12)',
                          background: isSelected ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255,255,255,0.03)',
                          color: isSelected ? '#10B981' : '#9CA3AF',
                          cursor: 'pointer',
                          fontSize: '0.88rem'
                        }}
                      >
                        {isSelected ? '✓ ' : '+ '}{mod}
                      </button>
                    );
                  })}
                </div>
              </div>

              {status === 'error' && (
                <div style={{ color: '#EF4444', fontSize: '0.9rem', padding: '12px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px' }}>
                  Failed to send demo request. Please check your internet or reach us directly on WhatsApp (+91 89307 33725).
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                style={{
                  marginTop: '1rem',
                  background: '#10B981',
                  color: '#000',
                  fontWeight: 700,
                  padding: '16px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '1.05rem',
                  cursor: 'pointer'
                }}
              >
                {status === 'submitting' ? 'Scheduling Demo...' : 'Book Confirmed Demo Session →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
