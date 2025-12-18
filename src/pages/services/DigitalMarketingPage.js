import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './ServicesPage.css';

const DigitalMarketingPage = () => {
    const [heroRef, heroVisible] = useScrollAnimation();
    const [servicesRef, servicesVisible] = useScrollAnimation();
    const [platformsRef, platformsVisible] = useScrollAnimation();
    const [compRef, compVisible] = useScrollAnimation();
    const [resultsRef, resultsVisible] = useScrollAnimation();

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
            icon: 'fas fa-influencer',
            title: 'Influencer Marketing',
            desc: 'Connecting your brand with relevant influencers for authentic reach.',
            color: '#ff6b6b'
        }
    ];

    const platforms = [
        { name: 'Instagram', icon: 'fab fa-instagram', color: '#E1306C' },
        { name: 'Facebook', icon: 'fab fa-facebook-f', color: '#4267B2' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin-in', color: '#0077B5' },
        { name: 'YouTube', icon: 'fab fa-youtube', color: '#FF0000' },
        { name: 'Twitter/X', icon: 'fab fa-x-twitter', color: '#000' },
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
                { text: 'Custom Graphics + Videos', included: true },
                { text: 'Real-time Dashboard', included: true },
                { text: '15+ Reels/Month', included: true },
                { text: 'Full Ad Management', included: true },
                { text: 'Influencer Campaigns', included: true }
            ],
            best: false
        }
    ];

    const results = [
        { metric: '300%', label: 'Avg. Engagement Increase' },
        { metric: '50K+', label: 'Followers Generated' },
        { metric: '2M+', label: 'Total Reach Delivered' },
        { metric: '150+', label: 'Brands Managed' }
    ];

    // FAQ Data for AEO/GEO
    const faqData = [
        {
            question: "What is the cost of social media marketing in Chandigarh?",
            answer: "Social media marketing packages in Chandigarh start from ₹15,000/month for 2 platforms. Growth packages cost ₹35,000/month with 4 platforms, and enterprise solutions are ₹75,000/month for full-service management."
        },
        {
            question: "Which social media platforms do you manage?",
            answer: "We manage all major platforms including Instagram, Facebook, LinkedIn, YouTube, Twitter/X, WhatsApp Business, Pinterest, and Google Business Profile. We also run paid ads on Meta and Google."
        },
        {
            question: "Do you create content for social media?",
            answer: "Yes, we provide complete content creation including graphics, videos, reels, stories, and copywriting. Our team creates engaging, brand-aligned content that drives engagement and conversions."
        },
        {
            question: "How do you measure social media success?",
            answer: "We track key metrics including reach, engagement rate, follower growth, website traffic, lead generation, and ROI. We provide weekly/monthly performance reports with actionable insights."
        }
    ];

    // Service structured data
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Digital Marketing & Social Media Management",
        "provider": {
            "@type": "Organization",
            "name": "Vayunex Solution"
        },
        "serviceType": "Digital Marketing",
        "areaServed": "Chandigarh, Mohali, Panchkula, Punjab, India"
    };

    return (
        <div className="service-page digital-marketing-page">
            <SEO
                title="Best Digital Marketing & Social Media Agency in Chandigarh | SMM Services"
                description="Top-rated digital marketing company in Chandigarh. Expert social media marketing, Instagram marketing, Facebook ads, content creation. ₹15,000/month onwards. Get free audit!"
                keywords="digital marketing Chandigarh, social media marketing Mohali, Instagram marketing Punjab, Facebook ads agency, social media agency Panchkula, SMM services"
                canonicalUrl="https://vayunexsolution.com/services/digital-marketing"
                faqData={faqData}
                structuredData={serviceSchema}
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
                        <i className="fas fa-hashtag"></i> Our Services
                    </span>
                    <h1>Digital Marketing & <span className="text-gradient">Social Media</span></h1>
                    <p>Transform your online presence with data-driven marketing strategies and engaging social media management that converts followers into customers.</p>
                    <div className="hero-cta-group">
                        <Link to="/contact" className="cta-primary">
                            <i className="fas fa-paper-plane"></i> Get Free Audit
                        </Link>
                        <a href="#packages" className="cta-secondary">
                            <i className="fas fa-tags"></i> View Packages
                        </a>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="service-types-section" ref={servicesRef}>
                <div className={`section-content ${servicesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">What We Offer</span>
                        <h2>Our <span className="text-gradient">Services</span></h2>
                    </div>
                    <div className="types-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
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

            {/* Platforms */}
            <section className="tech-stack-section" ref={platformsRef}>
                <div className={`section-content ${platformsVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Platforms</span>
                        <h2>We <span className="text-gradient">Manage</span></h2>
                    </div>
                    <div className="tech-grid">
                        {platforms.map((platform, index) => (
                            <div key={index} className="tech-item" style={{ '--tech-color': platform.color }}>
                                <i className={platform.icon}></i>
                                <span>{platform.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="process-section" ref={resultsRef}>
                <div className={`section-content ${resultsVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Results</span>
                        <h2>Our <span className="text-gradient">Impact</span></h2>
                    </div>
                    <div className="process-timeline" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                        {results.map((item, index) => (
                            <div
                                key={index}
                                className="process-item"
                                style={{ '--delay': `${index * 0.1}s` }}
                            >
                                <div className="process-number" style={{ fontSize: '1.5rem', width: '80px', height: '80px' }}>
                                    {item.metric}
                                </div>
                                <div className="process-content">
                                    <p style={{ color: '#e8e8ed' }}>{item.label}</p>
                                </div>
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
                        <h2>Marketing <span className="text-gradient">Packages</span></h2>
                        <p className="section-subtitle">Flexible plans to grow your brand</p>
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

            {/* CTA */}
            <section className="service-cta-section">
                <div className="cta-bg">
                    <div className="cta-orb cta-orb-1"></div>
                    <div className="cta-orb cta-orb-2"></div>
                </div>
                <div className="cta-content">
                    <h2>Ready to <span className="text-gradient">Go Viral</span>?</h2>
                    <p>Let's create content that gets attention and drives results.</p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="cta-primary">
                            <i className="fas fa-comments"></i> Let's Talk
                        </Link>
                        <a href="tel:+919518051255" className="cta-secondary">
                            <i className="fas fa-phone"></i> Call Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketingPage;
