'use client';

import React from 'react';
import ServiceSubpageTemplate from '../../../../components/common/ServiceSubpageTemplate';

export default function TechnicalSeoPage() {
  return (
    <ServiceSubpageTemplate
      serviceName="Technical SEO & Infrastructure Audit"
      parentService="SEO & Growth"
      parentUrl="/services/seo-growth"
      currentUrl="/services/seo-growth/technical-seo"
      accentColor="#10B981"
      badgeText="Technical Excellence"
      headline="Engineered Technical SEO to Dominate Organic Search Algorithms"
      subheadline="Great content is worthless if search engine bots cannot crawl, render, and index your pages. We audit and rebuild technical SEO foundations for sub-second speeds, flawless Core Web Vitals, and 100% crawl efficiency."
      capabilities={[
        {
          icon: '⚡',
          title: 'Core Web Vitals Optimization',
          desc: 'Optimize Largest Contentful Paint (LCP < 1.2s), Cumulative Layout Shift (CLS = 0), and Interaction to Next Paint (INP) to pass Google audits with 100/100 Lighthouse scores.'
        },
        {
          icon: '🤖',
          title: 'Crawl Budget & Indexation Governance',
          desc: 'Eliminate crawl waste, clean redirect loops, resolve parameter traps, and prioritize high-value revenue URLs in dynamic XML sitemaps.'
        },
        {
          icon: '🔍',
          title: 'JavaScript Rendering & Edge Hydration',
          desc: 'Ensure client-side React and Next.js applications are pre-rendered with dynamic SSR so Googlebot sees 100% of your HTML without headless browser timeouts.'
        },
        {
          icon: '🏷️',
          title: 'Advanced JSON-LD Structured Data',
          desc: 'Implement rich schemas (Organization, SoftwareApplication, Product, FAQPage, BreadcrumbList) that win Google Rich Snippets and carousel spots.'
        }
      ]}
      techStack={[
        'Google Search Console',
        'Screaming Frog SEO Spider',
        'Ahrefs & Semrush',
        'Next.js 14 Metadata API',
        'Cloudflare Edge Workers',
        'Chrome DevTools Performance',
        'Lighthouse CI'
      ]}
      processSteps={[
        {
          step: 'Deep Technical Crawl Audit',
          desc: 'We analyze up to 500,000 URLs for status codes, canonical loops, orphan pages, and mobile responsiveness.'
        },
        {
          step: 'Core Web Vitals Remediation',
          desc: 'Optimize fonts, compress images to WebP/AVIF, purge unused CSS, and defer non-critical JavaScript execution.'
        },
        {
          step: 'Site Architecture & Internal Links',
          desc: 'Re-engineer internal link equity flow using semantic breadcrumbs and category topic clusters.'
        },
        {
          step: 'Automated CI/CD SEO Guardrails',
          desc: 'Add pull request checks to prevent engineering teams from accidentally pushing noindex tags or broken canonicals.'
        }
      ]}
      faqs={[
        {
          question: 'How quickly do technical SEO improvements impact rankings?',
          answer: 'Critical fixes (such as canonical repair, sitemap updates, and fixing noindex bugs) often yield measurable crawl improvements within 7 to 14 days. Core Web Vitals enhancements reflect on Google ranking within 28 days of data collection.'
        },
        {
          question: 'Do you work with our internal developers or write the code directly?',
          answer: 'We do both. We can supply direct GitHub pull requests with production-ready Next.js / React code or provide detailed technical JIRA specifications for your in-house team.'
        }
      ]}
    />
  );
}
