import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackScrollDepth, trackProductView, trackServiceView } from '../utils/analytics';

// Handles routing changes for Page Views
export const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        // Document title might not be immediately updated by react-helmet or similar on mount,
        // but we'll try to grab it, or fall back to path name.
        const pageTitle = document.title || 'Vayunex Solution';
        trackPageView(pageTitle);
        
        const path = location.pathname;
        if (path.startsWith('/products/') && path !== '/products/') {
            const product = path.split('/products/')[1];
            trackProductView(product);
        } else if (path.startsWith('/services/')) {
            const service = path.split('/services/')[1];
            trackServiceView(service);
        }
    }, [location]);
};

// Handles tracking how far down the user scrolls on the page
export const useScrollTracking = () => {
    const location = useLocation();
    
    // We use refs to ensure we only fire each milestone once per page load
    const milestones = useRef({
        25: false,
        50: false,
        75: false,
        90: false
    });

    // Reset milestones when the route changes
    useEffect(() => {
        milestones.current = {
            25: false,
            50: false,
            75: false,
            90: false
        };
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            
            // Calculate percentage scrolled
            const percentScrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

            // Check and trigger milestones
            if (percentScrolled >= 25 && !milestones.current[25]) {
                milestones.current[25] = true;
                trackScrollDepth(25);
            }
            if (percentScrolled >= 50 && !milestones.current[50]) {
                milestones.current[50] = true;
                trackScrollDepth(50);
            }
            if (percentScrolled >= 75 && !milestones.current[75]) {
                milestones.current[75] = true;
                trackScrollDepth(75);
            }
            if (percentScrolled >= 90 && !milestones.current[90]) {
                milestones.current[90] = true;
                trackScrollDepth(90);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};
