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
        { icon: 'fas fa-eye-slash', title: 'Zero Visibility', desc: 'No clear understanding of which posts are actually driving engagement and revenue across different platforms.' }
    ];

    const features = [
        { icon: 'fas fa-robot', title: 'AI Content Generation', desc: 'Generate highly engaging captions, hashtags, and visual concepts tailored to your brand voice in seconds.' },
        { icon: 'fas fa-calendar-alt', title: 'Unified Content Calendar', desc: 'Visualize your entire social strategy across all platforms in one intuitive drag-and-drop calendar interface.' },
        { icon: 'fas fa-paper-plane', title: 'Automated Publishing', desc: 'Schedule posts across Instagram, LinkedIn, X, and Facebook simultaneously without manual intervention.' },
        { icon: 'fas fa-users', title: 'Team Collaboration', desc: 'Assign tasks, leave feedback on drafts, and streamline the approval workflow before anything goes live.' },
        { icon: 'fas fa-chart-line', title: 'Cross-Platform Analytics', desc: 'Track follower growth, engagement rates, and top-performing content across your entire digital footprint.' },
        { icon: 'fas fa-comments', title: 'Unified Inbox', desc: 'Manage comments and messages from all platforms in a single inbox so you never miss a lead.' }
    ];

    const outcomes = [
        { number: '10x', title: 'Content Output', desc: 'Scale your posting frequency.' },
        { number: '15h', title: 'Saved Weekly', desc: 'Eliminate manual publishing.' },
        { number: '100%', title: 'Brand Consistency', desc: 'Maintain a unified voice.' }
    ];

    const audience = [
        { icon: 'fas fa-bullhorn', title: 'Marketing Agencies', desc: 'Manage dozens of client accounts from a single dashboard without password sharing.' },
        { icon: 'fas fa-rocket', title: 'Growth Startups', desc: 'Maintain an aggressive posting schedule to build early traction and community.' },
        { icon: 'fas fa-building', title: 'In-House Teams', desc: 'Streamline the content approval pipeline between creators, managers, and executives.' }
    ];

    const faqs = [
        {
            question: "Which social platforms does SocialNex support?",
            answer: "SocialNex currently supports automated publishing and analytics for Instagram, LinkedIn, Facebook, X (Twitter), and Pinterest."
        },
        {
            question: "Can I collaborate with external clients on the platform?",
            answer: "Yes. You can invite clients with 'Viewer' or 'Approver' permissions so they can review and approve content drafts before they are scheduled."
        },
        {
            question: "How does the AI content generator work?",
            answer: "We use advanced LLMs fine-tuned for social media. You define your brand's tone of voice once, and the AI will generate contextual captions and hashtags based on your prompts."
        },
        {
            question: "Is there a limit to how many posts I can schedule?",
            answer: "Our Pro and Enterprise tiers offer unlimited post scheduling. Starter tiers have generous monthly limits designed for small businesses."
        },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    return (
        <main className="product-page" style={{ '--product-accent': '#8B5CF6' }}>
            <SEO 
                title="SocialNex | Social Media Command Center"
                description="Create, schedule, manage and analyze your social presence from one unified platform. Automate your social media growth."
                keywords="social media management tool, automated publishing, AI content generator, social media calendar"
                canonicalUrl="https://vayunexsolution.com/products/socialnex"
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Breadcrumbs />
                <QuickAnswers 
                    title="What is SocialNex?"
                    answer="SocialNex is an advanced social media management and analytics platform. It empowers brands to schedule posts, monitor audience sentiment, and analyze campaign performance across all major networks from a single, centralized dashboard."
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
                        <span className="product-eyebrow">Social Media Operations</span>
                        <h1 className="product-hero-title">Manage Every Social Channel From <span style={{ color: 'var(--product-accent)' }}>One Command Center.</span></h1>
                        <p className="product-hero-subtext">Stop logging into five different apps. Create, schedule, manage, and analyze your brand's entire social presence from one unified platform.</p>
                        <div className="product-hero-cta">
                            <button onClick={openEarlyAccessModal} className="btn-primary">
                                Request Access <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                            </button>
                            <Link to="/contact?subject=SocialNex%20Demo" className="btn-secondary">
                                Book Demo
                            </Link>
                        </div>
                    </div>
                    <div className="product-hero-visual">
                        <img src={socialnexHero} alt="SocialNex Dashboard Interface" />
                    </div>
                </div>
            </section>

            {/* 2 & 3. PROBLEM & COST OF INACTION */}
            <section className="product-section bg-alt" ref={problemRef}>
                <div className="section-container">
                    <div className="section-header-center">
                        <h2 className="section-title">The Cost of Manual Marketing</h2>
                        <p className="section-subtitle">When your marketing team is bogged down by manual scheduling and platform-switching, strategy and creativity suffer.</p>
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
                        <h3>Inconsistent Posting Kills Growth</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Social algorithms penalize inconsistency. If you aren't maintaining a steady cadence across channels, your competitors are capturing your audience.</p>
                    </div>
                </div>
            </section>

            {/* 4 & 5. INTRO & FEATURES */}
            <section className="product-section" ref={featuresRef}>
                <div className="section-container">
                    <div className="section-header-left">
                        <h2 className="section-title">Your Engine For <span style={{ color: 'var(--product-accent)' }}>Predictable Growth</span></h2>
                        <p className="section-subtitle">SocialNex transforms your content creation pipeline from a chaotic mess into a streamlined, automated assembly line.</p>
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
                        <h2 className="section-title">Measurable Marketing Impact</h2>
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
                        <h2 className="section-title">Built For Content Teams</h2>
                        <p className="section-subtitle">Designed specifically to handle the collaborative workflows required by professional content creators and marketers.</p>
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
                <FAQAccordion faqs={faqs} title="Common Questions About SocialNex" />
            </div>

            {/* 11 & 12. CTA */}
            <section className="product-cta-section">
                <div className="product-cta-bg" />
                <div className="product-cta-content">
                    <h2>Ready to Scale Your <span style={{ color: 'var(--product-accent)' }}>Social Presence</span>?</h2>
                    <p>Join the waitlist to get early access to the ultimate social media command center.</p>
                    <div className="product-hero-cta" style={{ justifyContent: 'center', marginTop: '2rem' }}>
                        <button onClick={openEarlyAccessModal} className="btn-primary">
                            Request Access <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                        </button>
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
