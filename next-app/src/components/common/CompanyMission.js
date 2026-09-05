import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './CompanyMission.css';

const STATS = [
  { value: '5+', label: 'Products in Development' },
  { value: '1', label: 'Live Enterprise Product' },
  { value: '100%', label: 'In-House Engineering' },
  { value: '2+', label: 'Years of Product Building' },
];

const CompanyMission = () => {
  const [ref, isVisible] = useScrollAnimation(0.15);
  const [statsRef, statsVisible] = useScrollAnimation(0.2);

  return (
    <section className="company-mission" aria-label="About Vayunex Solution">
      <div className="container">
        <div
          ref={ref}
          className={`mission-content fade-up ${isVisible ? 'is-visible' : ''}`}
        >
          {/* Left: Text */}
          <div className="mission-text">
            <span className="section-eyebrow">Our Story</span>
            <h2 className="section-heading mission-heading">
              Engineering the Future<br />
              <span className="gradient-text">One Product at a Time</span>
            </h2>
            <div className="mission-body">
              <p>
                Vayunex Solution was built on a single conviction — that great software is created by teams who care about the product as much as the paycheck. We started not as a services shop, but as a product company building tools for real industries.
              </p>
              <p>
                Today, we run a dual model: an active product portfolio covering jewellery ERP, payments, social media management, school management, and inventory — alongside a focused engineering services arm that helps organizations modernize, scale, and innovate.
              </p>
              <p>
                Our engineering team does not treat client work as a contract. We treat it as a long-term partnership — one where the quality of the outcome is the only acceptable metric.
              </p>
            </div>
            <div className="mission-cta-row">
              <Link to="/about" className="mission-btn-primary" id="mission-about-link">
                Our Story
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/products" className="btn-ghost" id="mission-products-link">
                See Our Products
              </Link>
            </div>
          </div>

          {/* Right: Stats */}
          <div
            ref={statsRef}
            className={`mission-stats fade-up ${statsVisible ? 'is-visible stagger-2' : ''}`}
          >
            <div className="stats-card">
              <div className="stats-card__inner">
                {STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="stat-item"
                    style={{ '--delay': `${i * 0.08}s` }}
                  >
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="stats-card__decoration" aria-hidden="true">
                <div className="deco-ring deco-ring--1" />
                <div className="deco-ring deco-ring--2" />
                <div className="deco-dot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyMission;
