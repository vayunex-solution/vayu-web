import emailjs from 'emailjs-com';

const API_BASE = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:5000/api'
    : 'https://api.web.vayunexsolution.com/api';

/**
 * Submits lead or contact form payload to backend SMTP service.
 * Automatically falls back to EmailJS if the backend is temporarily unreachable.
 */
export async function submitContactLead(leadData) {
    // 1. Attempt primary dispatch to secure backend SMTP endpoint
    try {
        const response = await fetch(`${API_BASE}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...leadData,
                pageUrl: typeof window !== 'undefined' ? window.location.href : 'https://www.vayunexsolution.com'
            })
        });

        if (response.ok) {
            const data = await response.json();
            return { success: true, via: 'smtp_backend', data };
        }
        console.warn('Backend contact response not OK:', response.status);
    } catch (err) {
        console.warn('Backend contact endpoint unreachable, engaging fail-safe:', err.message);
    }

    // 2. Secondary resilient fallback via EmailJS
    try {
        const serviceID = 'service_9esxtop';
        const templateID = 'template_2xw667y';
        const userID = 'UCd4OiGAJxWBBo0J6';

        await emailjs.send(serviceID, templateID, {
            name: leadData.name || 'Anonymous Prospect',
            email: leadData.email || 'Not provided',
            subject: leadData.subject || `Inquiry from ${leadData.name || 'Website Visitor'}`,
            message: leadData.message || (typeof leadData === 'object' ? JSON.stringify(leadData, null, 2) : 'No message provided')
        }, userID);

        return { success: true, via: 'emailjs_fallback' };
    } catch (fallbackErr) {
        console.error('All form submission channels failed:', fallbackErr);
        throw fallbackErr;
    }
}
