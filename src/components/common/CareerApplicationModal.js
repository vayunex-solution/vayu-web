import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { trackCareerApplicationSubmit } from '../../utils/analytics';
import './CareerApplicationModal.css';

const CareerApplicationModal = ({ isOpen, onClose, selectedJob }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    linkedin: '',
    portfolio: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        experience: '', 
        linkedin: '', 
        portfolio: '', 
        message: '' 
      });
      setStatus('idle');
      setErrors({});
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
    if (!formData.portfolio.trim()) newErrors.portfolio = 'Resume / Portfolio Link is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    const serviceID = 'service_9esxtop';
    const templateID = 'template_2xw667y';
    const userID = 'UCd4OiGAJxWBBo0J6';

    const subject = `[CAREER] ${selectedJob?.title || 'Application'}`;

    const messageBody = `Career Application Details:
Position: ${selectedJob?.title}
Department: ${selectedJob?.department}
Experience: ${formData.experience} Years
LinkedIn: ${formData.linkedin || 'Not provided'}
Resume/Portfolio: ${formData.portfolio}
Message: ${formData.message || 'No additional message'}

--
Tracking Metadata:
source=careers_page
capture_type=career_application`;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: subject,
      message: messageBody
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setStatus('success');
        
        // Track conversions
        trackCareerApplicationSubmit({
          job_title: selectedJob?.title,
          department: selectedJob?.department,
          experience: formData.experience,
          page_origin: window.location.pathname
        });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="career-modal-overlay" onClick={onClose}>
      <div className="career-modal" onClick={e => e.stopPropagation()}>
        <button className="career-modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {status === 'success' ? (
          <div className="career-modal-success">
            <div className="career-modal-success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3>Application Received!</h3>
            <p>
              Thank you for applying for the <strong>{selectedJob?.title}</strong> position. Our talent team will review your profile and reach out if there's a match.
            </p>
            <button className="career-modal-btn" onClick={onClose} style={{ width: '100%' }}>Close</button>
          </div>
        ) : (
          <>
            <div className="career-modal-header">
              <h2>Join Our Team</h2>
              <p>Apply for the <strong>{selectedJob?.title}</strong> role.</p>
            </div>

            <form onSubmit={handleSubmit} className="career-modal-form">
              <div className="career-modal-row">
                <div className="career-modal-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className={errors.name ? 'has-error' : ''} placeholder="John Doe" />
                  {errors.name && <span className="career-modal-error">{errors.name}</span>}
                </div>
                <div className="career-modal-group">
                  <label>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'has-error' : ''} placeholder="john@domain.com" />
                  {errors.email && <span className="career-modal-error">{errors.email}</span>}
                </div>
              </div>

              <div className="career-modal-row">
                <div className="career-modal-group">
                  <label>Phone *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? 'has-error' : ''} placeholder="+91 98765 43210" />
                  {errors.phone && <span className="career-modal-error">{errors.phone}</span>}
                </div>
                <div className="career-modal-group">
                  <label>Position Applied For</label>
                  <input type="text" value={selectedJob?.title || ''} disabled />
                </div>
              </div>

              <div className="career-modal-row">
                <div className="career-modal-group">
                  <label>Years Of Experience *</label>
                  <select name="experience" value={formData.experience} onChange={handleChange} className={errors.experience ? 'has-error' : ''}>
                    <option value="">Select Experience</option>
                    <option value="Fresher">Fresher</option>
                    <option value="1-3">1 - 3 Years</option>
                    <option value="3-5">3 - 5 Years</option>
                    <option value="5-8">5 - 8 Years</option>
                    <option value="8+">8+ Years</option>
                  </select>
                  {errors.experience && <span className="career-modal-error">{errors.experience}</span>}
                </div>
                <div className="career-modal-group">
                  <label>LinkedIn Profile</label>
                  <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/johndoe" />
                </div>
              </div>

              <div className="career-modal-row">
                <div className="career-modal-group">
                  <label>Resume / Portfolio Link *</label>
                  <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} className={errors.portfolio ? 'has-error' : ''} placeholder="Drive / Dropbox / Website Link" />
                  {errors.portfolio && <span className="career-modal-error">{errors.portfolio}</span>}
                </div>
              </div>

              <div className="career-modal-row">
                <div className="career-modal-group">
                  <label>Message (Optional)</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="Tell us why you're a great fit..."></textarea>
                </div>
              </div>

              {status === 'error' && (
                <div className="career-modal-global-error">
                  Something went wrong. Please try again later.
                </div>
              )}

              <button type="submit" className="career-modal-btn" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Submitting Application...' : 'Submit Application'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CareerApplicationModal;
