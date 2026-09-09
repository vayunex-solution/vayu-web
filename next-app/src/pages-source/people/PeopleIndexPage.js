'use client';

import React from 'react';
import Link from 'next/link';
import { getAllPeople } from '../../data/people';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import './PeopleIndexPage.css';

/* ── Individual leader row ─────────────────────────────────── */
const LeaderRow = ({ person, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const isReverse = index % 2 !== 0; // even = image left, odd = image right

  return (
    <article
      ref={ref}
      className={`leader-row${isReverse ? ' leader-row--reverse' : ''} fade-up ${isVisible ? 'is-visible' : ''}`}
      aria-label={`${person.name} — ${person.role}`}
    >
      {/* ── Portrait half ─────────────────────────────────── */}
      <div className="leader-row__image-panel">
        <img
          src={person.image}
          alt={person.imageAlt}
          className="leader-row__image"
          width={720}
          height={620}
          loading={index === 0 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : 'auto'}
        />
        <div className="leader-row__image-overlay" aria-hidden="true" />
        <span className="leader-row__badge">{person.experienceLabel}</span>
      </div>

      {/* ── Content half ──────────────────────────────────── */}
      <div className="leader-row__content-panel">
        <span className="leader-row__role">{person.role}</span>

        <h2 className="leader-row__name">{person.name}</h2>

        <p className="leader-row__edu">
          {person.education} &mdash; {person.university}
        </p>

        <p className="leader-row__bio">{person.shortBio}</p>

        {/* Expertise chips — top 4 */}
        <div className="leader-row__chips" aria-label="Areas of expertise">
          {person.expertise.slice(0, 4).map((tag) => (
            <span key={tag} className="leader-row__chip">{tag}</span>
          ))}
        </div>

        <Link
          href={`/people/${person.slug}/`}
          className="leader-row__cta"
          aria-label={`View full profile of ${person.name}`}
        >
          View Full Profile
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

/* ── Main page ─────────────────────────────────────────────── */
const PeopleIndexPage = () => {
  const [heroRef, heroVisible] = useScrollAnimation(0.1);
  const peoplelist = getAllPeople();

  return (
    <main className="people-page">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="people-hero" ref={heroRef}>
        <div className="people-hero__bg">
          <div className="people-hero__orb people-hero__orb--1" aria-hidden="true" />
          <div className="people-hero__orb people-hero__orb--2" aria-hidden="true" />
        </div>
        <div className={`container people-hero__content fade-up ${heroVisible ? 'is-visible' : ''}`}>
          <Breadcrumbs customCrumbs={[
            { name: 'Home', path: '/' },
            { name: 'People', path: '/people/' },
          ]} />
          <span className="section-eyebrow" style={{ marginTop: '1.5rem', display: 'block' }}>
            ENGINEERING LEADERSHIP
          </span>
          <h1 className="people-hero__heading">
            The People Behind the Engineering
          </h1>
          <p className="people-hero__desc">
            At Vayunex Solution, strong engineering outcomes begin with experienced leadership.
            Our project and technical heads bring decades of software development expertise
            to every engagement.
          </p>
        </div>
      </section>

      {/* ── LEADERS — horizontal split rows ───────────────── */}
      <section className="people-leaders-section" aria-label="Leadership profiles">
        {peoplelist.map((person, index) => (
          <LeaderRow key={person.id} person={person} index={index} />
        ))}
      </section>

      {/* ── FOOTER CTA ─────────────────────────────────────── */}
      <section className="people-footer">
        <div className="container">
          <h2 className="people-footer__heading">Work With Our Leadership Team</h2>
          <p className="people-footer__desc">
            Every project at Vayunex Solution is guided by experienced engineering leadership from day one.
          </p>
          <Link href="/contact/" className="people-footer__link">
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
};

export default PeopleIndexPage;
