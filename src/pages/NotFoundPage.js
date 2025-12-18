import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <SEO 
        title="404 - Page Not Found | Vayunex"
        description="Oops! The page you're looking for doesn't exist. Let's get you back on track."
      />
      
      <div className="not-found-container">
        {/* Animated Background Elements */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        {/* Main Content */}
        <div className="not-found-content">
          <div className="error-code">
            <span className="digit">4</span>
            <span className="digit zero">
              <i className="fas fa-globe-americas"></i>
            </span>
            <span className="digit">4</span>
          </div>
          
          <h1 className="not-found-title">Lost in the Digital Universe</h1>
          <p className="not-found-subtitle">
            The page you're looking for has drifted into another dimension. 
            Don't worry, we'll help you find your way back!
          </p>
          
          <div className="not-found-actions">
            <Link to="/" className="btn-home">
              <i className="fas fa-home"></i> Back to Home
            </Link>
            <Link to="/contact" className="btn-contact">
              <i className="fas fa-headset"></i> Contact Support
            </Link>
          </div>
          
          {/* Quick Links */}
          <div className="quick-links">
            <p>Or try these popular pages:</p>
            <div className="link-pills">
              <Link to="/products">Products</Link>
              <Link to="/about">About Us</Link>
              <Link to="/careers">Careers</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
