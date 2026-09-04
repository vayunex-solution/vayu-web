import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../../common/ThemeToggle';
import './Navbar.css';

import vayunexLogo from '../../../assets/images/vayunex-logo.webp';

const NAV_LINKS = [
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/#outcomes' },
  { label: 'Blog', to: '/blog' },
  { label: 'Company', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

  const handleServicesClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const section = document.getElementById('outcomes');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${isMobileMenuOpen ? 'navbar--open' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__container">

        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="Vayunex Solution Home">
          <img src={vayunexLogo} alt="Vayunex" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            <span className="navbar__logo-main">VAYUNEX</span>
            <span className="navbar__logo-sub">SOLUTION</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="navbar__links">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={label}>
              {label === 'Services' ? (
                <Link
                  to={to}
                  className={`navbar__link ${location.pathname === '/' && to.startsWith('/#') ? '' : ''}`}
                  onClick={handleServicesClick}
                >
                  {label}
                </Link>
              ) : (
                <Link
                  to={to}
                  className={`navbar__link ${location.pathname === to ? 'navbar__link--active' : ''}`}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="navbar__actions">
          <ThemeToggle />
          <Link to="/contact" className="navbar__cta" id="navbar-cta">
            Talk to Engineering
          </Link>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${isMobileMenuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            id="hamburger-btn"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile Drawer */}
      <div className={`navbar__drawer ${isMobileMenuOpen ? 'navbar__drawer--open' : ''}`} aria-hidden={!isMobileMenuOpen}>
        <div className="navbar__drawer-inner">
          <ul className="navbar__mobile-links">
            {NAV_LINKS.map(({ label, to }, i) => (
              <li key={label} style={{ '--delay': `${i * 0.06}s` }}>
                {label === 'Services' ? (
                  <Link
                    to={to}
                    className="navbar__mobile-link"
                    onClick={handleServicesClick}
                  >
                    {label}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                ) : (
                  <Link
                    to={to}
                    className="navbar__mobile-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar__drawer-footer">
            <Link
              to="/contact"
              className="navbar__mobile-cta"
              onClick={() => setMobileMenuOpen(false)}
              id="navbar-mobile-cta"
            >
              Talk to Engineering
            </Link>
            <div className="navbar__drawer-theme">
              <span>Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div className="navbar__backdrop" onClick={() => setMobileMenuOpen(false)} aria-hidden="true" />
      )}
    </>
  );
};

export default Navbar;
