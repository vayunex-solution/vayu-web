import { getAllPeople } from '../../data/people';
import PeopleIndexPage from '../../pages-source/people/PeopleIndexPage';

export const metadata = {
  title: {
    absolute: 'Engineering Leadership | Vayunex Solution',
  },
  description:
    'Meet the experienced engineering leadership at Vayunex Solution. Project and technical heads with 17–20+ years of software development and systems engineering expertise.',
  alternates: {
    canonical: 'https://www.vayunexsolution.com/people/',
  },
  openGraph: {
    title: 'Engineering Leadership | Vayunex Solution',
    description:
      'Meet the experienced engineering leadership at Vayunex Solution. Project and technical heads with 17–20+ years of enterprise software delivery and systems architecture expertise.',
    url: 'https://www.vayunexsolution.com/people/',
    type: 'website',
  },
};

const siteUrl = 'https://www.vayunexsolution.com';

const peoplePageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}/people/#webpage`,
    'url': `${siteUrl}/people/`,
    'name': 'Engineering Leadership — Vayunex Solution',
    'description':
      'Meet the senior engineering and project heads directing delivery and technical architecture at Vayunex Solution.',
    'isPartOf': { '@id': `${siteUrl}/#website` },
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': `${siteUrl}/`,
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Engineering Leadership',
          'item': `${siteUrl}/people/`,
        },
      ],
    },
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'item': {
            '@type': 'Person',
            '@id': `${siteUrl}/people/ved-parkash/#person`,
            'name': 'Ved Parkash',
            'jobTitle': 'Project Head',
            'url': `${siteUrl}/people/ved-parkash/`,
            'worksFor': { '@id': `${siteUrl}/#organization` },
          },
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'item': {
            '@type': 'Person',
            '@id': `${siteUrl}/people/sandeep-kumar/#person`,
            'name': 'Sandeep Kumar',
            'jobTitle': 'Technical Head',
            'url': `${siteUrl}/people/sandeep-kumar/`,
            'worksFor': { '@id': `${siteUrl}/#organization` },
          },
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteUrl}/people/#faq`,
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Who leads software engineering and project delivery at Vayunex Solution?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Software delivery and systems engineering at Vayunex Solution are headed by Ved Parkash (Project Head, 20+ years experience, MCA Punjab University) and Sandeep Kumar (Technical Head, 17+ years experience, MCA Punjab University).',
        },
      },
      {
        '@type': 'Question',
        'name': 'What are the qualifications of Vayunex Solution engineering leaders?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Both Ved Parkash and Sandeep Kumar hold Master of Computer Applications (MCA) degrees from Punjab University and bring between 17 and 20+ years of proven hands-on full-stack development, systems architecture, and delivery governance experience.',
        },
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      {peoplePageSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PeopleIndexPage />
    </>
  );
}
