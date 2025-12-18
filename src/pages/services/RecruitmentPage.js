import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './ServicesPage.css';

const RecruitmentPage = () => {
    const [heroRef, heroVisible] = useScrollAnimation();
    const [servicesRef, servicesVisible] = useScrollAnimation();
    const [industriesRef, industriesVisible] = useScrollAnimation();
    const [processRef, processVisible] = useScrollAnimation();

    const services = [
        {
            icon: 'fas fa-user-tie',
            title: 'Executive Search',
            desc: 'Finding top-tier leadership talent for C-suite and senior positions.',
            color: '#4facfe'
        },
        {
            icon: 'fas fa-laptop-code',
            title: 'IT Staffing',
            desc: 'Specialized tech talent - developers, engineers, data scientists.',
            color: '#9f55ff'
        },
        {
            icon: 'fas fa-users',
            title: 'Bulk Hiring',
            desc: 'Large-scale recruitment for startups and growing companies.',
            color: '#00d4ff'
        },
        {
            icon: 'fas fa-clock',
            title: 'Contract Staffing',
            desc: 'Temporary and project-based hiring solutions.',
            color: '#ff6b6b'
        }
    ];

    const industries = [
        'Information Technology', 'Banking & Finance', 'Healthcare', 
        'E-Commerce', 'Manufacturing', 'Education', 'Telecom', 'Startups'
    ];

    const process = [
        { step: '01', title: 'Requirement Analysis', desc: 'Understanding your hiring needs' },
        { step: '02', title: 'Talent Sourcing', desc: 'Finding the best candidates' },
        { step: '03', title: 'Screening', desc: 'Rigorous evaluation and interviews' },
        { step: '04', title: 'Shortlisting', desc: 'Presenting top matched profiles' },
        { step: '05', title: 'Interview Coordination', desc: 'Scheduling and feedback' },
        { step: '06', title: 'Onboarding Support', desc: 'Smooth transition assistance' }
    ];

    return (
        <div className="service-page recruitment-page">
            <SEO 
                title="Recruitment & Staffing Services | Vayunex"
                description="Strategic recruitment solutions for IT, healthcare, finance, and more. Find the right talent with Vayunex."
                keywords="recruitment agency, IT staffing, executive search, bulk hiring, talent acquisition"
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
                        <i className="fas fa-handshake"></i> Our Services
                    </span>
                    <h1>Recruitment & <span className="text-gradient">Staffing</span></h1>
                    <p>Connecting businesses with exceptional talent through strategic, personalized recruitment solutions.</p>
                    <div className="hero-cta-group">
                        <Link to="/contact" className="cta-primary">
                            <i className="fas fa-paper-plane"></i> Hire With Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="service-types-section" ref={servicesRef}>
                <div className={`section-content ${servicesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Our Expertise</span>
                        <h2>Staffing <span className="text-gradient">Solutions</span></h2>
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

            {/* Industries */}
            <section className="tech-stack-section" ref={industriesRef}>
                <div className={`section-content ${industriesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Sectors</span>
                        <h2>Industries We <span className="text-gradient">Serve</span></h2>
                    </div>
                    <div className="tech-grid">
                        {industries.map((ind, index) => (
                            <div key={index} className="tech-item" style={{ '--tech-color': '#9f55ff' }}>
                                <i className="fas fa-building"></i>
                                <span>{ind}</span>
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
                        <h2>Our Hiring <span className="text-gradient">Process</span></h2>
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
                    <h2>Looking for the <span className="text-gradient">Right Talent</span>?</h2>
                    <p>Let us help you build your dream team.</p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="cta-primary">
                            <i className="fas fa-comments"></i> Get Started
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RecruitmentPage;
