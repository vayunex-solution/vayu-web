import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import SEO from '../components/common/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
import FinalCTA from '../components/common/FinalCTA';
import LeadCaptureModal from '../components/common/LeadCaptureModal';
import { trackProductInterest } from '../utils/analytics';
import '../styles/InnerPage.css';
import './ProductsPage.css';

// Product Logos
import paynexLogo from '../assets/images/paynex-logo.webp';
import socialnexLogo from '../assets/images/socialnex-logo.webp';
import schooldostLogo from '../assets/images/schooldost-logo.webp';

// Product Hero Images
import jwelnexHero from '../assets/images/jwelnex-hero.webp';
import paynexHero from '../assets/images/paynex-hero.webp';
import socialnexHero from '../assets/images/socialnex-hero.webp';
import schooldostHero from '../assets/images/schooldost-hero.webp';
import inventorynexHero from '../assets/images/inventorynex-hero.webp';

const productsData = [
  {
    id: 'jwelnex',
    name: 'Jwelnex ERP',
    tagline: 'End-to-end jewellery business management',
    logo: null,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9z" />
        <path d="M11 3 8 9l4 13 4-13-3-6" />
        <path d="M2 9h20" />
      </svg>
    ),
    heroImage: jwelnexHero,
    color: '#F59E0B',
    status: 'Live',
    statusType: 'live',
    
    // Storytelling
    problem: 'Jewellery retailers struggle with fragmented systems for stock, billing, and accounting, leading to inventory shrinkage and compliance risks.',
    solution: 'A unified, full-stack ERP system that integrates barcode tracking, GST-compliant invoicing, and real-time ledger management.',
    outcome: 'Eliminate reconciliation errors, track every gram of inventory, and dramatically speed up retail checkouts.',
    targetAudience: 'Small to large jewellery retail businesses.',
    bestFor: ['Jewellery Stores', 'Multi-Branch Retailers', 'Gold Traders', 'Inventory-Focused Businesses'],

    // CTAs
    primaryCTA: { label: 'Explore Jwelnex', url: '/products/jwelnex', external: false },
    secondaryCTA: { label: 'Request Demo', action: 'demo' }
  },
  {
    id: 'paynex',
    name: 'PayNex',
    tagline: 'Intelligent payment infrastructure',
    logo: paynexLogo,
    heroImage: paynexHero,
    color: '#10B981',
    status: 'Public Beta',
    statusType: 'beta',
    
    // Storytelling
    problem: 'Modern businesses face high failure rates, slow settlements, and complex reconciliation processes across multiple payment gateways.',
    solution: 'An intelligent payment routing system with automated multi-gateway support, smart reconciliation, and unified analytics.',
    outcome: 'Increase payment success rates, eliminate manual ledger matching, and get real-time visibility into revenue streams.',
    targetAudience: 'SaaS platforms, e-commerce brands, and enterprise digital operations.',
    bestFor: ['SaaS Companies', 'E-Commerce Platforms', 'High-Volume Merchants', 'Enterprise Operations'],

    // CTAs
    primaryCTA: { label: 'Explore PayNex', url: '/products/paynex', external: false },
    secondaryCTA: { label: 'Launch PayNex', url: 'https://paynex.vayunexsolution.com/', external: true }
  },
  {
    id: 'socialnex',
    name: 'SocialNex',
    tagline: 'AI-powered social media command center',
    logo: socialnexLogo,
    heroImage: socialnexHero,
    color: '#8B5CF6',
    status: 'Coming Soon',
    statusType: 'soon',
    
    // Storytelling
    problem: 'Marketing teams waste hours manually drafting posts, designing graphics, and switching between multiple social platforms.',
    solution: 'A centralized dashboard that leverages AI to generate captions and imagery, while automating cross-platform scheduling.',
    outcome: 'Scale content output 10x without expanding the team, and establish a consistent, data-driven brand presence.',
    targetAudience: 'Marketing agencies, brand managers, and high-growth startups.',
    bestFor: ['Marketing Agencies', 'Brand Managers', 'Content Creators', 'Growth Teams'],

    // CTAs
    primaryCTA: { label: 'Explore SocialNex', url: '/products/socialnex', external: false },
    secondaryCTA: { label: 'Join Early Access', action: 'early-access' }
  },
  {
    id: 'schooldost',
    name: 'SchoolDost',
    tagline: 'Modern school management platform',
    logo: schooldostLogo,
    heroImage: schooldostHero,
    color: '#06B6D4',
    status: 'Coming Soon',
    statusType: 'soon',
    
    // Storytelling
    problem: 'Educational institutions rely on outdated software and paper records, causing communication gaps between staff, students, and parents.',
    solution: 'A modern, comprehensive school ERP that digitizes admissions, automates fee collection, and provides real-time parent portals.',
    outcome: 'Streamline administrative workflows, improve fee recovery rates, and enhance the parent-teacher experience.',
    targetAudience: 'K-12 schools, coaching institutes, and educational trusts.',
    bestFor: ['K-12 Schools', 'Coaching Institutes', 'Educational Trusts', 'Group of Schools'],

    // CTAs
    primaryCTA: { label: 'Explore SchoolDost', url: '/products/schooldost', external: false },
    secondaryCTA: { label: 'Join Early Access', action: 'early-access' }
  },
  {
    id: 'inventorynex',
    name: 'InventoryNex',
    tagline: 'Real-time inventory intelligence',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    heroImage: inventorynexHero,
    color: '#F97316',
    status: 'Coming Soon',
    statusType: 'soon',
    
    // Storytelling
    problem: 'Supply chain businesses lose money due to stockouts, overstocking, and poor visibility across multiple warehouse locations.',
    solution: 'An intelligent multi-warehouse management system with automated reorder triggers and predictive supply chain analytics.',
    outcome: 'Optimize stock levels, reduce carrying costs, and never miss a sale due to unavailable inventory.',
    targetAudience: 'Wholesale distributors, manufacturing units, and retail chains.',
    bestFor: ['Wholesale Distributors', 'Manufacturing Units', 'Retail Chains', 'Logistics Hubs'],

    // CTAs
    primaryCTA: { label: 'Join Early Access', action: 'early-access' },
    secondaryCTA: null
  }
];

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
  const initialIndex = productsData.findIndex(p => p.id === productQuery);
  const [activeProduct, setActiveProduct] = useState(initialIndex !== -1 ? initialIndex : 0);

  // Sync state when URL parameter changes
  useEffect(() => {
    if (productQuery) {
      const idx = productsData.findIndex(p => p.id === productQuery);
      if (idx !== -1 && idx !== activeProduct) {
        setActiveProduct(idx);
      }
    } else if (activeProduct !== 0) {
      setActiveProduct(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productQuery]);

  const handleTabClick = (idx) => {
    trackProductInterest(productsData[idx].name, 'view_tab');
    setActiveProduct(idx);
    
    // Preserve existing search params and just update the 'product' param
    const newParams = new URLSearchParams(searchParams);
    newParams.set('product', productsData[idx].id);
    navigate({ search: newParams.toString() }, { replace: true });
  };

  const currentProduct = productsData[activeProduct];

  return (
    <main className="products-page">
      <SEO
        title="Our Products Ecosystem | Vayunex Solution"
        description="Discover Vayunex's enterprise-grade SaaS products: Jwelnex ERP, PayNex, SocialNex, SchoolDost, and InventoryNex."
        keywords="enterprise saas, software products, jwelnex erp, paynex, socialnex, schooldost, inventorynex"
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
            <span className="section-eyebrow">Product Ecosystem</span>
            <h1 className="hero-heading">
              Software Built for <span className="gradient-text">Scale</span>
            </h1>
            <p className="hero-subheading">
              We design, build, and operate a suite of enterprise-grade SaaS platforms. Each product is purpose-built to solve complex industry-specific challenges using modern architectures.
            </p>
          </div>
        </div>
      </section>

      {/* ========== PRODUCT SHOWCASE (TABS) ========== */}
      <section className="products-showcase">
        <div className="container">
          <div className="ps-layout">
            {/* Sidebar Tabs */}
            <div className="ps-sidebar">
              {productsData.map((prod, idx) => (
                <button
                  key={prod.id}
                  className={`ps-tab ${activeProduct === idx ? 'active' : ''}`}
                  onClick={() => handleTabClick(idx)}
                  style={{ '--tab-color': prod.color }}
                >
                  <div className="ps-tab__icon">
                    {prod.logo ? (
                      <img src={prod.logo} alt="" className="ps-tab__logo" />
                    ) : (
                      prod.icon
                    )}
                  </div>
                  <div className="ps-tab__text">
                    <span className="ps-tab__name">{prod.name}</span>
                    <span className="ps-tab__status">{prod.status}</span>
                  </div>
                  {activeProduct === idx && <div className="ps-tab__indicator" />}
                </button>
              ))}
            </div>

            {/* Main Display Area */}
            <div className="ps-display">
              <div className="ps-card" style={{ '--card-accent': currentProduct.color }}>
                <div className="ps-card__header">
                  <div className="ps-card__title-row">
                    <div className="ps-card__icon-lg">
                      {currentProduct.logo ? (
                        <img src={currentProduct.logo} alt="" className="ps-card__logo-lg" />
                      ) : (
                        currentProduct.icon
                      )}
                    </div>
                    <div>
                      <h2 className="ps-card__title">{currentProduct.name}</h2>
                      <p className="ps-card__tagline">{currentProduct.tagline}</p>
                    </div>
                  </div>
                  <span className={`ps-badge ps-badge--${currentProduct.statusType}`}>
                    {currentProduct.statusType === 'live' && <span className="live-dot" />}
                    {currentProduct.status}
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
                    {currentProduct.primaryCTA.url ? (
                      <Link to={currentProduct.primaryCTA.url} className="ps-btn-primary">
                        {currentProduct.primaryCTA.label}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    ) : (
                      <button 
                        onClick={() => handleOpenModal(currentProduct.primaryCTA.action, currentProduct.name, currentProduct.id)} 
                        className="ps-btn-primary"
                      >
                        {currentProduct.primaryCTA.label}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </button>
                    )}
                    
                    {currentProduct.secondaryCTA && (
                      currentProduct.secondaryCTA.action ? (
                        <button 
                          onClick={() => handleOpenModal(currentProduct.secondaryCTA.action, currentProduct.name, currentProduct.id)} 
                          className="ps-btn-secondary"
                        >
                          {currentProduct.secondaryCTA.label}
                        </button>
                      ) : currentProduct.secondaryCTA.external ? (
                        <a href={currentProduct.secondaryCTA.url} target="_blank" rel="noopener noreferrer" className="ps-btn-secondary">
                          {currentProduct.secondaryCTA.label}
                        </a>
                      ) : (
                        <Link to={currentProduct.secondaryCTA.url} className="ps-btn-secondary">
                          {currentProduct.secondaryCTA.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>

                <div className="ps-card__image-wrapper">
                  <img src={currentProduct.heroImage} alt={`${currentProduct.name} Dashboard`} className="ps-card__image" />
                  <div className="ps-card__image-glow" />
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
              <h2>Built on Modern Architecture</h2>
              <p>Every product in our ecosystem is engineered using the same robust enterprise architecture that we deploy for our clients.</p>
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
              <p>Operating our own SaaS platforms makes us better engineers for our clients. We face the same challenges of scale, security, and user retention that you do.</p>
              <ul className="wb-list">
                <li><span className="wb-check">✓</span> We use our own platforms to dogfood new architectures.</li>
                <li><span className="wb-check">✓</span> We understand the product lifecycle from day 1 to year 5.</li>
                <li><span className="wb-check">✓</span> Our client services benefit from battle-tested codebases.</li>
              </ul>
            </div>
            <div className="wb-visual">
              {/* Abstract representation of building */}
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
