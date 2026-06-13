import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import FAQAccordion from '../../components/common/FAQAccordion';
import ServiceTrustLayer from '../../components/common/ServiceTrustLayer';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import QuickAnswers from '../../components/common/QuickAnswers';
import './ServicesPage.css';

const WebDevelopmentPage = () => {
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
        { icon: 'fas fa-hourglass-half', title: 'Slow Legacy Systems', desc: 'Your current website takes forever to load, causing visitors to abandon before they even see your offer.' },
        { icon: 'fas fa-unlink', title: 'Disconnected Platforms', desc: 'Your CRM, inventory, and website do not talk to each other, forcing manual data entry.' },
        { icon: 'fas fa-mobile-alt', title: 'Poor Mobile Experience', desc: 'Losing 60% of your potential customers because your site breaks on mobile devices.' },
        { icon: 'fas fa-shield-alt', title: 'Security Vulnerabilities', desc: 'Constant fear of data breaches because you are running on outdated, unpatched software.' },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const outcomes = [
        {
            icon: 'fas fa-tachometer-alt',
            title: 'Sub-Second Load Times',
            desc: 'Retain users with lightning-fast architecture that scores 90+ on Google Core Web Vitals.',
            color: '#4facfe'
        },
        {
            icon: 'fas fa-sync',
            title: 'Automated Operations',
            desc: 'Seamlessly integrate your digital platform with your existing business tools and APIs.',
            color: '#9f55ff'
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Higher Conversion Rates',
            desc: 'Turn visitors into buyers with frictionless, conversion-optimized user experiences.',
            color: '#00d4ff'
        },
        {
            icon: 'fas fa-lock',
            title: 'Enterprise Security',
            desc: 'Sleep peacefully knowing your customer data is protected by modern security protocols.',
            color: '#ff6b6b'
        },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const capabilities = [
        { name: 'Custom Web Apps', icon: 'fas fa-laptop-code', color: '#61DAFB' },
        { name: 'E-Commerce Solutions', icon: 'fas fa-shopping-cart', color: '#339933' },
        { name: 'SaaS Architecture', icon: 'fas fa-cloud', color: '#3776AB' },
        { name: 'API Development', icon: 'fas fa-network-wired', color: '#47A248' },
        { name: 'UI/UX Design', icon: 'fas fa-paint-brush', color: '#FF9900' },
        { name: 'Cloud Deployment', icon: 'fas fa-server', color: '#FFCA28' },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const websiteTypes = [
        {
            icon: 'fas fa-shopping-cart',
            title: 'E-Commerce Websites',
            desc: 'Online stores with payment integration, inventory management, and order tracking.',
            examples: ['Shopify-style stores', 'Multi-vendor marketplaces', 'B2B portals'],
            color: '#4facfe'
        },
        {
            icon: 'fas fa-building',
            title: 'Corporate Websites',
            desc: 'Professional business websites that establish credibility and showcase services.',
            examples: ['Company portfolios', 'Service showcases', 'Landing pages'],
            color: '#9f55ff'
        },
        {
            icon: 'fas fa-cloud',
            title: 'SaaS Platforms',
            desc: 'Custom web applications with user authentication, dashboards, and APIs.',
            examples: ['CRM systems', 'Project management tools', 'Analytics dashboards'],
            color: '#00d4ff'
        },
        {
            icon: 'fas fa-mobile-alt',
            title: 'Web & Mobile Apps',
            desc: 'Cross-platform applications that work on all devices seamlessly.',
            examples: ['Progressive Web Apps', 'React Native apps', 'Hybrid solutions'],
            color: '#ff6b6b'
        },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const targetAudience = [
        { icon: 'fas fa-rocket', title: 'Startups', desc: 'Rapidly launching MVPs to secure funding and acquire early adopters.', color: '#4facfe' },
        { icon: 'fas fa-store', title: 'SMEs', desc: 'Digitizing offline operations and expanding into global e-commerce markets.', color: '#9f55ff' },
        { icon: 'fas fa-building', title: 'Enterprise Teams', desc: 'Modernizing legacy monoliths into scalable microservice architectures.', color: '#00d4ff' },
        { icon: 'fas fa-shopping-bag', title: 'Retail Brands', desc: 'Building high-converting digital storefronts that handle massive traffic spikes.', color: '#ff6b6b' },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const techStack = [
        { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
        { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
        { name: 'MongoDB', icon: 'fas fa-database', color: '#47A248' },
        { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900' },
        { name: 'Firebase', icon: 'fas fa-fire', color: '#FFCA28' },
        { name: 'WordPress', icon: 'fab fa-wordpress', color: '#21759B' },
        { name: 'Shopify', icon: 'fab fa-shopify', color: '#7AB55C' },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const packages = [
        {
            name: 'Starter',
            price: '₹15,000',
            period: 'onwards',
            color: '#4facfe',
            features: [
                { text: 'Up to 5 Pages', included: true },
                { text: 'Responsive Design', included: true },
                { text: 'Contact Form', included: true },
                { text: 'Basic SEO', included: true },
                { text: 'SSL Certificate', included: true },
                { text: 'CMS Integration', included: false },
                { text: 'E-commerce', included: false },
                { text: 'Custom API', included: false },
                { text: 'Priority Support', included: false }
            ],
            best: false
        },
        {
            name: 'Professional',
            price: '₹40,000',
            period: 'onwards',
            color: '#9f55ff',
            features: [
                { text: 'Up to 15 Pages', included: true },
                { text: 'Responsive Design', included: true },
                { text: 'Contact Form', included: true },
                { text: 'Advanced SEO', included: true },
                { text: 'SSL Certificate', included: true },
                { text: 'CMS Integration', included: true },
                { text: 'Basic E-commerce', included: true },
                { text: 'Custom API', included: false },
                { text: 'Priority Support', included: true }
            ],
            best: true
        },
        {
            name: 'Enterprise',
            price: '₹1,00,000',
            period: 'onwards',
            color: '#00d4ff',
            features: [
                { text: 'Unlimited Pages', included: true },
                { text: 'Premium Design', included: true },
                { text: 'Advanced Features', included: true },
                { text: 'Enterprise SEO', included: true },
                { text: 'Advanced Security', included: true },
                { text: 'Custom CMS', included: true },
                { text: 'Full E-commerce', included: true },
                { text: 'Custom API', included: true },
                { text: '24/7 Priority Support', included: true }
            ],
            best: false
        },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const process = [
        { step: '01', title: 'Discovery', desc: 'Deep dive into your business model, target audience, and technical requirements.' },
        { step: '02', title: 'Architecture', desc: 'Designing database schemas, API routes, and cloud infrastructure.' },
        { step: '03', title: 'UI/UX Design', desc: 'Creating wireframes and high-fidelity prototypes for your approval.' },
        { step: '04', title: 'Development', desc: 'Writing clean, scalable code following Agile sprints and CI/CD pipelines.' },
        { step: '05', title: 'Testing', desc: 'Rigorous QA, security auditing, and load testing before launch.' },
        { step: '06', title: 'Deployment', desc: 'Zero-downtime migration to production and continuous post-launch support.' },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const faqData = [
        {
            question: "How long does it take to build a custom website?",
            answer: "A standard corporate website typically takes 3-4 weeks. Complex E-commerce or SaaS platforms can take 8-12 weeks depending on the feature set and API integrations."
        },
        {
            question: "Will my website be mobile-friendly?",
            answer: "Yes. Every platform we build is responsive by default, ensuring a flawless user experience across smartphones, tablets, and desktops."
        },
        {
            question: "Do you provide hosting and maintenance?",
            answer: "We offer comprehensive managed hosting on AWS/Vercel, including daily backups, security patching, and uptime monitoring."
        },
        {
            question: "Can I update the content myself?",
            answer: "Absolutely. We integrate intuitive Content Management Systems (CMS) like Sanity or WordPress headless so you can manage your content without touching code."
        },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom Web & App Development",
        "provider": {
            "@type": "Organization",
            "name": "Vayunex Solution"
        },
        "serviceType": "Software Development"
    };

    return (
        <div className="service-page web-development-page">
            <SEO 
                title="Custom Web & App Development Services | Vayunex Solution"
                description="Build scalable, high-performance web applications and e-commerce platforms. We transform business logic into seamless digital experiences."
                keywords="custom web development, SaaS development, React developers, e-commerce web design, enterprise software development"
                canonicalUrl="https://vayunexsolution.com/services/web-development"
                faqData={faqData}
                structuredData={serviceSchema}
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Breadcrumbs />
                <QuickAnswers 
                    title="What is Enterprise Web Development?"
                    answer="Enterprise Web Development is the process of building scalable, highly-secure, and performant web applications tailored for complex business needs. We utilize modern stacks like React, Node.js, and Cloud Infrastructure to deliver robust digital products that drive operational efficiency."
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
                        <i className="fas fa-code"></i> Web & App Development
                    </span>
                    <h1>Build Digital Platforms That <span className="text-gradient">Scale With Your Business</span></h1>
                    <p>Stop losing customers to slow, outdated websites. We engineer high-performance web applications that automate your operations and drive measurable growth.</p>
                    <div className="hero-cta-group">
                        <Link to="/contact?intent=web-development" className="cta-primary">
                            <i className="fas fa-paper-plane"></i> Discuss Your Project
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
                        <h2>How We <span className="text-gradient">Build</span></h2>
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

            {/* 5. Deliverables (websiteTypes) */}
            <section className="service-types-section" ref={deliverablesRef} style={{ background: 'var(--bg-primary)' }}>
                <div className={`section-content ${deliverablesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">What We Build</span>
                        <h2>Types of <span className="text-gradient">Platforms</span> We Create</h2>
                    </div>
                    <div className="types-grid">
                        {websiteTypes.map((type, index) => (
                            <div
                                key={index}
                                className="type-card"
                                style={{ '--card-color': type.color, '--delay': `${index * 0.1}s` }}
                            >
                                <div className="type-icon">
                                    <i className={type.icon}></i>
                                </div>
                                <h3>{type.title}</h3>
                                <p>{type.desc}</p>
                                <ul className="type-examples">
                                    {type.examples.map((ex, i) => (
                                        <li key={i}><i className="fas fa-check"></i> {ex}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Industries (targetAudience) */}
            <section className="service-types-section" ref={industriesRef} style={{ paddingTop: '0', paddingBottom: '100px' }}>
                <div className={`section-content ${industriesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Who We Help</span>
                        <h2>Built For <span className="text-gradient">Ambitious</span> Brands</h2>
                    </div>
                    <div className="types-grid">
                        {targetAudience.map((audience, index) => (
                            <div 
                                key={index} 
                                className="type-card"
                                style={{ '--card-color': audience.color, '--delay': `${index * 0.1}s` }}
                            >
                                <div className="type-icon">
                                    <i className={audience.icon}></i>
                                </div>
                                <h3>{audience.title}</h3>
                                <p>{audience.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Tech Stack */}
            <section className="tech-stack-section" ref={techRef}>
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
                                <Link to="/contact?intent=web-development" className="package-cta">
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
                        <h2>Our Engineering <span className="text-gradient">Process</span></h2>
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
            <FAQAccordion faqs={faqData} title="Common Questions About Web Development" />

            {/* CTA Section */}
            <section className="service-cta-section">
                <div className="cta-bg">
                    <div className="cta-orb cta-orb-1"></div>
                    <div className="cta-orb cta-orb-2"></div>
                </div>
                <div className="cta-content">
                    <h2>Ready to Build Your <span className="text-gradient">Dream Platform</span>?</h2>
                    <p>Let's discuss your project and bring your vision to life.</p>
                    <div className="cta-buttons">
                        <Link to="/contact?intent=web-development" className="cta-primary">
                            <i className="fas fa-comments"></i> Start a Project
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopmentPage;
