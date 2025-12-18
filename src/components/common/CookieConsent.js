import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem('vayunex-cookie-consent');
        if (!cookieConsent) {
            // Show banner after a short delay
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('vayunex-cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('vayunex-cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent">
            <div className="cookie-content">
                <div className="cookie-icon">
                    <i className="fas fa-cookie-bite"></i>
                </div>
                <div className="cookie-text">
                    <h4>We value your privacy 🍪</h4>
                    <p>
                        We use cookies to enhance your browsing experience and analyze our traffic.
                        By clicking "Accept", you consent to our use of cookies.
                    </p>
                </div>
                <div className="cookie-actions">
                    <button className="btn-accept" onClick={handleAccept}>
                        Accept All
                    </button>
                    <button className="btn-decline" onClick={handleDecline}>
                        Decline
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
