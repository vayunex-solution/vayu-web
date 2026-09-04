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

// Helper to convert Markdown to clean HTML for WYSIWYG editor
function ensureHtmlContent(text) {
    if (!text) return '';
    if (/<[a-z][\s\S]*>/i.test(text)) {
        return text;
    }
    return text
        .split(/\n\n+/)
        .map(block => {
            const trimmed = block.trim();
            if (/^###\s+(.*)/.test(trimmed)) {
                return `<h3>${trimmed.replace(/^###\s+/, '')}</h3>`;
            }
            if (/^##\s+(.*)/.test(trimmed)) {
                return `<h2>${trimmed.replace(/^##\s+/, '')}</h2>`;
            }
            if (/^#\s+(.*)/.test(trimmed)) {
                return `<h1>${trimmed.replace(/^#\s+/, '')}</h1>`;
            }
            if (/^[-*]\s+/.test(trimmed)) {
                const items = trimmed.split('\n').map(li => `<li>${li.replace(/^[-*]\s+/, '')}</li>`).join('');
                return `<ul>${items}</ul>`;
            }
            let p = trimmed
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/\n/g, '<br>');
            return `<p>${p}</p>`;
        })
        .join('');
}

// Helper to extract JSON safely from LLM output
function extractJson(text) {
    if (!text) throw new Error('Empty AI response.');
    let str = text.trim();
    if (str.startsWith('```json')) {
        str = str.replace(/^```json\s*/i, '');
    } else if (str.startsWith('```')) {
        str = str.replace(/^```\s*/, '');
    }
    if (str.endsWith('```')) {
        str = str.replace(/\s*```$/, '');
    }
    str = str.trim();

    const firstBrace = str.indexOf('{');
    const lastBrace = str.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
        str = str.substring(firstBrace, lastBrace + 1);
    }
    return JSON.parse(str);
}

exports.generateBlog = async (req, res) => {
    try {
        const { topic } = req.body;
        if (!topic) {
            return res.status(400).json({ error: 'Topic parameter is required.' });
        }

        const nvidiaKey = process.env.NVIDIA_API_KEY;
        const geminiKey = process.env.GEMINI_API_KEY;

        const prompt = `Write a comprehensive, professional, and SEO-optimized blog post for the topic/keywords: "${topic}".
Instructions:
- Write the full blog post content in formatted HTML ready to be injected into a WYSIWYG editor. Use headings (<h2>, <h3>), paragraphs (<p>), bold text (<strong>), lists (<ul>, <li>), blockquotes, etc. Do not include raw CSS styling.
- Create a compelling, clickable Title.
- Write a short, engaging Excerpt of 1-2 sentences.
- Generate an AI Summary containing key takeaways in a clean bulleted list.
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
Return ONLY this JSON object without any extra conversational text or markdown code fences.`;

        // 1. Prioritize NVIDIA NIM LLM API if key exists
        if (nvidiaKey) {
            const model = process.env.NVIDIA_MODEL || 'minimaxai/minimax-m3';
            const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${nvidiaKey}`
                },
                body: JSON.stringify({
                    model: model,
                    messages: [
                        {
                            role: 'system',
                            content: 'You are an expert SEO blog copywriter for the Vayunex platform. You always respond with ONLY a valid, parseable JSON object matching the requested schema. No code fences, no extra text.'
                        },
                        {
                            role: 'user',
                            content: prompt
                        }
                    ],
                    temperature: 0.3,
                    max_tokens: 3500
                })
            });

            const data = await response.json();
            if (!response.ok) {
                return res.status(response.status).json({
                    error: data.error?.message || data.detail || 'Failed calling NVIDIA AI API.'
                });
            }

            const rawContent = data.choices?.[0]?.message?.content;
            if (!rawContent) {
                return res.status(500).json({ error: 'No content returned from NVIDIA AI model.' });
            }

            const parsedBlog = extractJson(rawContent);
            if (parsedBlog.content) {
                parsedBlog.content = ensureHtmlContent(parsedBlog.content);
            }
            return res.status(200).json(parsedBlog);
        }

        // 2. Fallback to Gemini API if configured
        if (geminiKey) {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`;
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: { responseMimeType: 'application/json' }
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

            const parsedBlog = extractJson(textResponse);
            if (parsedBlog.content) {
                parsedBlog.content = ensureHtmlContent(parsedBlog.content);
            }
            return res.status(200).json(parsedBlog);
        }

        // Neither key found
        return res.status(500).json({
            error: 'No AI API key is configured on the server. Please add NVIDIA_API_KEY to your .env file.'
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
