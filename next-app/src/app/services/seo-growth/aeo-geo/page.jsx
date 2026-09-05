'use client';

import React from 'react';
import ServiceSubpageTemplate from '../../../../components/common/ServiceSubpageTemplate';

export default function AeoGeoPage() {
  return (
    <ServiceSubpageTemplate
      serviceName="Answer Engine (AEO) & Generative Search (GEO)"
      parentService="SEO & Growth"
      parentUrl="/services/seo-growth"
      currentUrl="/services/seo-growth/aeo-geo"
      accentColor="#10B981"
      badgeText="AI Search Readiness"
      headline="Win Citations Across Perplexity, ChatGPT Search, Gemini & Google AI Overviews"
      subheadline="Traditional Google ranking is no longer enough. Buyers now ask AI agents for product recommendations. We optimize your website architecture and entity signals so AI reasoning engines cite your brand as the definitive authority."
      capabilities={[
        {
          icon: '🤖',
          title: 'Direct Answer Architecture & QuickAnswers',
          desc: 'Structure answers into concise, factual, declarative blocks that AI summarizers extract and quote directly in AI Overviews.'
        },
        {
          icon: '📑',
          title: 'Semantic llms.txt & AI Knowledge Layer',
          desc: 'Deploy machine-readable /llms.txt, /ai-knowledge-base, and markdown layers that guide AI web crawlers to your authoritative specs.'
        },
        {
          icon: '🌐',
          title: 'Entity Authority & Knowledge Graph Optimization',
          desc: 'Anchor your brand across Wikidata, Crunchbase, Wikipedia references, and industry directories to establish unambiguous entity recognition.'
        },
        {
          icon: '💬',
          title: 'Conversational Query & FAQPage Schema',
          desc: 'Implement question-answer schemas that mirror how real users prompt conversational models (e.g. "What is the best jewelry ERP for multi-branch?").'
        }
      ]}
      techStack={[
        'JSON-LD FAQPage & Article',
        'llms.txt Protocol',
        'Schema.org / Wikidata',
        'Perplexity Search Tracking',
        'ChatGPT Web Crawler (GPTBot)',
        'Google-Extended & CCBot Analytics',
        'Semantic Embeddings Scoring'
      ]}
      processSteps={[
        {
          step: 'AI Citation & Mention Audit',
          desc: 'We test your brand and competitors across ChatGPT, Perplexity, Gemini, and Claude for 50+ commercial prompts.'
        },
        {
          step: 'Semantic Content Restructuring',
          desc: 'Re-author content into direct fact-dense answers, statistical bullet points, and authoritative comparison charts.'
        },
        {
          step: 'AI Crawl Protocol Implementation',
          desc: 'Configure robots.txt permissions for verified AI crawlers and publish machine-optimized knowledge layers.'
        },
        {
          step: 'Citation Tracking & Share-of-Model',
          desc: 'Continuously monitor your brand citation frequency across generative engines and optimize for emerging search models.'
        }
      ]}
      faqs={[
        {
          question: 'What is the difference between traditional SEO and AEO / GEO?',
          answer: 'Traditional SEO optimizes for 10 blue links on Google based on backlinks and keywords. AEO and GEO optimize for conversational AI engines (ChatGPT, Perplexity, Google AI Overviews) that synthesize answers from trusted, cited entity sources.'
        },
        {
          question: 'Can small or mid-sized companies get cited by ChatGPT and Perplexity?',
          answer: 'Yes! Generative search engines prioritize factual clarity, structured data, and unique primary source data over raw domain age. High-quality structured content often gets cited over massive legacy publications.'
        }
      ]}
    />
  );
}
