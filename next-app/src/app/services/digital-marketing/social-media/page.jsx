'use client';

import React from 'react';
import ServiceSubpageTemplate from '../../../../components/common/ServiceSubpageTemplate';

export default function SocialMediaPage() {
  return (
    <ServiceSubpageTemplate
      serviceName="Social Media Growth & Brand Positioning"
      parentService="Digital Marketing"
      parentUrl="/services/digital-marketing"
      currentUrl="/services/digital-marketing/social-media"
      accentColor="#F97316"
      badgeText="Organic Brand Velocity"
      headline="Transform Your Social Presence into a Revenue-Generating Authority"
      subheadline="Build deep community trust and inbound buyer demand. We manage organic social media channels with editorial-grade copy, cinematic short-form video, and founder thought-leadership that drives inbound business inquiries."
      capabilities={[
        {
          icon: '👔',
          title: 'Founder & Executive LinkedIn Ghostwriting',
          desc: 'Position your leadership team as definitive industry authorities with weekly data-driven perspectives, breakdown case studies, and contrarian insights.'
        },
        {
          icon: '🎬',
          title: 'Short-Form Video (Reels & YouTube Shorts)',
          desc: 'End-to-end video production from high-retention scripting, motion graphics, sound design, and viral caption editing.'
        },
        {
          icon: '💬',
          title: 'Active Community & Lead Nurturing',
          desc: 'Engage with industry peers in comments, monitor brand keywords, and funnel engaged prospects into direct customer conversations.'
        },
        {
          icon: '📈',
          title: 'Organic Reach Analytics & Pipeline Tracking',
          desc: 'Measure real commercial outcomes (profile views, inbound DMs, lead conversions) rather than empty vanity metrics.'
        }
      ]}
      techStack={[
        'SocialNex Suite',
        'Figma Design System',
        'Premiere Pro & After Effects',
        'LinkedIn Creator Tools',
        'Meta Business Suite',
        'Notion Editorial Workflow'
      ]}
      processSteps={[
        {
          step: 'Brand Voice & Tone Architecture',
          desc: 'Interview founders and product heads to document your unique vocabulary, core values, and industry stance.'
        },
        {
          step: 'Monthly Content Pillar Roadmap',
          desc: 'Plan 20+ pieces of content mapped across education, authority proof, culture, and direct product solutions.'
        },
        {
          step: 'High-Fidelity Production & Approvals',
          desc: 'Design polished carousel infographics, edit video assets, and review drafts via our collaborative approval portal.'
        },
        {
          step: 'Publishing, Engagement & Optimization',
          desc: 'Deploy at peak engagement hours, actively manage comments, and iterate hooks based on weekly algorithmic analytics.'
        }
      ]}
      faqs={[
        {
          question: 'How much time does the founder/leadership team need to dedicate?',
          answer: 'Only 45 minutes per month! In our monthly voice-recording session, we extract your raw insights and our editorial team turns them into an entire month of thought leadership posts and videos.'
        },
        {
          question: 'Does social media marketing actually generate B2B software leads?',
          answer: 'Yes! High-intent B2B buyers regularly vet software founders and companies on LinkedIn and social media before signing enterprise agreements. A strong organic presence shortens enterprise sales cycles significantly.'
        }
      ]}
    />
  );
}
