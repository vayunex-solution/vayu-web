const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Public routes (no auth required)
router.get('/', blogController.getAllBlogs);
router.get('/search', blogController.searchBlogs);
router.get('/id/:id', blogController.getBlogById);
router.get('/:slug', blogController.getBlogBySlug);

// Admin/Protected routes — require JWT
router.post('/generate', authMiddleware, blogController.generateBlog);
router.post('/seed-leadership', async (req, res) => {
    try {
        const { seedLeadershipBlogs } = require('../services/leadershipBlogSeeder');
        await seedLeadershipBlogs();
        res.status(200).json({ message: 'Leadership blogs successfully seeded into database.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.post('/', authMiddleware, blogController.createBlog);
router.put('/:id', authMiddleware, blogController.updateBlog);
router.delete('/:id', authMiddleware, blogController.deleteBlog);

module.exports = router;
