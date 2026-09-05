'use client';

import React from 'react';
import ServiceSubpageTemplate from '../../../../components/common/ServiceSubpageTemplate';

export default function InternshipProgramPage() {
  return (
    <ServiceSubpageTemplate
      serviceName="Vayunex Industrial Internship & Fellowship"
      parentService="Training"
      parentUrl="/services/training"
      currentUrl="/services/training/internship-program"
      accentColor="#F59E0B"
      badgeText="Hands-On Industry Experience"
      headline="Build Real Software on Live Products: 6-Month Intensive Internship"
      subheadline="Say goodbye to toy todo-apps. The Vayunex Developer Fellowship embeds aspiring software engineers into active commercial SaaS codebases under direct mentorship from veteran founders and team leads."
      capabilities={[
        {
          icon: '🚀',
          title: 'Work on Live Commercial SaaS Products',
          desc: 'Write and deploy code to active products (Jwelnex ERP, PayNex, SocialNex) used by real businesses every single day.'
        },
        {
          icon: '👨‍💻',
          title: 'Direct Senior Architect Mentorship',
          desc: '1-on-1 code reviews on GitHub, system design pair-programming, and professional Git branching workflows.'
        },
        {
          icon: '💼',
          title: '100% Placement & Hiring Pipeline',
          desc: 'Top performers receive direct full-time employment (PPO) offers at Vayunex or partner tech firms in Chandigarh, Mohali, and Bangalore.'
        },
        {
          icon: '📜',
          title: 'Industry Recognized Project Certification',
          desc: 'Verifiable project experience letter and portfolio repositories that stand out to top engineering recruiters worldwide.'
        }
      ]}
      techStack={[
        'Full-Stack Next.js & React',
        'Node.js & Express REST APIs',
        'PostgreSQL & Prisma ORM',
        'Tailwind CSS & Framer Motion',
        'Git & GitHub Team Workflows',
        'Docker & Cloud Deployment',
        'System Design Fundamentals'
      ]}
      processSteps={[
        {
          step: 'Entrance Coding Assessment',
          desc: 'Short technical problem-solving evaluation to test logic and foundational programming commitment.'
        },
        {
          step: 'Core Foundations Sprint (Weeks 1-4)',
          desc: 'Deep dive into modern JavaScript, TypeScript, asynchronous programming, and relational database modeling.'
        },
        {
          step: 'Live SaaS Product Feature Sprint (Weeks 5-20)',
          desc: 'Assigned to a feature pod with sprint planning, daily standups, pull request reviews, and production releases.'
        },
        {
          step: 'Mock Technical Interviews & Job Placement (Weeks 21-24)',
          desc: 'Resume optimization, LinkedIn branding, system design mock interviews, and company introductions.'
        }
      ]}
      faqs={[
        {
          question: 'Who is eligible to apply for the Vayunex internship program?',
          answer: 'Final year B.Tech / BCA / MCA students, recent college graduates, and self-taught developers with basic programming knowledge in any language are welcome to apply.'
        },
        {
          question: 'Is the internship stipend-based?',
          answer: 'Yes! High-performing interns working on commercial client deliverables receive a monthly stipend, with opportunities for immediate full-time conversion.'
        }
      ]}
    />
  );
}
