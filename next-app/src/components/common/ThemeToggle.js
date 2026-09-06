'use client';

import React, { useEffect, useState, useRef } from 'react';
import { trackThemeToggle } from '../../utils/analytics';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const toggleRef = useRef(null);

  // Initial theme check
  useEffect(() => {
    try {
      const saved = localStorage.getItem('vayunex-theme');
      if (saved) {
        setIsDark(saved === 'dark');
      } else {
        setIsDark(false);
        document.documentElement.setAttribute('data-theme', 'light');
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

  // "Try Dark Mode" Discovery Prompt for new visitors
  useEffect(() => {
    try {
      const isDismissed = localStorage.getItem('vayunex-theme-discovery');
      if (!isDismissed && !isDark) {
        const timer = setTimeout(() => {
          setShowPrompt(true);
        }, 900);

        const autoDismissTimer = setTimeout(() => {
          setShowPrompt(false);
        }, 16000);

        return () => {
          clearTimeout(timer);
          clearTimeout(autoDismissTimer);
        };
      } else if (isDark) {
        setShowPrompt(false);
      }
    } catch (e) {}
  }, [isDark]);

  const dismissPrompt = () => {
    setShowPrompt(false);
    try {
      localStorage.setItem('vayunex-theme-discovery', 'dismissed');
    } catch (e) {}
  };

  const handleToggle = () => {
    const nextState = !isDark;
    setIsDark(nextState);
    dismissPrompt();
    trackThemeToggle(nextState ? 'dark' : 'light');
  };

  const handleActivateDark = (e) => {
    e.stopPropagation();
    setIsDark(true);
    dismissPrompt();
    trackThemeToggle('dark', true);
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
        <span className="theme-toggle-track">
          <span className="theme-toggle-aura" aria-hidden="true" />
          <span className="theme-toggle-icons">
            {/* 2D Sun icon in track */}
            <span className="track-icon track-sun-icon" aria-hidden="true">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" fill="currentColor" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </span>
            {/* 2D Moon icon in track */}
            <span className="track-icon track-moon-icon" aria-hidden="true">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </span>
          </span>
          <span className="theme-toggle-thumb">
            {isDark ? (
              <svg className="theme-icon moon-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg className="theme-icon sun-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" fill="currentColor" />
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

      {/* "Try Dark Mode" discovery prompt for new visitors */}
      {showPrompt && !isDark && (
        <div className="theme-discovery-tooltip" role="tooltip">
          <div className="theme-tooltip-arrow" />
          <button
            type="button"
            className="theme-tooltip-btn"
            onClick={handleActivateDark}
            title="Switch to Dark Mode"
          >
            <span className="theme-tooltip-pulse" aria-hidden="true" />
            <svg className="theme-tooltip-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <span className="theme-tooltip-text">Try Dark Mode</span>
            <span className="theme-tooltip-cta">Switch</span>
          </button>
          <button
            type="button"
            className="theme-tooltip-close"
            onClick={dismissPrompt}
            aria-label="Dismiss theme hint"
            title="Dismiss"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
