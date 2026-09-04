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
        const sanitizedContent = content ? cleanHtmlContent(content) : content;

        const newBlog = await prisma.blog.create({
            data: {
                title,
                slug,
                excerpt,
                content: sanitizedContent,
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
        if (content !== undefined) updateData.content = cleanHtmlContent(content);
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

// Robust cleaner to sanitize HTML, remove stray markdown asterisks (**), collapse nested strong tags, and format lists
function cleanHtmlContent(html) {
    if (!html) return '';
    let cleaned = html;

    // 1. If Markdown headers like "## Title" or "### Title" leaked into HTML, convert them
    cleaned = cleaned.replace(/^###\s+(.*)$/gim, '<h3>$1</h3>');
    cleaned = cleaned.replace(/^##\s+(.*)$/gim, '<h2>$1</h2>');
    cleaned = cleaned.replace(/^#\s+(.*)$/gim, '<h1>$1</h1>');

    // 2. Remove all stray Markdown asterisks (e.g. "**", "*") left inside or around HTML tags
    cleaned = cleaned.replace(/\*\*/g, '');

    // 3. Collapse nested strong tags: <strong><strong>...</strong></strong> -> <strong>...</strong>
    while (/<strong>\s*<strong>/i.test(cleaned)) {
        cleaned = cleaned.replace(/<strong>\s*<strong>/gi, '<strong>');
    }
    while (/<\/strong>\s*<\/strong>/i.test(cleaned)) {
        cleaned = cleaned.replace(/<\/strong>\s*<\/strong>/gi, '</strong>');
    }

    // 4. Remove <strong> wrapping inside headings: <h3><strong>Heading</strong></h3> -> <h3>Heading</h3>
    cleaned = cleaned.replace(/<(h[1-6])>\s*<strong>(.*?)<\/strong>\s*<\/\1>/gi, '<$1>$2</$1>');

    // 5. If an entire <p> is wrapped in <strong>...</strong>, unwrap it (paragraphs shouldn't be fully bolded)
    cleaned = cleaned.replace(/<p>\s*<strong>(.*?)<\/strong>\s*<\/p>/gi, '<p>$1</p>');

    // 6. In <li> or <p>, if <strong> contains a colon (e.g. <strong>Title: Description</strong>),
    // make sure only the title before the colon is bold, and the rest is normal text
    cleaned = cleaned.replace(/<li>\s*<strong>([^:]+):\s*([^<]+)<\/strong>\s*<\/li>/gi, '<li><strong>$1:</strong> $2</li>');
    cleaned = cleaned.replace(/<p>\s*<strong>([^:]+):\s*([^<]+)<\/strong>\s*<\/p>/gi, '<p><strong>$1:</strong> $2</p>');

    return cleaned.trim();
}

// Helper to convert Markdown to clean HTML for WYSIWYG editor
function ensureHtmlContent(text) {
    if (!text) return '';
    let html = text;
    if (!/<[a-z][\s\S]*>/i.test(text)) {
        html = text
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
    return cleanHtmlContent(html);
}

// Helper to extract JSON safely from LLM output (including handling unescaped control chars and newlines in strings)
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

    try {
        return JSON.parse(str);
    } catch (e1) {
        try {
            let inString = false;
            let escaped = false;
            let fixed = '';
            for (let i = 0; i < str.length; i++) {
                const char = str[i];
                if (char === '"' && !escaped) {
                    inString = !inString;
                    fixed += char;
                } else if (inString) {
                    if (char === '\n') {
                        fixed += '\\n';
                    } else if (char === '\r') {
                        fixed += '\\r';
                    } else if (char === '\t') {
                        fixed += '\\t';
                    } else {
                        fixed += char;
                        if (char === '\\') {
                            escaped = !escaped;
                            continue;
                        }
                    }
                } else {
                    fixed += char;
                }
                escaped = false;
            }
            return JSON.parse(fixed);
        } catch (e2) {
            throw e1;
        }
    }
}

exports.generateBlog = async (req, res) => {
    // Explicitly guarantee CORS header on this endpoint
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Credentials', 'true');
    }

    try {
        const { topic } = req.body;
        if (!topic) {
            return res.status(400).json({ error: 'Topic parameter is required.' });
        }

        const nvidiaKey = process.env.NVIDIA_API_KEY;
        const geminiKey = process.env.GEMINI_API_KEY;

        const prompt = `Write a high-converting, professional, and SEO-optimized blog post for the topic: "${topic}".
Instructions:
- Write the blog post content in formatted HTML ready for a rich text editor. Use headings (<h2>, <h3>), paragraphs (<p>), bold text (<strong>), and bullet lists (<ul>, <li>).
- In bullet lists, bold ONLY the 2-3 word keyword term before the colon, like: <li><strong>Key Term:</strong> Brief description</li>. NEVER wrap entire sentences or paragraphs in <strong>.
- NEVER use markdown symbols like ** or ## inside the HTML content. Output valid clean HTML.
- Create a compelling, clickable Title (plain text, NO HTML tags).
- Write a short, engaging Excerpt of 1-2 sentences.
- Generate an AI Summary containing 3-4 key takeaways.
- Generate an optimized SEO Title (plain text, under 60 chars) and SEO Description (under 160 chars).
- Include 2-3 FAQ items with 'question' and 'answer'.
- Return ONLY a valid JSON object matching this schema:
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
Output raw JSON only without markdown code fences, backticks, or commentary.`;

        // 1. Prioritize NVIDIA NIM LLM API if key exists
        if (nvidiaKey) {
            // Default to ultra-fast meta/llama-3.2-11b-vision-instruct (takes ~15-25s vs 100s+ on large models)
            const model = process.env.NVIDIA_MODEL || 'meta/llama-3.2-11b-vision-instruct';
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 65000); // 65s safe timeout

            let response;
            try {
                response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
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
                        temperature: 0.2,
                        max_tokens: 1600
                    }),
                    signal: controller.signal
                });
            } catch (fetchErr) {
                clearTimeout(timeoutId);
                if (fetchErr.name === 'AbortError') {
                    return res.status(504).json({ error: 'NVIDIA AI request timed out. Please try again with a more specific topic.' });
                }
                throw fetchErr;
            }
            clearTimeout(timeoutId);

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
            // Strip any stray HTML tags in title and SEO fields
            if (parsedBlog.title) {
                parsedBlog.title = String(parsedBlog.title).replace(/<[^>]*>/g, '').trim();
            }
            if (parsedBlog.seoTitle) {
                parsedBlog.seoTitle = String(parsedBlog.seoTitle).replace(/<[^>]*>/g, '').trim();
            }
            if (parsedBlog.seoDescription) {
                parsedBlog.seoDescription = String(parsedBlog.seoDescription).replace(/<[^>]*>/g, '').trim();
            }
            // Format aiSummary nicely if it is an array or object
            if (typeof parsedBlog.aiSummary === 'object' && parsedBlog.aiSummary !== null) {
                if (Array.isArray(parsedBlog.aiSummary)) {
                    parsedBlog.aiSummary = parsedBlog.aiSummary.map(s => `• ${s}`).join('\n');
                } else if (parsedBlog.aiSummary.keyTakeaways) {
                    const takeaways = Array.isArray(parsedBlog.aiSummary.keyTakeaways)
                        ? parsedBlog.aiSummary.keyTakeaways
                        : [parsedBlog.aiSummary.keyTakeaways];
                    parsedBlog.aiSummary = takeaways.map(s => `• ${s}`).join('\n');
                } else {
                    parsedBlog.aiSummary = Object.values(parsedBlog.aiSummary).map(s => `• ${s}`).join('\n');
                }
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
