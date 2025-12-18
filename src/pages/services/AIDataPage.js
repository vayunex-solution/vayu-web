import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './ServicesPage.css';

const AIDataPage = () => {
    const [heroRef, heroVisible] = useScrollAnimation();
    const [servicesRef, servicesVisible] = useScrollAnimation();
    const [useCasesRef, useCasesVisible] = useScrollAnimation();
    const [compRef, compVisible] = useScrollAnimation();

    const aiServices = [
        {
            icon: 'fas fa-robot',
            title: 'AI Chatbots',
            desc: 'Intelligent conversational AI for customer support and engagement.',
            color: '#4facfe'
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Predictive Analytics',
            desc: 'Data-driven insights to forecast trends and make informed decisions.',
            color: '#9f55ff'
        },
        {
            icon: 'fas fa-cogs',
            title: 'Process Automation',
            desc: 'Automate repetitive tasks with intelligent workflows.',
            color: '#00d4ff'
        },
        {
            icon: 'fas fa-brain',
            title: 'Machine Learning',
            desc: 'Custom ML models tailored to your business needs.',
            color: '#ff6b6b'
        }
    ];

    const useCases = [
        { industry: 'E-Commerce', use: 'Product recommendations, dynamic pricing', icon: 'fas fa-shopping-bag' },
        { industry: 'Healthcare', use: 'Patient data analysis, appointment scheduling', icon: 'fas fa-heartbeat' },
        { industry: 'Finance', use: 'Fraud detection, risk assessment', icon: 'fas fa-university' },
        { industry: 'Manufacturing', use: 'Quality control, predictive maintenance', icon: 'fas fa-industry' },
        { industry: 'Education', use: 'Personalized learning, automated grading', icon: 'fas fa-graduation-cap' },
        { industry: 'Retail', use: 'Inventory optimization, customer insights', icon: 'fas fa-store' }
    ];

    const packages = [
        {
            name: 'Starter AI',
            price: '₹50,000',
            period: 'project',
            color: '#4facfe',
            features: [
                { text: 'Basic Chatbot', included: true },
                { text: 'Data Analysis Report', included: true },
                { text: 'Dashboard Integration', included: true },
                { text: 'Custom ML Model', included: false },
                { text: 'API Integration', included: false },
                { text: 'Ongoing Support', included: false }
            ],
            best: false
        },
        {
            name: 'Business AI',
            price: '₹2,00,000',
            period: 'project',
            color: '#9f55ff',
            features: [
                { text: 'Advanced Chatbot', included: true },
                { text: 'Predictive Analytics', included: true },
                { text: 'Custom Dashboard', included: true },
                { text: 'Custom ML Model', included: true },
                { text: 'API Integration', included: true },
                { text: '3 Months Support', included: true }
            ],
            best: true
        },
        {
            name: 'Enterprise AI',
            price: 'Custom',
            period: 'quote',
            color: '#00d4ff',
            features: [
                { text: 'Full AI Suite', included: true },
                { text: 'Real-time Analytics', included: true },
                { text: 'Enterprise Dashboard', included: true },
                { text: 'Multiple ML Models', included: true },
                { text: 'Full Integration', included: true },
                { text: 'Dedicated Support', included: true }
            ],
            best: false
        }
    ];

    return (
        <div className="service-page ai-data-page">
            <SEO 
                title="AI & Data Science Services | Vayunex"
                description="AI solutions including chatbots, predictive analytics, and machine learning. Transform your business with data-driven insights."
                keywords="AI services, machine learning, data science, chatbot development, predictive analytics"
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
                        <i className="fas fa-brain"></i> Our Services
                    </span>
                    <h1>AI & Data <span className="text-gradient">Science</span></h1>
                    <p>Leveraging artificial intelligence and data analytics to provide intelligent insights and drive smarter business decisions.</p>
                    <div className="hero-cta-group">
                        <Link to="/contact" className="cta-primary">
                            <i className="fas fa-paper-plane"></i> Discuss Your Project
                        </Link>
                    </div>
                </div>
            </section>

            {/* AI Services */}
            <section className="service-types-section" ref={servicesRef}>
                <div className={`section-content ${servicesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">What We Offer</span>
                        <h2>Our AI <span className="text-gradient">Solutions</span></h2>
                    </div>
                    <div className="types-grid">
                        {aiServices.map((service, index) => (
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

            {/* Use Cases */}
            <section className="tech-stack-section" ref={useCasesRef}>
                <div className={`section-content ${useCasesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Industries</span>
                        <h2>Use <span className="text-gradient">Cases</span></h2>
                    </div>
                    <div className="tech-grid">
                        {useCases.map((uc, index) => (
                            <div key={index} className="tech-item" style={{ '--tech-color': '#9f55ff' }}>
                                <i className={uc.icon}></i>
                                <span><strong>{uc.industry}</strong></span>
                                <small style={{ color: '#888', fontSize: '0.8rem' }}>{uc.use}</small>
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
                        <h2>AI <span className="text-gradient">Packages</span></h2>
                    </div>
                    <div className="packages-grid">
                        {packages.map((pkg, index) => (
                            <div 
                                key={index} 
                                className={`package-card ${pkg.best ? 'popular' : ''}`}
                                style={{ '--pkg-color': pkg.color }}
                            >
                                {pkg.best && <span className="popular-badge">Recommended</span>}
                                <h3>{pkg.name}</h3>
                                <div className="package-price">
                                    <span className="price">{pkg.price}</span>
                                    <span className="period">/{pkg.period}</span>
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
                                    Get Quote <i className="fas fa-arrow-right"></i>
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
                    <h2>Ready to Harness the Power of <span className="text-gradient">AI</span>?</h2>
                    <p>Let's build intelligent solutions for your business.</p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="cta-primary">
                            <i className="fas fa-comments"></i> Start a Project
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AIDataPage;
