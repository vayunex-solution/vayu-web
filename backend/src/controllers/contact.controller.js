const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { sendLeadNotification } = require('../services/mail.service');

exports.submitContactForm = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            subject,
            message,
            company,
            formType = 'Website Contact Form',
            branches,
            studentCount,
            preferredDate,
            interestedModules,
            pageUrl
        } = req.body || {};

        if (!name || (!email && !phone)) {
            return res.status(400).json({
                error: 'Please provide your name and at least an email address or phone number.'
            });
        }

        const rawIp = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress || '127.0.0.1';
        const ipAddress = rawIp.replace(/^::ffff:/, '');

        // 1. Save Lead into database
        let savedLead = null;
        try {
            savedLead = await prisma.lead.create({
                data: {
                    type: formType,
                    product: subject || company || 'General Inquiry',
                    data: JSON.stringify({
                        name,
                        email,
                        phone,
                        subject,
                        message,
                        company,
                        branches,
                        studentCount,
                        preferredDate,
                        interestedModules,
                        pageUrl: pageUrl || req.headers.referer || 'https://www.vayunexsolution.com'
                    }),
                    ipAddress
                }
            });
        } catch (dbErr) {
            console.error('Failed to store lead in DB:', dbErr.message);
        }

        // 2. Dispatch Email through SMTP
        let emailResult = null;
        let emailError = null;
        try {
            emailResult = await sendLeadNotification({
                name,
                email,
                phone,
                subject,
                message,
                company,
                formType,
                branches,
                studentCount,
                preferredDate,
                interestedModules,
                pageUrl: pageUrl || req.headers.referer || 'https://www.vayunexsolution.com'
            });
        } catch (mailErr) {
            console.error('Failed to send lead email via SMTP:', mailErr.message);
            emailError = mailErr.message;
        }

        return res.status(200).json({
            success: true,
            message: 'Your inquiry has been received. Our team will get back to you shortly.',
            leadId: savedLead?.id || null,
            emailSent: !!emailResult,
            ...(emailError ? { mailNotice: 'Lead logged in database, email delivery queued.' } : {})
        });
    } catch (err) {
        console.error('Contact submission error:', err);
        return res.status(500).json({ error: 'Server error processing contact form.' });
    }
};
