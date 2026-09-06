'use client';

import React, { useEffect, useRef } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
    const barRef = useRef(null);

    useEffect(() => {
        let ticking = false;

        const updateScrollProgress = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (barRef.current) {
                        const scrollTop = window.scrollY || document.documentElement.scrollTop;
                        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                        barRef.current.style.width = `${progress}%`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', updateScrollProgress, { passive: true });
        updateScrollProgress();

        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <div className="scroll-progress-container" aria-hidden="true">
            <div
                ref={barRef}
                className="scroll-progress-bar"
                style={{ width: '0%' }}
            />
        </div>
    );
};

export default ScrollProgress;
