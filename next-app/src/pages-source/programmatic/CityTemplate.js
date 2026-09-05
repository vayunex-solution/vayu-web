'use client';

import React from 'react';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const CityTemplate = ({ city = 'chandigarh' }) => {
    const rawCity = city || 'chandigarh';
    const formattedCity = rawCity.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Top IT Company in ${formattedCity} | Vayunex Solution`,
        "description": `Vayunex Solution is the leading IT and software development company serving businesses in ${formattedCity}.`
    };

    return (
        <div className="programmatic-page inner-page" style={{ paddingTop: '100px', minHeight: '80vh' }}>
            <SEO 
                title={`Top IT & Software Company in ${formattedCity} | Vayunex`}
                description={`Looking for the best IT company in ${formattedCity}? Vayunex Solution provides enterprise software, Web Development, and digital marketing services in ${formattedCity}.`}
                keywords={`IT company ${rawCity}, software development ${rawCity}, web development ${rawCity}, digital marketing ${rawCity}`}
                structuredData={schema}
            />
            
            <div style={{ maxWidth: '1200px', margin: '0 auto 50px', padding: '0 2rem' }}>
                <Breadcrumbs
                    items={[
                        { label: 'Locations', to: '/contact' },
                        { label: formattedCity, to: `/city/${rawCity}` }
                    ]}
                />
                <h1 style={{ fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '1rem', marginTop: '1.5rem' }}>
                    Leading IT &amp; Software Services in <span style={{ color: 'var(--primary-color)' }}>{formattedCity}</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.7 }}>
                    Empowering organizations in {formattedCity} with world-class digital solutions, AI automation, custom SaaS platforms, and dedicated engineering talent.
                </p>

                <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.8rem' }}>Enterprise Web &amp; App Engineering</h3>
                        <p style={{ color: '#9CA3AF', lineHeight: 1.6 }}>Next.js web apps, mobile cross-platform systems, and high-concurrency cloud APIs built for {formattedCity} enterprises.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.8rem' }}>AI Automation &amp; Data Science</h3>
                        <p style={{ color: '#9CA3AF', lineHeight: 1.6 }}>Deploy custom RAG knowledge bases, computer vision, and operational AI agents tailored to regional businesses.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.8rem' }}>Tech Recruitment &amp; Scaling</h3>
                        <p style={{ color: '#9CA3AF', lineHeight: 1.6 }}>Hire pre-screened senior engineers in 7 days with a 90-day replacement guarantee across {formattedCity}.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CityTemplate;
