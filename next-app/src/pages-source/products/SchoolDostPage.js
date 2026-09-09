'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import FAQAccordion from '../../components/common/FAQAccordion';
import ServiceTrustLayer from '../../components/common/ServiceTrustLayer';
import LeadCaptureModal from '../../components/common/LeadCaptureModal';
import schooldostHero from '../../assets/images/schooldost-hero.webp';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import QuickAnswers from '../../components/common/QuickAnswers';
import ProductSchema from '../../components/common/ProductSchema';
import { getProductById } from '../../data/products';
import './ProductPage.css';

const SchoolDostPage = () => {
    const [heroRef] = useScrollAnimation();
    const [problemRef] = useScrollAnimation();
    const [featuresRef] = useScrollAnimation();
    const [outcomesRef] = useScrollAnimation();
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openEarlyAccessModal = () => setIsModalOpen(true);

    const problems = [
        { icon: 'fas fa-user-secret', title: 'Fake Profiles & Bots', desc: 'Mainstream social apps are flooded with strangers, spam, and unverified users, making them unsafe and irrelevant for students.' },
        { icon: 'fas fa-users-slash', title: 'Fragmented Campus Life', desc: 'Seniors, juniors, and alumni are disconnected because campus communication is scattered across dozens of WhatsApp groups.' },
        { icon: 'fas fa-search', title: 'Hard to Find "Your Tribe"', desc: 'It is incredibly difficult to find students on your campus who share your specific academic interests, hobbies, or career goals.' }
    ];

    const features = [
        { icon: 'fas fa-id-card', title: 'Verified Students Only', desc: 'Strict university email and ID verification ensures that every single profile belongs to a real college student.' },
        { icon: 'fas fa-handshake', title: 'Smart Matching', desc: 'Our algorithm connects you with peers who share your exact interests, skills, or professional aspirations.' },
        { icon: 'fas fa-newspaper', title: 'Campus Feed', desc: 'Stay updated on what is happening at your specific university—from club events to exam schedules.' },
        { icon: 'fas fa-comments', title: 'Real-Time Chat & Communities', desc: 'Join hyper-local micro-communities (e.g., "Delhi Univ Coders") and chat securely without sharing your phone number.' },
        { icon: 'fas fa-store', title: 'Student Marketplace', desc: 'Buy, sell, or trade textbooks, electronics, and dorm essentials securely with verified peers.' },
        { icon: 'fas fa-gamepad', title: 'Gamification & Rewards', desc: 'Earn reputation points for helping others, hosting events, or contributing to campus discussions.' }
    ];

    const outcomes = [
        { number: '100%', title: 'Verified Users', desc: 'No bots. Real academic network.' },
        { number: '24/7', title: 'Campus Pulse', desc: 'Never miss an event or notice.' },
        { number: 'Infinite', title: 'Connections', desc: 'Find peer mentors and lifelong friends.' }
    ];

    const audience = [
        { icon: 'fas fa-user-graduate', title: 'College Students', desc: 'Find study partners, roommates, and friends who actually understand your vibe.' },
        { icon: 'fas fa-university', title: 'Universities & Clubs', desc: 'Broadcast official events and manage student organizations efficiently.' },
        { icon: 'fas fa-briefcase', title: 'Campus Ambassadors', desc: 'Build your leadership profile and network with peers across India.' }
    ];

    const faqs = [
        {
            question: "How do you verify that someone is a real student?",
            answer: "We use a multi-step verification process requiring either a valid active university/college email address or manual review of a valid college student ID card."
        },
        {
            question: "Is my data private and secure?",
            answer: "Privacy is our core foundation. We do not sell student data to third parties, and users have complete control over who can see their profile and contact them."
        },
        {
            question: "Can I connect with students from other colleges?",
            answer: "Yes. While your default feed is hyper-localized to your specific campus, you can join national academic communities and connect with peers across India."
        },
        {
            question: "Is the app free to use?",
            answer: "Yes, SchoolDost is completely free for students. We believe authentic campus community connection should not sit behind a paywall."
        },
        {
            question: "How can student clubs or universities partner with SchoolDost?",
            answer: "University student councils and registered clubs can claim verified institutional pages to broadcast campus fests, hackathons, and announcements directly to verified students."
        }
    ];

    return (
        <main className="product-page" style={{ '--product-accent': '#06B6D4' }}>
            <SEO 
                title="SchoolDost | Verified Student Network & Campus Communities"
                description="The verified student-only network built for genuine campus connections, peer mentorship, and academic micro-communities."
                keywords="student network, verified college students, campus app, student marketplace, university communities"
                canonicalUrl="https://vayunexsolution.com/products/schooldost"
            />
            <ProductSchema product={getProductById('schooldost')} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Breadcrumbs />
                <QuickAnswers 
                    title="What is SchoolDost?"
                    answer="SchoolDost is a verified student network and campus community platform. It connects verified students across colleges and academic institutions, facilitating authentic peer interactions, campus feeds, interest-based communities, and collaborative academic discovery in a safe, verified environment."
                />
            </div>

            {/* 1. HERO SECTION */}
            <section className="product-hero" ref={heroRef}>
                <div className="product-hero-bg">
                    <div className="product-hero-orb" style={{ background: '#06B6D4', top: '-20%', right: '-10%', width: '600px', height: '600px' }} />
                    <div className="product-hero-grid" />
                </div>
                <div className="product-hero-container">
                    <div className="product-hero-content">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <span className="product-eyebrow" style={{ margin: 0 }}>Verified Student Network</span>
                            <span style={{ padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em', borderRadius: '9999px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                                LIVE
                            </span>
                        </div>
                        <h1 className="product-hero-title">Find Your SchoolDost. <span style={{ color: 'var(--product-accent)' }}>For Real.</span></h1>
                        <p className="product-hero-subtext">Students aren't looking for another generic social network—they are looking for their tribe. Join the verified, student-exclusive platform built for genuine campus connections.</p>
                        <div className="product-hero-cta">
                            <a href="https://schooldost.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                Explore SchoolDost <i className="fas fa-external-link-alt" style={{ marginLeft: '8px' }}></i>
                            </a>
                            <a href="#features" className="btn-secondary">
                                Platform Overview
                            </a>
                        </div>
                    </div>
                    <div className="product-hero-visual">
                        <img src={schooldostHero?.src || schooldostHero || "/images/schooldost-hero.webp"} alt="SchoolDost Verified Student Platform Interface" />
                    </div>
                </div>
            </section>

            {/* 2 & 3. PROBLEM & COST OF INACTION */}
            <section className="product-section bg-alt" ref={problemRef}>
                <div className="section-container">
                    <div className="section-header-center">
                        <h2 className="section-title">The Problem With Modern Social Media</h2>
                        <p className="section-subtitle">College memories are built through people, but finding the right people on platforms filled with bots and strangers is nearly impossible.</p>
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
                        <h3>Don't Miss Out On Your College Experience</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>The network you build in college shapes your future. Relying on chaotic WhatsApp groups means missing out on lifelong friendships and critical peer mentorship.</p>
                    </div>
                </div>
            </section>

            {/* 4 & 5. INTRO & FEATURES */}
            <section id="features" className="product-section" ref={featuresRef}>
                <div className="section-container">
                    <div className="section-header-left">
                        <h2 className="section-title">A Network Built <span style={{ color: 'var(--product-accent)' }}>For Verified Students</span></h2>
                        <p className="section-subtitle">SchoolDost is strictly gated. We built the features students actually need, completely isolated from the noise of the outside world.</p>
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
                        <h2 className="section-title">A Safer, Smarter Campus Life</h2>
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
                        <h2 className="section-title">Made For Indian Colleges</h2>
                        <p className="section-subtitle">Whether you are a fresher looking for friends or a senior organizing a fest, SchoolDost is your digital campus.</p>
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
                <FAQAccordion faqs={faqs} title="Common Questions About SchoolDost" />
            </div>

            {/* 11 & 12. CTA */}
            <section className="product-cta-section">
                <div className="product-cta-bg" />
                <div className="product-cta-content">
                    <h2>Ready to Find <span style={{ color: 'var(--product-accent)' }}>Your Tribe</span>?</h2>
                    <p>Join verified students already connecting on SchoolDost.</p>
                    <div className="product-hero-cta" style={{ justifyContent: 'center', marginTop: '2rem' }}>
                        <a href="https://schooldost.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                            Explore SchoolDost <i className="fas fa-external-link-alt" style={{ marginLeft: '8px' }}></i>
                        </a>
                    </div>
                </div>
            </section>

            <LeadCaptureModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                mode="early-access"
                productName="SchoolDost"
                productId="schooldost"
            />
        </main>
    );
};

export default SchoolDostPage;
