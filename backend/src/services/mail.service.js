const nodemailer = require('nodemailer');
const { getSettings } = require('./settings.service');

// Create Nodemailer Transporter based on current settings
const createTransporter = () => {
    const settings = getSettings();
    const { smtp } = settings;

    return nodemailer.createTransport({
        host: smtp.host,
        port: smtp.port,
        secure: smtp.secure, // true for port 465, false for other ports
        auth: {
            user: smtp.user,
            pass: smtp.pass
        },
        tls: {
            // Reject unauthorized certificates if available
            rejectUnauthorized: false
        }
    });
};

// Send Lead Notification Email
const sendLeadNotification = async (leadData) => {
    const settings = getSettings();
    const recipients = settings.recipientEmails || ['yashkr4748@gmail.com'];
    const { smtp } = settings;

    if (!smtp.user || !smtp.pass) {
        console.warn('SMTP credentials not configured. Skipping email dispatch.');
        return { success: false, reason: 'SMTP credentials missing' };
    }

    const transporter = createTransporter();

    const formType = leadData.formType || leadData.type || 'Website Contact Form';
    const clientName = leadData.name || 'Anonymous Prospect';
    const clientEmail = leadData.email || 'Not provided';
    const clientPhone = leadData.phone || leadData.contact || 'Not provided';
    const subjectTitle = leadData.subject || `New Lead Submission: ${clientName} (${formType})`;
    const messageBody = leadData.message || leadData.notes || 'No message provided.';

    // Additional structured details
    const company = leadData.company || leadData.companyName || null;
    const projectType = leadData.projectType || null;
    const budget = leadData.budget || null;
    const timeline = leadData.timeline || null;
    const preferredContact = leadData.preferredContact || leadData.contactMethod || null;
    const pageUrl = leadData.pageUrl || leadData.url || 'https://www.vayunexsolution.com';
    const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // HTML Email Template
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f9; color: #1e293b; margin: 0; padding: 20px; }
            .email-container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
            .header { background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%); color: #ffffff; padding: 28px 32px; border-bottom: 3px solid #6366f1; }
            .brand-tag { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #818cf8; font-weight: 700; margin-bottom: 6px; }
            .title { font-size: 22px; font-weight: 700; margin: 0; color: #ffffff; }
            .badge { display: inline-block; background: rgba(99, 102, 241, 0.25); color: #c7d2fe; border: 1px solid rgba(99, 102, 241, 0.4); padding: 4px 10px; border-radius: 999px; font-size: 11px; font-weight: 600; margin-top: 10px; }
            .content { padding: 32px; }
            .section-title { font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: 700; margin: 0 0 16px 0; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px; }
            .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .info-table td { padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #f8fafc; }
            .info-table td.label { width: 35%; color: #64748b; font-weight: 600; }
            .info-table td.value { color: #0f172a; font-weight: 500; }
            .info-table td.value a { color: #4f46e5; text-decoration: none; font-weight: 600; }
            .message-box { background: #f8fafc; border-left: 4px solid #6366f1; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-bottom: 24px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-line; }
            .actions { text-align: center; padding: 10px 0 20px; }
            .reply-btn { display: inline-block; background: #4f46e5; color: #ffffff !important; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.35); }
            .footer { background: #f8fafc; padding: 20px 32px; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; text-align: center; }
            .footer-meta { margin-top: 6px; font-size: 11px; color: #cbd5e1; }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <div class="brand-tag">VAYUNEX SOLUTION &bull; LEAD ALERT</div>
                <h1 class="title">New Submission Received</h1>
                <span class="badge">${formType}</span>
            </div>
            
            <div class="content">
                <div class="section-title">Prospect Information</div>
                <table class="info-table">
                    <tr>
                        <td class="label">Full Name</td>
                        <td class="value"><strong>${clientName}</strong></td>
                    </tr>
                    <tr>
                        <td class="label">Email Address</td>
                        <td class="value"><a href="mailto:${clientEmail}">${clientEmail}</a></td>
                    </tr>
                    <tr>
                        <td class="label">Phone / WhatsApp</td>
                        <td class="value">${clientPhone !== 'Not provided' ? `<a href="tel:${clientPhone}">${clientPhone}</a> &bull; <a href="https://wa.me/${clientPhone.replace(/[^0-9]/g, '')}">Chat on WhatsApp</a>` : 'Not provided'}</td>
                    </tr>
                    ${company ? `<tr><td class="label">Company</td><td class="value">${company}</td></tr>` : ''}
                    ${projectType ? `<tr><td class="label">Project Interest</td><td class="value">${projectType}</td></tr>` : ''}
                    ${budget ? `<tr><td class="label">Estimated Budget</td><td class="value">${budget}</td></tr>` : ''}
                    ${timeline ? `<tr><td class="label">Timeline</td><td class="value">${timeline}</td></tr>` : ''}
                    ${preferredContact ? `<tr><td class="label">Preferred Contact</td><td class="value">${preferredContact}</td></tr>` : ''}
                </table>

                <div class="section-title">Inquiry / Message</div>
                <div class="message-box">${messageBody}</div>

                ${clientEmail !== 'Not provided' ? `
                <div class="actions">
                    <a href="mailto:${clientEmail}?subject=Re: ${encodeURIComponent(subjectTitle)}" class="reply-btn">Reply Directly to Client</a>
                </div>
                ` : ''}
            </div>

            <div class="footer">
                <div>This alert was generated automatically by Vayunex Solution Web Application.</div>
                <div class="footer-meta">Submitted at ${submittedAt} (IST) &bull; Page: ${pageUrl}</div>
            </div>
        </div>
    </body>
    </html>
    `;

    const mailOptions = {
        from: smtp.fromEmail || `VayuNex Web Leads <${smtp.user}>`,
        to: recipients.join(', '),
        replyTo: clientEmail !== 'Not provided' ? clientEmail : undefined,
        subject: `[Vayunex Lead] ${subjectTitle} - ${clientName}`,
        html: htmlContent
    };

    return await transporter.sendMail(mailOptions);
};

// Send Test Email to Verify Configuration Live
const sendTestEmail = async (targetEmail) => {
    const settings = getSettings();
    const { smtp } = settings;
    const transporter = createTransporter();

    const recipients = targetEmail || settings.recipientEmails || ['yashkr4748@gmail.com'];
    const toList = Array.isArray(recipients) ? recipients.join(', ') : recipients;

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <body style="font-family: sans-serif; padding: 20px; background: #0f172a; color: #f8fafc;">
        <div style="max-width: 500px; margin: 0 auto; background: #1e293b; padding: 30px; border-radius: 12px; border: 1px solid rgba(99,102,241,0.4);">
            <div style="font-size: 12px; text-transform: uppercase; color: #818cf8; font-weight: 700;">Vayunex Solution</div>
            <h2 style="color: #10b981; margin: 10px 0;">SMTP Test Successful!</h2>
            <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6;">
                Your Vayunex SMTP server <strong>${smtp.host}:${smtp.port}</strong> is successfully connected and authenticating as <strong>${smtp.user}</strong>.
            </p>
            <div style="background: rgba(255,255,255,0.05); padding: 12px 16px; border-radius: 6px; font-size: 13px; color: #94a3b8;">
                Sent at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)<br>
                Recipients: ${toList}
            </div>
        </div>
    </body>
    </html>
    `;

    const mailOptions = {
        from: smtp.fromEmail || `VayuNex Web Leads <${smtp.user}>`,
        to: toList,
        subject: `[Vayunex Verification] SMTP Diagnostic Test Email`,
        html: htmlContent
    };

    return await transporter.sendMail(mailOptions);
};

module.exports = {
    sendLeadNotification,
    sendTestEmail
};
