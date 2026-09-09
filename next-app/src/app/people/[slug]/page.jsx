import { getAllPeople, getPersonBySlug } from '../../../data/people';
import PersonDetailPage from '../../../pages-source/people/PersonDetailPage';

/**
 * generateStaticParams — tells Next.js which slugs to pre-render.
 * Adding a new person in people.js automatically creates their route at build time.
 */
export async function generateStaticParams() {
  const params = [];
  getAllPeople().forEach((person) => {
    params.push({ slug: person.slug });
    if (person.aliasSlugs && Array.isArray(person.aliasSlugs)) {
      person.aliasSlugs.forEach((alias) => params.push({ slug: alias }));
    }
  });
  return params;
}

/**
 * generateMetadata — produces unique, accurate metadata per person
 * so that the static HTML contains correct <title> and <meta> before JavaScript runs.
 */
export async function generateMetadata({ params }) {
  const person = getPersonBySlug(params.slug);
  if (!person) {
    return {
      title: 'Profile Not Found | Vayunex Solution',
      description: 'The requested profile could not be found.',
    };
  }

  const siteUrl = 'https://www.vayunexsolution.com';
  const profileUrl = `${siteUrl}/people/${person.slug}/`;

  return {
    title: {
      absolute: person.seo.title,
    },
    description: person.seo.description,
    alternates: {
      canonical: profileUrl,
    },
    openGraph: {
      title: person.seo.title,
      description: person.seo.description,
      url: profileUrl,
      type: 'profile',
      images: [
        {
          url: `${siteUrl}${person.image}`,
          width: 420,
          height: 525,
          alt: person.imageAlt,
        },
      ],
    },
    other: {
      // Inject Person + ProfilePage + BreadcrumbList JSON-LD as a script
      // These are rendered as static HTML by Next.js metadata system
    },
  };
}

export default function Page({ params }) {
  const person = getPersonBySlug(params.slug);

  const siteUrl = 'https://www.vayunexsolution.com';
  const profileUrl = `${siteUrl}/people/${person?.slug}/`;

  /* ── Structured Data (JSON-LD) ── */
  const schemas = person
    ? [
        // ProfilePage
        {
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          '@id': `${profileUrl}#webpage`,
          'url': profileUrl,
          'name': person.seo.title,
          'description': person.seo.description,
          'isPartOf': { '@id': `${siteUrl}/#website` },
          'mainEntity': { '@id': person.schema.id },
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
                'name': 'People',
                'item': `${siteUrl}/people/`,
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': person.name,
                'item': profileUrl,
              },
            ],
          },
        },
        // Person
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': person.schema.id,
          'name': person.name,
          'url': profileUrl,
          'image': `${siteUrl}${person.image}`,
          'jobTitle': person.role,
          'worksFor': {
            '@id': `${siteUrl}/#organization`,
          },
          'alumniOf': {
            '@type': 'EducationalOrganization',
            'name': person.schema.alumniOf,
          },
          'knowsAbout': person.schema.knowsAbout,
        },
        // FAQPage
        ...(person.faq && person.faq.length > 0
          ? [
              {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                'mainEntity': person.faq.map((f) => ({
                  '@type': 'Question',
                  'name': f.question,
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': f.answer,
                  },
                })),
              },
            ]
          : []),
      ]
    : [];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PersonDetailPage slug={params.slug} />
    </>
  );
}
