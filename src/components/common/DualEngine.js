import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './DualEngine.css';

const DualEngine = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section className="dual-engine" aria-label="Our Dual Engine Approach">
      <div className="container">
        <div 
          ref={ref}
          className={`dual-engine__content fade-up ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="dual-engine__header">
            <span className="section-eyebrow">The Vayunex Model</span>
            <h2 className="section-heading">
              Two Engines, <span className="gradient-text">One Mission</span>
            </h2>
            <p className="section-subheading">
              We are not just an agency, and we are not just a product company. We operate a dual-engine model that brings the best of both worlds to modern enterprises.
            </p>
          </div>

          <div className="dual-engine__grid">
            {/* Engine 1: Product Led */}
            <div className="engine-card engine-card--products">
              <div className="engine-card__bg" />
              <div className="engine-card__inner">
                <div className="engine-card__icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <h3 className="engine-card__title">SaaS Products</h3>
                <p className="engine-card__desc">
                  We build, scale, and maintain our own suite of enterprise SaaS platforms. This means we have real skin in the game, operating high-traffic products like Jwelnex ERP and PayNex in production.
                </p>
                <ul className="engine-card__list">
                  <li><span className="check">✓</span> Real-world production experience</li>
                  <li><span className="check">✓</span> Battle-tested architectures</li>
                  <li><span className="check">✓</span> Constant innovation loop</li>
                </ul>
              </div>
            </div>

            {/* Connection Element */}
            <div className="engine-connector">
              <div className="engine-connector__line" />
              <div className="engine-connector__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                </svg>
              </div>
            </div>

            {/* Engine 2: SaaS Development Services */}
            <div className="engine-card engine-card--services">
              <div className="engine-card__bg" />
              <div className="engine-card__inner">
                <div className="engine-card__icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <h3 className="engine-card__title">Development Services</h3>
                <p className="engine-card__desc">
                  We leverage the exact same enterprise architectures, playbooks, and engineering teams that build our products to build high-performance custom SaaS solutions for global clients.
                </p>
                <ul className="engine-card__list">
                  <li><span className="check">✓</span> Product-minded engineering teams</li>
                  <li><span className="check">✓</span> Faster time-to-market</li>
                  <li><span className="check">✓</span> Enterprise-grade scalability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualEngine;
