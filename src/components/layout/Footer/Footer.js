import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Logo ko import karein
import vayunexLogo from '../../../assets/images/vayunex-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          {/* --- Naya Logo Section --- */}
          <Link to="/" className="footer-logo-container">
            <img src={vayunexLogo} alt="Vayunex Logo" className="footer-logo-image" />
            <div className="footer-logo-text-container">
              <span className="footer-logo-main">VAYUNEX</span>
              <span className="footer-logo-subtitle">SOLUTION</span>
            </div>
          </Link>
          <p>Engineering Growth, Delivering Excellence.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vayunex Solution. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

