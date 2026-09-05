'use client';

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import QuickAnswers from '../../components/common/QuickAnswers';
import FAQAccordion from '../../components/common/FAQAccordion';

const BlogDetailPage = ({ slug: propSlug }) => {
    let slug = propSlug;
    try {
        const params = useParams();
        if (!slug && params) slug = params.slug;
    } catch (e) {}
    slug = slug || '';

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!slug) return;

        if (window.dataLayer) {
            window.dataLayer.push({
                event: 'blog_view',
                blog_slug: slug
            });
        }

        fetch(`https://api.web.vayunexsolution.com/api/blogs/${slug}`)
            .then(res => res.json())
            .then(data => {
                if (data && !data.error) {
                    setBlog(data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return <div style={{ paddingTop: '150px', textAlign: 'center', color: 'var(--text-primary)' }}>Loading article...</div>;
    }

    if (!blog) {
        return (
            <div style={{ paddingTop: '150px', textAlign: 'center', color: 'var(--text-primary)' }}>
                <h1>Article Not Found</h1>
                <Link to="/blog" style={{ color: 'var(--primary-color)' }}>&larr; Back to Blog</Link>
            </div>
        );
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": blog.seoTitle || blog.title,
        "description": blog.seoDescription || blog.excerpt,
        "image": blog.featuredImage || "https://www.vayunexsolution.com/assets/og-default.jpg",
        "author": {
            "@type": "Person",
            "name": blog.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Vayunex Solution",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.vayunexsolution.com/logo.png"
            }
        },
        "datePublished": blog.createdAt,
        "dateModified": blog.updatedAt
    };

    // Clean stray Markdown formatting or nested bold tags from blog content
    const cleanBlogHtml = (html) => {
        if (!html) return '';
        let cleaned = html.replace(/\*\*/g, '');
        while (/<strong>\s*<strong>/i.test(cleaned)) {
            cleaned = cleaned.replace(/<strong>\s*<strong>/gi, '<strong>');
        }
        while (/<\/strong>\s*<\/strong>/i.test(cleaned)) {
            cleaned = cleaned.replace(/<\/strong>\s*<\/strong>/gi, '</strong>');
        }
        cleaned = cleaned.replace(/<(h[1-6])>\s*<strong>(.*?)<\/strong>\s*<\/\1>/gi, '<$1>$2</$1>');
        cleaned = cleaned.replace(/<p>\s*<strong>(.*?)<\/strong>\s*<\/p>/gi, '<p>$1</p>');
        cleaned = cleaned.replace(/<li>\s*<strong>([^:]+):\s*([^<]+)<\/strong>\s*<\/li>/gi, '<li><strong>$1:</strong> $2</li>');
        cleaned = cleaned.replace(/<p>\s*<strong>([^:]+):\s*([^<]+)<\/strong>\s*<\/p>/gi, '<p><strong>$1:</strong> $2</p>');
        return cleaned;
    };

    // Parse FAQs from JSON string if available
    let faqs = [];
    if (blog.faqJson) {
        try {
            faqs = typeof blog.faqJson === 'string' ? JSON.parse(blog.faqJson) : blog.faqJson;
        } catch (e) {
            console.error('Failed to parse FAQ JSON:', e);
        }
    }

    return (
        <article className="blog-detail-page inner-page" style={{ paddingTop: '100px', minHeight: '80vh', maxWidth: '800px', margin: '0 auto', padding: '100px 2rem 50px' }}>
            <SEO 
                title={blog.seoTitle || blog.title}
                description={blog.seoDescription || blog.excerpt}
                imageUrl={blog.featuredImage}
                structuredData={articleSchema}
                faqData={faqs}
                type="article"
            />
            
            <Breadcrumbs customCrumbs={[
                { name: 'Home', path: '/' },
                { name: 'Blog', path: '/blog' },
                { name: blog.title, path: `/blog/${blog.slug}` }
            ]} />
            
            <h1 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', margin: '1rem 0' }}>
                {blog.title}
            </h1>
            
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-tertiary)', marginBottom: '2rem', fontSize: '0.9rem' }}>
                <span style={{ marginRight: '1rem' }}>{blog.author}</span>
                <span style={{ marginRight: '1rem' }}>{new Date(blog.createdAt).toLocaleDateString()}</span>
                <span>{blog.viewCount} views</span>
            </div>

            {(blog.aiSummary || blog.excerpt) && (
                <QuickAnswers 
                    title="Key AI Takeaways"
                    answer={blog.aiSummary || blog.excerpt}
                />
            )}

            {blog.featuredImage && (
                <img src={blog.featuredImage} alt={blog.title} style={{ width: '100%', borderRadius: '12px', marginBottom: '2rem' }} />
            )}

            <div 
                className="blog-content" 
                style={{ color: 'var(--text-primary)', lineHeight: '1.8', fontSize: '1.1rem' }}
                dangerouslySetInnerHTML={{ __html: cleanBlogHtml(blog.content) }} 
            />

            {Array.isArray(faqs) && faqs.length > 0 && (
                <div style={{ marginTop: '3.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2rem' }}>
                    <FAQAccordion 
                        faqs={faqs} 
                        title="Frequently Asked Questions" 
                        subtitle="Key questions and answers regarding this topic"
                        style={{ background: 'transparent', padding: '1rem 0' }}
                    />
                </div>
            )}
        </article>
    );
};

export default BlogDetailPage;
