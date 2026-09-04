const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/', categoryController.getAllCategories);
router.post('/', authMiddleware, categoryController.createCategory);

module.exports = router;
