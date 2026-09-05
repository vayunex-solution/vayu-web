import React from 'react';
import BlogCategoryPage from '../../../../pages-source/blog/BlogCategoryPage';

export function generateStaticParams() {
  return [
    { slug: 'ai-saas' },
    { slug: 'web-development' },
    { slug: 'enterprise-tech' },
    { slug: 'seo-growth' }
  ];
}

export default function Page({ params }) {
  return <BlogCategoryPage slug={params?.slug} />;
}
