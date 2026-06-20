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
router.post('/', authMiddleware, blogController.createBlog);
router.put('/:id', authMiddleware, blogController.updateBlog);
router.delete('/:id', authMiddleware, blogController.deleteBlog);

module.exports = router;
