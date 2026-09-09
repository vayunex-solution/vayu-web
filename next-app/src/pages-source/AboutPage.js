'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import SEO from '../components/common/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
import DualEngine from '../components/common/DualEngine';
import FinalCTA from '../components/common/FinalCTA';
import Breadcrumbs from '../components/common/Breadcrumbs';
import './AboutPage.css';

import yashAvatar from '../assets/images/yash.webp';
import ronitAvatar from '../assets/images/ronit.webp';

/* ── HERO ─────────────────────────────────────────────────────── */
const HeroSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return (
    <section className="about-hero" ref={ref}>
      <div className="about-hero__bg">
        <div className="about-hero__orb about-hero__orb--1" />
        <div className="about-hero__orb about-hero__orb--2" />
      </div>
      <div className={`container about-hero__content fade-up ${isVisible ? 'is-visible' : ''}`}>
        <Breadcrumbs customCrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about/' },
        ]} />
        <span className="section-eyebrow" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
          About Vayunex
        </span>
        <h1 className="hero-heading">Building Software That Businesses <span className="gradient-text">Depend On</span></h1>
        <p className="hero-subheading">Vayunex develops software products, business platforms and enterprise systems designed for long-term growth.</p>
      </div>
    </section>
  );
};

/* ── WHO WE ARE ───────────────────────────────────────────────── */
const WhoWeAreSection = () => {
  return (
    <section className="who-we-are">
      <div className="container">
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

/* ── LEADERSHIP ───────────────────────────────────────────────── */
const LeadershipSection = () => {
  const engineeringLeaders = [
    {
      name: 'Ved Prakash',
      title: 'Project Head',
      slug: 'ved-prakash',
      image: '/images/people/ved-prakash.jpg',
      imageAlt: 'Ved Prakash — Project Head at Vayunex Solution',
      experience: '20+ Years Experience',
      education: 'MCA — Punjab University',
      bio: 'Over two decades of enterprise engineering experience directing ERP implementations, CRM process automation, and full-stack software delivery across manufacturing, automobile, and telecom sectors.',
      focus: ['ERP Implementation', 'CRM Automation', 'Project Leadership', 'Full-Stack Delivery'],
      hasProfile: true,
    },
    {
      name: 'Sandeep Kumar',
      title: 'Technical Head',
      slug: 'sandeep-kumar',
      image: '/images/people/sandeep-kumar.jpg',
      imageAlt: 'Sandeep Kumar — Technical Head at Vayunex Solution',
      experience: '17+ Years Experience',
      education: 'MCA — Punjab University',
      bio: 'More than 17 years architecting complex application systems, defining systems engineering standards, and ensuring resilient software quality and performance.',
      focus: ['Technical Architecture', 'Systems Engineering', 'Engineering Standards', 'Backend Systems'],
      hasProfile: true,
    },
  ];

  const companyLeaders = [
    {
      name: 'Yash Kumar',
      title: 'Founder & Product Lead',
      avatar: yashAvatar,
      focus: ['Product Strategy', 'Ecosystem Architecture', 'Market Positioning'],
      philosophy: "Great software isn't just about writing code; it's about solving real operational problems with systems that scale gracefully over time.",
    },
    {
      name: 'Rajesh Kumar',
      title: 'Technology & Systems Lead',
      avatar: ronitAvatar,
      focus: ['Core Infrastructure', 'Systems Architecture', 'Engineering Standards'],
      philosophy: "Reliability is the ultimate feature. We engineer platforms to be fault-tolerant, secure, and maintainable from day one to year five.",
    },
  ];

  return (
    <section className="leadership-section">
      <div className="container">

        {/* Section Header: Executive Leadership */}
        <div className="leadership__header">
          <span className="section-eyebrow">COMPANY LEADERSHIP</span>
          <h2 className="section-heading">Founders & Leadership</h2>
          <p className="section-desc" style={{ maxWidth: '620px', margin: '0.75rem auto 0' }}>
            Vayunex is founded and directed by product-led software builders who guide company vision and core systems architecture.
          </p>
        </div>

        {/* Executive Leaders (Yash & Rajesh) */}
        <div className="leadership__grid" style={{ marginBottom: '4.5rem' }}>
          {companyLeaders.map((leader, i) => (
            <div key={i} className="leader-card">
              <div className="leader-card__header">
                <div className="leader-card__avatar-wrap">
                  <img
                    src={leader.avatar?.src || leader.avatar || (leader.name === 'Yash Kumar' ? '/images/yash.webp' : '/images/ronit.webp')}
                    alt={leader.name}
                    className="leader-card__avatar"
                  />
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
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
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

        {/* Divider & Header: Engineering Practice Leadership */}
        <div className="leadership__divider">
          <span className="section-eyebrow">
            ENGINEERING & DELIVERY HEADS
          </span>
          <h3 className="section-heading" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', marginTop: '0.75rem' }}>
            Decades of Engineering Experience
          </h3>
          <p className="section-desc" style={{ maxWidth: '620px', margin: '0.5rem auto 0' }}>
            Our project and technical heads bring decades of software delivery and systems architecture expertise to every client engagement.
          </p>
        </div>

        {/* Engineering Leaders — Horizontal Split Layout */}
        <div className="engineering-leaders__list">
          {engineeringLeaders.map((leader, index) => (
            <article
              key={leader.slug}
              className={`eng-leader-row ${index % 2 !== 0 ? 'eng-leader-row--reverse' : ''}`}
            >
              <div className="eng-leader-row__image-panel">
                <img
                  src={leader.image}
                  alt={leader.imageAlt}
                  className="eng-leader-row__image"
                  width={600}
                  height={500}
                  loading="lazy"
                />
                <div className="eng-leader-row__image-overlay" aria-hidden="true" />
                <span className="eng-leader-row__badge">{leader.experience}</span>
              </div>
              <div className="eng-leader-row__content-panel">
                <span className="eng-leader-row__role">{leader.title}</span>
                <h3 className="eng-leader-row__name">{leader.name}</h3>
                <p className="eng-leader-row__edu">{leader.education}</p>
                <p className="eng-leader-row__bio">{leader.bio}</p>
                <div className="eng-leader-row__chips" aria-label="Core competencies">
                  {leader.focus.map((f) => (
                    <span key={f} className="eng-leader-row__chip">{f}</span>
                  ))}
                </div>
                <Link
                  href={`/people/${leader.slug}/`}
                  className="eng-leader-row__cta"
                  aria-label={`View full profile of ${leader.name}`}
                >
                  View Full Profile
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View all people link */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link
            href="/people/"
            className="about-people-link"
            aria-label="View all leadership profiles"
          >
            View All Leadership Profiles
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

/* ── OUR JOURNEY ──────────────────────────────────────────────── */
const OurJourneySection = () => {
  const milestones = [
    { year: 'The Spark', title: 'Solving Core Problems', desc: "Started by solving specific operational bottlenecks for businesses, realizing that off-the-shelf software wasn't enough." },
    { year: 'The Shift', title: 'Product-Led Thinking', desc: 'Transitioned from bespoke scripts to architecting scalable, multi-tenant software platforms. Jwelnex was born out of this shift.' },
    { year: 'The Ecosystem', title: 'Building The Suite', desc: 'Leveraging robust core infrastructure to launch specialized platforms like PayNex, proving our engineering standards.' },
    { year: 'The Future', title: 'Enterprise Engineering', desc: 'Scaling our proprietary ecosystem while opening our capabilities to select enterprise partners who demand product-tier software.' },
  ];

  return (
    <section className="journey-section">
      <div className="container">
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

/* ── WHY WE BUILD ─────────────────────────────────────────────── */
const WhyWeBuildSection = () => {
  return (
    <section className="why-we-build">
      <div className="container">
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

/* ── ENGINEERING PRINCIPLES ───────────────────────────────────── */
const EngineeringPrinciples = () => {
  const principles = [
    { title: 'Product-First Thinking', desc: "Every feature must tie back to a tangible business outcome. We don't build tech for tech's sake." },
    { title: 'Long-Term Architecture', desc: "We design data models and infrastructure that can handle your 5-year growth trajectory today." },
    { title: 'Reliability Over Hype', desc: 'We prioritize stable, battle-tested technologies over the newest experimental frameworks.' },
    { title: 'Continuous Improvement', desc: "Software is never 'done'. We build systems with observability to iterate and improve constantly." },
  ];

  return (
    <section className="principles-section">
      <div className="container">
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

/* ── MISSION & VISION ─────────────────────────────────────────── */
const MissionVision = () => {
  return (
    <section className="mission-vision-section">
      <div className="container">
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

/* ── PAGE ─────────────────────────────────────────────────────── */
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
        title="About Vayunex Solution | Product-Led Engineering Company"
        description="Learn about Vayunex Solution — a product-led software engineering company building enterprise SaaS platforms and delivering high-quality software systems."
        keywords="Vayunex team, enterprise software company, saas builders, engineering leadership, product led growth"
      />

      <HeroSection />
      <WhoWeAreSection />
      <LeadershipSection />
      <OurJourneySection />
      <DualEngine />
      <WhyWeBuildSection />
      <EngineeringPrinciples />
      <MissionVision />
      <FinalCTA />
    </main>
  );
};

export default AboutPage;