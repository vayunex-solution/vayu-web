import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/common/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
import emailjs from 'emailjs-com';
import { trackLead } from '../utils/analytics';
import '../styles/InnerPage.css';
import './ContactPage.css';

const ContactPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const intentParam = queryParams.get('intent');

    useEffect(() => {
        window.scrollTo(0, 0);
        const saved = localStorage.getItem('vayunex-theme');
        if (!saved) {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, []);

    const [heroRef, heroVisible] = useScrollAnimation(0.1);
    const [formRef, formVisible] = useScrollAnimation(0.2);

    // Legacy fields (Required by EmailJS template)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Map intents to matching select values
    const getIntentProjectType = (intent) => {
        switch(intent) {
            case 'web-development': return 'Web & App Development';
            case 'ai-automation': return 'AI & Workflow Automation';
            case 'recruitment': return 'Recruitment & Staffing';
            case 'digital-marketing': return 'Digital Marketing';
            case 'seo-growth': return 'SEO & Growth Strategy';
            case 'training': return 'Training & Skill Development';
            default: return 'General Inquiry';
        }
    };

    // New Discovery fields
    const [uiData, setUiData] = useState({
        companyName: '',
        projectType: intentParam ? getIntentProjectType(intentParam) : 'General Inquiry',
        budget: '',
        timeline: 'Flexible',
        contactMethod: 'Email',
        website_url: '' // Honeypot
    });

    const [status, setStatus] = useState(''); // '', 'sending', 'success'
    const [errors, setErrors] = useState({});

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear errors on type
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
    };

    const handleUiChange = (e) => {
        const { name, value } = e.target;
        setUiData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = 'Valid email is required';
        }
        
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        
        if (!formData.message.trim() || formData.message.length < 50) {
            newErrors.message = 'Please provide more details (minimum 50 characters)';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setStatus('sending');

        // Honeypot check - silently ignore bot submissions
        if (uiData.website_url !== '') {
            setTimeout(() => setStatus('success'), 1500);
            return;
        }

        const serviceID = 'service_9esxtop';
        const templateID = 'template_2xw667y';
        const userID = 'UCd4OiGAJxWBBo0J6';

        // Construct Smart Subject
        const smartSubject = uiData.projectType !== 'General Inquiry' 
            ? `[${uiData.projectType}] ${formData.subject}`
            : formData.subject;

        // Construct Appended Message
        const appendedMessage = `${formData.message}

---
PROJECT DETAILS
Company: ${uiData.companyName || 'Not specified'}
Project Type: ${uiData.projectType}
Budget: ${uiData.budget || 'Not specified'}
Timeline: ${uiData.timeline}
Preferred Contact: ${uiData.contactMethod}`;

        // Send using emailjs.send (Requires no DOM form element)
        const templateParams = {
            name: formData.name,
            email: formData.email,
            subject: smartSubject,
            message: appendedMessage
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((result) => {
                setStatus('success');
                trackLead('contact_page', null, uiData.projectType, intentParam);
            }, (error) => {
                console.error('EmailJS Error:', error);
                setStatus('');
                setErrors({ submit: 'Failed to send message. Please try again later.' });
            });
    };

    return (
        <main className="contact-page">
            <SEO
                title="Start a Project | Vayunex Solution"
                description="Looking to launch a SaaS product or modernize operations? Start a project discussion with Vayunex's engineering team today."
                keywords="Software development inquiry, SaaS builders, enterprise software contact, Vayunex project"
            />

            {/* ========== HERO SECTION ========== */}
            <section className="contact-hero" ref={heroRef}>
                <div className="contact-hero__bg">
                    <div className="ch-orb ch-orb--1" />
                    <div className="ch-orb ch-orb--2" />
                </div>
                <div className={`container contact-hero__content fade-up ${heroVisible ? 'is-visible' : ''}`}>
                    <span className="section-eyebrow">Project Discovery</span>
                    <h1 className="hero-heading">Let's Build Something <span className="gradient-text">Meaningful</span></h1>
                    <p className="hero-subheading">Whether you're launching a SaaS product, modernizing operations, or building custom enterprise software, we're ready to explore the opportunity.</p>
                </div>
            </section>

            {/* ========== QUICK CONTACT ========== */}
            <section className="quick-contact">
                <div className="container">
                    <div className="qc-grid">
                        <a href="https://wa.me/918930733725" target="_blank" rel="noopener noreferrer" className="qc-card qc-card--whatsapp">
                            <div className="qc-icon"><i className="fab fa-whatsapp"></i></div>
                            <div className="qc-text">
                                <h3>WhatsApp</h3>
                                <p>Instant chat with our team</p>
                            </div>
                        </a>
                        <a href="mailto:info@vayunexsolution.com" className="qc-card qc-card--email">
                            <div className="qc-icon"><i className="fas fa-envelope"></i></div>
                            <div className="qc-text">
                                <h3>Email</h3>
                                <p>info@vayunexsolution.com</p>
                            </div>
                        </a>
                        <a href="tel:+918930733725" className="qc-card qc-card--phone">
                            <div className="qc-icon"><i className="fas fa-phone-alt"></i></div>
                            <div className="qc-text">
                                <h3>Phone</h3>
                                <p>+91-8930733725</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* ========== DISCOVERY FORM & TRUST ========== */}
            <section className="discovery-section" ref={formRef}>
                <div className={`container discovery-layout fade-up ${formVisible ? 'is-visible' : ''}`}>
                    
                    <div className="discovery-main">
                        {status === 'success' ? (
                            <div className="discovery-success">
                                <div className="ds-icon-wrap">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                </div>
                                <h2>Project Inquiry Received</h2>
                                <p className="ds-desc">Thank you for reaching out to Vayunex. Your project details have been successfully transmitted to our engineering leadership team.</p>
                                
                                <div className="ds-next-steps">
                                    <h3>Next Steps</h3>
                                    <ul>
                                        <li><span className="ds-check">1</span> We typically review all inquiries and respond within <strong>24 business hours</strong>.</li>
                                        <li><span className="ds-check">2</span> We will contact you via your preferred method ({uiData.contactMethod}) to schedule an initial technical discovery call.</li>
                                        <li><span className="ds-check">3</span> During the call, we will discuss architecture, feasibility, and alignment.</li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <form className="discovery-form" onSubmit={handleSubmit}>
                                <div className="form-header">
                                    <h2>Project Details</h2>
                                    <p>Tell us about your objectives and technical requirements.</p>
                                </div>

                                {/* Honeypot */}
                                <input type="text" name="website_url" value={uiData.website_url} onChange={handleUiChange} style={{display: 'none'}} tabIndex="-1" autoComplete="off" />

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Full Name *</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleFormChange} className={errors.name ? 'has-error' : ''} placeholder="John Doe" />
                                        {errors.name && <span className="error-text">{errors.name}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address *</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleFormChange} className={errors.email ? 'has-error' : ''} placeholder="john@company.com" />
                                        {errors.email && <span className="error-text">{errors.email}</span>}
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Company Name (Optional)</label>
                                        <input type="text" name="companyName" value={uiData.companyName} onChange={handleUiChange} placeholder="Acme Corp" />
                                    </div>
                                    <div className="form-group">
                                        <label>Project Type *</label>
                                        <select name="projectType" value={uiData.projectType} onChange={handleUiChange}>
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Web & App Development">Web & App Development</option>
                                            <option value="SaaS Product">SaaS Product Development</option>
                                            <option value="Enterprise System">Enterprise System Architecture</option>
                                            <option value="AI & Workflow Automation">AI & Workflow Automation</option>
                                            <option value="Mobile App">Mobile Application</option>
                                            <option value="Recruitment & Staffing">Recruitment & Staffing</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                            <option value="SEO & Growth Strategy">SEO & Growth Strategy</option>
                                            <option value="Training & Skill Development">Training & Skill Development</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Estimated Budget (Optional)</label>
                                        <select name="budget" value={uiData.budget} onChange={handleUiChange}>
                                            <option value="">Select a range...</option>
                                            <option value="<$5k">Less than $5,000</option>
                                            <option value="$5k - $15k">$5,000 - $15,000</option>
                                            <option value="$15k - $50k">$15,000 - $50,000</option>
                                            <option value="$50k+">$50,000+</option>
                                            <option value="To be determined">To be determined</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Expected Timeline</label>
                                        <select name="timeline" value={uiData.timeline} onChange={handleUiChange}>
                                            <option value="Flexible">Flexible</option>
                                            <option value="As soon as possible">As soon as possible</option>
                                            <option value="1-3 Months">1-3 Months</option>
                                            <option value="3-6 Months">3-6 Months</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group full-width">
                                        <label>Subject *</label>
                                        <input type="text" name="subject" value={formData.subject} onChange={handleFormChange} className={errors.subject ? 'has-error' : ''} placeholder="Brief summary of your inquiry" />
                                        {errors.subject && <span className="error-text">{errors.subject}</span>}
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group full-width">
                                        <label>Project Description *</label>
                                        <textarea 
                                            name="message" 
                                            value={formData.message} 
                                            onChange={handleFormChange} 
                                            className={errors.message ? 'has-error' : ''} 
                                            placeholder="Please describe the core problem you are trying to solve, or the product you want to build. (Min 50 characters)"
                                            rows="5"
                                        ></textarea>
                                        {errors.message && <span className="error-text">{errors.message}</span>}
                                        <div className="char-counter" style={{ color: formData.message.length < 50 ? 'var(--text-tertiary)' : 'var(--accent-green)' }}>
                                            {formData.message.length} / 50 min chars
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Preferred Contact Method</label>
                                        <div className="radio-group">
                                            <label className="radio-label">
                                                <input type="radio" name="contactMethod" value="Email" checked={uiData.contactMethod === 'Email'} onChange={handleUiChange} /> Email
                                            </label>
                                            <label className="radio-label">
                                                <input type="radio" name="contactMethod" value="Phone" checked={uiData.contactMethod === 'Phone'} onChange={handleUiChange} /> Phone
                                            </label>
                                            <label className="radio-label">
                                                <input type="radio" name="contactMethod" value="WhatsApp" checked={uiData.contactMethod === 'WhatsApp'} onChange={handleUiChange} /> WhatsApp
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {errors.submit && <div className="form-submit-error">{errors.submit}</div>}

                                <button type="submit" className="discovery-submit" disabled={status === 'sending'}>
                                    {status === 'sending' ? (
                                        <span className="btn-spinner"></span>
                                    ) : (
                                        <span>Submit Inquiry <i className="fas fa-arrow-right"></i></span>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    <div className="discovery-sidebar">
                        <div className="ds-trust-box">
                            <h3>Why Work With Vayunex</h3>
                            <div className="trust-factors">
                                <div className="trust-factor">
                                    <div className="tf-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
                                    <div className="tf-text">
                                        <h4>Product-Led Engineering</h4>
                                        <p>We architect solutions focused on business outcomes, not just writing lines of code.</p>
                                    </div>
                                </div>
                                <div className="trust-factor">
                                    <div className="tf-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
                                    <div className="tf-text">
                                        <h4>Real SaaS Experience</h4>
                                        <p>We operate our own proprietary SaaS platforms, giving us deep insight into scalability.</p>
                                    </div>
                                </div>
                                <div className="trust-factor">
                                    <div className="tf-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                                    <div className="tf-text">
                                        <h4>Direct Collaboration</h4>
                                        <p>You work directly with our senior engineering leadership, eliminating middleman friction.</p>
                                    </div>
                                </div>
                                <div className="trust-factor">
                                    <div className="tf-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                                    <div className="tf-text">
                                        <h4>Long-Term Thinking</h4>
                                        <p>We design data models and infrastructure capable of handling your 5-year growth trajectory.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default ContactPage;