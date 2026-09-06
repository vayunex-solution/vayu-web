const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

// Public endpoint for submitting contact / demo / early access forms
router.post('/', contactController.submitContactForm);

module.exports = router;
