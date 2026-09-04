const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// 1. Bulletproof CORS Middleware (Must run before everything else)
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin && (
        origin.endsWith('vayunexsolution.com') ||
        origin.includes('localhost') ||
        origin.includes('127.0.0.1')
    )) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Credentials', 'true');
    } else {
        res.setHeader('Access-Control-Allow-Origin', '*');
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');

    // Handle preflight OPTIONS immediately
    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }
    next();
});

// 2. Security Middleware (with cross-origin allowed)
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// Rate limiting to prevent abuse
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true,
    legacyHeaders: false,
});
app.use('/api', limiter);

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Telemetry Middleware
const telemetryMiddleware = require('./middleware/telemetry.middleware');
app.use(telemetryMiddleware);

// Test Route
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Vayunex API is running' });
});

// Import Routes
const blogRoutes = require('./routes/blog.routes');
const categoryRoutes = require('./routes/category.routes');
const { router: authRoutes } = require('./routes/auth.routes');
const tagRoutes = require('./routes/tag.routes');
const analyticsRoutes = require('./routes/analytics.routes');

// Use Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/analytics', analyticsRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('SERVER ERROR:', err.stack || err.message);
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Credentials', 'true');
    }
    res.status(500).json({ error: err.message || 'Something went wrong on the server' });
});

module.exports = app;
