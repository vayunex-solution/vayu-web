'use client';

import React from 'react';
import ServiceSubpageTemplate from '../../../../components/common/ServiceSubpageTemplate';

export default function CustomWebAppsPage() {
  return (
    <ServiceSubpageTemplate
      serviceName="Custom Web Applications"
      parentService="Web Development"
      parentUrl="/services/web-development"
      currentUrl="/services/web-development/custom-web-apps"
      accentColor="#3B82F6"
      badgeText="Bespoke Architecture"
      headline="Custom Web Applications Built for High Velocity & Scale"
      subheadline="We design and engineer enterprise web apps, internal dashboards, and real-time operational portals that handle millions of requests with sub-second response times."
      capabilities={[
        {
          icon: '⚡',
          title: 'Single Page & Hybrid Applications',
          desc: 'Ultra-fast Next.js, React, and Vue applications with server-side rendering (SSR) and edge hydration for near-instant page transitions.'
        },
        {
          icon: '🔌',
          title: 'Real-Time WebSockets & Data Streaming',
          desc: 'High-concurrency bi-directional telemetry for live dashboards, collaborative canvases, dispatch tracking, and financial tickers.'
        },
        {
          icon: '🛡️',
          title: 'Role-Based Access Control (RBAC)',
          desc: 'Enterprise security architecture with SSO (OAuth 2.0, SAML, Google/Microsoft Auth), granular role matrices, and audit logging.'
        },
        {
          icon: '☁️',
          title: 'Cloud Native Microservices',
          desc: 'Resilient Node.js, Go, and Python APIs orchestrated via Docker containers on AWS, Google Cloud, and Kubernetes.'
        }
      ]}
      techStack={[
        'Next.js 14',
        'React 18',
        'TypeScript',
        'Node.js',
        'Go / Golang',
        'PostgreSQL',
        'Redis',
        'Docker',
        'AWS Lambda',
        'Tailwind / CSS-in-JS'
      ]}
      processSteps={[
        {
          step: 'Architecture & UX Wireframes',
          desc: 'We define the database entity schema, API contracts, user flows, and high-fidelity Figma components.'
        },
        {
          step: 'Agile Sprint Engineering',
          desc: 'Fortnightly milestone releases with automated CI/CD pipeline builds and staging preview environments.'
        },
        {
          step: 'Automated QA & Load Testing',
          desc: 'Rigorous end-to-end Cypress tests, load testing up to 50,000 concurrent users, and OWASP Top 10 security audits.'
        },
        {
          step: 'Zero-Downtime Deployment',
          desc: 'Blue-green and canary releases with automated rollback telemetry and 24/7 cloud health monitoring.'
        }
      ]}
      faqs={[
        {
          question: 'How long does a typical custom web app project take?',
          answer: 'MVP builds typically take 6 to 8 weeks. Enterprise-grade custom applications with complex workflow integrations take 12 to 16 weeks.'
        },
        {
          question: 'Do you provide full source code ownership?',
          answer: 'Yes. 100% of the intellectual property, source code, repositories, and documentation are transferred to your company upon milestone completion.'
        },
        {
          question: 'Can you modernize our existing legacy web application?',
          answer: 'Yes. We specialize in incremental micro-frontend migrations, decoupling monolithic legacy backends into modern Next.js frontends and cloud APIs without disrupting current business operations.'
        }
      ]}
    />
  );
}
