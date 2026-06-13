import React, { useState, useEffect } from 'react';
import SEO from '../components/common/SEO';
import useReadingProgress from '../hooks/useReadingProgress';
import './LegalPage.css';

const sections = [
    { id: 'section-1', title: '1. Introduction' },
    { id: 'section-2', title: '2. Definitions' },
    { id: 'section-3', title: '3. Information We Collect' },
    { id: 'section-4', title: '4. Lawful Basis' },
    { id: 'section-5', title: '5. Usage of Information' },
    { id: 'section-6', title: '6. Data Retention' },
    { id: 'section-7', title: '7. Information Sharing' },
    { id: 'section-8', title: '8. Data Security' },
    { id: 'section-9', title: '9. Cookies & Tracking' },
    { id: 'section-10', title: '10. Your Rights' },
    { id: 'section-11', title: '11. Cross-Border Transfer' },
    { id: 'section-12', title: '12. Third-Party Links' },
    { id: 'section-13', title: '13. Children\'s Privacy' },
    { id: 'section-14', title: '14. Policy Changes' },
    { id: 'section-15', title: '15. Grievance Officer' },
    { id: 'section-16', title: '16. Contact Us' }
];

const PrivacyPolicyPage = () => {
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
                title="Privacy Policy | Vayunex Solution"
                description="Privacy Policy of Vayunex Solution - IT Services Company. Compliant with Indian IT Act 2000 and Digital Personal Data Protection Act 2023."
                keywords="privacy policy, data protection, DPDP Act, IT Act 2000, Vayunex privacy, user data, GDPR, cookies policy, India"
            />
            
            {/* Reading Progress Bar */}
            <div 
                className="legal-progress-bar" 
                style={{ width: `${completion}%` }}
                aria-hidden="true"
            />

            {/* ========== HERO SECTION ========== */}
            <section className="legal-hero" aria-label="Privacy Policy Hero">
                <div className="legal-hero__bg" />
                <div className="legal-hero__content">
                    <span className="legal-eyebrow">Legal Center</span>
                    <h1>Privacy Policy</h1>
                    <p>Your privacy is important to us. This policy is compliant with Indian IT laws.</p>
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
                            <strong>Legal Compliance:</strong> This Privacy Policy is drafted in compliance with the Information Technology Act, 2000 (IT Act), Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023 (DPDP Act) of India.
                        </p>

                        <h2 id="section-1">1. Introduction</h2>
                        <p>
                            Welcome to Vayunex Solution ("Company", "we", "our", "us"), a technology services company registered and operating in India. We are committed to protecting your personal information and your right to privacy in accordance with applicable Indian laws.
                        </p>
                        <p>
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website vayunexsolution.com, use our services, or engage with us in any manner.
                        </p>

                        <h3>1.1 Product Ecosystem Coverage</h3>
                        <p>
                            This Privacy Policy explicitly covers the entire Vayunex Solution product ecosystem, including but not limited to:
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

                        <h2 id="section-2">2. Definitions (As per DPDP Act, 2023)</h2>
                        <ul>
                            <li><strong>Personal Data:</strong> Any data about an individual who is identifiable by or in relation to such data.</li>
                            <li><strong>Data Principal:</strong> The individual whose personal data is being processed (i.e., you, the user).</li>
                            <li><strong>Data Fiduciary:</strong> The entity that determines the purpose and means of processing personal data (i.e., Vayunex Solution).</li>
                            <li><strong>Processing:</strong> Any operation performed on personal data including collection, storage, use, disclosure, and erasure.</li>
                        </ul>

                        <h2 id="section-3">3. Information We Collect</h2>
                        <h3>3.1 Personal Information (Voluntarily Provided)</h3>
                        <p>We may collect personal information that you voluntarily provide when you:</p>
                        <ul>
                            <li>Fill out our contact or inquiry forms</li>
                            <li>Subscribe to our newsletter or marketing communications</li>
                            <li>Request quotations or information about our services</li>
                            <li>Apply for job positions or internships</li>
                            <li>Enter into a service agreement with us</li>
                            <li>Interact with us on social media platforms</li>
                        </ul>
                        <p>This information may include:</p>
                        <ul>
                            <li>Full name and contact information (email address, phone number, address)</li>
                            <li>Company/Organization name and designation</li>
                            <li>GST Number (for B2B transactions)</li>
                            <li>Project requirements, messages, and communications</li>
                            <li>Resume, educational qualifications, and professional information (for job applications)</li>
                            <li>Payment and billing information (processed through secure payment gateways)</li>
                        </ul>

                        <h3>3.2 Sensitive Personal Data or Information (SPDI)</h3>
                        <p>As per IT Rules 2011, we may collect the following SPDI only with your explicit consent:</p>
                        <ul>
                            <li>Passwords (stored in encrypted format)</li>
                            <li>Financial information such as bank account or payment instrument details</li>
                            <li>Any other information as may be required for service delivery</li>
                        </ul>

                        <h3>3.3 Automatically Collected Information</h3>
                        <p>When you visit our website, we may automatically collect:</p>
                        <ul>
                            <li>IP address and geographic location (city/country level)</li>
                            <li>Browser type and version</li>
                            <li>Device information (operating system, device type)</li>
                            <li>Pages visited, time spent, and navigation patterns</li>
                            <li>Referring website addresses</li>
                            <li>Date and time of access</li>
                        </ul>

                        <h2 id="section-4">4. Lawful Basis for Processing (DPDP Act Compliance)</h2>
                        <p>We process your personal data based on the following lawful grounds:</p>
                        <ul>
                            <li><strong>Consent:</strong> Where you have given explicit consent for specific purposes</li>
                            <li><strong>Contractual Necessity:</strong> For performance of contracts or service agreements</li>
                            <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                            <li><strong>Legitimate Interests:</strong> For improving our services and business operations</li>
                        </ul>

                        <h2 id="section-5">5. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Process and respond to your inquiries and service requests</li>
                            <li>Provide, maintain, and improve our services</li>
                            <li>Send you updates, newsletters, and marketing communications (with consent)</li>
                            <li>Process job applications and conduct recruitment activities</li>
                            <li>Generate invoices and process payments</li>
                            <li>Comply with legal and regulatory requirements</li>
                            <li>Analyze usage patterns to improve user experience</li>
                            <li>Protect against fraudulent or unauthorized activity</li>
                            <li>Enforce our terms of service and other agreements</li>
                        </ul>

                        <h2 id="section-6">6. Data Retention</h2>
                        <p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including:</p>
                        <ul>
                            <li><strong>Business Records:</strong> As required under the Companies Act, 2013 and Income Tax Act, 1961 (typically 8 years)</li>
                            <li><strong>Contract Data:</strong> Duration of contract plus applicable limitation period</li>
                            <li><strong>Marketing Data:</strong> Until you withdraw consent</li>
                            <li><strong>Job Applications:</strong> Up to 2 years after application</li>
                        </ul>

                        <h2 id="section-7">7. Information Sharing and Disclosure</h2>
                        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                        <ul>
                            <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our business (hosting providers, payment processors, email services) under strict confidentiality agreements</li>
                            <li><strong>Legal Requirements:</strong> When required by law, court order, or government authority under the IT Act, 2000 or other applicable laws</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with notice to affected users</li>
                            <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property, and that of our users</li>
                        </ul>

                        <h2 id="section-8">8. Data Security Measures</h2>
                        <p>As per IT Rules 2011, we implement reasonable security practices and procedures including:</p>
                        <ul>
                            <li>SSL/TLS encryption for data transmission</li>
                            <li>Encrypted storage for sensitive data</li>
                            <li>Access controls and authentication mechanisms</li>
                            <li>Regular security audits and vulnerability assessments</li>
                            <li>Employee training on data protection</li>
                            <li>Incident response and breach notification procedures</li>
                        </ul>
                        <p>
                            However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security but strive to use commercially acceptable means to protect your data.
                        </p>

                        <h2 id="section-9">9. Cookies and Tracking Technologies</h2>
                        <p>Our website uses cookies and similar tracking technologies to:</p>
                        <ul>
                            <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                            <li><strong>Analytics Cookies:</strong> To understand how visitors interact with our website</li>
                            <li><strong>Marketing Cookies:</strong> To deliver relevant advertisements (with consent)</li>
                        </ul>
                        <p>
                            You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.
                        </p>

                        <h2 id="section-10">10. Your Rights as Data Principal (DPDP Act 2023)</h2>
                        <p>Under the Digital Personal Data Protection Act, 2023, you have the following rights:</p>
                        <ul>
                            <li><strong>Right to Access:</strong> Obtain information about your personal data being processed</li>
                            <li><strong>Right to Correction:</strong> Request correction or completion of inaccurate or incomplete data</li>
                            <li><strong>Right to Erasure:</strong> Request deletion of your personal data (subject to legal retention requirements)</li>
                            <li><strong>Right to Data Portability:</strong> Receive your data in a structured, commonly used format</li>
                            <li><strong>Right to Withdraw Consent:</strong> Withdraw previously given consent at any time</li>
                            <li><strong>Right to Grievance Redressal:</strong> Lodge a complaint with our Grievance Officer or the Data Protection Board of India</li>
                        </ul>
                        <p>To exercise any of these rights, please contact our Grievance Officer (details below).</p>

                        <h2 id="section-11">11. Cross-Border Data Transfer</h2>
                        <p>
                            Your data may be transferred to and processed in countries outside India where our service providers operate. Such transfers are made in compliance with applicable laws and with appropriate safeguards in place.
                        </p>

                        <h2 id="section-12">12. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                        </p>

                        <h2 id="section-13">13. Children's Privacy</h2>
                        <p>
                            Our services are not directed at individuals under the age of 18. We do not knowingly collect personal data from children. If we become aware that we have collected data from a minor without parental consent, we will take steps to delete such information.
                        </p>

                        <h2 id="section-14">14. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this policy periodically. Material changes will be notified through our website or email.
                        </p>

                        <h2 id="section-15">15. Grievance Officer</h2>
                        <p>In accordance with IT Act 2000 and DPDP Act 2023, we have appointed a Grievance Officer:</p>
                        <div className="legal-contact-box">
                            <p><strong>Grievance Officer - Vayunex Solution</strong></p>
                            <p>Email: grievance@vayunexsolution.com</p>
                            <p>Phone: +91-8930733725</p>
                            <p>Address: Zirakpur, Punjab, India - 140603</p>
                            <p><em>Response Time: Within 30 days of receiving complaint</em></p>
                        </div>

                        <h2 id="section-16">16. Contact Us</h2>
                        <p>For any questions about this Privacy Policy or our data practices, please contact us at:</p>
                        <div className="legal-contact-box">
                            <p><strong>Vayunex Solution</strong></p>
                            <p>Email: info@vayunexsolution.com</p>
                            <p>Phone: +91-8930733725</p>
                            <p>Address: Zirakpur, Punjab, India - 140603</p>
                        </div>

                        <div className="legal-footer">
                            <p><strong>Governing Law:</strong> This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.</p>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicyPage;
