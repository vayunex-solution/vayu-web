import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import QuickAnswers from '../../components/common/QuickAnswers';

const BlogDetailPage = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Track blog view analytics
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

    return (
        <article className="blog-detail-page" style={{ paddingTop: '100px', minHeight: '80vh', maxWidth: '800px', margin: '0 auto', padding: '100px 2rem 50px' }}>
            <SEO 
                title={blog.seoTitle || blog.title}
                description={blog.seoDescription || blog.excerpt}
                imageUrl={blog.featuredImage}
                structuredData={articleSchema}
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
                <span style={{ marginRight: '1rem' }}><i className="fas fa-user"></i> {blog.author}</span>
                <span style={{ marginRight: '1rem' }}><i className="fas fa-calendar"></i> {new Date(blog.createdAt).toLocaleDateString()}</span>
                <span><i className="fas fa-eye"></i> {blog.viewCount} views</span>
            </div>

            {blog.excerpt && (
                <QuickAnswers 
                    title="Article Summary"
                    answer={blog.excerpt}
                />
            )}

            {blog.featuredImage && (
                <img src={blog.featuredImage} alt={blog.title} style={{ width: '100%', borderRadius: '12px', marginBottom: '2rem' }} />
            )}

            <div 
                className="blog-content" 
                style={{ color: 'var(--text-primary)', lineHeight: '1.8', fontSize: '1.1rem' }}
                dangerouslySetInnerHTML={{ __html: blog.content }} 
            />
        </article>
    );
};

export default BlogDetailPage;
