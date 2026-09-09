'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import LeadCaptureModal from './LeadCaptureModal';
import { trackProductInterest } from '../../utils/analytics';
import { PRODUCTS_DATA, PRODUCT_STATUS } from '../../data/products';
import './ProductEcosystem.css';

const ProductCard = ({ product, index, onOpenModal }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const statusConfig = PRODUCT_STATUS[product.status] || PRODUCT_STATUS.COMING_SOON;

  return (
    <article
      ref={ref}
      className={`product-card product-card--${product.id} ${isVisible ? 'is-visible' : ''}`}
      style={{
        '--accent-a': product.accentA,
        '--accent-b': product.accentB,
        '--delay': `${index * 0.08}s`,
      }}
      aria-labelledby={`product-heading-${product.id}`}
    >
      {/* Subtle ambient card glow */}
      <div className="product-card__glow" aria-hidden="true" />

      <div className="product-card__body">
        {/* Top Meta: Brand Mark + Status Badge */}
        <div className="product-card__header">
          <div className="product-card__logo-wrapper" aria-hidden="true">
            {product.logoUrl ? (
              <img
                src={product.logoUrl}
                alt=""
                className="product-card__logo-img"
                width={36}
                height={36}
                loading="lazy"
              />
            ) : product.id === 'jwelnex' ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="product-card__vector-icon">
                <path d="M6 3h12l4 6-10 13L2 9z" />
                <path d="M11 3 8 9l4 13 4-13-3-6" />
                <path d="M2 9h20" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="product-card__vector-icon">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            )}
          </div>

          <span
            className={`product-card__badge product-card__badge--${statusConfig.type}`}
            style={{ '--badge-dot': statusConfig.dotColor }}
          >
            {statusConfig.pulse && <span className="live-dot" aria-hidden="true" />}
            {product.statusLabel}
          </span>
        </div>

        {/* Product Identity & High-Impact Value Proposition */}
        <div className="product-card__identity">
          <span className="product-card__category">{product.category}</span>
          <h3 id={`product-heading-${product.id}`} className="product-card__name">
            {product.name}
          </h3>
          <p className="product-card__value-prop">
            {product.valueProposition}
          </p>
        </div>

        {/* Authentic Product UI Showcase */}
        <div className="product-card__visual">
          <div className="product-card__image-frame">
            <img
              src={product.heroImageUrl}
              alt={`${product.name} Interface preview`}
              className="product-card__hero-img"
              width={600}
              height={400}
              loading="lazy"
            />
          </div>
        </div>

        {/* Key Core Capabilities */}
        <div className="product-card__capabilities-section">
          <span className="product-card__caps-label">Core Capabilities</span>
          <ul className="product-card__caps-list">
            {product.capabilities.slice(0, 3).map((cap, i) => (
              <li key={i} className="product-card__cap-pill">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dual Actions Footer */}
        <div className="product-card__actions">
          {product.primaryCTA.external ? (
            <a
              href={product.primaryCTA.url}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card__btn-primary"
              onClick={() => trackProductInterest(product.name, 'external_launch')}
            >
              {product.primaryCTA.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          ) : product.primaryCTA.action ? (
            <button
              type="button"
              onClick={() => onOpenModal(product.primaryCTA.action, product.name, product.id)}
              className="product-card__btn-primary"
              aria-haspopup="dialog"
            >
              {product.primaryCTA.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <Link
              to={product.primaryCTA.url}
              className="product-card__btn-primary"
              onClick={() => trackProductInterest(product.name, 'explore_product')}
            >
              {product.primaryCTA.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          )}

          {product.secondaryCTA && (
            product.secondaryCTA.action ? (
              <button
                type="button"
                onClick={() => onOpenModal(product.secondaryCTA.action, product.name, product.id)}
                className="product-card__btn-secondary"
                aria-haspopup="dialog"
              >
                {product.secondaryCTA.label}
              </button>
            ) : product.secondaryCTA.external ? (
              <a
                href={product.secondaryCTA.url}
                target="_blank"
                rel="noopener noreferrer"
                className="product-card__btn-secondary"
              >
                {product.secondaryCTA.label}
              </a>
            ) : (
              <Link
                to={product.secondaryCTA.url || product.internalRoute}
                className="product-card__btn-secondary"
              >
                {product.secondaryCTA.label}
              </Link>
            )
          )}
        </div>
      </div>
    </article>
  );
};

const ProductEcosystem = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('demo');
  const [modalProductName, setModalProductName] = useState('');
  const [modalProductId, setModalProductId] = useState('');

  const handleOpenModal = (mode, productName, productId) => {
    trackProductInterest(productName, `open_${mode}_modal`);
    setModalMode(mode);
    setModalProductName(productName);
    setModalProductId(productId);
    setIsModalOpen(true);
  };

  return (
    <section id="products" className="product-ecosystem" aria-label="Product Ecosystem">
      {/* Ambient background glow */}
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
          <span className="section-eyebrow">Enterprise Product Portfolio</span>
          <h2 className="section-heading">
            Proprietary Systems Built for Scale
          </h2>
          <p className="section-subheading">
            We architect, deploy, and operate high-availability SaaS platforms solving mission-critical business challenges across vertical markets.
          </p>
        </div>

        {/* Balanced Enterprise Grid */}
        <div className="product-grid" role="region" aria-label="Products Grid">
          {PRODUCTS_DATA.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>

        {/* Section Footer */}
        <div
          className={`product-ecosystem__footer fade-up ${headerVisible ? 'is-visible stagger-4' : ''}`}
        >
          <Link to="/products" className="btn-outline" id="view-all-products">
            Explore All Platforms
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Lead Capture Modal for Interactive Actions */}
      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={modalMode}
        productName={modalProductName}
        productId={modalProductId}
      />
    </section>
  );
};

export default ProductEcosystem;
