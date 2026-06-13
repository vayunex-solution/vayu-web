const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const slugify = require('slugify');

exports.getAllBlogs = async (req, res) => {
    try {
        const { status } = req.query;
        const query = status ? { status } : {};
        const blogs = await prisma.blog.findMany({
            where: query,
            include: { category: true, tags: true },
            orderBy: { createdAt: 'desc' }
        });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBlogBySlug = async (req, res) => {
    try {
        const blog = await prisma.blog.findUnique({
            where: { slug: req.params.slug },
            include: { category: true, tags: true }
        });
        if (!blog) return res.status(404).json({ error: 'Blog not found' });
        
        // Increment view count
        await prisma.blog.update({
            where: { slug: req.params.slug },
            data: { viewCount: { increment: 1 } }
        });
        
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createBlog = async (req, res) => {
    try {
        const { title, excerpt, content, featuredImage, status, categoryId, seoTitle, seoDescription } = req.body;
        const slug = slugify(title, { lower: true, strict: true });
        
        const newBlog = await prisma.blog.create({
            data: {
                title,
                slug,
                excerpt,
                content,
                featuredImage,
                status,
                categoryId: categoryId ? parseInt(categoryId) : null,
                seoTitle,
                seoDescription
            }
        });
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        
        if (data.title && !data.slug) {
            data.slug = slugify(data.title, { lower: true, strict: true });
        }
        
        const updatedBlog = await prisma.blog.update({
            where: { id: parseInt(id) },
            data
        });
        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.blog.delete({ where: { id: parseInt(id) } });
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.searchBlogs = async (req, res) => {
    try {
        const { q } = req.query;
        if (!q) return res.status(400).json({ error: 'Query parameter "q" is required' });
        
        const blogs = await prisma.blog.findMany({
            where: {
                OR: [
                    { title: { contains: q } },
                    { content: { contains: q } }
                ]
            },
            include: { category: true }
        });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
