const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const crypto = require('crypto');

// In-memory cache for IP geo info
const ipGeoCache = new Map();

exports.trackEvent = async (req, res) => {
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Credentials', 'true');
    }

    try {
        const {
            eventType = 'page_view',
            pageUrl = '/',
            referrer = null,
            sessionId: clientSessionId = null,
            product = null,
            leadType = null,
            leadData = null
        } = req.body || {};

        const rawIp = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress || '127.0.0.1';
        const ipAddress = rawIp.replace(/^::ffff:/, '');

        // 1. Find or create Visitor
        let visitor = await prisma.visitor.findUnique({
            where: { ipAddress }
        });

        if (!visitor) {
            let country = 'India', state = 'Haryana', city = 'Yamunanagar';
            if (ipAddress !== '127.0.0.1' && ipAddress !== '::1') {
                if (ipGeoCache.has(ipAddress)) {
                    const cached = ipGeoCache.get(ipAddress);
                    country = cached.country;
                    state = cached.state;
                    city = cached.city;
                } else {
                    try {
                        const geoRes = await fetch(`http://ip-api.com/json/${ipAddress}?fields=status,country,regionName,city`);
                        if (geoRes.ok) {
                            const geoData = await geoRes.json();
                            if (geoData.status === 'success') {
                                country = geoData.country || country;
                                state = geoData.regionName || state;
                                city = geoData.city || city;
                                ipGeoCache.set(ipAddress, { country, state, city });
                            }
                        }
                    } catch (e) {}
                }
            }

            const userAgent = req.headers['user-agent'] || '';
            let device = 'Desktop';
            if (/mobile/i.test(userAgent)) device = 'Mobile';
            else if (/tablet/i.test(userAgent)) device = 'Tablet';

            let browser = 'Chrome';
            if (/firefox/i.test(userAgent)) browser = 'Firefox';
            else if (/safari/i.test(userAgent) && !/chrome/i.test(userAgent)) browser = 'Safari';
            else if (/edge/i.test(userAgent)) browser = 'Edge';

            visitor = await prisma.visitor.create({
                data: { ipAddress, country, state, city, device, browser }
            });
        }

        // 2. Find or create Session
        const sessionId = clientSessionId || crypto.randomUUID();
        let session = await prisma.session.findUnique({
            where: { sessionId }
        });

        let source = 'Direct';
        if (referrer) {
            const r = referrer.toLowerCase();
            if (r.includes('google')) source = 'Google';
            else if (r.includes('chatgpt')) source = 'ChatGPT';
            else if (r.includes('claude')) source = 'Claude';
            else if (r.includes('perplexity')) source = 'Perplexity';
            else if (r.includes('gemini')) source = 'Gemini';
            else if (!r.includes('vayunexsolution.com')) source = 'Referral';
        }

        const now = new Date();
        if (!session) {
            session = await prisma.session.create({
                data: {
                    sessionId,
                    visitorId: visitor.id,
                    referrer,
                    source,
                    lastActiveAt: now,
                    isActive: true
                }
            });
        } else {
            const duration = Math.max(0, Math.floor((now - new Date(session.createdAt)) / 1000));
            await prisma.session.update({
                where: { id: session.id },
                data: {
                    lastActiveAt: now,
                    isActive: true,
                    duration
                }
            });
        }

        // 3. Log PageView
        if (pageUrl && eventType === 'page_view') {
            await prisma.pageView.create({
                data: {
                    sessionId: session.id,
                    pageUrl
                }
            });
        }

        // 4. Log Lead if event represents lead generation
        if (eventType === 'generate_lead' || eventType === 'whatsapp_click' || eventType === 'contact_submit' || eventType === 'request_demo' || eventType === 'career_application_submit') {
            const type = leadType || (eventType.includes('whatsapp') ? 'WhatsApp' : eventType.includes('demo') ? 'Demo' : eventType.includes('career') ? 'Career' : 'ContactForm');
            await prisma.lead.create({
                data: {
                    type,
                    product: product || 'General',
                    data: typeof leadData === 'object' ? JSON.stringify(leadData) : (leadData || ''),
                    ipAddress
                }
            });
        }

        res.status(200).json({ status: 'ok', sessionId });
    } catch (error) {
        console.error('Analytics track error:', error.message);
        res.status(500).json({ error: error.message });
    }
};

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

exports.getReferralStats = async (req, res) => {
    try {
        const standardSources = ['Google', 'Direct', 'Referral'];
        const stats = await prisma.session.groupBy({
            by: ['source'],
            where: { source: { in: standardSources } },
            _count: { id: true }
        });

        const totalSessions = await prisma.session.count();

        const result = { Google: 0, Direct: 0, Referral: 0, total: totalSessions };
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
