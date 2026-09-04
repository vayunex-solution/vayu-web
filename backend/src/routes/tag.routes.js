const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tag.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/', tagController.getAllTags);
router.post('/', authMiddleware, tagController.createTag);
router.delete('/:id', authMiddleware, tagController.deleteTag);

module.exports = router;
