import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './ServicesPage.css';

const SEOGrowthPage = () => {
    const [heroRef, heroVisible] = useScrollAnimation();
    const [servicesRef, servicesVisible] = useScrollAnimation();
    const [compRef, compVisible] = useScrollAnimation();
    const [processRef, processVisible] = useScrollAnimation();

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
                { text: 'GMB Optimization', included: true },
                { text: 'Real-time Dashboard', included: true },
                { text: 'Link Building (30/mo)', included: true },
                { text: 'Premium Content', included: true },
                { text: 'All Social Platforms', included: true }
            ],
            best: false
        }
    ];

    const process = [
        { step: '01', title: 'Audit', desc: 'Analyzing your current SEO status' },
        { step: '02', title: 'Strategy', desc: 'Creating a customized growth plan' },
        { step: '03', title: 'Implementation', desc: 'Executing on-page and off-page SEO' },
        { step: '04', title: 'Content', desc: 'Creating optimized content' },
        { step: '05', title: 'Monitor', desc: 'Tracking rankings and traffic' },
        { step: '06', title: 'Report', desc: 'Regular performance updates' }
    ];

    return (
        <div className="service-page seo-page">
            <SEO 
                title="SEO & Growth Strategy Services | Vayunex"
                description="Boost your online visibility with our SEO and digital marketing services. Get more traffic and leads."
                keywords="SEO services, digital marketing, growth strategy, social media marketing, search engine optimization"
            />

            {/* Hero */}
            <section className="service-hero" ref={heroRef}>
                <div className="service-hero-bg">
                    <div className="hero-orb orb-1"></div>
                    <div className="hero-orb orb-2"></div>
                    <div className="hero-grid"></div>
                </div>
                <div className={`service-hero-content ${heroVisible ? 'visible' : ''}`}>
                    <span className="service-badge">
                        <i className="fas fa-rocket"></i> Our Services
                    </span>
                    <h1>Growth & <span className="text-gradient">SEO Strategy</span></h1>
                    <p>Custom strategies to expand your online presence, drive traffic, and accelerate revenue growth.</p>
                    <div className="hero-cta-group">
                        <Link to="/contact" className="cta-primary">
                            <i className="fas fa-paper-plane"></i> Get Free SEO Audit
                        </Link>
                        <a href="#packages" className="cta-secondary">
                            <i className="fas fa-tags"></i> View Plans
                        </a>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="service-types-section" ref={servicesRef}>
                <div className={`section-content ${servicesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">What We Offer</span>
                        <h2>Our Growth <span className="text-gradient">Services</span></h2>
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

            {/* Packages */}
            <section id="packages" className="packages-section" ref={compRef}>
                <div className={`section-content ${compVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Pricing</span>
                        <h2>SEO <span className="text-gradient">Packages</span></h2>
                        <p className="section-subtitle">Transparent pricing for measurable results</p>
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
                                    {pkg.features.map((f, i) => (
                                        <li key={i} className={f.included ? 'included' : 'not-included'}>
                                            <i className={f.included ? 'fas fa-check-circle' : 'fas fa-times-circle'}></i>
                                            {f.text}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="package-cta">
                                    Get Started <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="process-section" ref={processRef}>
                <div className={`section-content ${processVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">How We Work</span>
                        <h2>Our SEO <span className="text-gradient">Process</span></h2>
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

            {/* CTA */}
            <section className="service-cta-section">
                <div className="cta-bg">
                    <div className="cta-orb cta-orb-1"></div>
                    <div className="cta-orb cta-orb-2"></div>
                </div>
                <div className="cta-content">
                    <h2>Ready to <span className="text-gradient">Grow</span> Your Business?</h2>
                    <p>Get a free SEO audit and start ranking higher today.</p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="cta-primary">
                            <i className="fas fa-comments"></i> Get Free Audit
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SEOGrowthPage;
