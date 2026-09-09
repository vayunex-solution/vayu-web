'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import FAQAccordion from '../../components/common/FAQAccordion';
import ServiceTrustLayer from '../../components/common/ServiceTrustLayer';
import LeadCaptureModal from '../../components/common/LeadCaptureModal';
import socialnexHero from '../../assets/images/socialnex-hero.webp';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import QuickAnswers from '../../components/common/QuickAnswers';
import ProductSchema from '../../components/common/ProductSchema';
import { getProductById } from '../../data/products';
import './ProductPage.css';

const SocialNexPage = () => {
    const [heroRef] = useScrollAnimation();
    const [problemRef] = useScrollAnimation();
    const [featuresRef] = useScrollAnimation();
    const [outcomesRef] = useScrollAnimation();
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openEarlyAccessModal = () => setIsModalOpen(true);

    const problems = [
        { icon: 'fas fa-layer-group', title: 'Content Chaos', desc: 'Juggling spreadsheets, messy Google Drives, and scattered chat threads just to plan a single week of content.' },
        { icon: 'fas fa-clock', title: 'Missed Schedules', desc: 'Forgetting to post during peak hours because your team is overwhelmed with manual publishing tasks.' },
        { icon: 'fas fa-eye-slash', title: 'Zero Visibility', desc: 'No clear understanding of which posts are actually driving engagement and reach across different channels.' }
    ];

    const features = [
        { icon: 'fas fa-robot', title: 'AI Copy Co-Pilot', desc: 'Draft engaging captions, hooks, and hashtags tailored to your brand voice in seconds.' },
        { icon: 'fas fa-calendar-alt', title: 'Omnichannel Content Calendar', desc: 'Visualize your entire publishing strategy across channels in one intuitive drag-and-drop calendar interface.' },
        { icon: 'fas fa-paper-plane', title: 'Automated Multi-Channel Dispatch', desc: 'Schedule and coordinate post campaigns simultaneously with visual post previews.' },
        { icon: 'fas fa-users', title: 'Team Approval Workflows', desc: 'Streamline client draft approvals and team collaboration before any scheduled content goes live.' },
        { icon: 'fas fa-chart-line', title: 'Engagement Analytics', desc: 'Track audience velocity, post impressions, and top-performing themes in real-time.' },
        { icon: 'fas fa-comments', title: 'Unified Social Inbox', desc: 'Monitor audience mentions and comments in a consolidated stream to accelerate response times.' }
    ];

    const outcomes = [
        { number: '10x', title: 'Publishing Cadence', desc: 'Scale your content rhythm.' },
        { number: '15h', title: 'Saved Weekly', desc: 'Eliminate manual publishing.' },
        { number: '100%', title: 'Brand Consistency', desc: 'Maintain a unified voice.' }
    ];

    const audience = [
        { icon: 'fas fa-bullhorn', title: 'Marketing Agencies', desc: 'Coordinate multi-brand calendars and client approvals from a single operational workspace.' },
        { icon: 'fas fa-rocket', title: 'Growth Startups', desc: 'Maintain a consistent organic social presence to build audience momentum.' },
        { icon: 'fas fa-building', title: 'In-House Brand Teams', desc: 'Streamline the content review pipeline between copywriters, designers, and brand managers.' }
    ];

    const faqs = [
        {
            question: "How do I access SocialNex during the Beta period?",
            answer: "SocialNex is currently in Beta Available status. You can access the live beta platform directly at socialnex.vayunexsolution.com to test scheduling and calendar workflows."
        },
        {
            question: "Can multiple team members collaborate on drafts?",
            answer: "Yes. SocialNex includes team roles and approval workflows so content creators can draft posts and managers can review before scheduling."
        },
        {
            question: "How does the AI copy assistant work?",
            answer: "The integrated AI co-pilot assists with generating creative headline angles, caption drafts, and topic ideation based on your brand guidelines."
        },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, our product engineering team actively monitors beta feedback and provides prompt technical assistance."
        }
    ];

    return (
        <main className="product-page" style={{ '--product-accent': '#8B5CF6' }}>
            <SEO 
                title="SocialNex | Social Media Command Center"
                description="Create, schedule, manage and analyze your social presence from one unified platform. Automate your social media operations."
                keywords="social media management tool, automated publishing, AI content generator, social media calendar"
                canonicalUrl="https://vayunexsolution.com/products/socialnex"
            />
            <ProductSchema product={getProductById('socialnex')} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Breadcrumbs />
                <QuickAnswers 
                    title="What is SocialNex?"
                    answer="SocialNex is an AI-assisted social media command center. It empowers marketing teams and agencies to schedule multi-channel content, visualize publishing calendars, leverage an AI copy co-pilot, and analyze cross-platform audience engagement from a single dashboard."
                />
            </div>

            {/* 1. HERO SECTION */}
            <section className="product-hero" ref={heroRef}>
                <div className="product-hero-bg">
                    <div className="product-hero-orb" style={{ background: '#8B5CF6', top: '-20%', left: '-10%', width: '600px', height: '600px' }} />
                    <div className="product-hero-grid" />
                </div>
                <div className="product-hero-container">
                    <div className="product-hero-content">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <span className="product-eyebrow" style={{ margin: 0 }}>Social Operations Platform</span>
                            <span style={{ padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em', borderRadius: '9999px', background: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
                                BETA AVAILABLE
                            </span>
                        </div>
                        <h1 className="product-hero-title">Manage Every Social Channel From <span style={{ color: 'var(--product-accent)' }}>One Command Center.</span></h1>
                        <p className="product-hero-subtext">Stop logging into separate tools. Plan, schedule, draft, and track your brand's digital social presence with visual calendars and AI copy co-pilots.</p>
                        <div className="product-hero-cta">
                            <a href="https://socialnex.vayunexsolution.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                Access Beta <i className="fas fa-external-link-alt" style={{ marginLeft: '8px' }}></i>
                            </a>
                            <a href="#features" className="btn-secondary">
                                Explore Features
                            </a>
                        </div>
                    </div>
                    <div className="product-hero-visual">
                        <img src={socialnexHero?.src || socialnexHero || "/images/socialnex-hero.webp"} alt="SocialNex Command Center Interface" />
                    </div>
                </div>
            </section>

            {/* 2 & 3. PROBLEM & COST OF INACTION */}
            <section className="product-section bg-alt" ref={problemRef}>
                <div className="section-container">
                    <div className="section-header-center">
                        <h2 className="section-title">The Friction in Modern Content Operations</h2>
                        <p className="section-subtitle">When your team is bogged down by manual scheduling across fragmented interfaces, content quality and consistency suffer.</p>
                    </div>
                    <div className="problem-grid">
                        {problems.map((prob, idx) => (
                            <div key={idx} className="problem-card">
                                <div className="problem-icon">
                                    <i className={prob.icon}></i>
                                </div>
                                <h3>{prob.title}</h3>
                                <p>{prob.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="cost-banner">
                        <h3>Inconsistent Posting Slows Growth</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Social algorithms prioritize consistency. Without a centralized operations calendar, teams miss optimal publishing windows and waste strategic momentum.</p>
                    </div>
                </div>
            </section>

            {/* 4 & 5. INTRO & FEATURES */}
            <section id="features" className="product-section" ref={featuresRef}>
                <div className="section-container">
                    <div className="section-header-left">
                        <h2 className="section-title">Unified Workflow <span style={{ color: 'var(--product-accent)' }}>Architecture</span></h2>
                        <p className="section-subtitle">Everything required to coordinate multi-channel social media publishing without operational chaos.</p>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, idx) => (
                            <div key={idx} className="feature-card">
                                <div className="feature-icon">
                                    <i className={feature.icon}></i>
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. OUTCOMES */}
            <section className="product-section bg-alt" ref={outcomesRef}>
                <div className="section-container">
                    <div className="section-header-center">
                        <h2 className="section-title">Operational Velocity</h2>
                    </div>
                    <div className="outcomes-grid">
                        {outcomes.map((outcome, idx) => (
                            <div key={idx} className="outcome-card">
                                <div className="outcome-number">{outcome.number}</div>
                                <div className="outcome-title">{outcome.title}</div>
                                <div className="outcome-desc">{outcome.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. TARGET AUDIENCE */}
            <section className="product-section">
                <div className="section-container">
                    <div className="section-header-center">
                        <h2 className="section-title">Who Uses SocialNex?</h2>
                        <p className="section-subtitle">Built for content creators, high-growth startups, and multi-client marketing agencies.</p>
                    </div>
                    <div className="audience-grid">
                        {audience.map((aud, idx) => (
                            <div key={idx} className="audience-card">
                                <div className="audience-icon">
                                    <i className={aud.icon}></i>
                                </div>
                                <div>
                                    <h4>{aud.title}</h4>
                                    <p>{aud.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9 & 10. TRUST & FAQ */}
            <ServiceTrustLayer />
            
            <div style={{ padding: '50px 0', background: 'var(--bg-primary)' }}>
                <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />
            </div>

            {/* 11 & 12. CTA */}
            <section className="product-cta-section">
                <div className="product-cta-bg" />
                <div className="product-cta-content">
                    <h2>Ready to Experience <span style={{ color: 'var(--product-accent)' }}>SocialNex</span>?</h2>
                    <p>Access the live beta today and transform your team's publishing workflow.</p>
                    <div className="product-hero-cta" style={{ justifyContent: 'center', marginTop: '2rem' }}>
                        <a href="https://socialnex.vayunexsolution.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                            Access Beta <i className="fas fa-external-link-alt" style={{ marginLeft: '8px' }}></i>
                        </a>
                    </div>
                </div>
            </section>

            <LeadCaptureModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                mode="early-access"
                productName="SocialNex"
                productId="socialnex"
            />
        </main>
    );
};

export default SocialNexPage;
