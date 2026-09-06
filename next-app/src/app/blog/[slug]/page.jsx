import React from 'react';
import BlogDetailPage from '../../../pages-source/blog/BlogDetailPage';

export async function generateStaticParams() {
  const defaultSlugs = [
    { slug: 'unlocking-business-efficiency-the-benefits-of-ai-saas' },
    { slug: 'how-to-scale-enterprise-web-applications' },
    { slug: 'future-of-ai-workflow-automation' },
    { slug: 'enterprise-saas-architecture-best-practices' },
    { slug: 'building-high-performance-digital-platforms' },
    { slug: 'technical-seo-for-modern-web-apps' },
    { slug: 'post' }
  ];

  try {
    const res = await fetch('https://api.web.vayunexsolution.com/api/blogs?status=published', { cache: 'no-store' });
    const blogs = await res.json();
    if (Array.isArray(blogs) && blogs.length > 0) {
      const apiSlugs = blogs.map(b => ({ slug: b.slug }));
      const all = [...apiSlugs, ...defaultSlugs];
      const seen = new Set();
      return all.filter(item => {
        if (!item.slug || seen.has(item.slug)) return false;
        seen.add(item.slug);
        return true;
      });
    }
  } catch (e) {}

  return defaultSlugs;
}

export default function Page({ params }) {
  return <BlogDetailPage slug={params?.slug} />;
}
