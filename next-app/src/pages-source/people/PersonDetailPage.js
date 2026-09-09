'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getPersonBySlug } from '../../data/people';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import { fallbackLeadershipBlogs } from '../../data/leadershipBlogsData';
import './PersonDetailPage.css';

/* ── Internal FAQ Accordion ────────────────────────────────── */
const PersonFAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, isVisible] = useScrollAnimation(0.1);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="person-faq-section" ref={ref}>
      <div className={`container fade-up ${isVisible ? 'is-visible' : ''}`}>
        <div className="person-faq__header">
          <span className="section-eyebrow">FREQUENTLY ASKED</span>
          <h2 className="section-heading">Quick Answers</h2>
        </div>
        <div className="person-faq__list" role="list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`person-faq__item${isOpen ? ' is-open' : ''}`} role="listitem">
                <button
                  className="person-faq__question"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-btn-${i}`}
                >
                  <span>{item.question}</span>
                  <span className="person-faq__icon" aria-hidden="true">
                    {isOpen ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    )}
                  </span>
                </button>
                <div
                  className="person-faq__answer-wrap"
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                >
                  <div className="person-faq__answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ── Related Articles (fetched from API or fallback) ───────── */
const PersonArticles = ({ personName }) => {
  const [articles, setArticles] = useState(() => {
    if (!personName) return [];
    return fallbackLeadershipBlogs.filter(
      (b) =>
        b.author &&
        b.author.trim().toLowerCase() === personName.trim().toLowerCase()
    ).slice(0, 3);
  });
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const fallbacks = fallbackLeadershipBlogs.filter(
      (b) =>
        b.author &&
        b.author.trim().toLowerCase() === personName.trim().toLowerCase()
    );

    fetch('https://api.web.vayunexsolution.com/api/blogs?status=published')
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        if (Array.isArray(data)) {
          const matched = data.filter(
            (b) =>
              b.author &&
              b.author.trim().toLowerCase() === personName.trim().toLowerCase()
          );
          if (matched.length > 0) {
            setArticles(matched.slice(0, 3));
            setLoaded(true);
            return;
          }
        }
        setArticles(fallbacks.slice(0, 3));
        setLoaded(true);
      })
      .catch(() => {
        if (!cancelled) {
          setArticles(fallbacks.slice(0, 3));
          setLoaded(true);
        }
      });
    return () => { cancelled = true; };
  }, [personName]);

  // Don't render section at all if no articles found
  if (!loaded || articles.length === 0) return null;

  return (
    <section className="person-articles-section">
      <div className="container">
        <div className="person-articles__header">
          <span className="section-eyebrow">PUBLISHED WRITING</span>
          <h2 className="section-heading">Articles by {personName}</h2>
        </div>
        <div className="person-articles__grid">
          {articles.map((article) => {
            const getStr = (v, fb = '') =>
              !v ? fb : typeof v === 'string' ? v : v.name || v.title || fb;
            const catStr = getStr(article.category, '');
            return (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}/`}
                className="person-article-card"
              >
                {catStr && (
                  <span className="person-article-card__category">{catStr}</span>
                )}
                <span className="person-article-card__title">{article.title}</span>
                {article.excerpt && (
                  <p className="person-article-card__excerpt">
                    {article.excerpt.slice(0, 120)}...
                  </p>
                )}
                <span className="person-article-card__read" aria-label={`Read article: ${article.title}`}>
                  Read Article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ── Expertise icons ─────────────────────────────────────── */
const expertiseIcons = [
  // Cycling through 8 simple SVG paths for visual variety
  <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>,
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /></svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0112 18.62a19.5 19.5 0 01-4.95-3.92A19.79 19.79 0 014 9.81a2 2 0 012-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.91 15.91a16 16 0 006 6" /></svg>,
  <svg key="4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  <svg key="5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  <svg key="6" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>,
  <svg key="7" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" /></svg>,
];

/* ── Main Component ────────────────────────────────────────── */
const PersonDetailPage = ({ slug }) => {
  const [heroRef, heroVisible] = useScrollAnimation(0.05);
  const [factsRef, factsVisible] = useScrollAnimation(0.1);
  const [bioRef, bioVisible] = useScrollAnimation(0.1);
  const [expRef, expVisible] = useScrollAnimation(0.1);
  const [expertiseRef, expertiseVisible] = useScrollAnimation(0.1);

  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }, []);

  const person = getPersonBySlug(slug);

  if (!person) {
    return (
      <main className="person-page">
        <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
          <h1>Profile Not Found</h1>
          <p style={{ color: 'var(--text-secondary)', margin: '1rem 0 2rem' }}>
            The profile you are looking for does not exist.
          </p>
          <Link href="/people/" style={{ color: 'var(--accent-indigo)', fontWeight: 700 }}>
            ← Back to Leadership
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="person-page" itemScope itemType="https://schema.org/Person">
      <meta itemProp="url" content={`https://www.vayunexsolution.com/people/${person.slug}/`} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="person-hero" ref={heroRef}>
        <div className="person-hero__bg">
          <div className="person-hero__orb person-hero__orb--1" />
          <div className="person-hero__orb person-hero__orb--2" />
        </div>
        <div className={`container fade-up ${heroVisible ? 'is-visible' : ''}`}>

          <Breadcrumbs customCrumbs={[
            { name: 'Home', path: '/' },
            { name: 'People', path: '/people/' },
            { name: person.name, path: `/people/${person.slug}/` },
          ]} />

          <div className="person-hero__inner" style={{ marginTop: '2rem' }}>
            {/* Left: Info */}
            <div className="person-hero__info">
              <span className="person-hero__role" itemProp="jobTitle">{person.role} — {person.company}</span>
              <h1 className="person-hero__name" itemProp="name">{person.name}</h1>
              {person.subRole && (
                <p className="person-hero__subrole" style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '1.25rem', letterSpacing: '0.02em', lineHeight: 1.4 }}>
                  {person.subRole}
                </p>
              )}
              <p className="person-hero__summary speakable-bio" itemProp="description">{person.shortBio}</p>

              <div className="person-hero__facts-strip">
                <div className="person-hero__fact">
                  <span className="person-hero__fact-label">Experience</span>
                  <span className="person-hero__fact-value">{person.experienceLabel}</span>
                </div>
                <div className="person-hero__fact">
                  <span className="person-hero__fact-label">Education</span>
                  <span className="person-hero__fact-value">{person.education} — {person.university}</span>
                </div>
                <div className="person-hero__fact">
                  <span className="person-hero__fact-label">Origin</span>
                  <span className="person-hero__fact-value" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="addressLocality">{person.origin}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Portrait */}
            <div className="person-hero__portrait-wrap">
              <div className="person-hero__portrait-frame">
                <img
                  src={person.image}
                  alt={person.imageAlt}
                  className="person-hero__portrait"
                  itemProp="image"
                  width={420}
                  height={525}
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="person-hero__portrait-glow" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY FACTS ─────────────────────────────────────────── */}
      <section className="person-facts-section" ref={factsRef}>
        <div className={`container fade-up ${factsVisible ? 'is-visible' : ''}`}>
          <p className="person-facts-section__heading">AT A GLANCE</p>
          <dl className="person-facts-dl">
            <div className="person-fact-item person-fact-item--accent">
              <dt>Role</dt>
              <dd>{person.role}</dd>
            </div>
            <div className="person-fact-item">
              <dt>Experience</dt>
              <dd>{person.experienceLabel}</dd>
            </div>
            <div className="person-fact-item">
              <dt>Education</dt>
              <dd>{person.education}</dd>
            </div>
            <div className="person-fact-item">
              <dt>University</dt>
              <dd>{person.university}</dd>
            </div>
            <div className="person-fact-item">
              <dt>Origin</dt>
              <dd>{person.origin}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── PROFESSIONAL BIO ──────────────────────────────────── */}
      <section className="person-bio-section" ref={bioRef}>
        <div className={`container fade-up ${bioVisible ? 'is-visible' : ''}`}>
          <div className="person-bio-section__inner">
            {/* Main bio */}
            <div>
              <p className="person-bio__heading">PROFESSIONAL OVERVIEW</p>
              <div className="person-bio__paragraphs">
                {person.fullBio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="person-sidebar" aria-label="Quick reference">
              {/* Education */}
              <div className="person-sidebar-card">
                <span className="person-sidebar-card__label">Education</span>
                <div className="person-edu-item">
                  <div className="person-edu-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div>
                    <span className="person-edu-degree">{person.education}</span>
                    <span className="person-edu-university">{person.university}</span>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              {person.relatedServices && person.relatedServices.length > 0 && (
                <div className="person-sidebar-card">
                  <span className="person-sidebar-card__label">Related Services</span>
                  <nav className="person-services-list" aria-label={`Services related to ${person.name}'s work`}>
                    {person.relatedServices.map((svc) => (
                      <Link key={svc.href} href={svc.href} className="person-service-link">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        {svc.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              )}

              {/* People index link */}
              <div className="person-sidebar-card">
                <span className="person-sidebar-card__label">Engineering Leadership</span>
                <Link href="/people/" className="person-service-link" aria-label="View all leadership profiles">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  View All Leaders
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ─────────────────────────────────────────── */}
      <section className="person-expertise-section" ref={expertiseRef}>
        <div className={`container fade-up ${expertiseVisible ? 'is-visible' : ''}`}>
          <div className="person-expertise__header">
            <span className="section-eyebrow">AREAS OF EXPERTISE</span>
            <h2 className="section-heading">Professional Focus</h2>
          </div>
          <div className="person-expertise__grid">
            {(person.expertise || []).map((item, i) => (
              <div key={item} className="person-expertise__card">
                <div className="person-expertise__icon" aria-hidden="true">
                  {expertiseIcons[i % expertiseIcons.length]}
                </div>
                <p className="person-expertise__name">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE TIMELINE ───────────────────────────────── */}
      <section className="person-experience-section" ref={expRef}>
        <div className={`container fade-up ${expVisible ? 'is-visible' : ''}`}>
          <div className="person-experience__header">
            <span className="section-eyebrow">PROFESSIONAL JOURNEY</span>
            <h2 className="section-heading">Experience & Leadership</h2>
          </div>
          <div className="person-timeline" role="list">
            {(person.careerTimeline || []).map((node, i) => (
              <div key={i} className="person-timeline__node" role="listitem">
                <div className="person-timeline__marker" aria-hidden="true">
                  <div className="person-timeline__dot" />
                  {i < (person.careerTimeline || []).length - 1 && (
                    <div className="person-timeline__line" />
                  )}
                </div>
                <div className="person-timeline__content">
                  <span className="person-timeline__phase">{node.phase}</span>
                  <h3 className="person-timeline__heading">{node.heading}</h3>
                  <p className="person-timeline__desc">{node.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUNCTIONAL EXPERIENCE MATRIX ──────────────────────── */}
      {person.functionalMatrix && person.functionalMatrix.length > 0 && (
        <section className="person-matrix-section">
          <div className="container">
            <div className="person-matrix__header">
              <span className="section-eyebrow">FUNCTIONAL CAPABILITIES</span>
              <h2 className="section-heading">End-to-End Enterprise Experience</h2>
              <p className="person-matrix__desc">
                Comprehensive practical involvement across core industrial and commercial ERP modules.
              </p>
            </div>
            <div className="person-matrix__grid">
              {person.functionalMatrix.map((item, i) => (
                <div key={i} className="person-matrix__card">
                  <div className="person-matrix__area-badge">{item.area}</div>
                  <p className="person-matrix__details">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── VERIFIED PROJECT PORTFOLIO ────────────────────────── */}
      {person.industryPortfolio && person.industryPortfolio.length > 0 && (
        <section className="person-portfolio-section">
          <div className="container">
            <div className="person-portfolio__header">
              <span className="section-eyebrow">INDUSTRY PORTFOLIO</span>
              <h2 className="section-heading">Major ERP & Enterprise Engagements</h2>
              <p className="person-portfolio__desc">
                Verified delivery history across manufacturing, automobile dealership, telecom, and commercial automation.
              </p>
            </div>
            <div className="person-portfolio__grid">
              {person.industryPortfolio.map((proj, i) => (
                <div key={i} className="person-portfolio__card">
                  <div className="person-portfolio__header-group">
                    <span className="person-portfolio__badge">{proj.industry}</span>
                    <h3 className="person-portfolio__client">{proj.client}</h3>
                    <span className="person-portfolio__location">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {proj.location}
                    </span>
                  </div>
                  <p className="person-portfolio__desc-text">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED ARTICLES (dynamic) ──────────────────────── */}
      <PersonArticles personName={person.name} />

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <PersonFAQ faqs={person.faq} />

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="person-cta-section">
        <div className="container">
          <div className="person-cta__inner">
            <h2 className="person-cta__heading">Work With Vayunex Solution</h2>
            <p className="person-cta__desc">
              Our leadership team brings deep engineering experience to every project.
              If you are looking for a technology partner that takes delivery seriously,
              we would like to hear from you.
            </p>
            <div className="person-cta__actions">
              <Link href="/contact/" className="person-cta__btn-primary">
                Start a Conversation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/people/" className="person-cta__btn-secondary">
                View All Leaders
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default PersonDetailPage;
