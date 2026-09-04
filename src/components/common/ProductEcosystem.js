import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './ProductEcosystem.css';

import paynexLogo from '../../assets/images/paynex-logo.webp';
import socialnexLogo from '../../assets/images/socialnex-logo.webp';
import schooldostLogo from '../../assets/images/schooldost-logo.webp';

const PRODUCTS = [
  {
    id: 'paynex',
    name: 'PayNex',
    isFlagship: true,
    category: 'Financial Infrastructure',
    mission: 'Simplify billing and compliance operations.',
    outcome: 'Automate invoicing, GST workflows, and business visibility.',
    status: 'Public Beta',
    statusType: 'beta',
    accentA: '#14B8A6',
    accentB: '#10B981',
    link: '/products/paynex',
    icon: (
      <div className="product-card__logo-img-wrapper">
        <img src={paynexLogo} alt="PayNex" className="product-card__logo-img" />
      </div>
    ),
    previewNode: (
      <div className="flagship-preview flagship-preview--paynex">
        <div className="fp-header">
          <div className="fp-dot" />
          <div className="fp-dot" />
          <div className="fp-dot" />
        </div>
        <div className="fp-body">
          <div className="fp-chart">
            <div className="fp-bar fp-bar--1" />
            <div className="fp-bar fp-bar--2" />
            <div className="fp-bar fp-bar--3" />
            <div className="fp-bar fp-bar--4" />
          </div>
          <div className="fp-stats">
            <div className="fp-stat-line" />
            <div className="fp-stat-line fp-stat-line--short" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'jwelnex',
    name: 'Jwelnex ERP',
    isFlagship: true,
    category: 'Jewellery Business Operations',
    mission: 'Digitize jewellery business management.',
    outcome: 'Centralize inventory, billing, customer relationships and reporting.',
    status: 'Live',
    statusType: 'live',
    accentA: '#F59E0B',
    accentB: '#3B82F6',
    link: '/products/jwelnex',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9z" />
        <path d="M11 3 8 9l4 13 4-13-3-6" />
        <path d="M2 9h20" />
      </svg>
    ),
    previewNode: (
      <div className="flagship-preview flagship-preview--jwelnex">
        <div className="fp-sidebar">
          <div className="fp-nav-item active" />
          <div className="fp-nav-item" />
          <div className="fp-nav-item" />
        </div>
        <div className="fp-main">
          <div className="fp-card fp-card--large" />
          <div className="fp-card" />
          <div className="fp-card" />
        </div>
      </div>
    ),
  },
  {
    id: 'socialnex',
    name: 'SocialNex',
    category: 'Marketing Operations',
    mission: 'Centralize social media execution.',
    outcome: 'Plan, create and manage content from a unified platform.',
    status: 'Coming Soon',
    statusType: 'soon',
    accentA: '#8B5CF6',
    accentB: '#EC4899',
    link: '/products/socialnex',
    icon: (
      <div className="product-card__logo-img-wrapper">
        <img src={socialnexLogo} alt="SocialNex" className="product-card__logo-img" />
      </div>
    ),
  },
  {
    id: 'schooldost',
    name: 'SchoolDost',
    category: 'Student Network',
    mission: 'Connect verified students safely.',
    outcome: 'Enable communication, collaboration and student-focused opportunities.',
    status: 'Coming Soon',
    statusType: 'soon',
    accentA: '#06B6D4',
    accentB: '#3B82F6',
    link: '/products/schooldost',
    icon: (
      <div className="product-card__logo-img-wrapper">
        <img src={schooldostLogo} alt="SchoolDost" className="product-card__logo-img" />
      </div>
    ),
  },
  {
    id: 'inventorynex',
    name: 'InventoryNex',
    category: 'Inventory Infrastructure',
    mission: 'Deliver inventory visibility.',
    outcome: 'Track stock, movement and operations in real time.',
    status: 'Coming Soon',
    statusType: 'soon',
    accentA: '#F97316',
    accentB: '#F59E0B',
    link: '/products/inventorynex',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
];

const ProductCard = ({ product, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`product-card product-card--${product.id} ${product.isFlagship ? 'product-card--flagship' : ''} ${isVisible ? 'is-visible' : ''}`}
      style={{
        '--accent-a': product.accentA,
        '--accent-b': product.accentB,
        '--delay': `${index * 0.08}s`,
      }}
    >
      {/* Glow background */}
      <div className="product-card__glow" aria-hidden="true" />

      {/* Card Content */}
      <div className="product-card__body">
        {/* Header */}
        <div className="product-card__header">
          <div className="product-card__icon">
            {product.icon}
          </div>
          <span className={`product-card__badge product-card__badge--${product.statusType}`}>
            {product.statusType === 'live' && <span className="live-dot" aria-hidden="true" />}
            {product.status}
          </span>
        </div>

        {/* Info */}
        <div className="product-card__info">
          {product.isFlagship && product.previewNode && (
            <div className="product-card__preview-wrapper">
              {product.previewNode}
            </div>
          )}
          <div className="product-card__company-header">
            <h3 className="product-card__name">{product.name}</h3>
            <span className="product-card__category">{product.category}</span>
          </div>
          
          <div className="product-card__mission-outcome">
            <div className="product-card__mo-item">
              <span className="product-card__mo-label">Mission</span>
              <p className="product-card__mo-text">{product.mission}</p>
            </div>
            <div className="product-card__mo-item">
              <span className="product-card__mo-label">Outcome</span>
              <p className="product-card__mo-text">{product.outcome}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          to={product.link}
          className="product-card__cta"
          aria-label={`Learn more about ${product.name}`}
        >
          {product.statusType === 'live' ? 'View Product' : product.statusType === 'beta' ? 'Join Beta' : 'Learn More'}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>

      {/* Shine overlay */}
      <div className="product-card__shine" aria-hidden="true" />
    </div>
  );
};

const ProductEcosystem = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);

  return (
    <section id="products" className="product-ecosystem" aria-label="Product Ecosystem">
      {/* Ambient bg orbs */}
      <div className="product-ecosystem__bg" aria-hidden="true">
        <div className="eco-orb eco-orb--1" />
        <div className="eco-orb eco-orb--2" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`product-ecosystem__header fade-up ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section-eyebrow">Product Ecosystem</span>
          <h2 className="section-heading">
            Software We Build &amp; Ship
          </h2>
          <p className="section-subheading">
            Real products. Real customers. Active development. Vayunex is building a suite of enterprise-grade SaaS platforms — each purpose-built for a specific industry vertical.
          </p>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`product-ecosystem__footer fade-up ${headerVisible ? 'is-visible stagger-4' : ''}`}
        >
          <Link to="/products" className="btn-outline" id="view-all-products">
            View All Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductEcosystem;
