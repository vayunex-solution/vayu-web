const { getSettings, saveSettings } = require('../services/settings.service');
const { sendTestEmail } = require('../services/mail.service');

// Get SMTP and notification settings
exports.getSmtpSettings = async (req, res) => {
    try {
        const settings = getSettings();
        
        // Mask the password for security
        const maskedSmtp = {
            ...settings.smtp,
            pass: settings.smtp.pass ? '••••••••' : ''
        };

        res.json({
            recipientEmails: settings.recipientEmails || ['yashkr4748@gmail.com'],
            smtp: maskedSmtp,
            updatedAt: settings.updatedAt
        });
    } catch (err) {
        console.error('Error fetching settings:', err.message);
        res.status(500).json({ error: 'Failed to retrieve settings' });
    }
};

// Update SMTP and recipient settings
exports.updateSmtpSettings = async (req, res) => {
    try {
        const { recipientEmails, smtp } = req.body || {};

        if (recipientEmails && (!Array.isArray(recipientEmails) || recipientEmails.length === 0)) {
            return res.status(400).json({ error: 'At least one valid recipient email is required.' });
        }

        if (recipientEmails && recipientEmails.length > 5) {
            return res.status(400).json({ error: 'A maximum of 5 recipient emails can be configured.' });
        }

        const updated = saveSettings({ recipientEmails, smtp });

        res.json({
            success: true,
            message: 'Settings updated successfully.',
            recipientEmails: updated.recipientEmails,
            smtp: {
                ...updated.smtp,
                pass: updated.smtp.pass ? '••••••••' : ''
            },
            updatedAt: updated.updatedAt
        });
    } catch (err) {
        console.error('Error saving settings:', err.message);
        res.status(500).json({ error: 'Failed to save settings' });
    }
};

// Test SMTP connection and dispatch verification email
exports.testSmtpConnection = async (req, res) => {
    try {
        const { testEmail } = req.body || {};
        const result = await sendTestEmail(testEmail);

        res.json({
            success: true,
            message: `Test email successfully dispatched! Message ID: ${result.messageId}`,
            accepted: result.accepted,
            response: result.response
        });
    } catch (err) {
        console.error('SMTP Diagnostic Test Failed:', err.message);
        res.status(500).json({
            success: false,
            error: err.message || 'SMTP Connection failed'
        });
    }
};
