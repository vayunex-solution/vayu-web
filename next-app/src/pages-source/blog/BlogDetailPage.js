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

        const makeFallbackFaqs = (title) => JSON.stringify([
            { question: `What is ${title}?`, answer: `${title} refers to modern engineering practices and methodologies employed by leading enterprises for scalability, performance, and reliability in digital systems.` },
            { question: `How does Vayunex Solution approach ${title}?`, answer: `Our engineering architects design custom solutions tailored to your business objectives, leveraging proven frameworks and AI-augmented workflows.` },
            { question: `Which industries benefit from ${title}?`, answer: `Fintech, healthcare, retail, and SaaS enterprises benefit the most as they require high-availability, secure, and data-driven platforms.` },
            { question: `How do I get started with Vayunex Solution?`, answer: `Reach our engineering team via the Contact page or email info@vayunexsolution.com. We offer a free initial consultation to assess your requirements.` }
        ]);

        fetch(`https://api.web.vayunexsolution.com/api/blogs/${activeSlug}`)
            .then(res => res.json())
            .then(data => {
                if (data && !data.error && data.title) {
                    setBlog(data);
                } else {
                    const title = formatTitle(activeSlug);
                    setBlog({
                        title,
                        author: 'Vayunex Engineering Team',
                        createdAt: new Date().toISOString(),
                        excerpt: `Architectural insights, best practices, and engineering analysis on ${title}.`,
                        content: `<p>Modern software engineering requires continuous innovation and reliable technical execution. In this briefing, the <strong>Vayunex Solution</strong> engineering team explores key patterns, system tradeoffs, and strategic advantages for <strong>${title}</strong>.</p><h3>Core Engineering Takeaways</h3><ul><li><strong>Scalable Architecture:</strong> Design decoupled modules that scale horizontally as traffic surges.</li><li><strong>Sub-Second Performance:</strong> Optimized asset loading and API efficiency to maximize engagement.</li><li><strong>Enterprise-Grade Security:</strong> Built-in zero-trust security postures protecting user data.</li></ul><p>Looking to build custom enterprise platforms or scale your tech stack? Consult with our principal engineering architects today.</p>`,
                        faqJson: makeFallbackFaqs(title)
                    });
                }
                setLoading(false);
            })
            .catch(() => {
                const title = formatTitle(activeSlug);
                setBlog({
                    title,
                    author: 'Vayunex Engineering Team',
                    createdAt: new Date().toISOString(),
                    excerpt: `Engineering analysis on ${title}.`,
                    content: `<p>In this technical overview, our engineering leadership outlines core principles for <strong>${title}</strong>.</p><p>We specialize in enterprise web systems, AI workflows, and high-performance digital platforms.</p>`,
                    faqJson: makeFallbackFaqs(title)
                });
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return (
            <div className="blog-loading-screen">
                <div className="blog-loader">
                    <div className="loader-ring"></div>
                    <p>Loading articleâ€¦</p>
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="blog-not-found">
                <span className="not-found-icon">ðŸ“„</span>
                <h1>Article Not Found</h1>
                <p>The article youâ€™re looking for doesnâ€™t exist or has been moved.</p>
                <Link to="/blog" className="back-to-blog-btn">â† Back to Blog</Link>
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

                                <div className="sidebar-card">
                                    <h4 className="sidebar-card-title">About the Author</h4>
                                    <div className="sidebar-author">
                                        <div className="sidebar-author-avatar">
                                            {(blog.author || 'V').charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="sidebar-author-name">{blog.author || 'Vayunex Engineering Team'}</p>
                                            <p className="sidebar-author-role">Engineering & AI at Vayunex</p>
                                        </div>
                                    </div>
                                    <p className="sidebar-author-bio">Our engineering team shares expertise on enterprise platforms, AI workflows, and modern web architecture.</p>
                                </div>

                                <div className="sidebar-card">
                                    <h4 className="sidebar-card-title">Quick Navigation</h4>
                                    <ul className="sidebar-nav-list">
                                        <li><Link to="/services" className="sidebar-nav-link">â†’ Our Services</Link></li>
                                        <li><Link to="/products" className="sidebar-nav-link">â†’ Products</Link></li>
                                        <li><Link to="/about" className="sidebar-nav-link">â†’ About Vayunex</Link></li>
                                        <li><Link to="/contact" className="sidebar-nav-link">â†’ Contact Us</Link></li>
                                    </ul>
                                </div>

                                <div className="sidebar-card sidebar-ai-card">
                                    <div className="sidebar-ai-icon">ðŸ¤–</div>
                                    <h4 className="sidebar-ai-title">AI & SEO Indexed</h4>
                                    <p className="sidebar-ai-text">Structured with rich schema markup for Google, Bing, ChatGPT, Perplexity & Gemini AI agents.</p>
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


