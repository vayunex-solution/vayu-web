import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// Logo ko import karein
import vayunexLogo from '../../../assets/images/vayunex-logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Page change hone par mobile menu band karein
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Yeh function home page par scroll karega
  const handleScrollToServices = (e) => {
    if (location.pathname !== '/') {
      // Agar doosre page par hain, toh pehle home page par jaayein
      // react-router-dom iska dhyaan rakhega
      return;
    }
    // Agar home page par hain, toh scroll karein
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-container">
          <img src={vayunexLogo} alt="Vayunex Logo" className="logo-image" />
          <div className="logo-text-container">
            <span className="logo-main">VAYUNEX</span>
            <span className="logo-subtitle">SOLUTION</span>
          </div>
        </Link>
        
        {/* --- Traditional Mobile Menu --- */}
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
                <li><Link to="/" onClick={handleScrollToServices} className="nav-link">Services</Link></li>
                <li><Link to="/products" className="nav-link">Products</Link></li>
                <li><a href="https://academy.vayunexsolution.com/" target="_blank" rel="noopener noreferrer" className="nav-link">Training Portal</a></li>
                <li><Link to="/about" className="nav-link">About Us</Link></li>
                <li><Link to="/careers" className="nav-link">Careers</Link></li>
                {/* Mobile ke liye alag se "Let's Talk" button */}
                <li><Link to="/contact" className="nav-cta-mobile">Let's Talk</Link></li>
            </ul>
        </div>
        
        {/* Desktop ke liye "Let's Talk" button */}
        <Link to="/contact" className="nav-cta-desktop">Let's Talk</Link>

        <div className="hamburger-icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

