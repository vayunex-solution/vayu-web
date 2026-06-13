import React, { useRef, useState, useEffect } from 'react';
import './TrustSection.css';

const PILLARS = [
  {
    id: 'product-led',
    title: 'Product-Led Engineering',
    description: 'We actively build and maintain our own software ecosystem.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    accent: '#6366F1',
  },
  {
    id: 'operational-exp',
    title: 'Operational Experience',
    description: 'We solve real-world business problems inside our own products first.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    accent: '#3B82F6',
  },
  {
    id: 'long-term',
    title: 'Long-Term Thinking',
    description: 'Every system is designed for sustainability, maintainability and scale.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    accent: '#14B8A6',
  },
  {
    id: 'reliability',
    title: 'Enterprise Reliability',
    description: 'Engineering standards remain consistent across internal products and client solutions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    accent: '#8B5CF6',
  },
];

// Individual pillar — hooks called at top level (not inside map)
const TrustPillar = ({ pillar, index }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`trust-pillar fade-up ${isVisible ? 'is-visible' : ''}`}
      style={{ '--pillar-accent': pillar.accent, '--delay': `${index * 0.07}s` }}
    >
      <div className="trust-pillar__icon" aria-hidden="true">
        {pillar.icon}
      </div>
      <div className="trust-pillar__content">
        <h3 className="trust-pillar__title">{pillar.title}</h3>
        <p className="trust-pillar__desc">{pillar.description}</p>
      </div>
    </div>
  );
};

const TrustSection = () => {
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="trust-section" aria-label="Why businesses choose Vayunex">
      <div className="container">
        <div
          ref={headerRef}
          className={`trust-section__header fade-up ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section-eyebrow">Why Vayunex</span>
          <h2 className="section-heading">
            Why Businesses Choose Us
          </h2>
          <p className="section-subheading">
            We are not an outsourcing vendor. We are an engineering team that has shipped real products, handles real scale, and takes real ownership.
          </p>
        </div>

        <div className="trust-grid">
          {PILLARS.map((pillar, i) => (
            <TrustPillar key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
