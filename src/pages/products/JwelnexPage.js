import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import FAQAccordion from '../../components/common/FAQAccordion';
import ServiceTrustLayer from '../../components/common/ServiceTrustLayer';
import LeadCaptureModal from '../../components/common/LeadCaptureModal';
import jwelnexHero from '../../assets/images/jwelnex-hero.webp';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import QuickAnswers from '../../components/common/QuickAnswers';
import './ProductPage.css';

const JwelnexPage = () => {
    const [heroRef] = useScrollAnimation();
    const [problemRef] = useScrollAnimation();
    const [featuresRef] = useScrollAnimation();
    const [outcomesRef] = useScrollAnimation();
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openDemoModal = () => setIsModalOpen(true);

    const problems = [
        { icon: 'fas fa-boxes', title: 'Inventory Shrinkage', desc: 'Losing track of individual pieces across branches due to manual ledger entries and mismanaged stock counts.' },
        { icon: 'fas fa-file-invoice-dollar', title: 'Slow Billing Workflows', desc: 'Making customers wait during peak hours because billing and GST calculations require multiple software systems.' },
        { icon: 'fas fa-users-slash', title: 'Lost Customer Data', desc: 'Inability to track customer purchase history, preventing personalized marketing and repeat sales.' },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const features = [
        { icon: 'fas fa-barcode', title: 'RFID & Barcode Inventory', desc: 'Track every single gram of metal and stone from manufacturing to the retail counter.' },
        { icon: 'fas fa-file-invoice', title: 'Instant GST Billing', desc: 'Generate compliant invoices in seconds with automatic tax calculations and metal rate syncing.' },
        { icon: 'fas fa-id-card', title: 'Customer CRM', desc: 'Maintain detailed customer profiles, purchase histories, and automated anniversary/birthday alerts.' },
        { icon: 'fas fa-store-alt', title: 'Multi-Branch Control', desc: 'Manage stock transfers, branch-wise sales, and consolidated accounting from one central dashboard.' },
        { icon: 'fas fa-chart-pie', title: 'Live Business Intelligence', desc: 'Access real-time reports on top-selling items, dead stock, and daily profit margins.' },
        { icon: 'fas fa-cogs', title: 'Manufacturing Workflows', desc: 'Track karigar (artisan) issues, receipts, metal losses, and labor charges automatically.' },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const outcomes = [
        { number: '100%', title: 'Stock Accuracy', desc: 'Eliminate theft and misplacement.' },
        { number: '3x', title: 'Faster Checkout', desc: 'Never make a customer wait.' },
        { number: 'Zero', title: 'Compliance Errors', desc: 'Automated, error-free accounting.' },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const audience = [
        { icon: 'fas fa-store', title: 'Retail Showrooms', desc: 'Streamline daily counter sales and customer management.' },
        { icon: 'fas fa-building', title: 'Multi-Branch Chains', desc: 'Centralized control over distributed inventory and staff.' },
        { icon: 'fas fa-industry', title: 'Wholesalers & Manufacturers', desc: 'Track bulk orders, melting loss, and karigar accounts.' },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const faqs = [
        {
            question: "Is Jwelnex compliant with current GST regulations?",
            answer: "Yes, Jwelnex automatically calculates CGST, SGST, IGST, and generates fully compliant invoices and return reports."
        },
        {
            question: "Can I manage multiple branches from one account?",
            answer: "Absolutely. Jwelnex is a cloud-based system that allows you to manage inventory, transfer stock, and view sales data across all your branches from a single dashboard."
        },
        {
            question: "Does it support barcode and RFID scanning?",
            answer: "Yes, Jwelnex integrates seamlessly with standard barcode scanners and advanced RFID systems for rapid stock auditing and billing."
        },
        {
            question: "How secure is my business data?",
            answer: "Your data is hosted on highly secure AWS servers with daily automated backups. We use bank-level encryption to ensure your financial and customer data is never compromised."
        },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    return (
        <main className="product-page" style={{ '--product-accent': '#F59E0B' }}>
            <SEO 
                title="Jwelnex | Jewellery Business Operating System"
                description="Run your entire jewellery business from one platform. Inventory, billing, customer management, and operations in one centralized ecosystem."
                keywords="jewellery erp software, jewellery billing software, jewellery inventory management, multi branch jewellery software"
                canonicalUrl="https://vayunexsolution.com/products/jwelnex"
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Breadcrumbs />
                <QuickAnswers 
                    title="What is Jwelnex?"
                    answer="Jwelnex is an all-in-one ERP software designed specifically for the jewelry industry. It streamlines inventory management, barcoding, GST billing, and customer relationship management, allowing jewelry retailers to automate operations and focus on business growth."
                />
            </div>


            {/* 1. HERO SECTION */}
            <section className="product-hero" ref={heroRef}>
                <div className="product-hero-bg">
                    <div className="product-hero-orb" style={{ background: '#F59E0B', top: '-20%', right: '-10%', width: '600px', height: '600px' }} />
                    <div className="product-hero-grid" />
                </div>
                <div className="product-hero-container">
                    <div className="product-hero-content">
                        <span className="product-eyebrow">Enterprise Jewellery Platform</span>
                        <h1 className="product-hero-title">Run Your Entire Jewellery Business From <span style={{ color: 'var(--product-accent)' }}>One Platform.</span></h1>
                        <p className="product-hero-subtext">Inventory, billing, customer management, reporting, and operations unified in one centralized operating system.</p>
                        <div className="product-hero-cta">
                            <button onClick={openDemoModal} className="btn-primary">
                                Request Demo <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                            </button>
                            <Link to="/contact?subject=Jwelnex%20Engineering" className="btn-secondary">
                                Talk To Engineering
                            </Link>
                        </div>
                    </div>
                    <div className="product-hero-visual">
                        <img src={jwelnexHero} alt="Jwelnex Dashboard Interface" />
                    </div>
                </div>
            </section>

            {/* 2 & 3. PROBLEM & COST OF INACTION */}
            <section className="product-section bg-alt" ref={problemRef}>
                <div className="section-container">
                    <div className="section-header-center">
                        <h2 className="section-title">The Cost of Fragmented Operations</h2>
                        <p className="section-subtitle">Running a high-value inventory business on spreadsheets, outdated desktop software, and paper ledgers is a massive security and operational risk.</p>
                    </div>
                    <div className="problem-grid">
                        {problems.map((prob, idx) => (
                            <div key={idx} className="problem-card">
                                <div className="problem-icon">
                                    <i className={prob.icon}></i>
                                </div>
                                <h3>{prob.title}</h3>
                                <p>{prob.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="cost-banner">
                        <h3>Stop Operating In The Dark</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Without real-time visibility into your stock and cash flow, you are losing margins to inefficiencies every single day.</p>
                    </div>
                </div>
            </section>

            {/* 4 & 5. INTRO & FEATURES */}
            <section className="product-section" ref={featuresRef}>
                <div className="section-container">
                    <div className="section-header-left">
                        <h2 className="section-title">Total Operational <span style={{ color: 'var(--product-accent)' }}>Control</span></h2>
                        <p className="section-subtitle">Jwelnex replaces your disconnected tools with a unified operating system built specifically for the complex workflows of the jewellery industry.</p>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, idx) => (
                            <div key={idx} className="feature-card">
                                <div className="feature-icon">
                                    <i className={feature.icon}></i>
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. OUTCOMES */}
            <section className="product-section bg-alt" ref={outcomesRef}>
                <div className="section-container">
                    <div className="section-header-center">
                        <h2 className="section-title">Measurable Business Impact</h2>
                    </div>
                    <div className="outcomes-grid">
                        {outcomes.map((outcome, idx) => (
                            <div key={idx} className="outcome-card">
                                <div className="outcome-number">{outcome.number}</div>
                                <div className="outcome-title">{outcome.title}</div>
                                <div className="outcome-desc">{outcome.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. TARGET AUDIENCE */}
            <section className="product-section">
                <div className="section-container">
                    <div className="section-header-center">
                        <h2 className="section-title">Built For Scale</h2>
                        <p className="section-subtitle">Whether you operate a single premium boutique or a nationwide retail chain, Jwelnex scales with your operations.</p>
                    </div>
                    <div className="audience-grid">
                        {audience.map((aud, idx) => (
                            <div key={idx} className="audience-card">
                                <div className="audience-icon">
                                    <i className={aud.icon}></i>
                                </div>
                                <div>
                                    <h4>{aud.title}</h4>
                                    <p>{aud.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9 & 10. TRUST & FAQ */}
            <ServiceTrustLayer />
            
            <div style={{ padding: '50px 0', background: 'var(--bg-primary)' }}>
                <FAQAccordion faqs={faqs} title="Common Questions About Jwelnex" />
            </div>

            {/* 11 & 12. CTA */}
            <section className="product-cta-section">
                <div className="product-cta-bg" />
                <div className="product-cta-content">
                    <h2>Ready to Modernize Your <span style={{ color: 'var(--product-accent)' }}>Jewellery Business</span>?</h2>
                    <p>Join the leading brands using Jwelnex to secure their inventory and accelerate their sales.</p>
                    <div className="product-hero-cta" style={{ justifyContent: 'center', marginTop: '2rem' }}>
                        <button onClick={openDemoModal} className="btn-primary">
                            Request Demo <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                        </button>
                    </div>
                </div>
            </section>

            <LeadCaptureModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                mode="demo"
                productName="Jwelnex ERP"
                productId="jwelnex"
            />
        </main>
    );
};

export default JwelnexPage;
