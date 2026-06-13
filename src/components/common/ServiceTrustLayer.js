import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './ServiceTrustLayer.css';

const ServiceTrustLayer = () => {
    const [trustRef, trustVisible] = useScrollAnimation(0.2);

    const trustPillars = [
        {
            icon: 'fas fa-code-branch',
            title: 'Product-Led Engineering',
            desc: 'We architect solutions focused on business outcomes, not just writing lines of code.'
        },
        {
            icon: 'fas fa-server',
            title: 'Real SaaS Experience',
            desc: 'We operate our own proprietary SaaS platforms, giving us deep insight into scalability.'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Security-Focused Development',
            desc: 'Enterprise-grade security standards built into the foundation of every project.'
        },
        {
            icon: 'fas fa-layer-group',
            title: 'Long-Term Architecture',
            desc: 'We design data models and infrastructure capable of handling your 5-year growth trajectory.'
        },
        {
            icon: 'fas fa-user-tie',
            title: 'Direct Founder Access',
            desc: 'You work directly with our senior engineering leadership, eliminating middleman friction.'
        },
        {
            icon: 'fas fa-sync-alt',
            title: 'Continuous Improvement',
            desc: 'Agile methodologies ensuring your product evolves with market demands.'
        }
    ];

    return (
        <section className="service-trust-layer" ref={trustRef}>
            <div className={`container trust-layer-container fade-up ${trustVisible ? 'is-visible' : ''}`}>
                <div className="section-header text-center">
                    <span className="section-badge">Why Vayunex</span>
                    <h2>Engineered for <span className="text-gradient">Enterprise Scale</span></h2>
                    <p className="section-subtitle">We don't just build software; we build high-performance business assets.</p>
                </div>
                
                <div className="trust-pillars-grid">
                    {trustPillars.map((pillar, index) => (
                        <div 
                            key={index} 
                            className="trust-pillar-card"
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            <div className="pillar-icon">
                                <i className={pillar.icon}></i>
                            </div>
                            <div className="pillar-content">
                                <h3>{pillar.title}</h3>
                                <p>{pillar.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceTrustLayer;
