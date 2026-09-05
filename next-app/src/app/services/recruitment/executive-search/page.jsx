'use client';

import React from 'react';
import ServiceSubpageTemplate from '../../../../components/common/ServiceSubpageTemplate';

export default function ExecutiveSearchPage() {
  return (
    <ServiceSubpageTemplate
      serviceName="Executive Search & Tech Leadership"
      parentService="Recruitment"
      parentUrl="/services/recruitment"
      currentUrl="/services/recruitment/executive-search"
      accentColor="#14B8A6"
      badgeText="C-Suite & Leadership"
      headline="Discreet Executive Search for Chief Technology Officers & Engineering VPs"
      subheadline="Great engineering teams start with visionary leadership. We execute high-confidentiality executive search to place transformative CTOs, VPs of Engineering, and Heads of Product who have built high-scale ventures."
      capabilities={[
        {
          icon: '👑',
          title: 'Chief Technology Officer (CTO) Search',
          desc: 'Visionary leaders who align technology strategy with commercial business objectives and investor expectations.'
        },
        {
          icon: '🚀',
          title: 'VP of Engineering & Directors',
          desc: 'Operational leaders capable of scaling engineering organizations from 20 to 200+ engineers while maintaining velocity and low attrition.'
        },
        {
          icon: '🧠',
          title: 'Chief AI Officers & Research Directors',
          desc: 'Top-tier researchers and commercial ML executives who bridge the gap between frontier AI labs and revenue-generating products.'
        },
        {
          icon: '🔒',
          title: '100% Confidential Headhunting',
          desc: 'Discreet candidate approach methodology that protects your company brand and current organizational structure.'
        }
      ]}
      techStack={[
        'Chief Technology Officer (CTO)',
        'VP of Engineering',
        'Head of Product (CPO)',
        'Chief AI Officer (CAIO)',
        'Director of Platform Architecture',
        'Head of Information Security (CISO)',
        'Principal Systems Architect'
      ]}
      processSteps={[
        {
          step: 'Strategic Leadership Profiling',
          desc: 'We map the technical inflection points and organizational maturity level needed for your next growth stage.'
        },
        {
          step: 'Target Company Ecosystem Mapping',
          desc: 'Discreetly identify top performers at high-growth unicorns and public tech companies.'
        },
        {
          step: 'Competency & Leadership Assessment',
          desc: 'In-depth interviews covering architectural governance, investor reporting, and people leadership.'
        },
        {
          step: 'Compensation Modeling & Board Alignment',
          desc: 'Benchmark equity vesting, ESOP grants, performance bonuses, and close candidate agreements smoothly.'
        }
      ]}
      faqs={[
        {
          question: 'How long does an executive leadership search take?',
          answer: 'Executive searches typically conclude within 4 to 8 weeks, including initial talent mapping, confidential meetings, and compensation negotiations.'
        },
        {
          question: 'Can you assist with interim or fractional CTO advisory?',
          answer: 'Yes. While searching for a full-time executive, our senior founding partners can step in as interim or fractional CTOs to maintain engineering velocity.'
        }
      ]}
    />
  );
}
