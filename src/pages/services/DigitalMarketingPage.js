import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import FAQAccordion from '../../components/common/FAQAccordion';
import ServiceTrustLayer from '../../components/common/ServiceTrustLayer';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import QuickAnswers from '../../components/common/QuickAnswers';
import './ServicesPage.css';

const DigitalMarketingPage = () => {
    const [heroRef, heroVisible] = useScrollAnimation();
    const [problemsRef, problemsVisible] = useScrollAnimation();
    const [outcomesRef, outcomesVisible] = useScrollAnimation();
    const [capabilitiesRef, capabilitiesVisible] = useScrollAnimation();
    const [deliverablesRef, deliverablesVisible] = useScrollAnimation();
    const [industriesRef, industriesVisible] = useScrollAnimation();
    const [techRef, techVisible] = useScrollAnimation();
    const [pricingRef, pricingVisible] = useScrollAnimation();
    const [processRef, processVisible] = useScrollAnimation();

    const problemsSolved = [
        { icon: 'fas fa-money-bill-wave', title: 'Wasted Ad Spend', desc: 'Pouring money into campaigns that generate clicks but no qualified conversions.' },
        { icon: 'fas fa-eye-slash', title: 'Zero Brand Visibility', desc: 'Struggling to stand out in a saturated market against established competitors.' },
        { icon: 'fas fa-users-slash', title: 'Low Quality Leads', desc: 'Sales teams wasting hours on unqualified leads that never close.' },
        { icon: 'fas fa-chart-pie', title: 'Unmeasurable ROI', desc: 'Operating blindly without accurate attribution models or tracking data.' }
    ];

    const outcomes = [
        {
            icon: 'fas fa-bullseye',
            title: 'Increase Brand Visibility',
            desc: 'Establish market dominance through targeted, high-frequency digital campaigns.',
            color: '#4facfe'
        },
        {
            icon: 'fas fa-filter',
            title: 'Generate Qualified Leads',
            desc: 'Fill your sales pipeline with high-intent prospects actively seeking your solution.',
            color: '#9f55ff'
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Improve Campaign ROI',
            desc: 'Optimize ad spend to ensure every dollar generates measurable business value.',
            color: '#00d4ff'
        },
        {
            icon: 'fas fa-globe',
            title: 'Strengthen Digital Presence',
            desc: 'Build a cohesive brand narrative across all digital touchpoints and platforms.',
            color: '#ff6b6b'
        }
    ];

    const capabilities = [
        { name: 'Performance Marketing', icon: 'fas fa-ad', color: '#61DAFB' },
        { name: 'Social Media Strategy', icon: 'fas fa-hashtag', color: '#339933' },
        { name: 'Content Marketing', icon: 'fas fa-pen-nib', color: '#3776AB' },
        { name: 'Email Automation', icon: 'fas fa-envelope-open-text', color: '#47A248' },
        { name: 'Conversion Optimization', icon: 'fas fa-mouse-pointer', color: '#FF9900' },
        { name: 'Analytics & Tracking', icon: 'fas fa-chart-bar', color: '#FFCA28' }
    ];

    const services = [
        {
            icon: 'fas fa-bullhorn',
            title: 'Social Media Marketing',
            desc: 'Strategic content creation and management across all social platforms.',
            color: '#E1306C'
        },
        {
            icon: 'fas fa-ad',
            title: 'Paid Advertising',
            desc: 'Meta Ads, Google Ads, and targeted campaigns for maximum ROI.',
            color: '#4267B2'
        },
        {
            icon: 'fas fa-pen-fancy',
            title: 'Content Creation',
            desc: 'Engaging graphics, videos, reels, and copy that converts.',
            color: '#00d4ff'
        },
        {
            icon: 'fas fa-users',
            title: 'Community Management',
            desc: 'Active engagement, comment handling, and brand reputation management.',
            color: '#9f55ff'
        },
        {
            icon: 'fas fa-chart-pie',
            title: 'Analytics & Reporting',
            desc: 'Detailed performance tracking and monthly growth reports.',
            color: '#28a745'
        },
        {
            icon: 'fas fa-camera',
            title: 'Influencer Marketing',
            desc: 'Connecting your brand with relevant influencers for authentic reach.',
            color: '#ff6b6b'
        }
    ];

    const targetAudience = [
        { icon: 'fas fa-rocket', title: 'Startups', desc: 'Generating initial traction and acquiring the first 10,000 active users.', color: '#4facfe' },
        { icon: 'fas fa-store', title: 'E-Commerce Brands', desc: 'Scaling ROAS (Return on Ad Spend) and increasing customer lifetime value.', color: '#9f55ff' },
        { icon: 'fas fa-building', title: 'B2B Enterprises', desc: 'Executing account-based marketing and generating highly qualified inbound leads.', color: '#00d4ff' },
        { icon: 'fas fa-user-md', title: 'Service Providers', desc: 'Dominating local search visibility and driving high-intent booking conversions.', color: '#ff6b6b' }
    ];

    const platforms = [
        { name: 'Instagram', icon: 'fab fa-instagram', color: '#E1306C' },
        { name: 'Facebook', icon: 'fab fa-facebook-f', color: '#4267B2' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin-in', color: '#0077B5' },
        { name: 'YouTube', icon: 'fab fa-youtube', color: '#FF0000' },
        { name: 'Twitter/X', icon: 'fab fa-x-twitter', color: '#fff' },
        { name: 'Google Ads', icon: 'fab fa-google', color: '#4285F4' },
        { name: 'WhatsApp', icon: 'fab fa-whatsapp', color: '#25D366' },
        { name: 'Pinterest', icon: 'fab fa-pinterest', color: '#E60023' }
    ];

    const packages = [
        {
            name: 'Starter',
            price: '₹15,000',
            period: '/month',
            color: '#4facfe',
            features: [
                { text: '2 Social Platforms', included: true },
                { text: '15 Posts/Month', included: true },
                { text: 'Basic Graphics', included: true },
                { text: 'Weekly Reporting', included: true },
                { text: 'Reels/Shorts', included: false },
                { text: 'Paid Ad Management', included: false },
                { text: 'Influencer Outreach', included: false }
            ],
            best: false
        },
        {
            name: 'Growth',
            price: '₹35,000',
            period: '/month',
            color: '#9f55ff',
            features: [
                { text: '4 Social Platforms', included: true },
                { text: '30 Posts/Month', included: true },
                { text: 'Premium Graphics', included: true },
                { text: 'Bi-weekly Reporting', included: true },
                { text: '8 Reels/Month', included: true },
                { text: 'Basic Ad Management', included: true },
                { text: 'Influencer Outreach', included: false }
            ],
            best: true
        },
        {
            name: 'Enterprise',
            price: '₹75,000',
            period: '/month',
            color: '#00d4ff',
            features: [
                { text: 'All Platforms', included: true },
                { text: 'Unlimited Posts', included: true },
                { text: 'Custom Content Strategy', included: true },
                { text: 'Real-Time Dashboard', included: true },
                { text: 'Premium Video Prod', included: true },
                { text: 'Full Ad Management', included: true },
                { text: 'Influencer Campaigns', included: true }
            ],
            best: false
        }
    ];

    const process = [
        { step: '01', title: 'Audit', desc: 'Deep dive into your current metrics, tracking setup, and competitor landscape.' },
        { step: '02', title: 'Strategy', desc: 'Developing a multi-channel growth plan tailored to your unit economics.' },
        { step: '03', title: 'Creation', desc: 'Designing high-converting ad creatives, copy, and landing pages.' },
        { step: '04', title: 'Execution', desc: 'Launching targeted campaigns across search, social, and programmatic networks.' },
        { step: '05', title: 'Optimization', desc: 'Daily A/B testing and budget reallocation to maximize conversion rates.' },
        { step: '06', title: 'Reporting', desc: 'Transparent, real-time dashboards showing exact ROI and lead attribution.' }
    ];

    const faqData = [
        {
            question: "How long until we see ROI from digital marketing?",
            answer: "Performance marketing (Paid Ads) can generate leads within 48 hours of launch. Organic strategies like Content Marketing take 3-6 months to build sustainable, compounding ROI."
        },
        {
            question: "Do you guarantee a specific number of leads?",
            answer: "We guarantee highly optimized campaigns and transparent tracking. While we cannot legally guarantee specific volume due to market variables, our data-driven approach consistently lowers Cost Per Acquisition (CPA) month over month."
        },
        {
            question: "What platforms do you specialize in?",
            answer: "We are platform-agnostic, focusing on where your audience lives. Our expertise covers Google Ads, Meta Ads (Facebook/Instagram), LinkedIn for B2B, TikTok, and Programmatic Display."
        },
        {
            question: "Do you create the ad assets?",
            answer: "Yes, our team handles end-to-end campaign execution including copywriting, graphic design, video editing, and technical tracking implementation."
        },
        {
            question: "Do you provide transparent reporting?",
            answer: "Absolutely. We provide real-time dashboards and comprehensive monthly reports detailing ad spend, conversion rates, and exact return on investment."
        }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Performance Digital Marketing",
        "provider": {
            "@type": "Organization",
            "name": "Vayunex Solution"
        },
        "serviceType": "Marketing Consulting"
    };

    return (
        <div className="service-page digital-marketing-page">
            <SEO 
                title="Performance Digital Marketing | Vayunex Solution"
                description="Drive qualified leads and measurable ROI with data-driven performance marketing, social media strategy, and conversion optimization."
                keywords="digital marketing agency, performance marketing, B2B lead generation, paid ads management, conversion rate optimization"
                canonicalUrl="https://vayunexsolution.com/services/digital-marketing"
                faqData={faqData}
                structuredData={serviceSchema}
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Breadcrumbs />
                <QuickAnswers 
                    title="What is Performance Digital Marketing?"
                    answer="Performance Digital Marketing is a data-driven approach focused on acquiring customers and generating measurable ROI. We leverage targeted Meta Ads, Google Ads, content marketing, and conversion optimization to build scalable lead generation engines that consistently grow your revenue pipeline."
                />
            </div>

            {/* 1. Hero */}
            <section className="service-hero" ref={heroRef}>
                <div className="service-hero-bg">
                    <div className="hero-orb orb-1"></div>
                    <div className="hero-orb orb-2"></div>
                    <div className="hero-grid"></div>
                </div>
                <div className={`service-hero-content ${heroVisible ? 'visible' : ''}`}>
                    <span className="service-badge">
                        <i className="fas fa-bullhorn"></i> Digital Marketing
                    </span>
                    <h1>Acquire Customers With <span className="text-gradient">Precision Marketing</span></h1>
                    <p>Stop guessing with your ad spend. We build data-driven marketing engines that generate qualified leads and measurable pipeline growth.</p>
                    <div className="hero-cta-group">
                        <Link to="/contact?intent=digital-marketing" className="cta-primary">
                            <i className="fas fa-paper-plane"></i> Accelerate Growth
                        </Link>
                        <a href="#packages" className="cta-secondary">
                            <i className="fas fa-tags"></i> View Packages
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. Business Problem */}
            <section className="tech-stack-section" ref={problemsRef} style={{ background: 'var(--bg-primary)' }}>
                <div className={`section-content ${problemsVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">The Challenge</span>
                        <h2>Problems We <span className="text-gradient">Solve</span></h2>
                    </div>
                    <div className="tech-grid">
                        {problemsSolved.map((problem, index) => (
                            <div key={index} className="tech-item" style={{ '--tech-color': '#ff6b6b', flexBasis: '250px', flexGrow: 1, alignItems: 'flex-start', textAlign: 'left' }}>
                                <i className={problem.icon} style={{ marginBottom: '10px' }}></i>
                                <span style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '5px' }}><strong>{problem.title}</strong></span>
                                <small style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{problem.desc}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Outcome */}
            <section className="service-types-section" ref={outcomesRef} style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                <div className={`section-content ${outcomesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Business Impact</span>
                        <h2>Focus On <span className="text-gradient">Outcomes</span></h2>
                    </div>
                    <div className="types-grid">
                        {outcomes.map((outcome, index) => (
                            <div 
                                key={index} 
                                className="type-card"
                                style={{ '--card-color': outcome.color, '--delay': `${index * 0.1}s` }}
                            >
                                <div className="type-icon">
                                    <i className={outcome.icon}></i>
                                </div>
                                <h3>{outcome.title}</h3>
                                <p>{outcome.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Capabilities */}
            <section className="tech-stack-section" ref={capabilitiesRef}>
                <div className={`section-content ${capabilitiesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Marketing Capabilities</span>
                        <h2>How We <span className="text-gradient">Drive Traffic</span></h2>
                    </div>
                    <div className="tech-grid">
                        {capabilities.map((cap, index) => (
                            <div
                                key={index}
                                className="tech-item"
                                style={{ '--tech-color': cap.color, minWidth: '180px' }}
                            >
                                <i className={cap.icon}></i>
                                <span>{cap.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Deliverables (services) */}
            <section className="service-types-section" ref={deliverablesRef} style={{ background: 'var(--bg-primary)' }}>
                <div className={`section-content ${deliverablesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">What We Deliver</span>
                        <h2>Digital <span className="text-gradient">Services</span></h2>
                    </div>
                    <div className="types-grid">
                        {services.map((service, index) => (
                            <div 
                                key={index} 
                                className="type-card"
                                style={{ '--card-color': service.color, '--delay': `${index * 0.1}s` }}
                            >
                                <div className="type-icon">
                                    <i className={service.icon}></i>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Industries */}
            <section className="tech-stack-section" ref={industriesRef} style={{ background: 'var(--bg-secondary)' }}>
                <div className={`section-content ${industriesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Who We Help</span>
                        <h2>Built For <span className="text-gradient">Ambitious</span> Brands</h2>
                    </div>
                    <div className="tech-grid">
                        {targetAudience.map((audience, index) => (
                            <div key={index} className="tech-item" style={{ '--tech-color': audience.color, flexBasis: '250px', flexGrow: 1, alignItems: 'flex-start', textAlign: 'left' }}>
                                <i className={audience.icon} style={{ marginBottom: '10px' }}></i>
                                <span style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '5px' }}><strong>{audience.title}</strong></span>
                                <small style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{audience.desc}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Tech Stack (Platforms) */}
            <section className="tech-stack-section" ref={techRef} style={{ background: 'var(--bg-primary)' }}>
                <div className={`section-content ${techVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Platforms</span>
                        <h2>Channels We <span className="text-gradient">Master</span></h2>
                    </div>
                    <div className="tech-grid">
                        {platforms.map((tech, index) => (
                            <div
                                key={index}
                                className="tech-item"
                                style={{ '--tech-color': tech.color }}
                            >
                                <i className={tech.icon}></i>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Pricing Packages */}
            <section id="packages" className="packages-section" ref={pricingRef}>
                <div className={`section-content ${pricingVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Pricing</span>
                        <h2>Marketing <span className="text-gradient">Packages</span></h2>
                        <p className="section-subtitle">Flexible plans designed for every business size</p>
                    </div>
                    <div className="packages-grid">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`package-card ${pkg.best ? 'popular' : ''}`}
                                style={{ '--pkg-color': pkg.color }}
                            >
                                {pkg.best && <span className="popular-badge">Most Popular</span>}
                                <h3>{pkg.name}</h3>
                                <div className="package-price">
                                    <span className="price">{pkg.price}</span>
                                    <span className="period">{pkg.period}</span>
                                </div>
                                <ul className="package-features">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className={feature.included ? 'included' : 'not-included'}>
                                            <i className={feature.included ? 'fas fa-check-circle' : 'fas fa-times-circle'}></i>
                                            {feature.text}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact?intent=digital-marketing" className="package-cta">
                                    Get Started <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Process Section */}
            <section className="process-section" ref={processRef}>
                <div className={`section-content ${processVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Execution</span>
                        <h2>Our Growth <span className="text-gradient">Process</span></h2>
                    </div>
                    <div className="process-timeline">
                        {process.map((item, index) => (
                            <div
                                key={index}
                                className="process-item"
                                style={{ '--delay': `${index * 0.1}s` }}
                            >
                                <div className="process-number">{item.step}</div>
                                <div className="process-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Trust Layer */}
            <ServiceTrustLayer />

            {/* 11. FAQ Section */}
            <FAQAccordion faqs={faqData} title="Common Questions About Performance Marketing" />

            {/* CTA Section */}
            <section className="service-cta-section">
                <div className="cta-bg">
                    <div className="cta-orb cta-orb-1"></div>
                    <div className="cta-orb cta-orb-2"></div>
                </div>
                <div className="cta-content">
                    <h2>Ready to Maximize Your <span className="text-gradient">Digital ROI</span>?</h2>
                    <p>Let's build a lead generation machine that consistently scales your revenue.</p>
                    <div className="cta-buttons">
                        <Link to="/contact?intent=digital-marketing" className="cta-primary">
                            <i className="fas fa-comments"></i> Start Generating Leads
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketingPage;
