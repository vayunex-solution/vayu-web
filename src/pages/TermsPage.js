import React, { useState, useEffect } from 'react';
import SEO from '../components/common/SEO';
import useReadingProgress from '../hooks/useReadingProgress';
import './LegalPage.css';

const sections = [
    { id: 'section-1', title: '1. Agreement to Terms' },
    { id: 'section-2', title: '2. Definitions' },
    { id: 'section-3', title: '3. Services Description' },
    { id: 'section-4', title: '4. Service Engagement' },
    { id: 'section-5', title: '5. Client Responsibilities' },
    { id: 'section-6', title: '6. Payment Terms' },
    { id: 'section-7', title: '7. Intellectual Property' },
    { id: 'section-8', title: '8. Warranties' },
    { id: 'section-9', title: '9. Limitation of Liability' },
    { id: 'section-10', title: '10. Confidentiality' },
    { id: 'section-11', title: '11. Data Protection' },
    { id: 'section-12', title: '12. Indemnification' },
    { id: 'section-13', title: '13. Termination' },
    { id: 'section-14', title: '14. Force Majeure' },
    { id: 'section-15', title: '15. Dispute Resolution' },
    { id: 'section-16', title: '16. General Provisions' },
    { id: 'section-17', title: '17. Contact Information' }
];

const TermsPage = () => {
    const completion = useReadingProgress();
    const [activeSection, setActiveSection] = useState('section-1');

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(s => document.getElementById(s.id));
            const scrollPosition = window.scrollY + 200; // Offset

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const element = sectionElements[i];
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(element.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="legal-page">
            <SEO
                title="Terms & Conditions | Vayunex Solution"
                description="Terms and Conditions for using Vayunex Solution services. Compliant with Indian Contract Act 1872 and IT Act 2000."
                keywords="terms and conditions, terms of service, Vayunex terms, service agreement, legal terms, India, IT services"
            />
            
            {/* Reading Progress Bar */}
            <div 
                className="legal-progress-bar" 
                style={{ width: `${completion}%` }}
                aria-hidden="true"
            />

            {/* ========== HERO SECTION ========== */}
            <section className="legal-hero" aria-label="Terms of Service Hero">
                <div className="legal-hero__bg" />
                <div className="legal-hero__content">
                    <span className="legal-eyebrow">Legal Center</span>
                    <h1>Terms & Conditions</h1>
                    <p>Please read these terms carefully before using our services.</p>
                </div>
            </section>

            {/* ========== LEGAL LAYOUT ========== */}
            <div className="legal-layout">
                
                {/* TOC Sidebar */}
                <aside className="legal-sidebar">
                    <nav className="legal-toc">
                        <h3>Table of Contents</h3>
                        <ul>
                            {sections.map(section => (
                                <li key={section.id}>
                                    <a 
                                        href={`#${section.id}`} 
                                        className={activeSection === section.id ? 'active' : ''}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <div className="legal-content-wrapper">
                    <article className="legal-glass-container legal-typography">
                        
                        <p className="last-updated">Last Updated: January 2025</p>
                        <p className="legal-notice">
                            <strong>Legal Framework:</strong> These Terms & Conditions are governed by the Indian Contract Act, 1872, Information Technology Act, 2000, Consumer Protection Act, 2019, and other applicable laws of India.
                        </p>

                        <h2 id="section-1">1. Agreement to Terms</h2>
                        <p>
                            By accessing or using the website of Vayunex Solution ("Company", "we", "our", "us") at vayunexsolution.com, or by engaging our services, you ("Client", "User", "you") agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, you may not access the website or use our services.
                        </p>
                        <p>
                            These terms constitute a legally binding agreement between you and Vayunex Solution, a company registered and operating in India.
                        </p>

                        <h3>1.1 Product Ecosystem Coverage</h3>
                        <p>
                            These Terms & Conditions explicitly cover the entire Vayunex Solution product ecosystem, including but not limited to:
                        </p>
                        <ul>
                            <li><strong>Vayunex Solution</strong> (Primary Services & Consulting)</li>
                            <li><strong>Jwelnex</strong> (Jewellery ERP)</li>
                            <li><strong>PayNex</strong> (Payment Gateway & Billing Solutions)</li>
                            <li><strong>SocialNex</strong> (Social Media Management)</li>
                            <li><strong>SchoolDost</strong> (Educational Management System)</li>
                            <li><strong>InventoryNex</strong> (Inventory & Stock Management)</li>
                        </ul>
                        <p>
                            Any reference to "Services", "Platforms", or "Websites" in this document legally encompasses all the aforementioned products and their respective sub-domains.
                        </p>

                        <h2 id="section-2">2. Definitions</h2>
                        <ul>
                            <li><strong>"Services"</strong> means all IT services, software development, digital marketing, consulting, and other professional services offered by Vayunex Solution.</li>
                            <li><strong>"Deliverables"</strong> means all work products, software, code, designs, documents, and materials created or delivered by us under any service agreement.</li>
                            <li><strong>"Confidential Information"</strong> means any proprietary information, trade secrets, business data, or other sensitive information shared between parties.</li>
                            <li><strong>"Intellectual Property"</strong> means all patents, copyrights, trademarks, trade secrets, and other proprietary rights.</li>
                        </ul>

                        <h2 id="section-3">3. Services Description</h2>
                        <p>Vayunex Solution provides the following professional services:</p>
                        <ul>
                            <li><strong>Web Development:</strong> Custom website design, development, and maintenance using modern technologies</li>
                            <li><strong>Mobile App Development:</strong> Android and iOS application development</li>
                            <li><strong>Software Development:</strong> Custom software solutions, enterprise applications, and SaaS products</li>
                            <li><strong>AI & Machine Learning:</strong> Artificial intelligence solutions, data analytics, and ML model development</li>
                            <li><strong>Digital Marketing:</strong> SEO, social media marketing, content marketing, and paid advertising</li>
                            <li><strong>IT Consulting:</strong> Technology strategy, digital transformation, and business consulting</li>
                            <li><strong>Cloud Services:</strong> Cloud infrastructure setup, migration, and management</li>
                            <li><strong>Products:</strong> Jwelnex ERP, PayNex, SocialNex, SchoolDost, InventoryNex, and other software products</li>
                        </ul>

                        <h2 id="section-4">4. Service Engagement Process</h2>
                        <h3>4.1 Proposal & Quotation</h3>
                        <p>
                            All service engagements begin with a written proposal or quotation specifying scope, deliverables, timeline, and pricing. Quotations are valid for 30 days unless otherwise stated.
                        </p>
                        
                        <h3>4.2 Service Agreement</h3>
                        <p>
                            For confirmed projects, a detailed Service Agreement or Statement of Work (SOW) will be executed, specifying:
                        </p>
                        <ul>
                            <li>Detailed scope of work and deliverables</li>
                            <li>Project timeline and milestones</li>
                            <li>Payment terms and schedule</li>
                            <li>Acceptance criteria</li>
                            <li>Change management procedures</li>
                        </ul>

                        <h3>4.3 Acceptance</h3>
                        <p>
                            Client acceptance of the proposal (via email, signed document, or payment of advance) constitutes agreement to these Terms & Conditions and the specific Service Agreement.
                        </p>

                        <h2 id="section-5">5. Client Responsibilities</h2>
                        <p>The Client agrees to:</p>
                        <ul>
                            <li>Provide accurate, complete, and timely information required for service delivery</li>
                            <li>Designate authorized personnel for communications and approvals</li>
                            <li>Review and provide feedback on deliverables within agreed timelines</li>
                            <li>Ensure timely payment as per agreed terms</li>
                            <li>Provide necessary access to systems, platforms, and resources</li>
                            <li>Obtain necessary licenses, permissions, or consents for third-party materials provided to us</li>
                            <li>Not use our services for any unlawful or prohibited purpose</li>
                        </ul>

                        <h2 id="section-6">6. Payment Terms</h2>
                        <h3>6.1 Pricing</h3>
                        <ul>
                            <li>All fees are quoted in Indian Rupees (INR) unless otherwise stated</li>
                            <li>Prices are exclusive of applicable taxes (GST at prevailing rates)</li>
                            <li>Estimates are based on information provided; scope changes may affect pricing</li>
                        </ul>

                        <h3>6.2 Payment Schedule</h3>
                        <ul>
                            <li><strong>Project-Based:</strong> Typically 30-50% advance, balance on milestones or completion</li>
                            <li><strong>Retainer/Monthly:</strong> Payment due within 7 days of invoice date</li>
                            <li><strong>Support & Maintenance:</strong> Annual or quarterly advance payment</li>
                        </ul>

                        <h3>6.3 Payment Methods</h3>
                        <p>We accept payments via:</p>
                        <ul>
                            <li>Bank Transfer (NEFT/RTGS/IMPS)</li>
                            <li>UPI</li>
                            <li>Cheque (subject to realization)</li>
                            <li>Online Payment Gateways (Razorpay, PayU)</li>
                        </ul>

                        <h3>6.4 Late Payments</h3>
                        <p>
                            Late payments may incur interest at 1.5% per month (18% per annum) on outstanding amounts. We reserve the right to suspend services until payments are cleared.
                        </p>

                        <h2 id="section-7">7. Intellectual Property Rights</h2>
                        <h3>7.1 Pre-existing IP</h3>
                        <p>
                            Each party retains ownership of its pre-existing intellectual property. We may use our proprietary tools, frameworks, and libraries in delivering services.
                        </p>

                        <h3>7.2 Client Materials</h3>
                        <p>
                            Client retains ownership of all materials, content, and data provided to us. Client grants us a license to use such materials solely for service delivery.
                        </p>

                        <h3>7.3 Deliverables</h3>
                        <p>
                            Upon full payment, Client receives ownership or license to deliverables as specified in the Service Agreement. Unless otherwise agreed:
                        </p>
                        <ul>
                            <li>Custom code developed specifically for Client becomes Client's property</li>
                            <li>We retain rights to our proprietary tools, frameworks, and reusable components</li>
                            <li>Third-party software remains subject to respective licenses</li>
                        </ul>

                        <h3>7.4 Portfolio Rights</h3>
                        <p>
                            We reserve the right to display completed work in our portfolio and marketing materials unless Client requests confidentiality in writing.
                        </p>

                        <h2 id="section-8">8. Warranties & Representations</h2>
                        <h3>8.1 Our Warranties</h3>
                        <p>We warrant that:</p>
                        <ul>
                            <li>Services will be performed with reasonable skill and care</li>
                            <li>Deliverables will substantially conform to agreed specifications</li>
                            <li>We have the right to enter into this agreement and provide the services</li>
                            <li>Services will not knowingly infringe third-party intellectual property rights</li>
                        </ul>

                        <h3>8.2 Warranty Period</h3>
                        <p>
                            We provide a warranty period of 30-90 days (as specified in Service Agreement) for bug fixes in delivered software. This excludes issues arising from:
                        </p>
                        <ul>
                            <li>Client modifications or third-party changes</li>
                            <li>Use not in accordance with provided documentation</li>
                            <li>Changes in third-party platforms, APIs, or dependencies</li>
                            <li>Force majeure events</li>
                        </ul>

                        <h3>8.3 Disclaimer</h3>
                        <p>
                            EXCEPT AS EXPRESSLY STATED, SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                        </p>

                        <h2 id="section-9">9. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by applicable law:
                        </p>
                        <ul>
                            <li>Our total liability for any claims shall not exceed the amount paid by Client for the specific service giving rise to the claim</li>
                            <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                            <li>We shall not be liable for loss of profits, revenue, data, business opportunities, or goodwill</li>
                            <li>These limitations apply regardless of the form of action (contract, tort, negligence, or otherwise)</li>
                        </ul>
                        <p>
                            Nothing in these terms excludes liability for fraud, gross negligence, or any liability that cannot be excluded by law.
                        </p>

                        <h2 id="section-10">10. Confidentiality</h2>
                        <p>
                            Both parties agree to maintain strict confidentiality of all proprietary, business, and technical information disclosed during the engagement. This includes:
                        </p>
                        <ul>
                            <li>Business plans, strategies, and financial information</li>
                            <li>Technical specifications, source code, and algorithms</li>
                            <li>Customer data and personal information</li>
                            <li>Any information marked or reasonably understood to be confidential</li>
                        </ul>
                        <p>
                            Confidentiality obligations survive termination of services for a period of 3 years or as required by law.
                        </p>

                        <h2 id="section-11">11. Data Protection</h2>
                        <p>
                            We process personal data in accordance with our Privacy Policy and applicable data protection laws including:
                        </p>
                        <ul>
                            <li>Information Technology Act, 2000</li>
                            <li>IT (Reasonable Security Practices) Rules, 2011</li>
                            <li>Digital Personal Data Protection Act, 2023</li>
                        </ul>
                        <p>
                            Where we process data on behalf of Clients, additional Data Processing Agreements may apply.
                        </p>

                        <h2 id="section-12">12. Indemnification</h2>
                        <p>
                            Client agrees to indemnify and hold harmless Vayunex Solution, its directors, employees, and agents from any claims, damages, liabilities, costs, or expenses arising from:
                        </p>
                        <ul>
                            <li>Breach of these terms by Client</li>
                            <li>Client's use of deliverables in violation of applicable laws</li>
                            <li>Infringement claims arising from Client-provided materials</li>
                            <li>Third-party claims resulting from Client's use of services</li>
                        </ul>

                        <h2 id="section-13">13. Termination</h2>
                        <h3>13.1 Termination for Convenience</h3>
                        <p>
                            Either party may terminate with 30 days written notice. Client shall pay for all work completed up to termination date.
                        </p>

                        <h3>13.2 Termination for Cause</h3>
                        <p>
                            Either party may terminate immediately if the other party:
                        </p>
                        <ul>
                            <li>Materially breaches these terms and fails to cure within 15 days of notice</li>
                            <li>Becomes insolvent or enters bankruptcy/liquidation proceedings</li>
                        </ul>

                        <h3>13.3 Effect of Termination</h3>
                        <p>
                            Upon termination, Client receives deliverables completed to date (subject to payment). All licenses terminate, and parties return or destroy confidential information.
                        </p>

                        <h2 id="section-14">14. Force Majeure</h2>
                        <p>
                            Neither party shall be liable for delays or failures due to circumstances beyond reasonable control, including:
                        </p>
                        <ul>
                            <li>Natural disasters, pandemics, or epidemics</li>
                            <li>War, terrorism, or civil unrest</li>
                            <li>Government actions, lockdowns, or regulatory changes</li>
                            <li>Internet or telecommunications failures</li>
                            <li>Power outages or infrastructure failures</li>
                        </ul>

                        <h2 id="section-15">15. Dispute Resolution</h2>
                        <h3>15.1 Negotiation</h3>
                        <p>
                            Parties shall first attempt to resolve disputes through good-faith negotiation within 30 days.
                        </p>

                        <h3>15.2 Arbitration</h3>
                        <p>
                            If negotiation fails, disputes shall be resolved through arbitration under the Arbitration and Conciliation Act, 1996:
                        </p>
                        <ul>
                            <li>Seat of arbitration: Chandigarh, India</li>
                            <li>Language: English</li>
                            <li>Single arbitrator mutually appointed</li>
                            <li>Decision shall be final and binding</li>
                        </ul>

                        <h3>15.3 Jurisdiction</h3>
                        <p>
                            Subject to arbitration, courts in Chandigarh, India shall have exclusive jurisdiction.
                        </p>

                        <h2 id="section-16">16. General Provisions</h2>
                        <h3>16.1 Entire Agreement</h3>
                        <p>
                            These Terms, together with applicable Service Agreements, constitute the entire agreement and supersede all prior understandings.
                        </p>

                        <h3>16.2 Amendment</h3>
                        <p>
                            We may modify these terms with 30 days notice. Continued use after modification constitutes acceptance.
                        </p>

                        <h3>16.3 Severability</h3>
                        <p>
                            If any provision is found unenforceable, remaining provisions remain in full force.
                        </p>

                        <h3>16.4 Waiver</h3>
                        <p>
                            Failure to enforce any right does not constitute waiver of that right.
                        </p>

                        <h3>16.5 Assignment</h3>
                        <p>
                            Client may not assign rights or obligations without our written consent. We may assign to affiliates or successors.
                        </p>

                        <h3>16.6 Notices</h3>
                        <p>
                            All notices shall be in writing and sent to official email addresses or registered office.
                        </p>

                        <h2 id="section-17">17. Contact Information</h2>
                        <p>For any questions about these Terms & Conditions, please contact us:</p>
                        <div className="legal-contact-box">
                            <p><strong>Vayunex Solution</strong></p>
                            <p>Email: legal@vayunexsolution.com</p>
                            <p>Phone: +91-8930733725</p>
                            <p>Address: Zirakpur, Punjab, India - 140603</p>
                        </div>

                        <div className="legal-footer">
                            <p><strong>Governing Law:</strong> These Terms & Conditions are governed by the laws of India, including the Indian Contract Act, 1872, Information Technology Act, 2000, and Consumer Protection Act, 2019. Courts in Chandigarh, Punjab shall have exclusive jurisdiction.</p>
                            <p><strong>Effective Date:</strong> January 1, 2025</p>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    );
};

export default TermsPage;
