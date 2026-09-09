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
    '/products/schooldost',
    '/products/inventorynex'
];

const productSubRoutes = [
    '/products/socialnex/features',
    '/products/socialnex/pricing',
    '/products/schooldost/features',
    '/products/schooldost/demo',
    '/products/paynex/features',
    '/products/paynex/pricing',
    '/products/jwelnex/features',
    '/products/jwelnex/pricing'
];

const peopleRoutes = [
    '/people',
    '/people/ved-prakash',
    '/people/ved-parkash',
    '/people/sandeep-kumar'
];

const cityRoutes = [
    '/city/chandigarh',
    '/city/mohali',
    '/city/panchkula',
    '/city/delhi-ncr',
    '/city/gurugram',
    '/city/noida',
    '/city/bangalore',
    '/city/mumbai'
];

const serviceSubRoutes = [
    '/services/web-development/custom-web-apps',
    '/services/web-development/ecommerce',
    '/services/web-development/saas',
    '/services/ai-data-science/machine-learning',
    '/services/ai-data-science/nlp-llm',
    '/services/ai-data-science/computer-vision',
    '/services/recruitment/tech-hiring',
    '/services/recruitment/executive-search',
    '/services/seo-growth/technical-seo',
    '/services/seo-growth/programmatic-seo',
    '/services/seo-growth/aeo-geo',
    '/services/training/corporate-training',
    '/services/training/internship-program',
    '/services/digital-marketing/performance-marketing',
    '/services/digital-marketing/social-media'
];

const blogRoutes = [
    '/blog/enterprise-software-delivery-and-project-governance',
    '/blog/modern-saas-systems-architecture-scalable-backends',
    '/blog/scaling-multi-channel-social-content-operations-ai-copilots',
    '/blog/building-indias-verified-academic-student-network',
    '/blog/architecting-gst-compliant-billing-automated-upi-infrastructure',
    '/blog/modernizing-jewellery-retail-rfid-mcx-bullion-sync',
    '/blog/real-time-multi-warehouse-inventory-telemetry-automation',
    '/blog/production-ai-systems-rag-autonomous-multi-agent-workflows'
];

// Combine all manual routes
const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...serviceSubRoutes,
    ...productRoutes,
    ...productSubRoutes,
    ...cityRoutes,
    ...peopleRoutes,
    ...blogRoutes
];

const formatUrl = (route) => {
    if (route === '/') return `${baseUrl}/`;
    const cleanRoute = route.endsWith('/') ? route : `${route}/`;
    return `${baseUrl}${cleanRoute}`;
};

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `    <url>
        <loc>${formatUrl(route)}</loc>
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
