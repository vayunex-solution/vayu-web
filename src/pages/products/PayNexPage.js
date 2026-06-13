import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import FAQAccordion from '../../components/common/FAQAccordion';
import ServiceTrustLayer from '../../components/common/ServiceTrustLayer';
import LeadCaptureModal from '../../components/common/LeadCaptureModal';
import paynexHero from '../../assets/images/paynex-hero.webp';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import QuickAnswers from '../../components/common/QuickAnswers';
import './ProductPage.css';

const PayNexPage = () => {
    const [heroRef] = useScrollAnimation();
    const [problemRef] = useScrollAnimation();
    const [featuresRef] = useScrollAnimation();
    const [outcomesRef] = useScrollAnimation();
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openDemoModal = () => setIsModalOpen(true);

    const problems = [
        { icon: 'fas fa-calculator', title: 'GST Compliance Nightmares', desc: 'Wasting days at the end of every month manually calculating taxes and reconciling mismatched invoices.' },
        { icon: 'fas fa-search-dollar', title: 'Hidden Cash Flow Issues', desc: 'Generating high revenue but struggling to pay bills because outstanding payments are tracked poorly.' },
        { icon: 'fas fa-file-invoice', title: 'Manual Invoicing Errors', desc: 'Losing credibility with enterprise clients due to spelling mistakes, incorrect calculations, and unprofessional PDFs.' },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const features = [
        { icon: 'fas fa-file-invoice-dollar', title: 'Smart Invoicing', desc: 'Generate professional, branded invoices in seconds that automatically calculate CGST, SGST, and IGST.' },
        { icon: 'fas fa-link', title: 'Payment Links', desc: 'Embed secure UPI and card payment links directly into your invoices to get paid 3x faster.' },
        { icon: 'fas fa-chart-pie', title: 'Financial Insights', desc: 'Visualize your daily cash flow, outstanding receivables, and monthly revenue trends on a live dashboard.' },
        { icon: 'fas fa-users', title: 'Client Management', desc: 'Maintain a centralized directory of all your clients, complete with payment histories and automated reminders.' },
        { icon: 'fas fa-receipt', title: 'Expense Tracking', desc: 'Log operational expenses seamlessly to calculate your true net profit margins in real-time.' },
        { icon: 'fas fa-file-export', title: 'CA-Ready Exports', desc: 'Export perfectly formatted GST reports that your Chartered Accountant can file immediately.' },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const outcomes = [
        { number: '3x', title: 'Faster Payments', desc: 'Get paid instantly via UPI links.' },
        { number: 'Zero', title: 'Tax Errors', desc: 'Automated GST compliance.' },
        { number: '100%', title: 'Financial Clarity', desc: 'Know your exact cash position.' },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const audience = [
        { icon: 'fas fa-laptop-code', title: 'SMEs & Startups', desc: 'Move away from messy Excel sheets and run your finances like a tech company.' },
        { icon: 'fas fa-user-tie', title: 'Service Providers', desc: 'Freelancers and agencies looking to look professional and track recurring retainers.' },
        { icon: 'fas fa-store', title: 'Retail Businesses', desc: 'Generate quick, compliant bills for daily counter sales and B2B orders.' },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const faqs = [
        {
            question: "Does PayNex process payments directly?",
            answer: "PayNex integrates with leading payment gateways (like Razorpay and Stripe) to generate payment links, allowing funds to settle directly into your existing merchant accounts."
        },
        {
            question: "Is the invoicing fully GST compliant for Indian businesses?",
            answer: "Yes, PayNex is built specifically for Indian taxation standards. It automatically handles HSN/SAC codes, reverse charge mechanisms, and state-wise GST calculations."
        },
        {
            question: "Can I customize the invoices with my logo?",
            answer: "Absolutely. You can add your company logo, choose brand colors, and add custom terms and conditions to ensure your bills look highly professional."
        },
        {
            question: "Does it help with monthly GST filing?",
            answer: "Yes, PayNex automatically compiles your sales data into GSTR-1 ready formats that you or your CA can download and file instantly."
        },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    return (
        <main className="product-page" style={{ '--product-accent': '#10B981' }}>
            <SEO 
                title="PayNex | Business Financial Infrastructure"
                description="Simplify billing, payments & business operations. Manage invoices, GST compliance, and cash flow from one centralized platform."
                keywords="gst billing software, invoice generator, business payment tracking, SME financial software"
                canonicalUrl="https://vayunexsolution.com/products/paynex"
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Breadcrumbs />
                <QuickAnswers 
                    title="What is PayNex?"
                    answer="PayNex is a modern payroll and HR management system that automates employee onboarding, attendance tracking, compliance, and salary disbursements. It eliminates manual errors and saves hundreds of HR hours every month."
                />
            </div>


            {/* 1. HERO SECTION */}
            <section className="product-hero" ref={heroRef}>
                <div className="product-hero-bg">
                    <div className="product-hero-orb" style={{ background: '#10B981', top: '-20%', left: '-10%', width: '600px', height: '600px' }} />
                    <div className="product-hero-grid" />
                </div>
                <div className="product-hero-container">
                    <div className="product-hero-content">
                        <span className="product-eyebrow">Financial Infrastructure</span>
                        <h1 className="product-hero-title">Simplify Billing, Payments & <span style={{ color: 'var(--product-accent)' }}>Operations.</span></h1>
                        <p className="product-hero-subtext">Stop fighting with Excel spreadsheets. Manage your invoices, GST compliance, and daily business workflows from one intelligent platform.</p>
                        <div className="product-hero-cta">
                            <a href="https://paynex.vayunexsolution.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                Launch PayNex <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                            </a>
                            <button onClick={openDemoModal} className="btn-secondary">
                                Request Demo
                            </button>
                        </div>
                    </div>
                    <div className="product-hero-visual">
                        <img src={paynexHero} alt="PayNex Financial Dashboard" />
                    </div>
                </div>
            </section>

            {/* 2 & 3. PROBLEM & COST OF INACTION */}
            <section className="product-section bg-alt" ref={problemRef}>
                <div className="section-container">
                    <div className="section-header-center">
                        <h2 className="section-title">The Cost of Manual Finance</h2>
                        <p className="section-subtitle">Financial ambiguity destroys growing businesses. If you cannot instantly see who owes you money and what your tax liability is, you are flying blind.</p>
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
                        <h3>Unpaid Invoices Kill Companies</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Businesses don't fail because they aren't profitable; they fail because they run out of cash. Without an automated system tracking receivables, your money is sitting in your client's bank account.</p>
                    </div>
                </div>
            </section>

            {/* 4 & 5. INTRO & FEATURES */}
            <section className="product-section" ref={featuresRef}>
                <div className="section-container">
                    <div className="section-header-left">
                        <h2 className="section-title">Complete Financial <span style={{ color: 'var(--product-accent)' }}>Clarity</span></h2>
                        <p className="section-subtitle">PayNex is not just an invoice generator. It is the financial operating system for modern Indian businesses.</p>
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
                        <h2 className="section-title">Built For Growing Teams</h2>
                        <p className="section-subtitle">From solo freelancers to high-volume retail operations, PayNex scales with your transaction volume.</p>
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
                <FAQAccordion faqs={faqs} title="Common Questions About PayNex" />
            </div>

            {/* 11 & 12. CTA */}
            <section className="product-cta-section">
                <div className="product-cta-bg" />
                <div className="product-cta-content">
                    <h2>Ready to Take Control Of Your <span style={{ color: 'var(--product-accent)' }}>Finances</span>?</h2>
                    <p>Start generating compliant invoices and collecting payments faster today.</p>
                    <div className="product-hero-cta" style={{ justifyContent: 'center', marginTop: '2rem' }}>
                        <a href="https://paynex.vayunexsolution.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                            Launch PayNex <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                        </a>
                    </div>
                </div>
            </section>

            <LeadCaptureModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                mode="demo"
                productName="PayNex"
                productId="paynex"
            />
        </main>
    );
};

export default PayNexPage;
