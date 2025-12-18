import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './ServicesPage.css';

const WebDevelopmentPage = () => {
    const [heroRef, heroVisible] = useScrollAnimation();
    const [typesRef, typesVisible] = useScrollAnimation();
    const [techRef, techVisible] = useScrollAnimation();
    const [compRef, compVisible] = useScrollAnimation();
    const [processRef, processVisible] = useScrollAnimation();

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
        { name: 'Shopify', icon: 'fab fa-shopify', color: '#7AB55C' }
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
                { text: 'Responsive Design', included: true },
                { text: 'Advanced Forms', included: true },
                { text: 'Full SEO Suite', included: true },
                { text: 'SSL Certificate', included: true },
                { text: 'Custom CMS', included: true },
                { text: 'Full E-commerce', included: true },
                { text: 'Custom API', included: true },
                { text: '24/7 Support', included: true }
            ],
            best: false
        }
    ];

    const process = [
        { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
        { step: '02', title: 'Design', desc: 'Creating wireframes and UI/UX designs' },
        { step: '03', title: 'Development', desc: 'Building your website with clean code' },
        { step: '04', title: 'Testing', desc: 'Quality assurance across all devices' },
        { step: '05', title: 'Launch', desc: 'Deploying and going live' },
        { step: '06', title: 'Support', desc: 'Ongoing maintenance and updates' }
    ];

    // FAQ Data for AEO/GEO
    const faqData = [
        {
            question: "What is the cost of website development in Chandigarh?",
            answer: "Website development costs in Chandigarh start from ₹15,000 for basic websites. Professional websites cost ₹40,000 onwards, and enterprise solutions start from ₹1,00,000. Vayunex Solution offers flexible packages for all business sizes."
        },
        {
            question: "How long does it take to build a website?",
            answer: "A basic website takes 2-3 weeks, professional websites take 4-6 weeks, and enterprise solutions can take 8-12 weeks depending on complexity. Vayunex follows an agile development process for faster delivery."
        },
        {
            question: "Do you provide website maintenance and support?",
            answer: "Yes, Vayunex provides ongoing website maintenance, security updates, performance optimization, and 24/7 support for enterprise clients. We ensure your website stays secure and up-to-date."
        },
        {
            question: "Which technologies do you use for web development?",
            answer: "We use modern technologies including React.js, Node.js, Python, MongoDB, AWS, Firebase, WordPress, and Shopify. We choose the best technology stack based on your project requirements."
        },
        {
            question: "Can you build e-commerce websites?",
            answer: "Yes, we specialize in e-commerce development including Shopify stores, WooCommerce sites, custom marketplaces, and B2B portals with payment gateway integration, inventory management, and order tracking."
        }
    ];

    // Service structured data
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Web & App Development Services",
        "provider": {
            "@type": "Organization",
            "name": "Vayunex Solution"
        },
        "serviceType": "Web Development",
        "areaServed": {
            "@type": "Place",
            "name": "Chandigarh, Mohali, Panchkula, Punjab, India"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development Packages",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "name": "Starter Package",
                    "price": "15000",
                    "priceCurrency": "INR"
                },
                {
                    "@type": "Offer",
                    "name": "Professional Package",
                    "price": "40000",
                    "priceCurrency": "INR"
                },
                {
                    "@type": "Offer",
                    "name": "Enterprise Package",
                    "price": "100000",
                    "priceCurrency": "INR"
                }
            ]
        }
    };

    return (
        <div className="service-page web-dev-page">
            <SEO
                title="Best Web & App Development Company in Chandigarh | Website Development Services"
                description="Top-rated web development company in Chandigarh, Mohali & Panchkula. We build custom websites, e-commerce stores, SaaS platforms & mobile apps. Get free quote! ₹15,000 onwards."
                keywords="web development Chandigarh, website development Mohali, app development Panchkula, e-commerce website, React development, best web developer Punjab, website design company"
                canonicalUrl="https://vayunexsolution.com/services/web-development"
                faqData={faqData}
                structuredData={serviceSchema}
            />

            {/* Hero Section */}
            <section className="service-hero" ref={heroRef}>
                <div className="service-hero-bg">
                    <div className="hero-orb orb-1"></div>
                    <div className="hero-orb orb-2"></div>
                    <div className="hero-grid"></div>
                </div>
                <div className={`service-hero-content ${heroVisible ? 'visible' : ''}`}>
                    <span className="service-badge">
                        <i className="fas fa-code"></i> Our Services
                    </span>
                    <h1>Web & App <span className="text-gradient">Development</span></h1>
                    <p>Building custom, high-performance digital platforms that drive business growth and establish your online presence.</p>
                    <div className="hero-cta-group">
                        <Link to="/contact" className="cta-primary">
                            <i className="fas fa-paper-plane"></i> Get Free Quote
                        </Link>
                        <a href="#packages" className="cta-secondary">
                            <i className="fas fa-tags"></i> View Packages
                        </a>
                    </div>
                </div>
            </section>

            {/* Website Types Section */}
            <section className="service-types-section" ref={typesRef}>
                <div className={`section-content ${typesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">What We Build</span>
                        <h2>Types of <span className="text-gradient">Websites</span> We Create</h2>
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

            {/* Tech Stack Section */}
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

            {/* Comparison/Packages Section */}
            <section id="packages" className="packages-section" ref={compRef}>
                <div className={`section-content ${compVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Pricing</span>
                        <h2>Choose Your <span className="text-gradient">Package</span></h2>
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
                                <Link to="/contact" className="package-cta">
                                    Get Started <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section" ref={processRef}>
                <div className={`section-content ${processVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">How We Work</span>
                        <h2>Our <span className="text-gradient">Process</span></h2>
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

            {/* CTA Section */}
            <section className="service-cta-section">
                <div className="cta-bg">
                    <div className="cta-orb cta-orb-1"></div>
                    <div className="cta-orb cta-orb-2"></div>
                </div>
                <div className="cta-content">
                    <h2>Ready to Build Your <span className="text-gradient">Dream Website</span>?</h2>
                    <p>Let's discuss your project and bring your vision to life.</p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="cta-primary">
                            <i className="fas fa-comments"></i> Start a Project
                        </Link>
                        <a href="tel:+919518051255" className="cta-secondary">
                            <i className="fas fa-phone"></i> Call Us Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopmentPage;
