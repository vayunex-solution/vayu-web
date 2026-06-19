import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const BlogListPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch blogs from our new Node backend
        // Since we are building, we will mock or fetch from /api/blogs
        fetch('https://api.web.vayunexsolution.com/api/blogs?status=published')
            .then(res => res.json())
            .then(data => {
                // mock for now to not break UI if API is down
                if (Array.isArray(data)) {
                    setBlogs(data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
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
        <div className="blog-list-page" style={{ paddingTop: '100px', minHeight: '80vh', maxWidth: '1200px', margin: '0 auto', padding: '100px 2rem 50px' }}>
            <SEO 
                title="Engineering & Tech Blog | Vayunex Solution"
                description="Read the latest insights on software engineering, AI automation, digital marketing, and enterprise IT solutions from the experts at Vayunex."
                keywords="tech blog, software engineering blog, AI automation insights, Vayunex blog"
                structuredData={schema}
            />
            
            <Breadcrumbs />
            
            <h1 style={{ fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Vayunex <span style={{ color: 'var(--primary-color)' }}>Insights</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                Engineering tutorials, product updates, and business growth strategies.
            </p>

            {loading ? (
                <div style={{ color: 'var(--text-primary)' }}>Loading articles...</div>
            ) : blogs.length === 0 ? (
                <div style={{ color: 'var(--text-primary)' }}>No articles published yet. Check back soon!</div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {blogs.map(blog => (
                        <div key={blog.id} style={{ background: 'var(--bg-secondary)', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                            <Link to={`/blog/${blog.slug}`} style={{ textDecoration: 'none' }}>
                                <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{blog.title}</h2>
                            </Link>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                {new Date(blog.createdAt).toLocaleDateString()}
                            </p>
                            <p style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>{blog.excerpt}</p>
                            <Link to={`/blog/${blog.slug}`} style={{ color: 'var(--primary-color)', fontWeight: 'bold', textDecoration: 'none' }}>
                                Read More &rarr;
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogListPage;
