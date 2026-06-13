import React, { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Existing Components (preserved)
import Hyperspeed from '../components/Hyperspeed/Hyperspeed';
import BlurText from '../components/common/BlurText';
import SEO from '../components/common/SEO';

// New Premium Sections
import DualEngine from '../components/common/DualEngine';
import ProductEcosystem from '../components/common/ProductEcosystem';
import CoreServices from '../components/common/CoreServices';
import TrustSection from '../components/common/TrustSection';
import IndustryNetwork from '../components/common/IndustryNetwork';
import CompanyMission from '../components/common/CompanyMission';
import FinalCTA from '../components/common/FinalCTA';

// Analytics
import { trackCTA } from '../utils/analytics';

// Styles
import './HomePage.css';

import paynexLogo from '../assets/images/paynex-logo.webp';
import socialnexLogo from '../assets/images/socialnex-logo.webp';
import schooldostLogo from '../assets/images/schooldost-logo.webp';

// ---- Hero Visual: Premium Floating Dashboard Panels ----
const HeroVisual = () => (
  <div className="hero-visual" aria-hidden="true">
    {/* Main product preview card */}
    <div className="hv-card hv-card--main">
      <div className="hv-card-header">
        <div className="hv-dots">
          <span className="hv-dot hv-dot--red" />
          <span className="hv-dot hv-dot--yellow" />
          <span className="hv-dot hv-dot--green" />
        </div>
        <span className="hv-card-label">Vayunex Suite — Operations Console</span>
      </div>
      <div className="hv-card-body">
        <div className="hv-console-terminal">
          <div className="hv-console-line"><span className="hv-console-tag hv-console-tag--system">[system]</span> Core Engine v5.0 initialized</div>
          <div className="hv-console-line"><span className="hv-console-tag hv-console-tag--paynex">[paynex]</span> Gateway ONLINE • Ping: 18ms</div>
          <div className="hv-console-line"><span className="hv-console-tag hv-console-tag--jwelnex">[jwelnex]</span> ERP sync complete: 142 items</div>
          <div className="hv-console-line"><span className="hv-console-tag hv-console-tag--social">[social]</span> Schedule active • 8 posts queued</div>
          <div className="hv-console-line"><span className="hv-console-tag hv-console-tag--school">[school]</span> DB replica synced successfully</div>
        </div>
        <div className="hv-console-divider" />
        <div className="hv-status-row">
          <span className="hv-status-item hv-status-item--live">
            <span className="hv-live-dot" />
            All Systems Operational
          </span>
          <span className="hv-status-item">Avg Ping: 22ms</span>
        </div>
      </div>
    </div>

    {/* Floating mini card: PayNex */}
    <div className="hv-card hv-card--float hv-card--left">
      <div className="hv-float-logo-wrapper">
        <img src={paynexLogo} alt="PayNex Logo" className="hv-float-logo" />
      </div>
      <div className="hv-float-text">
        <span className="hv-float-name">PayNex</span>
        <span className="hv-float-sub">Public Beta</span>
      </div>
    </div>

    {/* Floating mini card: SocialNex */}
    <div className="hv-card hv-card--float hv-card--right">
      <div className="hv-float-logo-wrapper">
        <img src={socialnexLogo} alt="SocialNex Logo" className="hv-float-logo" />
      </div>
      <div className="hv-float-text">
        <span className="hv-float-name">SocialNex</span>
        <span className="hv-float-sub">Coming Soon</span>
      </div>
    </div>

    {/* Floating mini card: SchoolDost */}
    <div className="hv-card hv-card--float hv-card--right-bottom">
      <div className="hv-float-logo-wrapper">
        <img src={schooldostLogo} alt="SchoolDost Logo" className="hv-float-logo" />
      </div>
      <div className="hv-float-text">
        <span className="hv-float-name">SchoolDost</span>
        <span className="hv-float-sub">Coming Soon</span>
      </div>
    </div>
  </div>
);

// ---- Main HomePage ----
const HomePage = () => {
  // Set default theme to light on first load
  useEffect(() => {
    const saved = localStorage.getItem('vayunex-theme');
    if (!saved) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const hyperspeedOptions = useMemo(() => ({
    onSpeedUp: () => {},
    onSlowDown: () => {},
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [12, 80],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080c1f,
      islandColor: 0x0a0f26,
      background: 0x050505,
      shoulderLines: 0x1e1e4f,
      brokenLines: 0x1e1e4f,
      leftCars: [0x6366F1, 0x3B82F6, 0x8B5CF6],
      rightCars: [0x3B82F6, 0x6366F1, 0x14B8A6],
      sticks: 0x6366F1,
    },
  }), []);

  return (
    <main className="home-page">
      <SEO
        title="Vayunex Solution — Enterprise SaaS & Custom Software Development"
        description="Vayunex Solution builds enterprise-grade SaaS products, AI-powered systems, and custom software for modern businesses. Products include Jwelnex ERP, PayNex, SocialNex, SchoolDost, and InventoryNex."
        keywords="enterprise software development, SaaS development India, custom software company, ERP software, AI development, Jwelnex ERP, PayNex, Vayunex Solution, business automation, web application development"
      />

      {/* ========== SECTION 1: HERO ========== */}
      <section className="hero-section" aria-label="Hero">
        {/* Hyperspeed background — dark mode only */}
        <div className="hero-canvas-container" aria-hidden="true">
          <Hyperspeed effectOptions={hyperspeedOptions} />
        </div>

        {/* Overlay */}
        <div className="hero-overlay" aria-hidden="true" />

        {/* Hero Content */}
        <div className="hero-inner">
          <div className="hero-content">
            {/* Badge pill */}
            <div className="hero-pill">
              <span className="hero-pill-badge">
                <span className="hero-pill-dot" aria-hidden="true" />
                Product-Led Engineering
              </span>
              <span>We build technology for ourselves, and for select enterprise partners.</span>
            </div>

            {/* H1 */}
            <h1 className="hero-title">
              <BlurText
                text="Building High-Performance Software Ecosystems"
                delay={200}
                animateBy="words"
                direction="top"
              />
            </h1>

            {/* Sub */}
            <div className="hero-subtitle">
              <BlurText
                text="Vayunex is an enterprise software company. We actively build and scale our own suite of SaaS products, and apply those same engineering standards to deliver exceptional technology for our partners."
                delay={900}
                animateBy="words"
                direction="bottom"
              />
            </div>

            {/* CTAs */}
            <div className="hero-cta-group">
              <Link 
                to="/products" 
                className="hero-cta-primary" 
                id="hero-cta-products"
                onClick={() => trackCTA('Explore Products', 'Homepage Hero', '/products')}
              >
                Explore Products
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link 
                to="/contact" 
                className="hero-cta-secondary" 
                id="hero-cta-contact"
                onClick={() => trackCTA('Talk to Engineering', 'Homepage Hero', '/contact')}
              >
                Talk to Engineering
              </Link>
            </div>

            {/* Product count indicator */}
            <div className="hero-proof">
              <div className="hero-proof-stack">
                {['J', 'P', 'S', 'S', 'I'].map((letter, i) => (
                  <span key={i} className="hero-proof-avatar" style={{ zIndex: 5 - i }}>
                    {letter}
                  </span>
                ))}
              </div>
              <span className="hero-proof-text">
                5 products in active development
              </span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hero-visual-wrapper" aria-hidden="true">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: THE DUAL ENGINE ========== */}
      <DualEngine />

      {/* ========== SECTION 3: PRODUCT ECOSYSTEM ========== */}
      <ProductEcosystem />

      {/* ========== SECTION 3: CORE SERVICES ========== */}
      <CoreServices />

      {/* ========== SECTION 4: TRUST & PROOF ========== */}
      <TrustSection />

      {/* ========== SECTION 5: INDUSTRY NETWORK ========== */}
      <IndustryNetwork />

      {/* ========== SECTION 6: COMPANY MISSION ========== */}
      <CompanyMission />

      {/* ========== SECTION 6: FINAL CTA ========== */}
      <FinalCTA />
    </main>
  );
};

export default HomePage;
