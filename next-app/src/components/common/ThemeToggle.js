'use client';

import React, { useEffect, useState, useRef } from 'react';
import { trackThemeToggle } from '../../utils/analytics';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('vayunex-theme');
      if (saved) {
        setIsDark(saved === 'dark');
      }
    } catch (e) {}
  }, []);

  // Theme Persistence
  useEffect(() => {
    try {
      const root = document.documentElement;
      if (isDark) {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('vayunex-theme', 'dark');
      } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('vayunex-theme', 'light');
      }
    } catch (e) {}
  }, [isDark]);

  // Tooltip Discovery Logic
  useEffect(() => {
    try {
      const hasSeenTooltip = localStorage.getItem('vayunex-theme-discovery');
      if (!hasSeenTooltip && !isDark) {
        const showTimer = setTimeout(() => {
          setShowTooltip(true);
          localStorage.setItem('vayunex-theme-discovery', 'true');
          
          const dismissTimer = setTimeout(() => {
            setShowTooltip(false);
          }, 8000);
          return () => clearTimeout(dismissTimer);
        }, 1500);

        return () => clearTimeout(showTimer);
      }
    } catch (e) {}
  }, [isDark]);

  const handleToggle = () => {
    const nextState = !isDark;
    setIsDark(nextState);
    setShowTooltip(false);
    trackThemeToggle(nextState ? 'dark' : 'light');
  };

  return (
    <div className="theme-toggle-wrapper" ref={toggleRef}>
      <button
        type="button"
        className={`theme-toggle ${isDark ? 'theme-toggle--dark' : 'theme-toggle--light'}`}
        onClick={handleToggle}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <span className="theme-toggle__track">
          <span className="theme-toggle__thumb">
            {isDark ? (
              <svg className="theme-toggle__icon theme-toggle__icon--moon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg className="theme-toggle__icon theme-toggle__icon--sun" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </span>
        </span>
      </button>

      {showTooltip && (
        <div className="theme-tooltip" role="tooltip">
          <div className="theme-tooltip__arrow" />
          <span className="theme-tooltip__text">Try Dark Mode for the full engineering vibe! ⚡</span>
          <button
            type="button"
            className="theme-tooltip__close"
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
