import React, { useEffect, useState, useRef } from 'react';
import { trackThemeToggle } from '../../utils/analytics';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('vayunex-theme');
    if (saved) return saved === 'dark';
    return false; // Default to Light Mode
  });

  const [showTooltip, setShowTooltip] = useState(false);
  const toggleRef = useRef(null);

  // Theme Persistence
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('vayunex-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('vayunex-theme', 'light');
    }
  }, [isDark]);

  // Tooltip Discovery Logic
  useEffect(() => {
    // Only show if user is in light mode, as Dark Mode is the default/preferred state we want them to explore
    // Or we can just show it regardless. The instruction says "Explore Dark Mode".
    // We'll show it if they are not in dark mode.
    const hasSeenTooltip = localStorage.getItem('vayunex-theme-discovery');
    
    if (!hasSeenTooltip && !isDark) {
      // Small delay so it doesn't pop instantly on page load
      const showTimer = setTimeout(() => {
        setShowTooltip(true);
        localStorage.setItem('vayunex-theme-discovery', 'true');
        
        // Auto-dismiss after 8 seconds
        const dismissTimer = setTimeout(() => {
          setShowTooltip(false);
        }, 8000);
        
        return () => clearTimeout(dismissTimer);
      }, 2000);
      
      return () => clearTimeout(showTimer);
    }
  }, [isDark]);

  // Dismiss on outside click or scroll
  useEffect(() => {
    const handleInteraction = (e) => {
      if (showTooltip) {
        setShowTooltip(false);
      }
    };

    if (showTooltip) {
      document.addEventListener('mousedown', handleInteraction);
      document.addEventListener('scroll', handleInteraction, { passive: true });
    }
    return () => {
      document.removeEventListener('mousedown', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, [showTooltip]);

  const handleToggle = () => {
    trackThemeToggle(!isDark ? 'dark' : 'light', showTooltip);
    setShowTooltip(false); // Dismiss on interaction
    setIsDark((prev) => !prev);
  };

  return (
    <div className="theme-toggle-container" ref={toggleRef}>
      {/* Discovery Tooltip */}
      <div className={`theme-discovery-tooltip ${showTooltip ? 'is-visible' : ''}`} aria-hidden={!showTooltip}>
        ✨ Explore Dark Mode
        <span className="theme-tooltip-arrow"></span>
      </div>

      <button
        className={`theme-toggle ${showTooltip ? 'has-pulse' : ''}`}
        onClick={handleToggle}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Light Mode' : 'Dark Mode'}
      >
        {/* Pulse glow elements */}
        {showTooltip && (
          <>
            <span className="theme-pulse-glow"></span>
            <span className="theme-pulse-glow delay"></span>
          </>
        )}
        
        <span className="theme-toggle-track">
          <span className="theme-toggle-thumb">
            {isDark ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            )}
          </span>
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
