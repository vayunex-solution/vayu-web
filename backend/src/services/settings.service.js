const fs = require('fs');
const path = require('path');

const SETTINGS_DIR = path.resolve(__dirname, '../../data');
const SETTINGS_FILE = path.join(SETTINGS_DIR, 'settings.json');

// Ensure data directory exists
if (!fs.existsSync(SETTINGS_DIR)) {
    try {
        fs.mkdirSync(SETTINGS_DIR, { recursive: true });
    } catch (e) {
        console.error('Failed to create settings directory:', e.message);
    }
}

// Default settings from environment
const getDefaultSettings = () => {
    const rawEmails = process.env.NOTIFICATION_EMAILS || 'yashkr4748@gmail.com';
    const emailList = rawEmails.split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
    
    return {
        recipientEmails: emailList.length > 0 ? emailList.slice(0, 5) : ['yashkr4748@gmail.com'],
        smtp: {
            host: process.env.SMTP_HOST || 'mail.vayunexsolution.com',
            port: parseInt(process.env.SMTP_PORT || '465', 10),
            secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
            user: process.env.SMTP_USER || 'no-reply@vayunexsolution.com',
            pass: process.env.SMTP_PASS || '',
            fromEmail: process.env.FROM_EMAIL || 'VayuNex Web Leads <no-reply@vayunexsolution.com>'
        },
        updatedAt: new Date().toISOString()
    };
};

// Read settings
const getSettings = () => {
    try {
        if (fs.existsSync(SETTINGS_FILE)) {
            const data = JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf8'));
            const defaults = getDefaultSettings();
            
            // Merge with defaults in case of missing keys
            return {
                recipientEmails: Array.isArray(data.recipientEmails) && data.recipientEmails.length > 0 
                    ? data.recipientEmails.slice(0, 5) 
                    : defaults.recipientEmails,
                smtp: {
                    host: data.smtp?.host || defaults.smtp.host,
                    port: parseInt(data.smtp?.port || defaults.smtp.port, 10),
                    secure: typeof data.smtp?.secure === 'boolean' ? data.smtp.secure : defaults.smtp.secure,
                    user: data.smtp?.user || defaults.smtp.user,
                    pass: data.smtp?.pass || defaults.smtp.pass,
                    fromEmail: data.smtp?.fromEmail || defaults.smtp.fromEmail
                },
                updatedAt: data.updatedAt || defaults.updatedAt
            };
        }
    } catch (err) {
        console.error('Error reading settings file, using defaults:', err.message);
    }

    return getDefaultSettings();
};

// Save settings
const saveSettings = (newSettings) => {
    const current = getSettings();
    
    // Validate recipient emails (max 5, must be valid emails)
    let recipientEmails = current.recipientEmails;
    if (Array.isArray(newSettings.recipientEmails)) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validEmails = newSettings.recipientEmails
            .map(e => (typeof e === 'string' ? e.trim().toLowerCase() : ''))
            .filter(e => emailRegex.test(e));
        
        // Remove duplicates and limit to 5
        const uniqueEmails = [...new Set(validEmails)].slice(0, 5);
        if (uniqueEmails.length > 0) {
            recipientEmails = uniqueEmails;
        }
    }

    // SMTP updates
    const smtp = {
        host: (newSettings.smtp?.host || current.smtp.host).trim(),
        port: parseInt(newSettings.smtp?.port || current.smtp.port, 10),
        secure: typeof newSettings.smtp?.secure === 'boolean' ? newSettings.smtp.secure : current.smtp.secure,
        user: (newSettings.smtp?.user || current.smtp.user).trim(),
        pass: newSettings.smtp?.pass && newSettings.smtp.pass !== '••••••••' 
            ? newSettings.smtp.pass.trim() 
            : current.smtp.pass,
        fromEmail: (newSettings.smtp?.fromEmail || current.smtp.fromEmail).trim()
    };

    const payload = {
        recipientEmails,
        smtp,
        updatedAt: new Date().toISOString()
    };

    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(payload, null, 2), 'utf8');
    return payload;
};

module.exports = {
    getSettings,
    saveSettings
};
