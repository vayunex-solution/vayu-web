'use client';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import { fallbackLeadershipBlogs } from '../../data/leadershipBlogsData';

const BlogListPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch blogs from backend API
        fetch('https://api.web.vayunexsolution.com/api/blogs?status=published')
            .then(res => res.json())
            .then(data => {
                const apiBlogs = Array.isArray(data) ? data : [];
                // Merge fallback leadership blogs if not already returned from API
                const existingSlugs = new Set(apiBlogs.map(b => b.slug));
                const missingFallbacks = fallbackLeadershipBlogs.filter(b => !existingSlugs.has(b.slug));
                setBlogs([...apiBlogs, ...missingFallbacks]);
                setLoading(false);
            })
            .catch(err => {
                console.error('API fetch error, using local fallback:', err);
                setBlogs(fallbackLeadershipBlogs);
                setLoading(false);
            });
    }, []);

    const schema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Vayunex Technical Blog",
        "url": "https://www.vayunexsolution.com/blog"
    };

    return (
        <div className="blog-list-page" style={{ paddingTop: '120px', minHeight: '80vh', maxWidth: '1200px', margin: '0 auto', padding: '120px 2rem 60px' }}>
            <SEO 
                title="Engineering & Tech Insights | Vayunex Solution"
                description="Read executive and architectural insights on enterprise software delivery, scalable SaaS architecture, and systems engineering from Vayunex leaders."
                keywords="enterprise software delivery, systems architecture, tech blog, software engineering, Vayunex blog"
                structuredData={schema}
            />
            
            <Breadcrumbs />
            
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <span style={{ 
                    display: 'inline-block', 
                    padding: '6px 14px', 
                    borderRadius: '999px', 
                    background: 'rgba(0, 242, 254, 0.08)', 
                    border: '1px solid rgba(0, 242, 254, 0.25)', 
                    color: '#00f2fe', 
                    fontSize: '0.85rem', 
                    fontWeight: '600', 
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    marginBottom: '1rem' 
                }}>
                    Engineering & Thought Leadership
                </span>
                <h1 style={{ fontSize: '2.75rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                    Vayunex <span style={{ background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Insights</span>
                </h1>
                <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto', lineHeight: '1.6' }}>
                    Deep technical guides, software delivery methodologies, and scalable systems architecture authored by Vayunex leadership.
                </p>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '60px 0' }}>
                    <div style={{ display: 'inline-block', width: '32px', height: '32px', border: '3px solid rgba(0,242,254,0.2)', borderTopColor: '#00f2fe', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                    <p style={{ marginTop: '14px' }}>Loading articles...</p>
                </div>
            ) : blogs.length === 0 ? (
                <div style={{ textAlign: 'center', color: 'var(--text-primary)', padding: '60px 0' }}>No articles published yet. Check back soon!</div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
                    {blogs.map(blog => {
                        const author = blog.author || 'Vayunex Team';
                        const categoryName = typeof blog.category === 'object' ? (blog.category?.name || 'Engineering') : (blog.category || 'Engineering');
                        const isLeader = author === 'Ved Prakash' || author === 'Ved Parkash' || author === 'Sandeep Kumar';
                        const leaderProfileSlug = (author === 'Ved Prakash' || author === 'Ved Parkash') ? 'ved-prakash' : author === 'Sandeep Kumar' ? 'sandeep-kumar' : null;

                        return (
                            <article 
                                key={blog.id || blog.slug} 
                                style={{ 
                                    background: 'var(--bg-secondary)', 
                                    border: '1px solid var(--border-color)', 
                                    borderRadius: '16px', 
                                    padding: '2rem', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    justifyContent: 'space-between',
                                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                                    boxShadow: '0 4px 20px -2px rgba(0,0,0,0.06)'
                                }}
                            >
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '8px' }}>
                                        <span style={{ 
                                            fontSize: '0.78rem', 
                                            fontWeight: '700', 
                                            textTransform: 'uppercase', 
                                            color: '#00f2fe', 
                                            letterSpacing: '0.5px' 
                                        }}>
                                            {categoryName}
                                        </span>
                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                            {new Date(blog.createdAt || blog.publishDate || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                    </div>

                                    <Link to={`/blog/${blog.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <h2 style={{ fontSize: '1.35rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.85rem', lineHeight: '1.4' }}>
                                            {blog.title}
                                        </h2>
                                    </Link>

                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                        {blog.excerpt || blog.seoDescription || (blog.aiSummary ? blog.aiSummary.split('\n')[0] : '')}
                                    </p>
                                </div>

                                <div>
                                    <div style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'space-between', 
                                        paddingTop: '1.25rem', 
                                        borderTop: '1px solid var(--border-color)' 
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            {leaderProfileSlug ? (
                                                <Link 
                                                    to={`/people/${leaderProfileSlug}/`} 
                                                    style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'inherit' }}
                                                    title={`View ${author}'s profile`}
                                                >
                                                    <span style={{ 
                                                        width: '32px', 
                                                        height: '32px', 
                                                        borderRadius: '50%', 
                                                        background: 'linear-gradient(135deg, #00f2fe, #4facfe)', 
                                                        color: '#0a0f1d', 
                                                        display: 'inline-flex', 
                                                        alignItems: 'center', 
                                                        justifyContent: 'center', 
                                                        fontWeight: '800', 
                                                        fontSize: '0.8rem' 
                                                    }}>
                                                        {author.split(' ').map(n=>n[0]).join('')}
                                                    </span>
                                                    <div>
                                                        <span style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-primary)', display: 'block' }}>{author}</span>
                                                        <span style={{ fontSize: '0.75rem', color: '#00f2fe' }}>View Profile &rarr;</span>
                                                    </div>
                                                </Link>
                                            ) : (
                                                <span style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                                                    By {author}
                                                </span>
                                            )}
                                        </div>

                                        <Link 
                                            to={`/blog/${blog.slug}`} 
                                            style={{ 
                                                color: 'var(--primary-color)', 
                                                fontWeight: '700', 
                                                fontSize: '0.9rem', 
                                                textDecoration: 'none',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '4px'
                                            }}
                                        >
                                            Read &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default BlogListPage;
