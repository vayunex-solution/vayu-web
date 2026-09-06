const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settings.controller');
const authMiddleware = require('../middleware/auth.middleware');

// All SMTP settings routes require admin JWT auth
router.get('/smtp', authMiddleware, settingsController.getSmtpSettings);
router.post('/smtp', authMiddleware, settingsController.updateSmtpSettings);
router.post('/smtp/test', authMiddleware, settingsController.testSmtpConnection);

module.exports = router;
