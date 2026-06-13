import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import FAQAccordion from '../../components/common/FAQAccordion';
import ServiceTrustLayer from '../../components/common/ServiceTrustLayer';
import IndustryNetwork from '../../components/common/IndustryNetwork';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import QuickAnswers from '../../components/common/QuickAnswers';
import './ServicesPage.css';

const RecruitmentPage = () => {
    const [heroRef, heroVisible] = useScrollAnimation();
    const [problemsRef, problemsVisible] = useScrollAnimation();
    const [outcomesRef, outcomesVisible] = useScrollAnimation();
    const [capabilitiesRef, capabilitiesVisible] = useScrollAnimation();
    const [deliverablesRef, deliverablesVisible] = useScrollAnimation();
    const [industriesRef, industriesVisible] = useScrollAnimation();
    const [processRef, processVisible] = useScrollAnimation();

    const problemsSolved = [
        { icon: 'fas fa-hourglass-half', title: 'Prolonged Vacancies', desc: 'Critical roles staying open for months, delaying product launches.' },
        { icon: 'fas fa-users-slash', title: 'Poor Culture Fit', desc: 'High turnover rates due to misaligned candidate expectations and technical skills.' },
        { icon: 'fas fa-filter', title: 'Low Quality Pipelines', desc: 'Wasting engineering hours interviewing unqualified candidates.' },
        { icon: 'fas fa-chart-line', title: 'Inflexible Scaling', desc: 'Inability to ramp team size up or down based on project demands.' }
    ];

    const outcomes = [
        {
            icon: 'fas fa-stopwatch',
            title: 'Reduce Hiring Time',
            desc: 'Accelerate your time-to-hire with pre-vetted, highly qualified talent pools.',
            color: '#4facfe'
        },
        {
            icon: 'fas fa-gem',
            title: 'Improve Talent Quality',
            desc: 'Access the top 5% of technical professionals who match your stack and culture.',
            color: '#9f55ff'
        },
        {
            icon: 'fas fa-users-cog',
            title: 'Build Stronger Teams',
            desc: 'Construct cohesive engineering units designed for long-term retention.',
            color: '#00d4ff'
        },
        {
            icon: 'fas fa-expand-arrows-alt',
            title: 'Scale Hiring Efficiently',
            desc: 'Adapt your workforce dynamically to meet shifting business objectives.',
            color: '#ff6b6b'
        }
    ];

    const capabilities = [
        { name: 'Executive Search', icon: 'fas fa-user-tie', color: '#61DAFB' },
        { name: 'IT Staffing', icon: 'fas fa-laptop-code', color: '#339933' },
        { name: 'Dedicated Teams', icon: 'fas fa-users', color: '#3776AB' },
        { name: 'Contract Staffing', icon: 'fas fa-file-contract', color: '#47A248' },
        { name: 'Skill Assessments', icon: 'fas fa-clipboard-check', color: '#FF9900' },
        { name: 'Technical Onboarding', icon: 'fas fa-door-open', color: '#FFCA28' }
    ];

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
        { step: '01', title: 'Discovery', desc: 'Understanding your technical stack, company culture, and urgent hiring needs.' },
        { step: '02', title: 'Sourcing', desc: 'Tapping into passive talent networks and active industry professionals.' },
        { step: '03', title: 'Screening', desc: 'Rigorous multi-stage technical and behavioral evaluation by our experts.' },
        { step: '04', title: 'Shortlisting', desc: 'Presenting only the top 3-5 candidates perfectly matched for the role.' },
        { step: '05', title: 'Coordination', desc: 'Managing the interview process, feedback loops, and negotiations.' },
        { step: '06', title: 'Onboarding', desc: 'Ensuring a smooth transition and integrating the talent into your team.' }
    ];

    const faqData = [
        {
            question: "How is your recruitment process different from standard agencies?",
            answer: "We focus exclusively on technical and engineering roles. Because we build software ourselves, our screening process is conducted by actual engineers, ensuring you only interview highly capable candidates."
        },
        {
            question: "Do you offer contract-to-hire staffing?",
            answer: "Yes, we provide flexible contract, contract-to-hire, and direct placement staffing solutions depending on your immediate project needs and long-term scaling strategy."
        },
        {
            question: "How quickly can you provide candidates?",
            answer: "For standard tech stacks (React, Node, Python), we typically present fully vetted candidates within 48 to 72 hours of finalizing the job requirements."
        },
        {
            question: "What is your candidate replacement policy?",
            answer: "If a placed candidate leaves or is let go within the first 90 days, we will source a replacement at no additional cost."
        },
        {
            question: "Do you offer contract-to-hire options?",
            answer: "Yes, we provide flexible contract, contract-to-hire, and direct-hire models to suit your organization's financial and operational needs."
        }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Technical Recruitment & IT Staffing",
        "provider": {
            "@type": "Organization",
            "name": "Vayunex Solution"
        },
        "serviceType": "Human Resources Consulting"
    };

    return (
        <div className="service-page recruitment-page">
            <SEO 
                title="Technical Recruitment & IT Staffing | Vayunex Solution"
                description="Scale your engineering team with elite tech talent. Specialized IT staffing, executive search, and dedicated team building by Vayunex."
                keywords="IT staffing, technical recruitment, hire react developers, executive search tech, software engineering staffing"
                canonicalUrl="https://vayunexsolution.com/services/recruitment"
                faqData={faqData}
                structuredData={serviceSchema}
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Breadcrumbs />
                <QuickAnswers 
                    title="What is Technical Recruitment & IT Staffing?"
                    answer="Technical Recruitment and IT Staffing is a specialized service where we source, vet, and place top-tier software engineers, AI developers, and tech executives directly into your organization. We significantly reduce time-to-hire while ensuring candidates align with both your technical stack and company culture."
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
                        <i className="fas fa-users"></i> Recruitment & Staffing
                    </span>
                    <h1>Build High-Performance Teams That <span className="text-gradient">Scale Your Business</span></h1>
                    <p>Stop wasting engineering hours on bad interviews. Let our technical experts source, vet, and deliver the top 5% of talent for your stack.</p>
                    <div className="hero-cta-group">
                        <Link to="/contact?intent=recruitment" className="cta-primary">
                            <i className="fas fa-paper-plane"></i> Discuss Hiring Needs
                        </Link>
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
                        <span className="section-badge">Staffing Capabilities</span>
                        <h2>How We <span className="text-gradient">Hire</span></h2>
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

            {/* 6. Industries */}
            <section className="tech-stack-section" ref={industriesRef} style={{ background: 'var(--bg-secondary)' }}>
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

            {/* 7. Process Section */}
            <section className="process-section" ref={processRef}>
                <div className={`section-content ${processVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Execution</span>
                        <h2>Our Sourcing <span className="text-gradient">Process</span></h2>
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

            {/* 8. Trust Layer */}
            <ServiceTrustLayer />

            {/* 8.5. Industry Network */}
            <IndustryNetwork isCompact={true} />

            {/* 9. FAQ Section */}
            <FAQAccordion faqs={faqData} title="Common Questions About Technical Hiring" />

            {/* CTA Section */}
            <section className="service-cta-section">
                <div className="cta-bg">
                    <div className="cta-orb cta-orb-1"></div>
                    <div className="cta-orb cta-orb-2"></div>
                </div>
                <div className="cta-content">
                    <h2>Ready to Scale Your <span className="text-gradient">Engineering Team</span>?</h2>
                    <p>Let's build a talent pipeline that accelerates your product delivery.</p>
                    <div className="cta-buttons">
                        <Link to="/contact?intent=recruitment" className="cta-primary">
                            <i className="fas fa-comments"></i> Start Sourcing
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RecruitmentPage;
