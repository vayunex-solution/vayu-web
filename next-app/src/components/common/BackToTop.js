'use client';

import React, { useState, useEffect } from 'react';
import './BackToTop.css';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let ticking = false;
        let lastVisible = false;

        const toggleVisibility = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const shouldShow = (window.scrollY || document.documentElement.scrollTop) > 300;
                    if (shouldShow !== lastVisible) {
                        lastVisible = shouldShow;
                        setIsVisible(shouldShow);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`back-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <i className="fas fa-chevron-up"></i>
        </button>
    );
};

export default BackToTop;
