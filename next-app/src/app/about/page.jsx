import AboutPage from '../../pages-source/AboutPage';

export const metadata = {
  title: 'About Vayunex Solution | Product-Led Engineering & Leadership',
  description:
    'Learn about Vayunex Solution — a product-led software engineering company building enterprise SaaS platforms. Meet our executive leadership and engineering heads.',
  alternates: {
    canonical: 'https://www.vayunexsolution.com/about/',
  },
  openGraph: {
    title: 'About Vayunex Solution | Product-Led Engineering & Leadership',
    description:
      'Software engineering company building enterprise SaaS platforms with product-led thinking and experienced technical leadership.',
    url: 'https://www.vayunexsolution.com/about/',
    type: 'website',
    images: [
      {
        url: 'https://www.vayunexsolution.com/assets/vayunex-brand-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'About Vayunex Solution - Engineering Growth, Delivering Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Vayunex Solution | Product-Led Engineering & Leadership',
    description:
      'Software engineering company building enterprise SaaS platforms with product-led thinking and experienced technical leadership.',
    images: ['https://www.vayunexsolution.com/assets/vayunex-brand-banner.jpg'],
  },
};

const structuredDataGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.vayunexsolution.com/#organization',
      'name': 'Vayunex Solution',
      'alternateName': 'Vayunex Solution Private Limited',
      'url': 'https://www.vayunexsolution.com/',
      'logo': 'https://www.vayunexsolution.com/logo.png',
      'description':
        'Vayunex Solution is a product-led software engineering company that builds proprietary SaaS platforms and delivers enterprise-grade web, AI, and systems architecture solutions.',
      'foundingLocation': {
        '@type': 'Place',
        'name': 'Chandigarh / Mohali, India'
      },
      'founder': [
        {
          '@type': 'Person',
          'name': 'Yash Kumar',
          'jobTitle': 'Chief Executive Officer & Founder',
          'worksFor': { '@id': 'https://www.vayunexsolution.com/#organization' }
        }
      ],
      'employee': [
        {
          '@type': 'Person',
          'name': 'Rajesh Kumar',
          'jobTitle': 'AI/ML Engineer & Researcher',
          'worksFor': { '@id': 'https://www.vayunexsolution.com/#organization' }
        },
        {
          '@type': 'Person',
          '@id': 'https://www.vayunexsolution.com/people/ved-prakash/#person',
          'name': 'Ved Prakash',
          'jobTitle': 'Project Head',
          'url': 'https://www.vayunexsolution.com/people/ved-prakash/',
          'alumniOf': {
            '@type': 'EducationalOrganization',
            'name': 'Punjab University'
          },
          'knowsAbout': [
            'ERP Systems Implementation',
            'CRM Process Automation',
            'Full-Stack Software Development',
            'Project Leadership',
            'Material Requirement Planning (MRP)',
            'Engineering Governance'
          ]
        },
        {
          '@type': 'Person',
          '@id': 'https://www.vayunexsolution.com/people/sandeep-kumar/#person',
          'name': 'Sandeep Kumar',
          'jobTitle': 'Technical Head',
          'url': 'https://www.vayunexsolution.com/people/sandeep-kumar/',
          'alumniOf': {
            '@type': 'EducationalOrganization',
            'name': 'Punjab University'
          },
          'knowsAbout': [
            'Technical Leadership',
            'Software Architecture',
            'Systems Engineering',
            'Backend Architecture',
            'Engineering Standards'
          ]
        }
      ],
      'knowsAbout': [
        'Enterprise SaaS Development',
        'Software Architecture',
        'Cloud Infrastructure',
        'AI Solutions',
        'Full-Stack Web Development'
      ]
    },
    {
      '@type': 'AboutPage',
      '@id': 'https://www.vayunexsolution.com/about/#webpage',
      'url': 'https://www.vayunexsolution.com/about/',
      'name': 'About Vayunex Solution',
      'description':
        'Vayunex Solution is a product-led software engineering company building enterprise SaaS platforms and delivering high-quality software systems.',
      'isPartOf': { '@id': 'https://www.vayunexsolution.com/#website' },
      'mainEntity': { '@id': 'https://www.vayunexsolution.com/#organization' },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': [
          'h1.hero-heading',
          '.hero-subheading',
          '.section-desc',
          '.speakable-summary',
          '.about-aiml__card-desc',
          '.leader-card__philosophy'
        ]
      },
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.vayunexsolution.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'About',
            'item': 'https://www.vayunexsolution.com/about/'
          }
        ]
      }
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.vayunexsolution.com/about/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is Vayunex Solution?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Vayunex Solution is a product-led software engineering company headquartered in Chandigarh Tricity (Mohali). Rather than acting as a conventional outsourcing agency, Vayunex builds, scales, and maintains its own proprietary SaaS platforms and delivers enterprise-grade digital systems and AI engineering with deep technical rigor.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Who leads Vayunex Solution?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Vayunex Solution was founded by Yash Kumar (Chief Executive Officer & Founder) and Rajesh Kumar (Director & Co-Founder). Engineering and delivery practices are directed by seasoned practice heads: Ved Prakash serves as Project Head (20+ years experience, MCA Punjab University), and Sandeep Kumar serves as Technical Head (17+ years experience, MCA Punjab University).'
          }
        },
        {
          '@type': 'Question',
          'name': 'Who directs software engineering and project delivery at Vayunex Solution?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Software delivery and systems engineering are led by Ved Prakash (Project Head, 20+ years experience, MCA Punjab University) and Sandeep Kumar (Technical Head, 17+ years experience, MCA Punjab University), bringing over 37 combined years of industrial ERP engineering, CRM process automation, and distributed cloud architecture.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What software products has Vayunex Solution developed?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Vayunex Solution has engineered and deployed proprietary platforms including SocialNex (AI social media operations command center), SchoolDost (verified academic student community network), PayNex (smart GST invoicing & payment infrastructure), Jwelnex ERP (jewellery business ERP with RFID & MCX bullion sync), and InventoryNex (multi-warehouse stock telemetry).'
          }
        },
        {
          '@type': 'Question',
          'name': 'Does Vayunex Solution have active AI and Machine Learning engineering teams?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Vayunex Solution operates dedicated AIML engineering squads working on active production deployments including autonomous agent copilots, computer vision inspection, and intelligent document parsing under the architectural governance of Ved Prakash and Sandeep Kumar. We also run an active AI fresher incubation program where university computer science graduates work on live production code alongside veteran architects.'
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
      />
      <AboutPage />
    </>
  );
}
