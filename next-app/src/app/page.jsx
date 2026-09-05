'use client';

import React, { useMemo, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamic import for Hyperspeed 3D Canvas
const Hyperspeed = dynamic(() => import('../components/Hyperspeed/Hyperspeed'), {
  ssr: false,
  loading: () => <div className="hyperspeed-canvas-placeholder" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15), transparent 70%)' }} />
});

import BlurText from '../components/common/BlurText';
import SEO from '../components/common/SEO';

// Core Sections
import DualEngine from '../components/common/DualEngine';
import ProductEcosystem from '../components/common/ProductEcosystem';
import CoreServices from '../components/common/CoreServices';
import TrustSection from '../components/common/TrustSection';
import IndustryNetwork from '../components/common/IndustryNetwork';
import CompanyMission from '../components/common/CompanyMission';
import FinalCTA from '../components/common/FinalCTA';

import { trackCTA } from '../utils/analytics';
import '../styles/HomePage.css';

// ---- Hero Visual: Floating Dashboard Panels ----
const HeroVisual = () => (
  <div className="hero-visual" aria-hidden="true">
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
        <img src="/images/paynex-logo.webp" alt="PayNex Logo" className="hv-float-logo" />
      </div>
      <div className="hv-float-text">
        <span className="hv-float-name">PayNex</span>
        <span className="hv-float-sub">Public Beta</span>
      </div>
    </div>

    {/* Floating mini card: SocialNex */}
    <div className="hv-card hv-card--float hv-card--right">
      <div className="hv-float-logo-wrapper">
        <img src="/images/socialnex-logo.webp" alt="SocialNex Logo" className="hv-float-logo" />
      </div>
      <div className="hv-float-text">
        <span className="hv-float-name">SocialNex</span>
        <span className="hv-float-sub">Coming Soon</span>
      </div>
    </div>

    {/* Floating mini card: SchoolDost */}
    <div className="hv-card hv-card--float hv-card--right-bottom">
      <div className="hv-float-logo-wrapper">
        <img src="/images/schooldost-logo.webp" alt="SchoolDost Logo" className="hv-float-logo" />
      </div>
      <div className="hv-float-text">
        <span className="hv-float-name">SchoolDost</span>
        <span className="hv-float-sub">Coming Soon</span>
      </div>
    </div>
  </div>
);

export default function HomePage() {
  useEffect(() => {
    const saved = localStorage.getItem('vayunex-theme');
    if (!saved) {
      document.documentElement.setAttribute('data-theme', 'dark');
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
      sticks: 0x3B82F6,
    }
  }), []);

  const homeStructuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vayunex Solution",
    "url": "https://www.vayunexsolution.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.vayunexsolution.com/blog?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }), []);

  return (
    <div className="home-page">
      <SEO
        title="Vayunex Solution | Enterprise AI, Cloud & Software Engineering"
        description="Vayunex Solution delivers intelligent software systems, SaaS products (Jwelnex, PayNex, SocialNex, SchoolDost), and enterprise engineering."
        keywords="Vayunex Solution, web development, AI software, SaaS, Jwelnex, PayNex, SocialNex, SchoolDost, Mohali, Chandigarh"
        canonicalUrl="https://www.vayunexsolution.com"
        structuredData={homeStructuredData}
      />

      {/* Hero Section */}
      <header className="hero">
        <div className="hero__hyperspeed" aria-hidden="true">
          <Hyperspeed effectOptions={hyperspeedOptions} />
        </div>
        <div className="hero__overlay" aria-hidden="true" />

        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              <span>Next-Gen Enterprise Engineering &amp; SaaS Suite</span>
            </div>

            <h1 className="hero__title">
              <BlurText
                text="Engineering Intelligent"
                delay={40}
                animateBy="words"
                direction="top"
                className="hero__title-line hero__title-line--1"
              />
              <span className="hero__title-line hero__title-line--2">
                Digital Systems
              </span>
            </h1>

            <p className="hero__subtitle">
              We design and deploy high-performance SaaS platforms, mission-critical cloud infrastructure, and custom AI solutions that scale with global enterprise demands.
            </p>

            <div className="hero__actions">
              <Link
                href="/contact"
                className="hero__btn hero__btn--primary"
                onClick={() => trackCTA('hero_consultation', 'hero')}
              >
                Schedule Architecture Review
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="hero__btn hero__btn--secondary"
                onClick={() => trackCTA('hero_products', 'hero')}
              >
                Explore Product Suite
              </Link>
            </div>

            {/* Micro proof points */}
            <div className="hero__proof">
              <div className="hero__proof-item">
                <span className="hero__proof-num">99.98%</span>
                <span className="hero__proof-label">Uptime SLA</span>
              </div>
              <div className="hero__proof-divider" />
              <div className="hero__proof-item">
                <span className="hero__proof-num">5+</span>
                <span className="hero__proof-label">Proprietary Products</span>
              </div>
              <div className="hero__proof-divider" />
              <div className="hero__proof-item">
                <span className="hero__proof-num">24/7</span>
                <span className="hero__proof-label">Mission Control</span>
              </div>
            </div>
          </div>

          <HeroVisual />
        </div>
      </header>

      {/* Dual Engine: Products + Custom Solutions */}
      <DualEngine />

      {/* Product Ecosystem */}
      <ProductEcosystem />

      {/* Core Engineering Services */}
      <div id="outcomes">
        <CoreServices />
      </div>

      {/* Trust & Architecture Standards */}
      <TrustSection />

      {/* Industry Network */}
      <IndustryNetwork />

      {/* Company Mission & Leadership */}
      <CompanyMission />

      {/* Final Call to Action */}
      <FinalCTA />
    </div>
  );
}
