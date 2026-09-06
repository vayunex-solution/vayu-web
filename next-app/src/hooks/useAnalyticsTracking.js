'use client';

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackScrollDepth, trackProductView, trackServiceView } from '../utils/analytics';

// Handles routing changes for Page Views
export const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
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
    
    const milestones = useRef({
        25: false,
        50: false,
        75: false,
        90: false
    });

    useEffect(() => {
        milestones.current = {
            25: false,
            50: false,
            75: false,
            90: false
        };
    }, [location]);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.scrollY || document.documentElement.scrollTop;
                    const scrollHeight = document.documentElement.scrollHeight;
                    const clientHeight = document.documentElement.clientHeight;
                    const total = scrollHeight - clientHeight;
                    
                    if (total > 0) {
                        const percentScrolled = (scrollTop / total) * 100;

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
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};
