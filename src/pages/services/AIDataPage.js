import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import FAQAccordion from '../../components/common/FAQAccordion';
import ServiceTrustLayer from '../../components/common/ServiceTrustLayer';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import QuickAnswers from '../../components/common/QuickAnswers';
import './ServicesPage.css';

const AIDataPage = () => {
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
        { icon: 'fas fa-copy', title: 'Repetitive Manual Tasks', desc: 'Your team wastes thousands of hours on data entry, scheduling, and repetitive workflows.' },
        { icon: 'fas fa-chart-bar', title: 'Siloed Data', desc: 'Sitting on terabytes of customer data but unable to extract actionable business insights.' },
        { icon: 'fas fa-user-clock', title: 'Slow Customer Support', desc: 'Customers abandoning your service due to delayed response times and limited support hours.' },
        { icon: 'fas fa-exclamation-triangle', title: 'Human Error', desc: 'Costly mistakes in compliance, finance, or operations due to manual processing fatigue.' }
    ];

    const outcomes = [
        {
            icon: 'fas fa-rocket',
            title: '10x Operational Speed',
            desc: 'Automate repetitive workflows and allow your team to focus on strategic growth.',
            color: '#4facfe'
        },
        {
            icon: 'fas fa-brain',
            title: 'Predictive Intelligence',
            desc: 'Anticipate customer behavior, inventory needs, and market trends before they happen.',
            color: '#9f55ff'
        },
        {
            icon: 'fas fa-headset',
            title: '24/7 Instant Support',
            desc: 'Resolve 80% of customer inquiries instantly without human intervention.',
            color: '#00d4ff'
        },
        {
            icon: 'fas fa-money-bill-wave',
            title: 'Reduce Operational Costs',
            desc: 'Lower overhead expenses significantly by replacing manual labor with intelligent software.',
            color: '#ff6b6b'
        }
    ];

    const capabilities = [
        { name: 'Workflow Automation', icon: 'fas fa-cogs', color: '#61DAFB' },
        { name: 'Custom LLMs', icon: 'fas fa-brain', color: '#339933' },
        { name: 'Computer Vision', icon: 'fas fa-eye', color: '#3776AB' },
        { name: 'Data Pipeline Engineering', icon: 'fas fa-database', color: '#47A248' },
        { name: 'Predictive Modeling', icon: 'fas fa-chart-line', color: '#FF9900' },
        { name: 'Conversational Agents', icon: 'fas fa-comments', color: '#FFCA28' }
    ];

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

    const techStack = [
        { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
        { name: 'TensorFlow', icon: 'fas fa-network-wired', color: '#FF6F00' },
        { name: 'PyTorch', icon: 'fas fa-fire', color: '#EE4C2C' },
        { name: 'OpenAI API', icon: 'fas fa-robot', color: '#10A37F' },
        { name: 'AWS SageMaker', icon: 'fab fa-aws', color: '#FF9900' },
        { name: 'GCP AI', icon: 'fab fa-google', color: '#4285F4' },
        { name: 'Hugging Face', icon: 'fas fa-smile-beam', color: '#FFD21E' },
        { name: 'Scikit-Learn', icon: 'fas fa-cogs', color: '#F7931E' }
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

    const process = [
        { step: '01', title: 'Audit', desc: 'Analyzing your current workflows and identifying high-ROI automation opportunities.' },
        { step: '02', title: 'Data Strategy', desc: 'Cleaning, structuring, and securing your data pipelines for model training.' },
        { step: '03', title: 'Model Selection', desc: 'Choosing the right open-source or proprietary models for your specific use case.' },
        { step: '04', title: 'Integration', desc: 'Connecting the AI models securely to your existing software ecosystem via APIs.' },
        { step: '05', title: 'Testing', desc: 'Rigorous validation against edge cases to prevent hallucinations or errors.' },
        { step: '06', title: 'Deployment', desc: 'Rolling out the automation gradually and monitoring real-time performance.' }
    ];

    const faqData = [
        {
            question: "Is AI secure for my business data?",
            answer: "Yes. We build isolated, tenant-specific environments. For sensitive data, we deploy private, open-source models (like Llama 3) directly on your servers so data never leaves your infrastructure."
        },
        {
            question: "How long does it take to deploy an AI chatbot?",
            answer: "A standard AI support agent trained on your company's knowledge base can typically be deployed and integrated within 2 to 4 weeks."
        },
        {
            question: "Do I need to hire a data scientist to maintain it?",
            answer: "No. We build intuitive interfaces and dashboards so your existing team can monitor and manage the AI tools without writing code."
        },
        {
            question: "Will AI replace my employees?",
            answer: "We design AI to augment your staff, not replace them. By automating repetitive tasks, your team is freed up to focus on high-value, strategic work."
        },
        {
            question: "What is the ROI of an AI integration?",
            answer: "Most of our clients see a return on investment within 3 to 6 months through reduced operational costs and increased team productivity."
        }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI & Workflow Automation",
        "provider": {
            "@type": "Organization",
            "name": "Vayunex Solution"
        },
        "serviceType": "IT Consulting"
    };

    return (
        <div className="service-page ai-data-page">
            <SEO 
                title="AI Integration & Workflow Automation | Vayunex Solution"
                description="Transform your business with custom AI solutions. Automate repetitive tasks, deploy intelligent chatbots, and build custom machine learning pipelines."
                keywords="AI automation agency, custom LLM development, business workflow automation, machine learning consulting, AI chatbots"
                canonicalUrl="https://vayunexsolution.com/services/ai-data"
                faqData={faqData}
                structuredData={serviceSchema}
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Breadcrumbs />
                <QuickAnswers 
                    title="What is AI & Workflow Automation?"
                    answer="AI and Workflow Automation involves integrating custom Large Language Models, machine learning algorithms, and conversational chatbots into your business. It allows you to automate repetitive tasks, provide 24/7 intelligent customer support, and extract predictive insights from your data, significantly reducing operational costs."
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
                        <i className="fas fa-robot"></i> AI & Automation
                    </span>
                    <h1>Eliminate Inefficiency With <span className="text-gradient">Intelligent Automation</span></h1>
                    <p>Stop paying humans to do bot work. We integrate custom AI solutions that automate your workflows, reduce operational costs, and 10x your team's productivity.</p>
                    <div className="hero-cta-group">
                        <Link to="/contact?intent=ai-automation" className="cta-primary">
                            <i className="fas fa-paper-plane"></i> Explore AI Solutions
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
                        <span className="section-badge">Technical Capabilities</span>
                        <h2>How We <span className="text-gradient">Automate</span></h2>
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

            {/* 5. Deliverables (aiServices) */}
            <section className="service-types-section" ref={deliverablesRef} style={{ background: 'var(--bg-primary)' }}>
                <div className={`section-content ${deliverablesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">What We Deliver</span>
                        <h2>Core <span className="text-gradient">AI Services</span></h2>
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

            {/* 6. Industries (useCases) */}
            <section className="tech-stack-section" ref={industriesRef} style={{ background: 'var(--bg-secondary)' }}>
                <div className={`section-content ${industriesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Industries</span>
                        <h2>AI Across <span className="text-gradient">Sectors</span></h2>
                    </div>
                    <div className="tech-grid">
                        {useCases.map((ind, index) => (
                            <div key={index} className="tech-item" style={{ '--tech-color': '#00d4ff', flexBasis: '250px', flexGrow: 1, alignItems: 'flex-start', textAlign: 'left' }}>
                                <i className={ind.icon} style={{ marginBottom: '10px' }}></i>
                                <span style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '5px' }}><strong>{ind.industry}</strong></span>
                                <small style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{ind.use}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Tech Stack */}
            <section className="tech-stack-section" ref={techRef} style={{ background: 'var(--bg-primary)' }}>
                <div className={`section-content ${techVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Technologies</span>
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
                        <h2>Transparent <span className="text-gradient">Packages</span></h2>
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
                                <Link to="/contact?intent=ai-automation" className="package-cta">
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
                        <h2>Our Automation <span className="text-gradient">Process</span></h2>
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
            <FAQAccordion faqs={faqData} title="Common Questions About AI Integration" />

            {/* CTA Section */}
            <section className="service-cta-section">
                <div className="cta-bg">
                    <div className="cta-orb cta-orb-1"></div>
                    <div className="cta-orb cta-orb-2"></div>
                </div>
                <div className="cta-content">
                    <h2>Ready to Scale With <span className="text-gradient">AI</span>?</h2>
                    <p>Let's build a custom automation system that accelerates your business.</p>
                    <div className="cta-buttons">
                        <Link to="/contact?intent=ai-automation" className="cta-primary">
                            <i className="fas fa-comments"></i> Start Automating
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AIDataPage;
