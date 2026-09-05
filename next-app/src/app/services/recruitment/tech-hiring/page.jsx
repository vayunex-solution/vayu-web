'use client';

import React from 'react';
import ServiceSubpageTemplate from '../../../../components/common/ServiceSubpageTemplate';

export default function TechHiringPage() {
  return (
    <ServiceSubpageTemplate
      serviceName="Technical Talent Acquisition"
      parentService="Recruitment"
      parentUrl="/services/recruitment"
      currentUrl="/services/recruitment/tech-hiring"
      accentColor="#14B8A6"
      badgeText="Elite Engineering Talent"
      headline="Hire Pre-Vetted Software Engineers in Under 7 Days"
      subheadline="Skip resume spam and failed interview loops. Our recruitment team consists of active senior software architects who rigorously test every candidate on system design, data structures, and practical coding before you ever meet them."
      capabilities={[
        {
          icon: '💻',
          title: 'Full-Stack & Backend Developers',
          desc: 'Pre-screened React, Next.js, Node.js, Go, Python, and Java engineers ready to contribute production-quality code from day one.'
        },
        {
          icon: '🤖',
          title: 'AI, ML & Data Science Specialists',
          desc: 'Specialized hiring for PyTorch researchers, LLM fine-tuning practitioners, data pipeline engineers, and MLOps architects.'
        },
        {
          icon: '☁️',
          title: 'Cloud & DevOps / SRE Specialists',
          desc: 'Certified AWS, GCP, and Kubernetes infrastructure engineers experienced in zero-downtime CI/CD and cost optimization.'
        },
        {
          icon: '⏱️',
          title: '7-Day Turnaround SLA',
          desc: 'Receive your first shortlist of 3 to 5 thoroughly evaluated, hire-ready candidates within 7 business days of requisition kickoff.'
        }
      ]}
      techStack={[
        'Full-Stack Engineers',
        'Backend / Distributed Systems',
        'Frontend & React Specialists',
        'AI / Machine Learning Engineers',
        'Cloud Architects & DevOps',
        'Mobile App (Flutter / React Native)',
        'QA Automation Engineers'
      ]}
      processSteps={[
        {
          step: 'Requirement & Tech Stack Scoping',
          desc: 'We align on required skills, codebase architecture, team culture, and compensation benchmarks.'
        },
        {
          step: 'Sourcing & Technical Rigor Screening',
          desc: 'Our senior engineers conduct 60-minute deep-dive live coding and system design interviews.'
        },
        {
          step: 'Curated Shortlist Delivery',
          desc: 'You receive detailed technical scorecards, recorded interview snippets, and interview scheduling.'
        },
        {
          step: 'Offer Negotiation & 90-Day Guarantee',
          desc: 'We assist with offer closure and provide a 90-day free replacement guarantee on all placements.'
        }
      ]}
      faqs={[
        {
          question: 'What is the 90-day replacement guarantee?',
          answer: 'If any engineer placed by Vayunex leaves or fails to meet performance expectations within their first 90 days, we source and place a replacement candidate at zero additional recruitment cost.'
        },
        {
          question: 'Can you assist with remote and offshore staffing in India?',
          answer: 'Yes! We help US, UK, and European tech companies set up high-performing dedicated offshore development centers (ODC) in India with full payroll, equipment, and compliance management.'
        }
      ]}
    />
  );
}
