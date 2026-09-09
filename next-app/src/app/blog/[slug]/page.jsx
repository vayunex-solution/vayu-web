import React from 'react';
import BlogDetailPage from '../../../pages-source/blog/BlogDetailPage';
import { fallbackLeadershipBlogs, getFallbackLeadershipBlog } from '../../../data/leadershipBlogsData';

export async function generateStaticParams() {
  const leadershipSlugs = fallbackLeadershipBlogs.map(b => ({ slug: b.slug }));
  const additionalSlugs = [
    { slug: 'unlocking-business-efficiency-the-benefits-of-ai-saas' },
    { slug: 'how-to-scale-enterprise-web-applications' },
    { slug: 'future-of-ai-workflow-automation' },
    { slug: 'enterprise-saas-architecture-best-practices' },
    { slug: 'building-high-performance-digital-platforms' },
    { slug: 'technical-seo-for-modern-web-apps' },
    { slug: 'post' }
  ];
  const defaultSlugs = [...leadershipSlugs, ...additionalSlugs];

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

export async function generateMetadata({ params }) {
  const slug = params?.slug;
  const fallback = getFallbackLeadershipBlog(slug);
  const siteUrl = 'https://www.vayunexsolution.com';
  const pageUrl = `${siteUrl}/blog/${slug}/`;

  if (fallback) {
    return {
      title: { absolute: fallback.seoTitle || `${fallback.title} | Vayunex Solution` },
      description: fallback.seoDescription || fallback.excerpt,
      alternates: { canonical: pageUrl },
      openGraph: {
        title: fallback.seoTitle || fallback.title,
        description: fallback.seoDescription || fallback.excerpt,
        url: pageUrl,
        type: 'article',
        publishedTime: fallback.publishDate || fallback.createdAt,
        authors: [fallback.author],
      },
    };
  }

  return {
    title: 'Vayunex Engineering & Tech Insights',
    description: 'Read the latest technical insights and enterprise architecture analysis from Vayunex Solution.',
    alternates: { canonical: pageUrl },
  };
}

export default function Page({ params }) {
  const fallbackBlog = getFallbackLeadershipBlog(params?.slug);
  return <BlogDetailPage slug={params?.slug} initialBlog={fallbackBlog} />;
}
