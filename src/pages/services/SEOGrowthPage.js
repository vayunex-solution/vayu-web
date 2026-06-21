import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import FAQAccordion from '../../components/common/FAQAccordion';
import ServiceTrustLayer from '../../components/common/ServiceTrustLayer';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import QuickAnswers from '../../components/common/QuickAnswers';
import './ServicesPage.css';

const SEOGrowthPage = () => {
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
        { icon: 'fas fa-eye-slash', title: 'Low Search Visibility', desc: 'Your target audience is searching for your services, but finding your competitors.' },
        { icon: 'fas fa-arrow-down', title: 'Poor Organic Traffic', desc: 'Relying entirely on expensive paid ads because organic channels produce zero leads.' },
        { icon: 'fas fa-map-marker-alt', title: 'Weak Local Presence', desc: 'Failing to appear in the top 3 Google Maps results for crucial local searches.' },
        { icon: 'fas fa-cogs', title: 'Technical Penalties', desc: 'Slow site speed, broken links, and poor mobile indexing actively hurting rankings.' }
    ];

    const outcomes = [
        {
            icon: 'fas fa-arrow-up',
            title: 'Improve Search Rankings',
            desc: 'Secure top positions for high-intent keywords that drive real business value.',
            color: '#4facfe'
        },
        {
            icon: 'fas fa-users',
            title: 'Increase Organic Traffic',
            desc: 'Build a sustainable, compounding stream of targeted visitors month over month.',
            color: '#9f55ff'
        },
        {
            icon: 'fas fa-filter',
            title: 'Generate Inbound Leads',
            desc: 'Convert passive searchers into active, qualified sales opportunities.',
            color: '#00d4ff'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Build Long-Term Visibility',
            desc: 'Establish a moat against competitors with high-authority backlink profiles.',
            color: '#ff6b6b'
        }
    ];

    const capabilities = [
        { name: 'Technical SEO', icon: 'fas fa-laptop-code', color: '#61DAFB' },
        { name: 'Local Search', icon: 'fas fa-map-marked-alt', color: '#339933' },
        { name: 'Content Optimization', icon: 'fas fa-pen-fancy', color: '#3776AB' },
        { name: 'Link Building', icon: 'fas fa-link', color: '#47A248' },
        { name: 'E-Commerce SEO', icon: 'fas fa-shopping-cart', color: '#FF9900' },
        { name: 'Programmatic SEO', icon: 'fas fa-sitemap', color: '#FFCA28' }
    ];

    const services = [
        {
            icon: 'fas fa-search',
            title: 'SEO Optimization',
            desc: 'On-page and off-page SEO to boost your search rankings.',
            color: '#4facfe'
        },
        {
            icon: 'fas fa-bullhorn',
            title: 'Digital Marketing',
            desc: 'Comprehensive digital campaigns across all channels.',
            color: '#9f55ff'
        },
        {
            icon: 'fas fa-share-alt',
            title: 'Social Media Marketing',
            desc: 'Building brand presence on social platforms.',
            color: '#00d4ff'
        },
        {
            icon: 'fas fa-chart-bar',
            title: 'Analytics & Reporting',
            desc: 'Data-driven insights to measure and optimize performance.',
            color: '#ff6b6b'
        }
    ];

    const targetAudience = [
        { icon: 'fas fa-rocket', title: 'Startups', desc: 'Capturing early-stage organic traffic and building long-term domain authority.', color: '#4facfe' },
        { icon: 'fas fa-store', title: 'Local Businesses', desc: 'Dominating local search results and capturing high-intent map queries.', color: '#9f55ff' },
        { icon: 'fas fa-shopping-bag', title: 'E-Commerce', desc: 'Optimizing product pages to outrank competitors for transactional keywords.', color: '#00d4ff' },
        { icon: 'fas fa-building', title: 'Enterprise B2B', desc: 'Executing complex technical SEO and programmatic content strategies.', color: '#ff6b6b' }
    ];

    const techStack = [
        { name: 'Ahrefs', icon: 'fas fa-search-dollar', color: '#FF9900' },
        { name: 'SEMrush', icon: 'fas fa-chart-line', color: '#FF6B6B' },
        { name: 'Google Analytics', icon: 'fas fa-chart-pie', color: '#E37400' },
        { name: 'Search Console', icon: 'fas fa-search', color: '#4285F4' },
        { name: 'Screaming Frog', icon: 'fas fa-spider', color: '#888' },
        { name: 'Surfer SEO', icon: 'fas fa-pen-nib', color: '#00D4FF' },
        { name: 'WordPress', icon: 'fab fa-wordpress', color: '#21759B' },
        { name: 'Shopify', icon: 'fab fa-shopify', color: '#7AB55C' }
    ];

    const packages = [
        {
            name: 'Starter SEO',
            price: '₹10,000',
            period: '/month',
            color: '#4facfe',
            features: [
                { text: 'Keyword Research', included: true },
                { text: 'On-Page SEO (5 pages)', included: true },
                { text: 'Google My Business', included: true },
                { text: 'Monthly Report', included: true },
                { text: 'Link Building', included: false },
                { text: 'Content Marketing', included: false },
                { text: 'Social Media', included: false }
            ],
            best: false
        },
        {
            name: 'Growth SEO',
            price: '₹25,000',
            period: '/month',
            color: '#9f55ff',
            features: [
                { text: 'Advanced Keywords', included: true },
                { text: 'On-Page SEO (15 pages)', included: true },
                { text: 'Google My Business', included: true },
                { text: 'Weekly Reports', included: true },
                { text: 'Link Building (10/mo)', included: true },
                { text: 'Content Marketing', included: true },
                { text: 'Social Media (2 platforms)', included: true }
            ],
            best: true
        },
        {
            name: 'Enterprise SEO',
            price: '₹50,000',
            period: '/month',
            color: '#00d4ff',
            features: [
                { text: 'Full Keyword Strategy', included: true },
                { text: 'Unlimited Pages', included: true },
                { text: 'Google My Business', included: true },
                { text: 'Live Dashboard', included: true },
                { text: 'High Auth Link Building', included: true },
                { text: 'Programmatic SEO', included: true },
                { text: 'Social Media Strategy', included: true }
            ],
            best: false
        }
    ];

    const process = [
        { step: '01', title: 'Audit', desc: 'Comprehensive technical, content, and backlink analysis to identify quick wins.' },
        { step: '02', title: 'Strategy', desc: 'Keyword mapping and architectural planning based on competitor gaps.' },
        { step: '03', title: 'Foundation', desc: 'Fixing all core web vitals, mobile usability, and indexation errors first.' },
        { step: '04', title: 'Optimization', desc: 'On-page updates, schema markup implementation, and content restructuring.' },
        { step: '05', title: 'Authority', desc: 'Executing high-quality digital PR and strategic link-building campaigns.' },
        { step: '06', title: 'Analysis', desc: 'Monthly tracking of rankings, traffic, and conversion metrics.' }
    ];

    const faqData = [
        {
            question: "How long does SEO take to show results?",
            answer: "For established websites, technical fixes can show results within 4-6 weeks. For new websites or highly competitive keywords, significant organic growth typically takes 3-6 months of consistent execution."
        },
        {
            question: "Do you offer technical SEO audits?",
            answer: "Yes, every engagement begins with a deep-dive technical audit covering Core Web Vitals, indexation status, schema validation, and site architecture analysis."
        },
        {
            question: "Can SEO help my local service business?",
            answer: "Absolutely. Local SEO (optimizing your Google Business Profile, building local citations, and capturing map pack rankings) is the highest-ROI channel for service businesses."
        },
        {
            question: "How is SEO success measured?",
            answer: "We measure success not just in traffic, but in business outcomes. We track organic lead generation, conversion rates, and the monetary value of the organic traffic we generate."
        },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "SEO & Growth Strategy",
        "provider": {
            "@type": "Organization",
            "name": "Vayunex Solution"
        },
        "serviceType": "Search Engine Optimization"
    };

    return (
        <div className="service-page seo-growth-page">
            <SEO 
                title="SEO & Organic Growth Strategy | Vayunex Solution"
                description="Dominate search rankings and generate inbound leads with technical SEO, high-authority link building, and targeted content strategies."
                keywords="SEO services, technical SEO audit, local SEO, organic growth strategy, B2B SEO agency"
                canonicalUrl="https://vayunexsolution.com/services/seo-growth"
                faqData={faqData}
                structuredData={serviceSchema}
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Breadcrumbs />
                <QuickAnswers 
                    title="What is SEO Growth & Optimization?"
                    answer="SEO Growth and Optimization is the strategic process of improving a website's visibility on search engines like Google. We use advanced technical SEO, high-quality content creation, and authoritative link building to drive sustainable, organic traffic that converts into revenue."
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
                        <i className="fas fa-search-plus"></i> SEO & Growth Strategy
                    </span>
                    <h1>Dominate Search & Generate <span className="text-gradient">Inbound Leads</span></h1>
                    <p>Stop relying entirely on expensive paid ads. Build a compounding organic growth engine that captures high-intent traffic and reduces your customer acquisition cost.</p>
                    <div className="hero-cta-group">
                        <Link to="/contact?intent=seo-growth" className="cta-primary">
                            <i className="fas fa-paper-plane"></i> Request SEO Audit
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
                        <span className="section-badge">SEO Capabilities</span>
                        <h2>How We <span className="text-gradient">Rank</span></h2>
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
                        <h2>Growth <span className="text-gradient">Services</span></h2>
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
                        <h2>Built For <span className="text-gradient">Forward-Thinking</span> Brands</h2>
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

            {/* 7. Tech Stack (SEO Tools) */}
            <section className="tech-stack-section" ref={techRef} style={{ background: 'var(--bg-primary)' }}>
                <div className={`section-content ${techVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Tools</span>
                        <h2>Our <span className="text-gradient">Tech Stack</span></h2>
                    </div>
                    <div className="tech-grid">
                        {techStack.map((tech, index) => (
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
                        <h2>Growth <span className="text-gradient">Packages</span></h2>
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
                                <Link to="/contact?intent=seo-growth" className="package-cta">
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
            <FAQAccordion faqs={faqData} title="Common Questions About SEO" />

            {/* CTA Section */}
            <section className="service-cta-section">
                <div className="cta-bg">
                    <div className="cta-orb cta-orb-1"></div>
                    <div className="cta-orb cta-orb-2"></div>
                </div>
                <div className="cta-content">
                    <h2>Ready to Increase Your <span className="text-gradient">Organic Visibility</span>?</h2>
                    <p>Let's build a sustainable growth engine that outranks your competitors.</p>
                    <div className="cta-buttons">
                        <Link to="/contact?intent=seo-growth" className="cta-primary">
                            <i className="fas fa-comments"></i> Start Growing
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SEOGrowthPage;
