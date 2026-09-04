const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analytics.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.use(authMiddleware); // Protect all analytics routes

router.get('/traffic', analyticsController.getTrafficStats);
router.get('/pages', analyticsController.getPageStats);
router.get('/leads', analyticsController.getLeadStats);
router.get('/geography', analyticsController.getGeographyStats);
router.get('/live', analyticsController.getLiveStats);
router.get('/products', analyticsController.getProductStats);
router.get('/ai', analyticsController.getAiStats);
router.get('/referrals', analyticsController.getReferralStats);

module.exports = router;
