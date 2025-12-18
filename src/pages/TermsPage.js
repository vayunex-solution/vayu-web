import React from 'react';
import PageHeader from '../components/common/PageHeader';
import SEO from '../components/common/SEO';
import '../styles/InnerPage.css';

const TermsPage = () => {
    return (
        <div className="inner-page">
            <SEO
                title="Terms of Service | Vayunex Solution"
                description="Read the terms and conditions for using Vayunex Solution services and website."
                keywords="terms of service, terms and conditions, Vayunex terms, service agreement, legal terms"
            />
            <PageHeader
                title="Terms of Service"
                subtitle="Please read these terms carefully before using our services."
            />
            <div className="page-content legal-content">
                <section className="content-section">
                    <p className="last-updated">Last Updated: December 2024</p>

                    <h2>1. Agreement to Terms</h2>
                    <p>
                        By accessing or using the website of Vayunex Solution ("Company", "we", "our", "us") at vayunexsolution.com, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the website or use our services.
                    </p>

                    <h2>2. Services Description</h2>
                    <p>Vayunex Solution provides the following services:</p>
                    <ul>
                        <li><strong>Web & App Development:</strong> Custom software development, website design, and mobile application development</li>
                        <li><strong>AI & Data Science:</strong> Artificial intelligence solutions, data analytics, and machine learning services</li>
                        <li><strong>Recruitment & Staffing:</strong> Talent acquisition and staffing solutions</li>
                        <li><strong>Business Consulting:</strong> Growth strategy, SEO, and digital marketing services</li>
                        <li><strong>Products:</strong> PayNex billing and subscription management software</li>
                    </ul>

                    <h2>3. Intellectual Property Rights</h2>
                    <p>
                        The website and its original content, features, and functionality are owned by Vayunex Solution and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                    </p>
                    <p>
                        Our trademarks, logos, and service marks may not be used in connection with any product or service without our prior written consent.
                    </p>

                    <h2>4. User Responsibilities</h2>
                    <p>When using our website and services, you agree to:</p>
                    <ul>
                        <li>Provide accurate and complete information</li>
                        <li>Not use the website for any unlawful purpose</li>
                        <li>Not attempt to gain unauthorized access to our systems</li>
                        <li>Not reproduce, duplicate, or exploit any part of the website without permission</li>
                        <li>Not transmit any viruses, malware, or harmful code</li>
                    </ul>

                    <h2>5. Service Engagement</h2>
                    <p>
                        For clients engaging our professional services, specific terms, deliverables, timelines, and payment conditions will be outlined in a separate Service Agreement or Statement of Work. These Terms of Service apply in addition to any such agreement.
                    </p>

                    <h2>6. Payment Terms</h2>
                    <p>For paid services:</p>
                    <ul>
                        <li>Payment terms will be specified in individual service agreements</li>
                        <li>All fees are quoted in Indian Rupees (INR) unless otherwise stated</li>
                        <li>Late payments may incur additional charges as specified in the agreement</li>
                        <li>Refund policies are detailed in individual service contracts</li>
                    </ul>

                    <h2>7. Limitation of Liability</h2>
                    <p>
                        To the maximum extent permitted by law, Vayunex Solution shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                    </p>
                    <p>
                        Our total liability for any claims arising from the use of our website or services shall not exceed the amount paid by you, if any, during the twelve (12) months prior to the claim.
                    </p>

                    <h2>8. Disclaimer of Warranties</h2>
                    <p>
                        Our website and services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the operation of the website or the information, content, or materials included thereon.
                    </p>

                    <h2>9. Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party websites or services that are not owned or controlled by Vayunex Solution. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
                    </p>

                    <h2>10. Indemnification</h2>
                    <p>
                        You agree to defend, indemnify, and hold harmless Vayunex Solution and its employees, contractors, agents, and affiliates from any claims, damages, obligations, losses, liabilities, costs, or expenses arising from your use of the website or violation of these Terms.
                    </p>

                    <h2>11. Confidentiality</h2>
                    <p>
                        Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of service engagement. This obligation survives the termination of any service agreement.
                    </p>

                    <h2>12. Termination</h2>
                    <p>
                        We may terminate or suspend your access to our website immediately, without prior notice, for any reason whatsoever, including without limitation if you breach these Terms of Service.
                    </p>

                    <h2>13. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Chandigarh, India.
                    </p>

                    <h2>14. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify or replace these Terms at any time. Material changes will be notified through our website. Your continued use of the website after such changes constitutes acceptance of the new Terms.
                    </p>

                    <h2>15. Severability</h2>
                    <p>
                        If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                    </p>

                    <h2>16. Contact Information</h2>
                    <p>For any questions about these Terms of Service, please contact us:</p>
                    <div className="contact-box">
                        <p><strong>Vayunex Solution</strong></p>
                        <p>Email: info@vayunexsolution.com</p>
                        <p>Phone: +91-7009727170</p>
                        <p>Address: Zirakpur, Punjab, India</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TermsPage;
