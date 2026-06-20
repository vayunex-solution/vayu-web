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

exports.getBlogById = async (req, res) => {
    try {
        const blog = await prisma.blog.findUnique({
            where: { id: parseInt(req.params.id) },
            include: { category: true, tags: true }
        });
        if (!blog) return res.status(404).json({ error: 'Blog not found' });
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createBlog = async (req, res) => {
    try {
        const {
            title, excerpt, content, featuredImage, status,
            categoryId, seoTitle, seoDescription,
            aiSummary, faqJson, publishDate, tagIds
        } = req.body;

        const slug = slugify(title, { lower: true, strict: true });

        const newBlog = await prisma.blog.create({
            data: {
                title,
                slug,
                excerpt,
                content,
                featuredImage,
                status: status || 'draft',
                categoryId: categoryId ? parseInt(categoryId) : null,
                seoTitle,
                seoDescription,
                aiSummary,
                faqJson,
                publishDate: publishDate ? new Date(publishDate) : null,
                tags: tagIds && tagIds.length > 0
                    ? { connect: tagIds.map(id => ({ id: parseInt(id) })) }
                    : undefined
            },
            include: { category: true, tags: true }
        });
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            title, excerpt, content, featuredImage, status,
            categoryId, seoTitle, seoDescription,
            aiSummary, faqJson, publishDate, tagIds
        } = req.body;

        const updateData = {};
        if (title !== undefined) {
            updateData.title = title;
            updateData.slug = slugify(title, { lower: true, strict: true });
        }
        if (excerpt !== undefined) updateData.excerpt = excerpt;
        if (content !== undefined) updateData.content = content;
        if (featuredImage !== undefined) updateData.featuredImage = featuredImage;
        if (status !== undefined) updateData.status = status;
        if (categoryId !== undefined) updateData.categoryId = categoryId ? parseInt(categoryId) : null;
        if (seoTitle !== undefined) updateData.seoTitle = seoTitle;
        if (seoDescription !== undefined) updateData.seoDescription = seoDescription;
        if (aiSummary !== undefined) updateData.aiSummary = aiSummary;
        if (faqJson !== undefined) updateData.faqJson = faqJson;
        if (publishDate !== undefined) updateData.publishDate = publishDate ? new Date(publishDate) : null;
        if (tagIds !== undefined) {
            updateData.tags = { set: tagIds.map(id => ({ id: parseInt(id) })) };
        }

        const updatedBlog = await prisma.blog.update({
            where: { id: parseInt(id) },
            data: updateData,
            include: { category: true, tags: true }
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

exports.generateBlog = async (req, res) => {
    try {
        const { topic } = req.body;
        if (!topic) {
            return res.status(400).json({ error: 'Topic parameter is required.' });
        }

        const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyCIa5rM-IEefbgmGAaz5xGf3XbsJRsXx2g';
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

        const prompt = `Write a comprehensive, professional, and SEO-optimized blog post for the topic/keywords: "${topic}".
Instructions:
- Write the full blog post content in formatted HTML ready to be injected into a WYSIWYG editor. Use headings (<h2>, <h3>), paragraphs (<p>), bold text (<strong>), lists (<ul>, <li>), blockquotes, etc. Do not include raw CSS styling.
- Create a compelling, clickable Title.
- Write a short, engaging Excerpt of 1-2 sentences.
- Generate an AI Summary containing key takeaways in a clean bulleted markdown list format.
- Generate an optimized SEO Title (maximum 60 characters) and SEO Description (maximum 160 characters).
- Include a list of 3-4 FAQ items with 'question' and 'answer' properties.
- Return the response strictly as a JSON object with the following schema:
{
  "title": "...",
  "content": "...",
  "excerpt": "...",
  "aiSummary": "...",
  "seoTitle": "...",
  "seoDescription": "...",
  "faq": [
    { "question": "...", "answer": "..." }
  ]
}
Return ONLY this JSON object. Do not wrap the JSON output inside Markdown code blocks (e.g. do not use \`\`\`json ... \`\`\`).`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    responseMimeType: "application/json"
                }
            })
        });

        const data = await response.json();
        
        if (!response.ok) {
            return res.status(response.status).json({ error: data.error?.message || 'Failed calling Gemini API.' });
        }

        const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!textResponse) {
            return res.status(500).json({ error: 'No content returned from Gemini API.' });
        }

        let cleanedText = textResponse.trim();
        if (cleanedText.startsWith('```json')) {
            cleanedText = cleanedText.substring(7);
        } else if (cleanedText.startsWith('```')) {
            cleanedText = cleanedText.substring(3);
        }
        if (cleanedText.endsWith('```')) {
            cleanedText = cleanedText.substring(0, cleanedText.length - 3);
        }
        cleanedText = cleanedText.trim();

        const parsedBlog = JSON.parse(cleanedText);
        res.status(200).json(parsedBlog);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
