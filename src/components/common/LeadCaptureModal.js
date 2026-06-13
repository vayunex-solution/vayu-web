import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { trackLead, trackDemoRequest, trackWaitlistJoin } from '../../utils/analytics';
import './LeadCaptureModal.css';

const LeadCaptureModal = ({ isOpen, onClose, mode, productName, productId }) => {
  // ... state declarations ...
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    branches: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', email: '', phone: '', company: '', branches: '' });
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
    
    if (mode === 'demo') {
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }

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

    const subject = mode === 'demo' 
      ? `[DEMO] ${productName}` 
      : `[EARLY_ACCESS] ${productName}`;

    let messageBody = '';
    
    if (mode === 'demo') {
      messageBody = `Lead Details:
Phone: ${formData.phone}
Company: ${formData.company || 'Not provided'}
Number of Branches: ${formData.branches || 'Not provided'}

--
Tracking Metadata:
source=products_page
product=${productId}
capture_type=demo`;
    } else {
      messageBody = `Lead Details:
Company: ${formData.company || 'Not provided'}

--
Tracking Metadata:
source=products_page
product=${productId}
capture_type=early_access`;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: subject,
      message: messageBody
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setStatus('success');
        
        // Track conversions
        trackLead('modal', productName, null, mode);
        if (mode === 'demo') {
          trackDemoRequest(productName);
        } else {
          trackWaitlistJoin(productName);
        }
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
    <div className="lcm-overlay" onClick={onClose}>
      <div className="lcm-modal" onClick={e => e.stopPropagation()}>
        <button className="lcm-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {status === 'success' ? (
          <div className="lcm-success">
            <div className="lcm-success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3>Success!</h3>
            <p>
              {mode === 'demo' 
                ? 'Your demo request has been received. A product specialist will contact you shortly.' 
                : 'You are on the Early Access List. We will notify you when access becomes available.'}
            </p>
            <button className="lcm-btn-primary" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="lcm-header">
              <h2>{mode === 'demo' ? 'Request Enterprise Demo' : 'Join Early Access'}</h2>
              <p>{mode === 'demo' ? `See how ${productName} can transform your operations.` : `Get notified the moment ${productName} goes live.`}</p>
            </div>

            <form onSubmit={handleSubmit} className="lcm-form">
              <div className="lcm-row">
                <div className="lcm-group">
                  <label>Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className={errors.name ? 'has-error' : ''} placeholder="John Doe" />
                  {errors.name && <span className="lcm-error">{errors.name}</span>}
                </div>
              </div>

              <div className="lcm-row">
                <div className="lcm-group">
                  <label>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'has-error' : ''} placeholder="john@company.com" />
                  {errors.email && <span className="lcm-error">{errors.email}</span>}
                </div>
              </div>

              {mode === 'demo' && (
                <div className="lcm-row">
                  <div className="lcm-group">
                    <label>Phone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? 'has-error' : ''} placeholder="+91 98765 43210" />
                    {errors.phone && <span className="lcm-error">{errors.phone}</span>}
                  </div>
                </div>
              )}

              <div className="lcm-row">
                <div className="lcm-group">
                  <label>Company (Optional)</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Corp" />
                </div>
              </div>

              {mode === 'demo' && (
                <div className="lcm-row">
                  <div className="lcm-group">
                    <label>Number of Branches (Optional)</label>
                    <input type="text" name="branches" value={formData.branches} onChange={handleChange} placeholder="e.g. 3" />
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="lcm-global-error">
                  Something went wrong. Please try again later.
                </div>
              )}

              <button type="submit" className="lcm-btn-primary" disabled={status === 'submitting'}>
                {status === 'submitting' 
                  ? 'Submitting...' 
                  : mode === 'demo' ? 'Request Demo' : 'Join Waitlist'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadCaptureModal;
