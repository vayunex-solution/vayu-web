import React, { useEffect } from 'react';
import SEO from '../components/common/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
import DualEngine from '../components/common/DualEngine';
import FinalCTA from '../components/common/FinalCTA';
import '../styles/InnerPage.css';
import './AboutPage.css';

import yashAvatar from '../assets/images/yash.webp';
import ronitAvatar from '../assets/images/ronit.webp';

const HeroSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return (
    <section className="about-hero" ref={ref}>
      <div className="about-hero__bg">
        <div className="about-hero__orb about-hero__orb--1" />
        <div className="about-hero__orb about-hero__orb--2" />
      </div>
      <div className={`container about-hero__content fade-up ${isVisible ? 'is-visible' : ''}`}>
        <span className="section-eyebrow">About Vayunex</span>
        <h1 className="hero-heading">Building Software That Businesses <span className="gradient-text">Depend On</span></h1>
        <p className="hero-subheading">Vayunex develops software products, business platforms and enterprise systems designed for long-term growth.</p>
      </div>
    </section>
  );
};

const WhoWeAreSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  return (
    <section className="who-we-are" ref={ref}>
      <div className={`container fade-up ${isVisible ? 'is-visible' : ''}`}>
        <div className="who-we-are__grid">
          <div className="who-we-are__text">
            <span className="section-eyebrow">Who We Are</span>
            <h2 className="section-heading">Product Builders & Software Engineers</h2>
            <p className="section-desc">We are not a traditional IT agency. We are a team of product builders, systems architects, and problem solvers. We actively build, scale, and maintain our own ecosystem of SaaS platforms, and we apply that exact same product-led engineering philosophy to the systems we build for our enterprise partners.</p>
          </div>
          <div className="who-we-are__visual">
            <div className="wwa-card">
              <div className="wwa-header">
                <div className="wwa-dot" style={{background: '#F43F5E'}}/>
                <div className="wwa-dot" style={{background: '#F59E0B'}}/>
                <div className="wwa-dot" style={{background: '#10B981'}}/>
              </div>
              <div className="wwa-body">
                <div className="wwa-code-line" />
                <div className="wwa-code-line short" />
                <div className="wwa-code-line indent" />
                <div className="wwa-code-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadershipSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const leaders = [
    {
      name: "Yash Kumar",
      title: "Founder & Product Lead",
      avatar: yashAvatar,
      focus: ["Product Strategy", "Ecosystem Architecture", "Market Positioning"],
      philosophy: "Great software isn't just about writing code; it's about solving real operational problems with systems that scale gracefully over time."
    },
    {
      name: "Rajesh Kumar",
      title: "Technology & Systems Lead",
      avatar: ronitAvatar,
      focus: ["Core Infrastructure", "Systems Architecture", "Engineering Standards"],
      philosophy: "Reliability is the ultimate feature. We engineer platforms to be fault-tolerant, secure, and maintainable from day one to year five."
    }
  ];

  return (
    <section className="leadership-section" ref={ref}>
      <div className={`container fade-up ${isVisible ? 'is-visible' : ''}`}>
        <div className="leadership__header">
          <span className="section-eyebrow">Leadership</span>
          <h2 className="section-heading">Engineering Leadership</h2>
        </div>
        <div className="leadership__grid">
          {leaders.map((leader, i) => (
            <div key={i} className="leader-card">
              <div className="leader-card__header">
                <div className="leader-card__avatar-wrap">
                  <img src={leader.avatar} alt={leader.name} className="leader-card__avatar" />
                  <div className="leader-card__avatar-glow" />
                </div>
                <div className="leader-card__title-area">
                  <h3 className="leader-card__name">{leader.name}</h3>
                  <span className="leader-card__title">{leader.title}</span>
                </div>
              </div>
              <div className="leader-card__body">
                <div className="leader-card__focus">
                  <span className="leader-card__label">Focus Areas</span>
                  <ul className="leader-card__focus-list">
                    {leader.focus.map((f, idx) => (
                      <li key={idx}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="leader-card__philosophy">
                  <span className="leader-card__label">Philosophy</span>
                  <p>"{leader.philosophy}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OurJourneySection = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const milestones = [
    { year: "The Spark", title: "Solving Core Problems", desc: "Started by solving specific operational bottlenecks for businesses, realizing that off-the-shelf software wasn't enough." },
    { year: "The Shift", title: "Product-Led Thinking", desc: "Transitioned from bespoke scripts to architecting scalable, multi-tenant software platforms. Jwelnex was born out of this shift." },
    { year: "The Ecosystem", title: "Building The Suite", desc: "Leveraging robust core infrastructure to launch specialized platforms like PayNex, proving our engineering standards." },
    { year: "The Future", title: "Enterprise Engineering", desc: "Scaling our proprietary ecosystem while opening our capabilities to select enterprise partners who demand product-tier software." }
  ];

  return (
    <section className="journey-section" ref={ref}>
      <div className={`container fade-up ${isVisible ? 'is-visible' : ''}`}>
        <div className="journey__header">
          <span className="section-eyebrow">Our Evolution</span>
          <h2 className="section-heading">From Solutions to Ecosystems</h2>
        </div>
        <div className="journey__timeline">
          {milestones.map((m, i) => (
            <div key={i} className="journey-node">
              <div className="journey-node__marker">
                <div className="journey-node__dot" />
                {i !== milestones.length - 1 && <div className="journey-node__line" />}
              </div>
              <div className="journey-node__content">
                <span className="journey-node__year">{m.year}</span>
                <h3 className="journey-node__title">{m.title}</h3>
                <p className="journey-node__desc">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EcosystemStrategicOverview = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  return (
    <section className="eco-strategic-section" ref={ref}>
      <div className={`container fade-up ${isVisible ? 'is-visible' : ''}`}>
        <div className="eco-strategic__header">
          <span className="section-eyebrow">Shared Infrastructure</span>
          <h2 className="section-heading">One Core. Multiple Platforms.</h2>
          <p className="section-desc">Our products—Jwelnex, PayNex, SocialNex, SchoolDost, and InventoryNex—are not isolated silos. They are unified by a shared engineering philosophy and a robust core architecture.</p>
        </div>
        <div className="eco-strategic__grid">
          <div className="eco-stat-card">
            <div className="eco-stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <h3>Shared Architecture</h3>
            <p>A unified cloud-native backend powering all products, ensuring scalability and 99.99% uptime across the board.</p>
          </div>
          <div className="eco-stat-card">
            <div className="eco-stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Engineering Standards</h3>
            <p>Strict CI/CD pipelines, automated testing, and zero-trust security applied universally to every product we ship.</p>
          </div>
          <div className="eco-stat-card">
            <div className="eco-stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <h3>Product Vision</h3>
            <p>Every platform is built with a long-term roadmap. We don't build MVPs to flip; we build infrastructure to last.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyWeBuildSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  return (
    <section className="why-we-build" ref={ref}>
      <div className={`container fade-up ${isVisible ? 'is-visible' : ''}`}>
        <div className="why-build__box">
          <div className="why-build__content">
            <span className="section-eyebrow">Dogfooding</span>
            <h2 className="section-heading">Why We Build Products</h2>
            <p className="section-desc">Operating our own SaaS platforms makes us fundamentally better engineers for our clients. We face the exact same challenges of database scaling, cloud security, user retention, and feature deployment that you do.</p>
            <p className="section-desc">When you partner with Vayunex, you aren't hiring an agency that just writes code and leaves. You are partnering with a product team that understands the full software lifecycle from Day 1 to Year 5.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const EngineeringPrinciples = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const principles = [
    { title: "Product-First Thinking", desc: "Every feature must tie back to a tangible business outcome. We don't build tech for tech's sake." },
    { title: "Long-Term Architecture", desc: "We design data models and infrastructure that can handle your 5-year growth trajectory today." },
    { title: "Reliability Over Hype", desc: "We prioritize stable, battle-tested technologies over the newest experimental frameworks." },
    { title: "Continuous Improvement", desc: "Software is never 'done'. We build systems with observability to iterate and improve constantly." }
  ];

  return (
    <section className="principles-section" ref={ref}>
      <div className={`container fade-up ${isVisible ? 'is-visible' : ''}`}>
        <div className="principles__header">
          <span className="section-eyebrow">Our Standards</span>
          <h2 className="section-heading">Engineering Principles</h2>
        </div>
        <div className="principles__grid">
          {principles.map((p, i) => (
            <div key={i} className="principle-card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MissionVision = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  return (
    <section className="mission-vision-section" ref={ref}>
      <div className={`container fade-up ${isVisible ? 'is-visible' : ''}`}>
        <div className="mv-grid">
          <div className="mv-card">
            <span className="mv-label">Our Mission</span>
            <h3>Engineer Robust Ecosystems</h3>
            <p>Our mission is to architect and deploy highly scalable software platforms that automate complex business operations, empowering organizations to operate with unprecedented efficiency.</p>
          </div>
          <div className="mv-card">
            <span className="mv-label">Our Vision</span>
            <h3>The Global Engineering Standard</h3>
            <p>To be recognized globally not just for the products we build, but for the rigorous engineering standards, reliability, and architectural excellence we bring to the enterprise software industry.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const saved = localStorage.getItem('vayunex-theme');
    if (!saved) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  return (
    <main className="about-page">
      <SEO 
        title="About Vayunex Solution | Product-Led Engineering"
        description="Vayunex is an enterprise software company. We build our own suite of SaaS products and provide elite engineering partnerships."
        keywords="Vayunex team, enterprise software company, saas builders, engineering leadership, product led growth"
      />

      <HeroSection />
      <WhoWeAreSection />
      <LeadershipSection />
      <OurJourneySection />
      <DualEngine />
      <EcosystemStrategicOverview />
      <WhyWeBuildSection />
      <EngineeringPrinciples />
      <MissionVision />
      <FinalCTA />
    </main>
  );
};

export default AboutPage;