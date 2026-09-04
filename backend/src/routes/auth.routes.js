const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// In-memory token blacklist (for logout — resets on server restart)
const tokenBlacklist = new Set();

// POST /api/auth/login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

    if (!adminUsername || !adminPasswordHash) {
        return res.status(500).json({ error: 'Server admin credentials not configured.' });
    }

    if (username !== adminUsername) {
        return res.status(401).json({ error: 'Invalid credentials.' });
    }

    const passwordMatch = await bcrypt.compare(password, adminPasswordHash);
    if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials.' });
    }

    const token = jwt.sign(
        { username, role: 'admin' },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );

    res.status(200).json({
        message: 'Login successful.',
        token,
        expiresIn: '24h'
    });
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        tokenBlacklist.add(token);
    }
    res.status(200).json({ message: 'Logged out successfully.' });
});

module.exports = { router, tokenBlacklist };
