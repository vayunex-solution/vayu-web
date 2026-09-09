'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const CityTemplate = ({ city = 'chandigarh' }) => {
    const rawCity = city || 'chandigarh';
    const formattedCity = rawCity.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const pageUrl = `https://www.vayunexsolution.com/city/${rawCity}/`;

    const cityFaqs = [
        {
            question: `Why do enterprises in ${formattedCity} partner with Vayunex Solution?`,
            answer: `Businesses in ${formattedCity} choose Vayunex Solution for our proven dual-engine capabilities: enterprise-grade custom engineering (Next.js, AI/ML, cloud architecture) paired with proprietary ready-to-deploy SaaS platforms like PayNex and Jwelnex ERP.`
        },
        {
            question: `Does Vayunex Solution provide on-site technical consulting in ${formattedCity}?`,
            answer: `Yes, our senior engineering leads and architects provide hybrid on-site workshops, architectural audits, and dedicated sprint planning for enterprise clients across ${formattedCity} and surrounding industrial zones.`
        },
        {
            question: `What proprietary software products does Vayunex offer to businesses in ${formattedCity}?`,
            answer: `We deliver five proprietary technology platforms: SocialNex (AI social media command center), SchoolDost (verified academic student network), PayNex (GST-compliant billing & UPI infrastructure), Jwelnex ERP (jewellery RFID inventory system), and InventoryNex (multi-warehouse stock telemetry).`
        },
        {
            question: `How fast can Vayunex deploy dedicated engineering teams in ${formattedCity}?`,
            answer: `Through our specialized tech recruitment and staff augmentation pipeline, we deploy pre-screened senior full-stack and AI engineers within 7 business days, backed by our 90-day replacement guarantee.`
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "@id": `${pageUrl}#localbusiness`,
                "name": `Vayunex Solution - ${formattedCity}`,
                "url": pageUrl,
                "telephone": "+91-8930733725",
                "email": "contact@vayunexsolution.com",
                "priceRange": "$$",
                "image": "https://www.vayunexsolution.com/images/og-image.jpg",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": formattedCity,
                    "addressRegion": "Punjab/Haryana/NCR",
                    "addressCountry": "IN"
                },
                "areaServed": {
                    "@type": "City",
                    "name": formattedCity
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:30",
                    "closes": "18:30"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": `IT & Software Services in ${formattedCity}`,
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Enterprise Web & SaaS Engineering"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "AI & Data Science Development"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Technical Hiring & Staff Augmentation"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "FAQPage",
                "@id": `${pageUrl}#faq`,
                "mainEntity": cityFaqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    };

    return (
        <div className="programmatic-page inner-page" style={{ paddingTop: '110px', minHeight: '80vh', paddingBottom: '80px' }}>
            <SEO 
                title={`Top IT & Software Company in ${formattedCity} | Vayunex Solution`}
                description={`Looking for the premier IT & software development company in ${formattedCity}? Vayunex Solution delivers enterprise web platforms, custom AI systems, and SaaS products.`}
                keywords={`IT company ${rawCity}, software development ${rawCity}, web development ${rawCity}, AI company ${rawCity}, tech recruitment ${rawCity}`}
                canonicalUrl={pageUrl}
                structuredData={schema}
            />
            
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Breadcrumbs
                    items={[
                        { label: 'Locations', to: '/contact' },
                        { label: formattedCity, to: `/city/${rawCity}` }
                    ]}
                />

                {/* Hero Header */}
                <div style={{ marginTop: '2rem', marginBottom: '3.5rem' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '6px 16px',
                        borderRadius: '999px',
                        background: 'rgba(0, 242, 254, 0.08)',
                        border: '1px solid rgba(0, 242, 254, 0.25)',
                        color: '#00f2fe',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        marginBottom: '1rem'
                    }}>
                        Regional Enterprise Hub • {formattedCity}
                    </span>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '1.25rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                        Enterprise IT &amp; Software Engineering in <span style={{ background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{formattedCity}</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '820px', lineHeight: 1.7, margin: 0 }}>
                        Empowering leading businesses across {formattedCity} with high-velocity software engineering, production AI agents, automated SaaS platforms, and dedicated full-stack development squads.
                    </p>
                </div>

                {/* Core Services Grid */}
                <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                    Enterprise Engineering Solutions for {formattedCity}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem', marginBottom: '4rem' }}>
                    <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem', transition: 'transform 0.2s ease' }}>
                        <h3 style={{ fontSize: '1.3rem', color: '#00f2fe', marginBottom: '0.75rem' }}>Enterprise Web &amp; SaaS Systems</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                            Modern Next.js 14 applications, microservices backends, and multi-tenant cloud architectures designed for high concurrency and zero downtime.
                        </p>
                        <Link to="/services/web-development" style={{ color: '#00f2fe', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '1rem' }}>
                            Explore Web Services →
                        </Link>
                    </div>
                    <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.3rem', color: '#8B5CF6', marginBottom: '0.75rem' }}>Production AI &amp; Data Science</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                            Custom RAG knowledge bases, computer vision pipelines, and autonomous agent workflows directed by senior AI architects.
                        </p>
                        <Link to="/services/ai-data-science" style={{ color: '#8B5CF6', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '1rem' }}>
                            Explore AI Solutions →
                        </Link>
                    </div>
                    <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.3rem', color: '#10B981', marginBottom: '0.75rem' }}>Pre-Screened Tech Hiring</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                            Onboard senior React, Node.js, and DevOps engineers in {formattedCity} within 7 business days with a 90-day replacement guarantee.
                        </p>
                        <Link to="/services/recruitment" style={{ color: '#10B981', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '1rem' }}>
                            Hire Tech Talent →
                        </Link>
                    </div>
                </div>

                {/* Proprietary Product Suite Spotlight */}
                <div style={{ background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.05), rgba(79, 172, 254, 0.02))', border: '1px solid rgba(0, 242, 254, 0.15)', borderRadius: '20px', padding: '2.5rem', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                        Proprietary SaaS Software Available in {formattedCity}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', marginBottom: '2rem', lineHeight: 1.6 }}>
                        In addition to bespoke engineering, organizations in {formattedCity} deploy our ready-to-scale proprietary business platforms:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                        <Link to="/products/socialnex" style={{ padding: '1.25rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)', textDecoration: 'none', color: 'inherit' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#8B5CF6', textTransform: 'uppercase' }}>AI Marketing</span>
                            <h4 style={{ margin: '0.4rem 0', color: 'var(--text-primary)' }}>SocialNex</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Automated social command center.</p>
                        </Link>
                        <Link to="/products/schooldost" style={{ padding: '1.25rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)', textDecoration: 'none', color: 'inherit' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#06B6D4', textTransform: 'uppercase' }}>EdTech Network</span>
                            <h4 style={{ margin: '0.4rem 0', color: 'var(--text-primary)' }}>SchoolDost</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Verified student campus network.</p>
                        </Link>
                        <Link to="/products/paynex" style={{ padding: '1.25rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)', textDecoration: 'none', color: 'inherit' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#10B981', textTransform: 'uppercase' }}>FinTech Billing</span>
                            <h4 style={{ margin: '0.4rem 0', color: 'var(--text-primary)' }}>PayNex</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>GST invoicing &amp; UPI infrastructure.</p>
                        </Link>
                        <Link to="/products/jwelnex" style={{ padding: '1.25rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)', textDecoration: 'none', color: 'inherit' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#F59E0B', textTransform: 'uppercase' }}>Retail ERP</span>
                            <h4 style={{ margin: '0.4rem 0', color: 'var(--text-primary)' }}>Jwelnex ERP</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>RFID jewellery showroom system.</p>
                        </Link>
                        <Link to="/products/inventorynex" style={{ padding: '1.25rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)', textDecoration: 'none', color: 'inherit' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#F97316', textTransform: 'uppercase' }}>Supply Chain</span>
                            <h4 style={{ margin: '0.4rem 0', color: 'var(--text-primary)' }}>InventoryNex</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Multi-warehouse stock telemetry.</p>
                        </Link>
                    </div>
                </div>

                {/* Localized FAQ Section (AEO & GEO) */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                        Frequently Asked Questions • {formattedCity}
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {cityFaqs.map((faq, idx) => (
                            <div key={idx} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 0.5rem' }}>
                                    {faq.question}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Regional CTA */}
                <div style={{ textAlign: 'center', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '3rem 2rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                        Ready to Accelerate Your Business in {formattedCity}?
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
                        Connect directly with Ved Prakash and Sandeep Kumar's engineering team for an architectural consultation and milestone roadmap.
                    </p>
                    <Link to="/contact" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.85rem 2rem',
                        borderRadius: '999px',
                        background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
                        color: '#000',
                        fontWeight: '700',
                        textDecoration: 'none',
                        boxShadow: '0 4px 14px rgba(0, 242, 254, 0.3)'
                    }}>
                        Schedule a Consultation →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CityTemplate;
