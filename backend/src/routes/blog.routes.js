const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');

// Public routes
router.get('/', blogController.getAllBlogs);
router.get('/search', blogController.searchBlogs);
router.get('/:slug', blogController.getBlogBySlug);

// Admin/Protected routes (Add auth middleware later)
router.post('/', blogController.createBlog);
router.put('/:id', blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);

module.exports = router;
