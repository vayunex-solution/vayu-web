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
        },
        {
          '@type': 'Person',
          'name': 'Rajesh Kumar',
          'jobTitle': 'Director & Co-Founder',
          'worksFor': { '@id': 'https://www.vayunexsolution.com/#organization' }
        }
      ],
      'employee': [
        {
          '@type': 'Person',
          '@id': 'https://www.vayunexsolution.com/people/ved-parkash/#person',
          'name': 'Ved Parkash',
          'jobTitle': 'Project Head',
          'url': 'https://www.vayunexsolution.com/people/ved-parkash/',
          'alumniOf': {
            '@type': 'EducationalOrganization',
            'name': 'Punjab University'
          },
          'knowsAbout': [
            'Full-Stack Software Development',
            'Project Leadership',
            'Software Delivery Management',
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
            'text': 'Vayunex Solution is a product-led software engineering company. Rather than acting as a conventional outsourcing agency, Vayunex builds, scales, and maintains its own proprietary SaaS platforms and delivers enterprise-grade digital systems with deep technical rigor.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Who leads Vayunex Solution?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Vayunex Solution was founded by Yash Kumar (Chief Executive Officer) and Rajesh Kumar (Director & Co-Founder). Engineering and delivery practices are directed by seasoned practice heads: Ved Parkash serves as Project Head (20+ years experience, MCA Punjab University), and Sandeep Kumar serves as Technical Head (17+ years experience, MCA Punjab University).'
          }
        },
        {
          '@type': 'Question',
          'name': 'What software products has Vayunex Solution developed?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Vayunex Solution has engineered and deployed proprietary platforms including Jwelnex ERP (Jewellery business ERP), PayNex (payroll & billing infrastructure), SocialNex (social command center), and SchoolDost (campus and education network).'
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
