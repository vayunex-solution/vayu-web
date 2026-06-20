const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getTrafficStats = async (req, res) => {
    try {
        const totalVisitors = await prisma.visitor.count();
        const uniqueVisitors = await prisma.visitor.count(); // IP based, so same
        const sessions = await prisma.session.count();
        
        const sessionsData = await prisma.session.aggregate({
            _avg: { duration: true }
        });
        const avgSessionDuration = sessionsData._avg.duration || 0;

        res.json({
            totalVisitors,
            uniqueVisitors,
            sessions,
            avgSessionDuration: Math.round(avgSessionDuration)
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPageStats = async (req, res) => {
    try {
        const topPages = await prisma.pageView.groupBy({
            by: ['pageUrl'],
            _count: { id: true },
            orderBy: { _count: { id: 'desc' } },
            take: 5
        });

        const exitPages = await prisma.pageView.groupBy({
            by: ['pageUrl'],
            where: { isExit: true },
            _count: { id: true },
            orderBy: { _count: { id: 'desc' } },
            take: 5
        });

        // Basic mock logic for dead pages and bounce rate as real calculation is complex
        res.json({
            topPages: topPages.map(p => ({ url: p.pageUrl, views: p._count.id })),
            exitPages: exitPages.map(p => ({ url: p.pageUrl, exits: p._count.id })),
            deadPages: [{ url: '/old-services', views: 0 }],
            bounceRate: 42.5 // Mock for now
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getLeadStats = async (req, res) => {
    try {
        const leads = await prisma.lead.groupBy({
            by: ['type'],
            _count: { id: true }
        });

        const stats = { WhatsApp: 0, ContactForm: 0, Career: 0, Demo: 0 };
        leads.forEach(l => {
            if (stats[l.type] !== undefined) stats[l.type] = l._count.id;
        });

        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProductStats = async (req, res) => {
    try {
        const products = await prisma.lead.groupBy({
            by: ['product'],
            where: { product: { not: null } },
            _count: { id: true }
        });

        const stats = { Jwelnex: 0, PayNex: 0, SocialNex: 0, SchoolDost: 0 };
        products.forEach(p => {
            if (stats[p.product] !== undefined) stats[p.product] = p._count.id;
        });

        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAiStats = async (req, res) => {
    try {
        const aiSources = ['ChatGPT', 'Claude', 'Perplexity', 'Gemini'];
        const stats = await prisma.session.groupBy({
            by: ['source'],
            where: { source: { in: aiSources } },
            _count: { id: true }
        });

        const result = { ChatGPT: 0, Claude: 0, Perplexity: 0, Gemini: 0 };
        stats.forEach(s => {
            result[s.source] = s._count.id;
        });

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getGeographyStats = async (req, res) => {
    try {
        const countries = await prisma.visitor.groupBy({
            by: ['country'],
            where: { country: { not: null } },
            _count: { id: true },
            orderBy: { _count: { id: 'desc' } },
            take: 5
        });

        const states = await prisma.visitor.groupBy({
            by: ['state'],
            where: { state: { not: null } },
            _count: { id: true },
            orderBy: { _count: { id: 'desc' } },
            take: 5
        });

        const cities = await prisma.visitor.groupBy({
            by: ['city'],
            where: { city: { not: null } },
            _count: { id: true },
            orderBy: { _count: { id: 'desc' } },
            take: 5
        });

        res.json({
            countries: countries.map(c => ({ name: c.country, count: c._count.id })),
            states: states.map(s => ({ name: s.state, count: s._count.id })),
            cities: cities.map(c => ({ name: c.city, count: c._count.id }))
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getLiveStats = async (req, res) => {
    try {
        const fifteenMinsAgo = new Date(Date.now() - 15 * 60000);
        
        const activeUsers = await prisma.session.count({
            where: {
                lastActiveAt: { gte: fifteenMinsAgo }
            }
        });

        const recentLeads = await prisma.lead.findMany({
            orderBy: { createdAt: 'desc' },
            take: 5
        });

        res.json({
            activeUsers,
            recentLeads
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
