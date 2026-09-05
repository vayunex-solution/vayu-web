import React from 'react';
import BlogDetailPage from '../../../pages-source/blog/BlogDetailPage';

export async function generateStaticParams() {
  try {
    const res = await fetch('https://api.web.vayunexsolution.com/api/blogs?status=published');
    const blogs = await res.json();
    if (Array.isArray(blogs) && blogs.length > 0) {
      return blogs.map(b => ({ slug: b.slug }));
    }
  } catch (e) {}
  return [{ slug: 'unlocking-business-efficiency-the-benefits-of-ai-saas' }];
}

export default function Page({ params }) {
  return <BlogDetailPage slug={params?.slug} />;
}
