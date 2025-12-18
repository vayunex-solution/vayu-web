import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import SEO from '../components/common/SEO';
import emailjs from 'emailjs-com';
import '../styles/InnerPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // --- EmailJS Configuration ---
        // Neeche di gayi details aapko EmailJS website se milengi.
        // Inki jagah apni real keys daalein.
        const serviceID = 'service_9esxtop';
        const templateID = 'template_2xw667y';
        const userID = 'UCd4OiGAJxWBBo0J6';

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Form reset karein
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <div className="inner-page">
            <SEO
                title="Contact Us - Let's Build Together | Vayunex Solution"
                description="Get in touch with the Vayunex team in the Chandigarh area. Whether you have a project idea or want to learn more about our services, we're here to help."
                keywords="Contact Vayunex, get a quote, IT consulting Chandigarh, business inquiry Mohali, Vayunex address Zirakpur"
            />
            <PageHeader
                title="Get In Touch"
                subtitle="Have a project in mind or just want to say hello? We'd love to hear from you."
            />
            <div className="page-content">
                <section className="content-section contact-layout">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p>Fill up the form and our Team will get back to you within 24 hours.</p>
                        <ul>
                            <li><i className="fas fa-phone-alt"></i> <span>+91-7009727170</span></li>
                            <li><i className="fas fa-envelope"></i> <span>info@vayunexsolution.com</span></li>
                            <li><i className="fas fa-map-marker-alt"></i> <span>Zirakpur, Punjab, India</span></li>
                        </ul>
                        <div className="contact-social">
                            <a href="#!" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                            <a href="#!" className="social-icon"><i className="fab fa-twitter"></i></a>
                            <a href="#!" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="cta-button" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                            {status === 'success' && <p className="form-status success">Message sent successfully!</p>}
                            {status === 'error' && <p className="form-status error">Failed to send message. Please try again.</p>}
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactPage;