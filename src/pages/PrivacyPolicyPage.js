import React from 'react';
import PageHeader from '../components/common/PageHeader';
import SEO from '../components/common/SEO';
import '../styles/InnerPage.css';

const PrivacyPolicyPage = () => {
    return (
        <div className="inner-page">
            <SEO
                title="Privacy Policy | Vayunex Solution"
                description="Read our privacy policy to understand how Vayunex collects, uses, and protects your personal information."
                keywords="privacy policy, data protection, Vayunex privacy, user data, cookies policy"
            />
            <PageHeader
                title="Privacy Policy"
                subtitle="Your privacy is important to us. Learn how we handle your data."
            />
            <div className="page-content legal-content">
                <section className="content-section">
                    <p className="last-updated">Last Updated: December 2024</p>

                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to Vayunex Solution ("Company", "we", "our", "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website vayunexsolution.com and use our services.
                    </p>
                    <p>
                        Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                    </p>

                    <h2>2. Information We Collect</h2>
                    <h3>Personal Information</h3>
                    <p>We may collect personal information that you voluntarily provide to us when you:</p>
                    <ul>
                        <li>Fill out our contact forms</li>
                        <li>Subscribe to our newsletter</li>
                        <li>Request information about our services</li>
                        <li>Apply for job positions</li>
                        <li>Interact with us on social media</li>
                    </ul>
                    <p>This information may include:</p>
                    <ul>
                        <li>Name and contact information (email, phone number)</li>
                        <li>Company name and job title</li>
                        <li>Project requirements and messages</li>
                        <li>Resume and professional information (for job applications)</li>
                    </ul>

                    <h3>Automatically Collected Information</h3>
                    <p>When you visit our website, we may automatically collect certain information, including:</p>
                    <ul>
                        <li>IP address and browser type</li>
                        <li>Device information</li>
                        <li>Pages visited and time spent</li>
                        <li>Referring website addresses</li>
                    </ul>

                    <h2>3. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Respond to your inquiries and provide customer support</li>
                        <li>Send you updates, newsletters, and marketing communications</li>
                        <li>Process job applications</li>
                        <li>Improve our website and services</li>
                        <li>Analyze usage patterns and trends</li>
                        <li>Protect against fraudulent or unauthorized activity</li>
                    </ul>

                    <h2>4. Information Sharing</h2>
                    <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                    <ul>
                        <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business</li>
                        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                        <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    </ul>

                    <h2>5. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>

                    <h2>6. Cookies and Tracking Technologies</h2>
                    <p>
                        Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect some features of our website.
                    </p>

                    <h2>7. Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                    </p>

                    <h2>8. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access the personal information we hold about you</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your personal information</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Withdraw consent where applicable</li>
                    </ul>

                    <h2>9. Children's Privacy</h2>
                    <p>
                        Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children.
                    </p>

                    <h2>10. Changes to This Policy</h2>
                    <p>
                        We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this policy periodically.
                    </p>

                    <h2>11. Contact Us</h2>
                    <p>If you have questions about this Privacy Policy or our data practices, please contact us at:</p>
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

export default PrivacyPolicyPage;
