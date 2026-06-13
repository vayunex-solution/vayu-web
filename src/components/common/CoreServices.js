import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './CoreServices.css';

const OUTCOMES = [
  {
    id: 'web-app',
    service: 'Web & App Development',
    title: 'Modernize Customer Experience',
    description: 'Replace fragmented systems with fast, scalable digital experiences that improve engagement and operational efficiency.',
    deliverables: ['Custom Websites', 'SaaS Platforms', 'Business Portals', 'Mobile Apps'],
    link: '/services/web-development',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    accent: '#3B82F6',
  },
  {
    id: 'ai-automation',
    service: 'AI & Workflow Automation',
    title: 'Reduce Manual Operations',
    description: 'Automate repetitive workflows, approvals, reporting, and operational tasks using intelligent systems.',
    deliverables: ['Machine Learning', 'Process Automation', 'NLP Pipelines', 'Predictive Analytics'],
    link: '/services/ai-data-science',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    accent: '#14B8A6',
  },
  {
    id: 'recruitment',
    service: 'Recruitment & Staffing',
    title: 'Build High-Performance Teams',
    description: 'Scale your workforce with highly vetted tech talent, leadership hiring, and specialized technical recruiters.',
    deliverables: ['Tech Leadership', 'Contract Staffing', 'Dedicated Teams', 'Skill Assessment'],
    link: '/services/recruitment',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    accent: '#8B5CF6',
  },
  {
    id: 'digital-marketing',
    service: 'Digital Marketing',
    title: 'Accelerate Brand Growth',
    description: 'Data-driven marketing campaigns, social media management, and performance marketing to generate qualified leads.',
    deliverables: ['Performance Marketing', 'Social Media', 'Content Strategy', 'Email Campaigns'],
    link: '/services/digital-marketing',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
        <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
      </svg>
    ),
    accent: '#F43F5E',
  },
  {
    id: 'seo-growth',
    service: 'SEO & Growth Strategy',
    title: 'Increase Organic Visibility',
    description: 'Dominate search rankings with technical SEO, high-authority link building, and targeted keyword strategies.',
    deliverables: ['Technical SEO', 'Local Search', 'Content Optimization', 'Link Building'],
    link: '/services/seo-growth',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    ),
    accent: '#F59E0B',
  },
  {
    id: 'training',
    service: 'Training & Skill Development',
    title: 'Develop Future-Ready Talent',
    description: 'Upskill your workforce with hands-on corporate training in modern tech stacks, AI, and software engineering.',
    deliverables: ['Corporate Workshops', 'Bootcamps', 'AI Integration', 'Technical Onboarding'],
    link: '/services/training',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
    accent: '#06B6D4',
  },
];

const OutcomeCard = ({ outcome, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <Link
      ref={ref}
      to={outcome.link}
      className={`service-card ${isVisible ? 'is-visible' : ''}`}
      style={{
        '--svc-accent': outcome.accent,
        '--delay': `${index * 0.07}s`,
      }}
      aria-label={`Learn about ${outcome.service}`}
    >
      <div className="service-card__accent-bar" aria-hidden="true" />
      <div className="service-card__icon" aria-hidden="true">
        {outcome.icon}
      </div>
      <div className="service-card__badge-tag" style={{ color: 'var(--svc-accent)' }}>
        {outcome.service}
      </div>
      <h3 className="service-card__title">{outcome.title}</h3>
      <p className="service-card__desc">{outcome.description}</p>
      
      <ul className="service-card__deliverables">
        {outcome.deliverables.map((item, i) => (
          <li key={i} className="service-card__deliverable-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <div className="service-card__arrow" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </Link>
  );
};

const CoreServices = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);

  return (
    <section id="outcomes" className="core-services" aria-label="Business Outcomes">
      <div className="container">
        <div
          ref={headerRef}
          className={`core-services__header fade-up ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section-eyebrow">Additional Capabilities</span>
          <h2 className="section-heading">
            Engineered by the team behind the Vayunex ecosystem.
          </h2>
          <p className="section-subheading">
            Built for real businesses. Beyond our core products, we offer specialized engineering capabilities to help enterprise partners build, scale, and modernize their own technology.
          </p>
        </div>

        <div className="services-grid services-grid--outcomes">
          {OUTCOMES.map((outcome, i) => (
            <OutcomeCard key={outcome.id} outcome={outcome} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
