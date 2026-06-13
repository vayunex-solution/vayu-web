/**
 * src/utils/analytics.js
 * Central Analytics Engine for Vayunex Solution
 * This file handles all event routing and payload standardization.
 */

// ==========================================
// ADAPTER PLACEHOLDERS
// ==========================================
const adapters = {
    ga4: (eventName, payload) => {
        // window.gtag('event', eventName, payload);
    },
    clarity: (eventName, payload) => {
        // window.clarity('set', eventName, payload.page_path);
    },
    metaPixel: (eventName, payload) => {
        // window.fbq('trackCustom', eventName, payload);
    },
    linkedin: (eventName, payload) => {
        // window.lintrk('track', { conversion_id: eventName });
    }
};

// ==========================================
// CORE DISPATCHER
// ==========================================
const dispatchEvent = (eventName, payload) => {
    // 1. Format payload
    const standardPayload = {
        timestamp: new Date().toISOString(),
        url: window.location.href,
        path: window.location.pathname,
        ...payload
    };

    // 2. Log to console for development verification
    if (process.env.NODE_ENV !== 'production') {
        console.group(`📊 Analytics Event: ${eventName}`);
        console.log(standardPayload);
        console.groupEnd();
    }

    // 3. Dispatch to all adapters (Placeholders)
    adapters.ga4(eventName, standardPayload);
    adapters.clarity(eventName, standardPayload);
    adapters.metaPixel(eventName, standardPayload);
    adapters.linkedin(eventName, standardPayload);
};

// ==========================================
// BUSINESS INTELLIGENCE FUNCTIONS
// ==========================================

export const trackPageView = (pageTitle, source = 'direct') => {
    dispatchEvent('page_view', {
        page_title: pageTitle,
        source: source
    });
};

export const trackScrollDepth = (percentScrolled) => {
    dispatchEvent('scroll_depth', {
        percent_scrolled: percentScrolled
    });
};

export const trackCTA = (ctaName, ctaLocation, destination) => {
    dispatchEvent('cta_click', {
        cta_name: ctaName,
        cta_location: ctaLocation,
        destination: destination
    });
};

export const trackThemeToggle = (themeSelected, tooltipInteracted = false) => {
    dispatchEvent('theme_toggle', {
        theme_selected: themeSelected,
        tooltip_interacted: tooltipInteracted
    });
};

// ==========================================
// PRODUCT & SERVICE INTELLIGENCE
// ==========================================

export const trackProductView = (productName) => {
    dispatchEvent('product_view', {
        product_name: productName
    });
};

export const trackProductInterest = (productName, interactionType) => {
    dispatchEvent('product_interest', {
        product_name: productName,
        interaction_type: interactionType
    });
};

export const trackServiceView = (serviceName) => {
    dispatchEvent('service_view', {
        service_name: serviceName
    });
};

export const trackServiceInterest = (serviceName, interactionType) => {
    dispatchEvent('service_interest', {
        service_name: serviceName,
        interaction_type: interactionType
    });
};

// ==========================================
// LEAD ATTRIBUTION
// ==========================================

export const trackWhatsApp = (actionType) => {
    // actionType: 'open' | 'click'
    dispatchEvent(`whatsapp_${actionType}`, {
        capture_type: 'whatsapp'
    });
};

export const trackContactClick = (serviceName = null) => {
    dispatchEvent('contact_click', {
        service_name: serviceName
    });
};

export const trackLead = (captureType, productName = null, serviceName = null, intent = null) => {
    dispatchEvent('generate_lead', {
        capture_type: captureType,      // 'contact_page', 'modal', 'whatsapp'
        product_name: productName,
        service_name: serviceName,
        intent: intent,
        lead_source: 'website' // Placeholder for UTM source extraction
    });
};

export const trackDemoRequest = (productName) => {
    dispatchEvent('request_demo', {
        product_name: productName,
        capture_type: 'modal'
    });
};

export const trackWaitlistJoin = (productName) => {
    dispatchEvent('join_waitlist', {
        product_name: productName,
        capture_type: 'modal'
    });
};

export const trackCareerApplyClick = (jobTitle, department, pageOrigin = 'careers_page') => {
    dispatchEvent('career_apply_click', {
        job_title: jobTitle,
        department: department,
        page_origin: pageOrigin,
        application_source: 'careers_page'
    });
};

export const trackCareerApplicationSubmit = (payload) => {
    // payload should include: job_title, department, experience, page_origin, etc.
    dispatchEvent('career_application_submit', {
        ...payload,
        application_source: 'careers_page'
    });
};

// ==========================================
// BLOG & CONTENT INTELLIGENCE
// ==========================================

export const trackBlogView = (blogSlug, blogCategory) => {
    dispatchEvent('blog_view', {
        blog_slug: blogSlug,
        blog_category: blogCategory
    });
};

export const trackBlogReadProgress = (blogSlug, readPercent) => {
    dispatchEvent('blog_read_progress', {
        blog_slug: blogSlug,
        read_percent: readPercent
    });
};

export const trackBlogSearch = (searchQuery) => {
    dispatchEvent('blog_search', {
        search_query: searchQuery
    });
};

export const trackBlogShare = (blogSlug, sharePlatform) => {
    dispatchEvent('blog_share', {
        blog_slug: blogSlug,
        share_platform: sharePlatform
    });
};

// ==========================================
// INTERACTION INTELLIGENCE
// ==========================================

export const trackFAQClick = (questionText, pagePath) => {
    dispatchEvent('faq_click', {
        question_text: questionText,
        page_path: pagePath
    });
};

export const trackAISummaryRead = (pagePath) => {
    dispatchEvent('ai_summary_read', {
        page_path: pagePath
    });
};

export const trackNewsletterSignup = (sourceLocation) => {
    dispatchEvent('newsletter_signup', {
        source_location: sourceLocation
    });
};

// ==========================================
// AI BOT & CRAWLER REFERRALS
// ==========================================

export const trackAIReferral = (aiSource) => {
    // aiSource can be 'chatgpt', 'gemini', 'perplexity', 'claude'
    dispatchEvent('ai_referral', {
        ai_source: aiSource,
        referrer: document.referrer
    });
};
