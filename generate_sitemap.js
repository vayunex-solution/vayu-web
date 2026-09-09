const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.vayunexsolution.com';

const staticRoutes = [
    '/',
    '/about',
    '/products',
    '/careers',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/ai-knowledge-base',
    '/blog'
];

const serviceRoutes = [
    '/services/web-development',
    '/services/ai-data-science',
    '/services/recruitment',
    '/services/seo-growth',
    '/services/training',
    '/services/digital-marketing'
];

const productRoutes = [
    '/products/jwelnex',
    '/products/paynex',
    '/products/socialnex',
    '/products/schooldost'
];

const peopleRoutes = [
    '/people',
    '/people/ved-prakash',
    '/people/ved-parkash',
    '/people/sandeep-kumar'
];

const leadershipBlogRoutes = [
    '/blog/enterprise-software-delivery-and-project-governance',
    '/blog/modern-saas-systems-architecture-scalable-backends'
];

// Combine all manual routes
const allRoutes = [...staticRoutes, ...serviceRoutes, ...productRoutes, ...peopleRoutes, ...leadershipBlogRoutes];

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `    <url>
        <loc>${baseUrl}${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${route === '/' || route === '/blog' ? 'daily' : 'weekly'}</changefreq>
        <priority>${route === '/' ? '1.0' : route.startsWith('/people') ? '0.9' : '0.8'}</priority>
    </url>`).join('\n')}
</urlset>`;

    const targets = [
        path.join(__dirname, 'public', 'sitemap.xml'),
        path.join(__dirname, 'next-app', 'public', 'sitemap.xml')
    ];

    targets.forEach(sitemapPath => {
        const dir = path.dirname(sitemapPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(sitemapPath, sitemap, 'utf8');
        console.log(`✅ Sitemap successfully generated at ${sitemapPath}`);
    });
};

generateSitemap();
