'use client';

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import QuickAnswers from '../../components/common/QuickAnswers';
import FAQAccordion from '../../components/common/FAQAccordion';
import './BlogDetailPage.css';

const BlogDetailPage = ({ slug: propSlug }) => {
    let slug = propSlug;
    try {
        const params = useParams();
        if (!slug && params) slug = params.slug;
    } catch (e) {}

    if (!slug && typeof window !== 'undefined') {
        const pathSegments = window.location.pathname.split('/').filter(Boolean);
        const blogIdx = pathSegments.indexOf('blog');
        if (blogIdx !== -1 && pathSegments[blogIdx + 1]) {
            slug = pathSegments[blogIdx + 1];
        }
    }
    slug = slug || '';

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [readingProgress, setReadingProgress] = useState(0);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setReadingProgress(Math.min(progress, 100));
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        let activeSlug = slug;
        if (!activeSlug && typeof window !== 'undefined') {
            const pathSegments = window.location.pathname.split('/').filter(Boolean);
            const blogIdx = pathSegments.indexOf('blog');
            if (blogIdx !== -1 && pathSegments[blogIdx + 1]) {
                activeSlug = pathSegments[blogIdx + 1];
            }
        }
        if (!activeSlug) { setLoading(false); return; }

        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({ event: 'blog_view', blog_slug: activeSlug });
        }

        const formatTitle = (s) => s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

        fetch(`https://api.web.vayunexsolution.com/api/blogs/${activeSlug}`)
            .then(res => res.json())
            .then(data => {
                if (data && !data.error && data.title) {
                    setBlog(data);
                } else {
                    // Blog not found — show not found state, no fake content
                    setBlog(null);
                }
                setLoading(false);
            })
            .catch(() => {
                // API unreachable — show not found state
                setBlog(null);
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return (
            <div className="blog-loading-screen">
                <div className="blog-loader">
                    <div className="loader-ring"></div>
                    <p>Loading article...</p>
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="blog-not-found">
                <div className="not-found-icon">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </div>
                <h1>Article Not Found</h1>
                <p>The article you are looking for does not exist or has been moved.</p>
                <Link to="/blog" className="back-to-blog-btn">Back to Blog</Link>
            </div>
        );
    }

    const cleanBlogHtml = (html) => {
        if (!html) return '';
        let cleaned = html.replace(/\*\*/g, '');
        while (/<strong>\s*<strong>/i.test(cleaned)) cleaned = cleaned.replace(/<strong>\s*<strong>/gi, '<strong>');
        while (/<\/strong>\s*<\/strong>/i.test(cleaned)) cleaned = cleaned.replace(/<\/strong>\s*<\/strong>/gi, '</strong>');
        cleaned = cleaned.replace(/<(h[1-6])>\s*<strong>(.*?)<\/strong>\s*<\/\1>/gi, '<$1>$2</$1>');
        cleaned = cleaned.replace(/<p>\s*<strong>(.*?)<\/strong>\s*<\/p>/gi, '<p>$1</p>');
        cleaned = cleaned.replace(/<li>\s*<strong>([^:]+):\s*([^<]+)<\/strong>\s*<\/li>/gi, '<li><strong>$1:</strong> $2</li>');
        cleaned = cleaned.replace(/<p>\s*<strong>([^:]+):\s*([^<]+)<\/strong>\s*<\/p>/gi, '<p><strong>$1:</strong> $2</p>');
        return cleaned;
    };

    let faqs = [];
    if (blog.faqJson) {
        try { faqs = typeof blog.faqJson === 'string' ? JSON.parse(blog.faqJson) : blog.faqJson; }
        catch (e) { console.error('FAQ parse error:', e); }
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": blog.seoTitle || blog.title,
        "description": blog.seoDescription || blog.excerpt,
        "image": blog.featuredImage || "https://www.vayunexsolution.com/assets/og-default.jpg",
        "author": {
            "@type": "Person",
            "name": blog.author,
            "worksFor": { "@type": "Organization", "name": "Vayunex Solution" }
        },
        "publisher": {
            "@type": "Organization",
            "name": "Vayunex Solution",
            "logo": { "@type": "ImageObject", "url": "https://www.vayunexsolution.com/logo.png" }
        },
        "datePublished": blog.createdAt,
        "dateModified": blog.updatedAt || blog.createdAt,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": typeof window !== 'undefined' ? window.location.href : `https://www.vayunexsolution.com/blog/${slug}`
        }
    };

    const faqSchema = faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
    } : null;

    const publishDate = new Date(blog.createdAt);
    const wordCount = blog.content ? blog.content.replace(/<[^>]*>/g, '').split(/\s+/).length : 1000;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    const handleCopyLink = () => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(window.location.href).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
        }
    };

    const currentUrl = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';
    const encodedTitle = encodeURIComponent(blog.title);

    return (
        <>
            <div className="reading-progress-bar" style={{ width: `${readingProgress}%` }} />

            <article className="blog-detail-wrapper">
                <SEO
                    title={blog.seoTitle || blog.title}
                    description={blog.seoDescription || blog.excerpt}
                    imageUrl={blog.featuredImage}
                    structuredData={articleSchema}
                    faqData={faqSchema}
                    type="article"
                />

                {/* â”€â”€ Hero â”€â”€ */}
                <div className="blog-hero">
                    <div className="blog-hero-bg">
                        <div className="blog-hero-orb blog-hero-orb-1" />
                        <div className="blog-hero-orb blog-hero-orb-2" />
                        <div className="blog-hero-grid" />
                    </div>
                    <div className="blog-hero-content">
                        <Breadcrumbs customCrumbs={[
                            { name: 'Home', path: '/' },
                            { name: 'Blog', path: '/blog' },
                            { name: blog.title, path: `/blog/${blog.slug || slug}` }
                        ]} />

                        {blog.category && (
                            <span className="blog-category-badge">{blog.category}</span>
                        )}

                        <h1 className="blog-hero-title">{blog.title}</h1>

                        {blog.excerpt && (
                            <p className="blog-hero-excerpt">{blog.excerpt}</p>
                        )}

                        <div className="blog-meta-row">
                            <div className="blog-meta-author">
                                <div className="blog-author-avatar">
                                    {(blog.author || 'V').charAt(0).toUpperCase()}
                                </div>
                                <div className="blog-author-info">
                                    <span className="blog-author-name">{blog.author || 'Vayunex Engineering Team'}</span>
                                    <span className="blog-author-role">Vayunex Solution</span>
                                </div>
                            </div>
                            <div className="blog-meta-stats">
                                <span className="blog-meta-item">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                    {publishDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                                </span>
                                <span className="blog-meta-sep">Â·</span>
                                <span className="blog-meta-item">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                    {readTime} min read
                                </span>
                                {blog.viewCount > 0 && (
                                    <>
                                        <span className="blog-meta-sep">Â·</span>
                                        <span className="blog-meta-item">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                            {blog.viewCount.toLocaleString()} views
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* â”€â”€ Body â”€â”€ */}
                <div className="blog-body">
                    <div className="blog-content-grid">

                        {/* Main Column */}
                        <main className="blog-main-col">

                            {blog.featuredImage && (
                                <div className="blog-featured-image-wrap">
                                    <img src={blog.featuredImage} alt={blog.title} className="blog-featured-image" />
                                </div>
                            )}

                            {(blog.aiSummary || blog.excerpt) && (
                                <QuickAnswers title="Key AI Takeaways" answer={blog.aiSummary || blog.excerpt} />
                            )}

                            <div
                                className="blog-article-content"
                                dangerouslySetInnerHTML={{ __html: cleanBlogHtml(blog.content) }}
                            />

                            {blog.tags && blog.tags.length > 0 && (
                                <div className="blog-tags">
                                    <span className="blog-tags-label">Tags:</span>
                                    {blog.tags.map((tag, i) => (
                                        <span key={i} className="blog-tag">{tag}</span>
                                    ))}
                                </div>
                            )}

                            {/* Share Strip */}
                            <div className="blog-footer-strip">
                                <span className="blog-share-label">Share this article</span>
                                <div className="blog-share-buttons">
                                    <a href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${currentUrl}`}
                                        target="_blank" rel="noopener noreferrer" className="share-btn share-twitter">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                        X / Twitter
                                    </a>
                                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
                                        target="_blank" rel="noopener noreferrer" className="share-btn share-linkedin">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                        LinkedIn
                                    </a>
                                    <button onClick={handleCopyLink} className={`share-btn share-copy ${copied ? 'copied' : ''}`}>
                                        {copied
                                            ? <><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Copied!</>
                                            : <><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg> Copy Link</>
                                        }
                                    </button>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            {Array.isArray(faqs) && faqs.length > 0 && (
                                <section className="blog-faq-section">
                                    <div className="blog-faq-header">
                                        <div className="blog-faq-badge">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                                            FAQ
                                        </div>
                                        <h2 className="blog-faq-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
                                        <p className="blog-faq-subtitle">Everything you need to know â€” answered by the Vayunex engineering team.</p>
                                    </div>
                                    <FAQAccordion
                                        faqs={faqs}
                                        title=""
                                        subtitle=""
                                        className="blog-inline-faq"
                                    />
                                </section>
                            )}

                            {/* CTA Card */}
                            <div className="blog-cta-card">
                                <div className="blog-cta-glow" />
                                <div className="blog-cta-badge">Vayunex Solution</div>
                                <h3 className="blog-cta-heading">Ready to Transform Your Digital Strategy?</h3>
                                <p className="blog-cta-text">Our engineering architects are ready to help you build scalable, AI-powered enterprise solutions tailored to your business goals.</p>
                                <div className="blog-cta-actions">
                                    <Link to="/contact" className="blog-cta-primary">Talk to Our Team</Link>
                                    <Link to="/services" className="blog-cta-secondary">Explore Services</Link>
                                </div>
                            </div>

                        </main>

                        {/* Sidebar */}
                        <aside className="blog-sidebar">
                            <div className="blog-sidebar-sticky">

                                {/* About Author */}
                                <div className="sidebar-card">
                                    <h4 className="sidebar-card-title">About the Author</h4>
                                    <div className="sidebar-author">
                                        <div className="sidebar-author-avatar">
                                            {(blog.author || 'V').charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="sidebar-author-name">{blog.author || 'Vayunex Engineering Team'}</p>
                                            <p className="sidebar-author-role">Engineering &amp; AI at Vayunex</p>
                                        </div>
                                    </div>
                                    <p className="sidebar-author-bio">Our engineering team shares expertise on enterprise platforms, AI workflows, and modern web architecture.</p>
                                </div>

                                {/* Share This Article */}
                                <div className="sidebar-card sidebar-share-card">
                                    <h4 className="sidebar-card-title">Share This Article</h4>
                                    <p className="sidebar-share-subtitle">Found this helpful? Share it with your network.</p>
                                    <div className="sidebar-share-grid">
                                        <a
                                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
                                            target="_blank" rel="noopener noreferrer"
                                            className="sidebar-share-btn sidebar-share-linkedin"
                                            aria-label="Share on LinkedIn"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                            <span>LinkedIn</span>
                                        </a>
                                        <a
                                            href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${currentUrl}&via=vayunexsolution`}
                                            target="_blank" rel="noopener noreferrer"
                                            className="sidebar-share-btn sidebar-share-twitter"
                                            aria-label="Share on X / Twitter"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                            <span>X / Twitter</span>
                                        </a>
                                        <a
                                            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                                            target="_blank" rel="noopener noreferrer"
                                            className="sidebar-share-btn sidebar-share-facebook"
                                            aria-label="Share on Facebook"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                            <span>Facebook</span>
                                        </a>
                                        <a
                                            href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${currentUrl}`}
                                            target="_blank" rel="noopener noreferrer"
                                            className="sidebar-share-btn sidebar-share-whatsapp"
                                            aria-label="Share on WhatsApp"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                            <span>WhatsApp</span>
                                        </a>
                                    </div>
                                    <button onClick={handleCopyLink} className={`sidebar-copy-link ${copied ? 'copied' : ''}`}>
                                        {copied ? (
                                            <>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                                                Link Copied!
                                            </>
                                        ) : (
                                            <>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
                                                Copy Article Link
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* About Vayunex Solution */}
                                <div className="sidebar-card sidebar-vayunex-card">
                                    <div className="sidebar-vayunex-logo">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="2" x2="12" y2="22"/><path d="M2 8.5l10 7 10-7"/></svg>
                                        <span>Vayunex Solution</span>
                                    </div>
                                    <p className="sidebar-vayunex-desc">
                                        Leading IT company in Chandigarh, India. We deliver enterprise web development,
                                        AI &amp; data science, digital marketing, and recruitment solutions.
                                    </p>
                                    <div className="sidebar-vayunex-details">
                                        <div className="sidebar-detail-item">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                            <span>Mohali, Punjab, India</span>
                                        </div>
                                        <div className="sidebar-detail-item">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                            <span>info@vayunexsolution.com</span>
                                        </div>
                                        <div className="sidebar-detail-item">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                                            <span>+91-89307 33725</span>
                                        </div>
                                    </div>
                                    <div className="sidebar-social-links">
                                        <a href="https://www.linkedin.com/company/vayunex-solution/" target="_blank" rel="noopener noreferrer" className="social-link social-linkedin" aria-label="LinkedIn">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                        </a>
                                        <a href="https://www.instagram.com/vayunexsolution" target="_blank" rel="noopener noreferrer" className="social-link social-instagram" aria-label="Instagram">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                                        </a>
                                        <a href="https://www.facebook.com/share/1B52ioXjqw/" target="_blank" rel="noopener noreferrer" className="social-link social-facebook" aria-label="Facebook">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                        </a>
                                        <a href="https://twitter.com/vayunexsolution" target="_blank" rel="noopener noreferrer" className="social-link social-twitter" aria-label="X / Twitter">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                        </a>
                                    </div>
                                </div>

                                {/* AI & SEO Indexed */}
                                <div className="sidebar-card sidebar-ai-card">
                                    <div className="sidebar-ai-icon">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="15" x2="8" y2="17"/><line x1="16" y1="15" x2="16" y2="17"/><line x1="1" y1="14" x2="3" y2="14"/><line x1="21" y1="14" x2="23" y2="14"/></svg>
                                    </div>
                                    <h4 className="sidebar-ai-title">AI &amp; SEO Indexed</h4>
                                    <p className="sidebar-ai-text">Structured with rich schema markup for Google, Bing, ChatGPT, Perplexity &amp; Gemini AI agents.</p>
                                    <div className="sidebar-ai-badges">
                                        <span className="ai-badge">Schema.org</span>
                                        <span className="ai-badge">FAQ Schema</span>
                                        <span className="ai-badge">Article LD+JSON</span>
                                    </div>
                                </div>

                            </div>
                        </aside>


                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogDetailPage;


