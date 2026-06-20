const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const slugify = require('slugify');

exports.getAllTags = async (req, res) => {
    try {
        const tags = await prisma.tag.findMany({ orderBy: { name: 'asc' } });
        res.status(200).json(tags);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createTag = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) return res.status(400).json({ error: 'Tag name is required.' });
        const slug = slugify(name, { lower: true, strict: true });
        const tag = await prisma.tag.create({ data: { name, slug } });
        res.status(201).json(tag);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTag = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.tag.delete({ where: { id: parseInt(id) } });
        res.status(200).json({ message: 'Tag deleted.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
