const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Security Middlewares
app.use(helmet());
app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? 'https://www.vayunexsolution.com' : '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
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

// Test Route
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Vayunex API is running' });
});

// Import Routes
const blogRoutes = require('./routes/blog.routes');
const categoryRoutes = require('./routes/category.routes');

// Use Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/categories', categoryRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong on the server' });
});

module.exports = app;
