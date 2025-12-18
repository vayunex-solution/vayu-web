import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './ProductShowcase.css';

// Product Logos
import paynexLogo from '../../assets/images/paynex-logo.png';
import vayubaseLogo from '../../assets/images/vayubase-logo.png';

// Product Hero Images
import paynexHero from '../../assets/images/paynex-hero.png';
import vayubaseHero from '../../assets/images/vayubase-hero.png';
import flownexHero from '../../assets/images/flownex-hero.png';

const ProductShowcase = () => {
  const [ref, isVisible] = useScrollAnimation();

  const products = [
    {
      id: 'paynex',
      name: 'PayNex',
      tagline: 'Smart Billing Software',
      description: 'GST-ready invoicing, payment tracking, and financial insights for modern businesses.',
      logo: paynexLogo,
      heroImage: paynexHero,
      color: '#4facfe',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      features: ['GST Invoicing', 'Auto Reminders', 'Analytics'],
      url: 'https://paynex.vayunexsolution.com/',
      offer: '🔥 Free Trial'
    },
    {
      id: 'vayubase',
      name: 'VayuBase',
      tagline: 'Backend Platform',
      description: 'One unified backend to power all your applications with built-in auth and APIs.',
      logo: vayubaseLogo,
      heroImage: vayubaseHero,
      color: '#9f55ff',
      gradient: 'linear-gradient(135deg, #9f55ff 0%, #7c3aed 100%)',
      features: ['BaaS', 'Auth System', 'REST APIs'],
      url: 'https://vayubase.vayunexsolution.com/',
      offer: '⚡ API Ready'
    },
    {
      id: 'flownex',
      name: 'FlowNex',
      tagline: 'Email Automation',
      description: 'Reliable email delivery for transactional, marketing, and automated workflows.',
      icon: 'fas fa-envelope-open-text',
      heroImage: flownexHero,
      color: '#00d4ff',
      gradient: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
      features: ['Transactional', 'Automation', 'Templates'],
      url: 'https://flownex.vayunexsolution.com/',
      offer: '📧 100K Free'
    }
  ];

  return (
    <div ref={ref} className={`product-showcase-ultra ${isVisible ? 'is-visible' : ''}`}>
      {/* Section Header */}
      <div className="showcase-header-ultra">
        <span className="showcase-badge">
          <i className="fas fa-rocket"></i> Our Products
        </span>
        <h2>Powerful Tools for <span className="text-shine">Modern Business</span></h2>
        <p>Enterprise-grade solutions built for startups and growing companies.</p>
      </div>

      {/* Products Cards */}
      <div className="products-cards-ultra">
        {products.map((product, index) => (
          <div 
            key={product.id}
            className="product-card-ultra"
            style={{ 
              '--card-color': product.color,
              '--card-gradient': product.gradient,
              '--delay': `${index * 0.15}s`
            }}
          >
            {/* Card Glow */}
            <div className="card-glow-ultra"></div>

            {/* Offer Badge */}
            <div className="offer-tag">{product.offer}</div>

            {/* Image Section */}
            <div className="card-image-ultra">
              <img src={product.heroImage} alt={product.name} />
              <div className="image-overlay"></div>
            </div>

            {/* Content Section */}
            <div className="card-content-ultra">
              {/* Logo & Name */}
              <div className="card-header-ultra">
                {product.logo ? (
                  <img src={product.logo} alt="" className="card-logo-ultra" />
                ) : (
                  <div className="card-icon-ultra" style={{ background: product.gradient }}>
                    <i className={product.icon}></i>
                  </div>
                )}
                <div>
                  <h3>{product.name}</h3>
                  <span className="card-tagline-ultra">{product.tagline}</span>
                </div>
              </div>

              {/* Description */}
              <p className="card-desc-ultra">{product.description}</p>

              {/* Features */}
              <div className="card-features-ultra">
                {product.features.map((feature, i) => (
                  <span key={i} className="feature-pill-ultra">
                    <i className="fas fa-check"></i> {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a 
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-cta-ultra"
                style={{ background: product.gradient }}
              >
                <span>Explore Now</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="view-all-ultra">
        <Link to="/products" className="view-all-btn-ultra">
          <span>View All Products</span>
          <i className="fas fa-th-large"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProductShowcase;
