'use client';

import React from 'react';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const IndustryTemplate = ({ industry = 'technology' }) => {
    const rawIndustry = industry || 'technology';
    const formattedIndustry = rawIndustry.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `IT Solutions for ${formattedIndustry} | Vayunex Solution`,
        "description": `Custom enterprise software, AI integration, and digital marketing tailored specifically for the ${formattedIndustry} industry.`
    };

    return (
        <div className="programmatic-page inner-page" style={{ paddingTop: '100px', minHeight: '80vh' }}>
            <SEO 
                title={`IT Solutions & Software for ${formattedIndustry}`}
                description={`Custom enterprise software, AI integration, and digital marketing tailored specifically for the ${formattedIndustry} industry by Vayunex Solution.`}
                keywords={`${rawIndustry} software, IT solutions for ${rawIndustry}, custom ${rawIndustry} development`}
                structuredData={schema}
            />
            
            <div style={{ maxWidth: '1200px', margin: '0 auto 50px', padding: '0 2rem' }}>
                <Breadcrumbs
                    items={[
                        { label: 'Industries', to: '/products' },
                        { label: formattedIndustry, to: `/industries/${rawIndustry}` }
                    ]}
                />
                <h1 style={{ fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '1rem', marginTop: '1.5rem' }}>
                    IT Solutions for the <span style={{ color: 'var(--primary-color)' }}>{formattedIndustry}</span> Industry
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.7 }}>
                    Scalable, enterprise-grade technology designed to solve the unique operational, compliance, and growth challenges of {formattedIndustry} businesses.
                </p>

                <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.8rem' }}>Custom Enterprise Architecture</h3>
                        <p style={{ color: '#9CA3AF', lineHeight: 1.6 }}>Tailored software workflows, ERP integrations, and secure cloud microservices aligned with {formattedIndustry} standards.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.8rem' }}>Automated AI Workflows</h3>
                        <p style={{ color: '#9CA3AF', lineHeight: 1.6 }}>Deploy intelligent document processing, predictive churn analytics, and generative AI co-pilots tailored for {formattedIndustry}.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.8rem' }}>High-Velocity Growth</h3>
                        <p style={{ color: '#9CA3AF', lineHeight: 1.6 }}>Full-funnel organic search visibility, high-conversion landing systems, and performance acquisition pipelines.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustryTemplate;
