'use client';

import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import SEO from '../components/common/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
import FinalCTA from '../components/common/FinalCTA';
import LeadCaptureModal from '../components/common/LeadCaptureModal';
import { trackProductInterest } from '../utils/analytics';
import { PRODUCTS_DATA, PRODUCT_STATUS } from '../data/products';
import '../styles/InnerPage.css';
import './ProductsPage.css';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Modal State
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
  
  const [heroRef, heroVisible] = useScrollAnimation(0.1);
  const [techRef, techVisible] = useScrollAnimation(0.2);

  // Initialize active product from query parameter
  const productQuery = searchParams.get('product');
  const initialIndex = PRODUCTS_DATA.findIndex(p => p.id === productQuery || p.slug === productQuery);
  const [activeProduct, setActiveProduct] = useState(initialIndex !== -1 ? initialIndex : 0);

  // Sync state when URL parameter changes
  useEffect(() => {
    if (productQuery) {
      const idx = PRODUCTS_DATA.findIndex(p => p.id === productQuery || p.slug === productQuery);
      if (idx !== -1 && idx !== activeProduct) {
        setActiveProduct(idx);
      }
    } else if (activeProduct !== 0) {
      setActiveProduct(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productQuery]);

  const handleTabClick = (idx) => {
    trackProductInterest(PRODUCTS_DATA[idx].name, 'view_tab');
    setActiveProduct(idx);
    
    // Preserve existing search params and just update the 'product' param
    const newParams = new URLSearchParams(searchParams);
    newParams.set('product', PRODUCTS_DATA[idx].id);
    navigate({ search: newParams.toString() }, { replace: true });
  };

  const currentProduct = PRODUCTS_DATA[activeProduct] || PRODUCTS_DATA[0];
  const currentStatusConfig = PRODUCT_STATUS[currentProduct.status] || PRODUCT_STATUS.COMING_SOON;

  return (
    <main className="products-page">
      <SEO
        title="Enterprise Product Ecosystem | Vayunex Solution"
        description="Explore Vayunex's enterprise technology portfolio: SocialNex, SchoolDost, PayNex, Jwelnex ERP, and InventoryNex. Engineered for scale and mission-critical business workflows."
        keywords="enterprise saas, software products, socialnex, schooldost, paynex, jwelnex erp, inventorynex, vayunex solution"
        canonicalUrl="https://www.vayunexsolution.com/products"
      />

      {/* ========== HERO SECTION ========== */}
      <section className="products-hero" aria-label="Products Hero">
        <div className="products-hero__bg">
          <div className="ph-orb ph-orb--1" />
          <div className="ph-orb ph-orb--2" />
          <div className="ph-grid" />
        </div>
        
        <div className="container">
          <div ref={heroRef} className={`products-hero__content fade-up ${heroVisible ? 'is-visible' : ''}`}>
            <span className="section-eyebrow">Enterprise Product Portfolio</span>
            <h1 className="hero-heading">
              Software Built for <span className="gradient-text">Scale & Reliability</span>
            </h1>
            <p className="hero-subheading">
              We architect, deploy, and operate proprietary enterprise platforms. Each system is purpose-engineered to automate mission-critical industry operations with zero compromise on stability.
            </p>
          </div>
        </div>
      </section>

      {/* ========== PRODUCT SHOWCASE (TABS) ========== */}
      <section className="products-showcase">
        <div className="container">
          <div className="ps-layout">
            {/* Sidebar Tabs */}
            <div className="ps-sidebar" role="tablist" aria-label="Product Platforms">
              {PRODUCTS_DATA.map((prod, idx) => {
                const prodStatus = PRODUCT_STATUS[prod.status] || PRODUCT_STATUS.COMING_SOON;
                return (
                  <button
                    key={prod.id}
                    role="tab"
                    id={`tab-${prod.id}`}
                    aria-selected={activeProduct === idx}
                    aria-controls={`panel-${prod.id}`}
                    className={`ps-tab ${activeProduct === idx ? 'active' : ''}`}
                    onClick={() => handleTabClick(idx)}
                    style={{ '--tab-color': prod.color }}
                  >
                    <div className="ps-tab__icon" aria-hidden="true">
                      {prod.logoUrl ? (
                        <img src={prod.logoUrl} alt="" className="ps-tab__logo" width={24} height={24} />
                      ) : prod.id === 'jwelnex' ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 3h12l4 6-10 13L2 9z" />
                          <path d="M11 3 8 9l4 13 4-13-3-6" />
                          <path d="M2 9h20" />
                        </svg>
                      ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                          <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                      )}
                    </div>
                    <div className="ps-tab__text">
                      <span className="ps-tab__name">{prod.name}</span>
                      <span className="ps-tab__status">{prod.statusLabel}</span>
                    </div>
                    {activeProduct === idx && <div className="ps-tab__indicator" />}
                  </button>
                );
              })}
            </div>

            {/* Main Display Area */}
            <div className="ps-display" role="tabpanel" id={`panel-${currentProduct.id}`} aria-labelledby={`tab-${currentProduct.id}`}>
              <div className="ps-card" style={{ '--card-accent': currentProduct.color }}>
                <div className="ps-card__header">
                  <div className="ps-card__title-row">
                    <div className="ps-card__icon-lg" aria-hidden="true">
                      {currentProduct.logoUrl ? (
                        <img src={currentProduct.logoUrl} alt="" className="ps-card__logo-lg" width={48} height={48} />
                      ) : currentProduct.id === 'jwelnex' ? (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 3h12l4 6-10 13L2 9z" />
                          <path d="M11 3 8 9l4 13 4-13-3-6" />
                          <path d="M2 9h20" />
                        </svg>
                      ) : (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                          <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h2 className="ps-card__title">{currentProduct.name}</h2>
                      <p className="ps-card__tagline">{currentProduct.tagline}</p>
                    </div>
                  </div>
                  <span
                    className={`ps-badge ps-badge--${currentStatusConfig.type}`}
                    style={{ '--badge-dot': currentStatusConfig.dotColor }}
                  >
                    {currentStatusConfig.pulse && <span className="live-dot" aria-hidden="true" />}
                    {currentProduct.statusLabel}
                  </span>
                </div>

                <div className="ps-card__body">
                  <div className="ps-narrative-grid">
                    <div className="ps-narrative-block">
                      <h4 className="ps-narrative-title">The Problem</h4>
                      <p className="ps-narrative-text">{currentProduct.problem}</p>
                    </div>
                    <div className="ps-narrative-block">
                      <h4 className="ps-narrative-title">Our Solution</h4>
                      <p className="ps-narrative-text">{currentProduct.solution}</p>
                    </div>
                    <div className="ps-narrative-block">
                      <h4 className="ps-narrative-title">Business Outcome</h4>
                      <p className="ps-narrative-text">{currentProduct.outcome}</p>
                    </div>
                    <div className="ps-narrative-block">
                      <h4 className="ps-narrative-title">Target Audience</h4>
                      <p className="ps-narrative-text">{currentProduct.targetAudience}</p>
                    </div>
                  </div>

                  <div className="ps-best-for">
                    <h4 className="ps-best-for-title">Best Fit For:</h4>
                    <div className="ps-tags">
                      {currentProduct.bestFor.map((tag, i) => (
                        <span key={i} className="ps-tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="ps-actions">
                    {currentProduct.primaryCTA.external ? (
                      <a
                        href={currentProduct.primaryCTA.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ps-btn-primary"
                        onClick={() => trackProductInterest(currentProduct.name, 'external_launch')}
                      >
                        {currentProduct.primaryCTA.label}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    ) : currentProduct.primaryCTA.url ? (
                      <Link to={currentProduct.primaryCTA.url} className="ps-btn-primary">
                        {currentProduct.primaryCTA.label}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    ) : (
                      <button 
                        type="button"
                        onClick={() => handleOpenModal(currentProduct.primaryCTA.action, currentProduct.name, currentProduct.id)} 
                        className="ps-btn-primary"
                        aria-haspopup="dialog"
                      >
                        {currentProduct.primaryCTA.label}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </button>
                    )}
                    
                    {currentProduct.secondaryCTA && (
                      currentProduct.secondaryCTA.action ? (
                        <button 
                          type="button"
                          onClick={() => handleOpenModal(currentProduct.secondaryCTA.action, currentProduct.name, currentProduct.id)} 
                          className="ps-btn-secondary"
                          aria-haspopup="dialog"
                        >
                          {currentProduct.secondaryCTA.label}
                        </button>
                      ) : currentProduct.secondaryCTA.external ? (
                        <a href={currentProduct.secondaryCTA.url} target="_blank" rel="noopener noreferrer" className="ps-btn-secondary">
                          {currentProduct.secondaryCTA.label}
                        </a>
                      ) : (
                        <Link to={currentProduct.secondaryCTA.url || currentProduct.internalRoute} className="ps-btn-secondary">
                          {currentProduct.secondaryCTA.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>

                <div className="ps-card__image-wrapper">
                  <img
                    src={currentProduct.heroImageUrl}
                    alt={`${currentProduct.name} Interface Dashboard`}
                    className="ps-card__image"
                    width={800}
                    height={500}
                    loading="lazy"
                  />
                  <div className="ps-card__image-glow" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TECHNOLOGY STACK ========== */}
      <section className="tech-stack-section">
        <div className="container">
          <div ref={techRef} className={`tech-stack-content fade-up ${techVisible ? 'is-visible' : ''}`}>
            <div className="ts-header">
              <h2>Built on Production-Grade Architecture</h2>
              <p>Every platform in our portfolio is engineered using the same robust enterprise architecture that we deploy for our global partners.</p>
            </div>
            <div className="ts-grid">
              <div className="ts-card">
                <h3>Frontend Architecture</h3>
                <p>Component-based, highly optimized client architecture delivering lightning-fast, responsive user interfaces.</p>
              </div>
              <div className="ts-card">
                <h3>Backend Systems</h3>
                <p>Event-driven microservices designed for seamless scalability and handling complex business logic.</p>
              </div>
              <div className="ts-card">
                <h3>Data Layer</h3>
                <p>Distributed, high-availability database clusters tuned for sub-millisecond query performance and reliability.</p>
              </div>
              <div className="ts-card">
                <h3>Cloud Infrastructure</h3>
                <p>Cloud-native, containerized infrastructure ensuring 99.99% uptime with enterprise-grade security protocols.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY WE BUILD ========== */}
      <section className="why-build-section">
        <div className="container">
          <div className="wb-content">
            <div className="wb-text">
              <h2>Why We Build Our Own Products</h2>
              <p>Operating our own platforms makes us better engineers for our enterprise partners. We face the exact same challenges of scale, security, and user retention that you do.</p>
              <ul className="wb-list">
                <li><span className="wb-check">✓</span> We use our own platforms to dogfood new architectures.</li>
                <li><span className="wb-check">✓</span> We understand the complete product lifecycle from day 1 to year 5.</li>
                <li><span className="wb-check">✓</span> Our engineering partners benefit from battle-tested production codebases.</li>
              </ul>
            </div>
            <div className="wb-visual" aria-hidden="true">
              <div className="wb-abstract">
                <div className="wb-block wb-block--1" />
                <div className="wb-block wb-block--2" />
                <div className="wb-block wb-block--3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <FinalCTA />

      {/* ========== MODAL ========== */}
      <LeadCaptureModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={modalMode}
        productName={modalProductName}
        productId={modalProductId}
      />
    </main>
  );
};

export default ProductsPage;
