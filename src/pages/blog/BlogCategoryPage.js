import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const BlogCategoryPage = () => {
    const { slug } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const formattedCategory = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    useEffect(() => {
        // Mock fetch based on category
        fetch(`https://api.web.vayunexsolution.com/api/blogs?status=published&category=${slug}`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setBlogs(data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [slug]);

    return (
        <div className="blog-category-page" style={{ paddingTop: '100px', minHeight: '80vh', maxWidth: '1200px', margin: '0 auto', padding: '100px 2rem 50px' }}>
            <SEO 
                title={`${formattedCategory} Articles | Vayunex Blog`}
                description={`Read the latest insights and articles about ${formattedCategory} from the Vayunex engineering team.`}
                keywords={`${slug} blog, ${formattedCategory} tutorials, Vayunex`}
            />
            
            <Breadcrumbs customCrumbs={[
                { name: 'Home', path: '/' },
                { name: 'Blog', path: '/blog' },
                { name: formattedCategory, path: `/blog/category/${slug}` }
            ]} />
            
            <h1 style={{ fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--primary-color)' }}>{formattedCategory}</span> Insights
            </h1>

            {loading ? (
                <div style={{ color: 'var(--text-primary)' }}>Loading articles...</div>
            ) : blogs.length === 0 ? (
                <div style={{ color: 'var(--text-primary)' }}>No articles found in this category. Check back soon!</div>
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

export default BlogCategoryPage;
