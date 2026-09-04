import React, { useState, useEffect, useRef } from 'react';
import { trackWhatsApp } from '../../utils/analytics';
import './WhatsAppButton.css';

const trackWhatsAppOpen = () => {
  trackWhatsApp('open');
};

const trackWhatsAppClick = () => {
  trackWhatsApp('click');
};

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const widgetRef = useRef(null);

  const phoneNumber = '918930733725';
  const displayPhone = '+91 8930733725';
  const message = encodeURIComponent('Hi! I would like to know more about Vayunex services.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // First visit animation
  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem('vayunex-wa-animated');
    if (!hasSeenAnimation) {
      const timer = setTimeout(() => {
        setShowAnimation(true);
        localStorage.setItem('vayunex-wa-animated', 'true');
        
        // Hide tooltip after some time
        setTimeout(() => {
          setShowAnimation(false);
        }, 5000);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  const toggleWidget = () => {
    if (!isOpen) {
      trackWhatsAppOpen();
      setHasUnread(false);
      setShowAnimation(false);
    }
    setIsOpen(!isOpen);
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    setIsOpen(false);
  };

  return (
    <div className="wa-widget-container" ref={widgetRef}>
      {/* Expanded Widget Card */}
      <div className={`wa-expanded-card ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        <div className="wa-card-header">
          <div className="wa-header-info">
            <h4>Chat With Vayunex</h4>
            <p>Sales, Support & Projects</p>
          </div>
          <button className="wa-close-btn" onClick={() => setIsOpen(false)} aria-label="Close widget">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="wa-card-body">
          <p className="wa-support-msg">Hi there! 👋 How can we help you today?</p>
          <div className="wa-contact-detail">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>{displayPhone}</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-primary-cta"
            onClick={handleWhatsAppClick}
          >
            <i className="fab fa-whatsapp"></i> WhatsApp Us
          </a>
        </div>
      </div>

      {/* Main Floating Button */}
      <div className="wa-button-wrapper">
        <div className={`wa-tooltip ${showAnimation ? 'is-visible' : ''}`}>
          Need Help?
          <span className="wa-tooltip-arrow"></span>
        </div>
        
        <button
          className={`wa-trigger-btn ${isOpen ? 'is-active' : ''}`}
          onClick={toggleWidget}
          aria-label="Open WhatsApp Support"
          aria-expanded={isOpen}
        >
          {hasUnread && <span className="wa-unread-indicator"></span>}
          <div className="wa-icon-container">
            {isOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <i className="fab fa-whatsapp"></i>
            )}
          </div>
          <span className="wa-pulse-ring"></span>
          <span className="wa-pulse-ring wa-delay"></span>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
