import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import ShinyText from '../../common/ShinyText';
import vayunexLogo from '../../../assets/images/vayunex-logo.webp';
import paynexLogo from '../../../assets/images/paynex-logo.webp';
import socialnexLogo from '../../../assets/images/socialnex-logo.webp';
import schooldostLogo from '../../../assets/images/schooldost-logo.webp';

const FOOTER_PRODUCTS = [
  { id: 'jwelnex', label: 'Jwelnex ERP', to: '/products/jwelnex', badge: 'Live' },
  { id: 'paynex', label: 'PayNex', to: '/products/paynex', badge: 'Beta' },
  { id: 'socialnex', label: 'SocialNex', to: '/products/socialnex', badge: 'Soon' },
  { id: 'schooldost', label: 'SchoolDost', to: '/products/schooldost', badge: 'Soon' },
  { id: 'inventorynex', label: 'InventoryNex', to: '/products/inventorynex', badge: 'Soon' },
];

const FOOTER_CAPABILITIES = [
  { label: 'Digital Platforms', to: '/services/web-development' },
  { label: 'Business Automation', to: '/services/ai-data-science' },
  { label: 'Enterprise Systems', to: '/services/web-development' },
  { label: 'Custom Products', to: '/services/ai-data-science' },
];

const FOOTER_COMPANY = [
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
  { label: 'Careers', to: '/careers' },
];

const FOOTER_LEGAL = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms' },
];

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/vayunex-solution/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/vayunexsolution?igsh=cW1qZ3llODhzcm52',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1B52ioXjqw/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/918930733725',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
];

const getProductLogo = (id) => {
  switch (id) {
    case 'paynex':
      return <img src={paynexLogo} alt="" className="footer__product-logo" />;
    case 'socialnex':
      return <img src={socialnexLogo} alt="" className="footer__product-logo" />;
    case 'schooldost':
      return <img src={schooldostLogo} alt="" className="footer__product-logo" />;
    case 'jwelnex':
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="footer__product-svg-logo" aria-hidden="true">
          <path d="M6 3h12l4 6-10 13L2 9z" />
        </svg>
      );
    case 'inventorynex':
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="footer__product-svg-logo" aria-hidden="true">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      );
    default:
      return null;
  }
};

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      {/* Top border */}
      <div className="footer__top-border" aria-hidden="true" />

      <div className="footer__main">
        <div className="footer__container">
          {/* Brand Column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="Vayunex Solution Home">
              <img src={vayunexLogo} alt="Vayunex" className="footer__logo-img" />
              <div className="footer__logo-text">
                <span className="footer__logo-main">VAYUNEX</span>
                <span className="footer__logo-sub">SOLUTION</span>
              </div>
            </Link>
            <p className="footer__tagline">
              Engineering scalable SaaS and enterprise software for modern organizations.
            </p>
            <div className="footer__contact-block">
              <a href="https://wa.me/918930733725" className="footer__contact-item" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Vayunex">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                +91 89307 33725
              </a>
              <a href="mailto:contact@vayunexsolution.com" className="footer__contact-item" aria-label="Email Vayunex">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                contact@vayunexsolution.com
              </a>
            </div>
            <div className="footer__socials" aria-label="Social media links">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-icon"
                  aria-label={`Vayunex on ${s.label}`}

                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div className="footer__col">
            <h4 className="footer__col-title">Products</h4>
            <ul className="footer__col-list">
              {FOOTER_PRODUCTS.map((p) => (
                <li key={p.label}>
                  <Link to={p.to} className="footer__col-link">
                    {getProductLogo(p.id)}
                    {p.label}
                    {p.badge && (
                      <span className={`footer__badge footer__badge--${p.badge.toLowerCase()}`}>
                        {p.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Column */}
          <div className="footer__col">
            <h4 className="footer__col-title">Capabilities</h4>
            <ul className="footer__col-list">
              {FOOTER_CAPABILITIES.map((s) => (
                <li key={s.label}>
                  <Link to={s.to} className="footer__col-link">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__col-list">
              {FOOTER_COMPANY.map((c) => (
                <li key={c.label}>
                  {c.external ? (
                    <a href={c.href} className="footer__col-link" target="_blank" rel="noopener noreferrer">
                      {c.label}
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                    </a>
                  ) : (
                    <Link to={c.to} className="footer__col-link">{c.label}</Link>
                  )}
                </li>
              ))}
              {FOOTER_LEGAL.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="footer__col-link footer__col-link--legal">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Brand watermark */}
      <div className="footer__watermark" aria-hidden="true">
        <ShinyText
          text="VAYUNEX"
          className="footer-brand-main"
          speed={3}
          delay={0}
          color="var(--footer-watermark-color-1)"
          color2="var(--footer-watermark-color-2)"
          shineColor="var(--footer-watermark-shine)"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />
        <ShinyText
          text="SOLUTION"
          className="footer-brand-subtitle"
          speed={3}
          delay={0.3}
          color="var(--footer-watermark-color-1)"
          color2="var(--footer-watermark-color-2)"
          shineColor="var(--footer-watermark-shine)"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Vayunex Solution. All Rights Reserved.
          </p>
          <p className="footer__made-in">
            Engineered in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
