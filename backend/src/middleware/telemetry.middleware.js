const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const crypto = require('crypto');

// Simple in-memory cache for IPs to avoid hitting geolocation API
const ipCache = new Map();

const telemetryMiddleware = async (req, res, next) => {
    // We only want to track GET requests to the main site or specific pages, 
    // excluding static files, images, or admin panel.
    if (req.method !== 'GET' || req.originalUrl.startsWith('/api') || req.originalUrl.includes('.')) {
        return next();
    }

    try {
        const ipAddress = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
        
        // Track Visitor
        let visitor = await prisma.visitor.findUnique({
            where: { ipAddress }
        });

        if (!visitor) {
            let country = null, state = null, city = null;
            
            // Check IP cache
            if (ipCache.has(ipAddress)) {
                const cachedGeo = ipCache.get(ipAddress);
                country = cachedGeo.country;
                state = cachedGeo.state;
                city = cachedGeo.city;
            } else {
                // Fetch Geolocation (Mocking for now or use IP-API if possible without rate limit)
                try {
                    // For local development, skip real IP API
                    if (ipAddress !== '::1' && ipAddress !== '127.0.0.1') {
                        const geoResponse = await fetch(`http://ip-api.com/json/${ipAddress}`);
                        if (geoResponse.ok) {
                            const geoData = await geoResponse.json();
                            if (geoData.status === 'success') {
                                country = geoData.country;
                                state = geoData.regionName;
                                city = geoData.city;
                                
                                ipCache.set(ipAddress, { country, state, city });
                            }
                        }
                    }
                } catch (err) {
                    console.error('Geolocation fetch error:', err.message);
                }
            }

            const userAgent = req.headers['user-agent'] || '';
            let device = 'Desktop';
            if (/mobile/i.test(userAgent)) device = 'Mobile';
            else if (/tablet/i.test(userAgent)) device = 'Tablet';

            let browser = 'Unknown';
            if (/chrome/i.test(userAgent)) browser = 'Chrome';
            else if (/firefox/i.test(userAgent)) browser = 'Firefox';
            else if (/safari/i.test(userAgent)) browser = 'Safari';
            else if (/edge/i.test(userAgent)) browser = 'Edge';

            visitor = await prisma.visitor.create({
                data: {
                    ipAddress,
                    country,
                    state,
                    city,
                    device,
                    browser
                }
            });
        }

        // Track Session
        let sessionId = req.cookies?.sessionId;
        let session;

        if (!sessionId) {
            sessionId = crypto.randomUUID();
            res.cookie('sessionId', sessionId, { maxAge: 1000 * 60 * 30 }); // 30 mins
        }

        session = await prisma.session.findUnique({
            where: { sessionId }
        });

        const referrer = req.headers.referer || null;
        let source = 'Direct';
        if (referrer) {
            if (referrer.includes('google.com')) source = 'Google';
            else if (referrer.includes('chatgpt.com')) source = 'ChatGPT';
            else if (referrer.includes('claude.ai')) source = 'Claude';
            else if (referrer.includes('perplexity.ai')) source = 'Perplexity';
            else source = 'Referral';
        }

        if (!session) {
            session = await prisma.session.create({
                data: {
                    sessionId,
                    visitorId: visitor.id,
                    referrer,
                    source
                }
            });
        } else {
            // Update session duration
            const now = new Date();
            const durationInSeconds = Math.floor((now - new Date(session.createdAt)) / 1000);
            
            await prisma.session.update({
                where: { id: session.id },
                data: { 
                    duration: durationInSeconds,
                    lastActiveAt: now
                }
            });
        }

        // Track PageView
        await prisma.pageView.create({
            data: {
                sessionId: session.id,
                pageUrl: req.originalUrl,
                isExit: false // This will be complex to determine accurately, but we log the view
            }
        });

    } catch (error) {
        console.error('Telemetry Error:', error.message);
    }

    next();
};

module.exports = telemetryMiddleware;
