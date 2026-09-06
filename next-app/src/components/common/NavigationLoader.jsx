'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import './NavigationLoader.css';

// Global trigger helpers for programmatic calls
let globalStart = () => {};
let globalComplete = () => {};

export const startNavigationProgress = () => globalStart();
export const completeNavigationProgress = () => globalComplete();

export default function NavigationLoader() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'completing'
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const timerRef = useRef(null);
  const resetTimerRef = useRef(null);
  const currentPathRef = useRef(pathname);

  const clearTimers = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  };

  const start = useCallback(() => {
    clearTimers();
    setStatus('loading');
    setProgress(28);

    timerRef.current = setTimeout(() => {
      setProgress((prev) => (prev < 65 ? 65 : prev));
      timerRef.current = setTimeout(() => {
        setProgress((prev) => (prev < 85 ? 85 : prev));
        timerRef.current = setTimeout(() => {
          setProgress((prev) => (prev < 94 ? 94 : prev));
        }, 600);
      }, 350);
    }, 150);
  }, []);

  const complete = useCallback(() => {
    clearTimers();
    setProgress(100);
    setStatus('completing');

    resetTimerRef.current = setTimeout(() => {
      setStatus('idle');
      setProgress(0);
    }, 280);
  }, []);

  // Expose global methods
  useEffect(() => {
    globalStart = start;
    globalComplete = complete;
    return () => {
      globalStart = () => {};
      globalComplete = () => {};
    };
  }, [start, complete]);

  // When pathname or searchParams change, finish progress bar
  useEffect(() => {
    if (currentPathRef.current !== pathname) {
      currentPathRef.current = pathname;
      complete();
    }
  }, [pathname, searchParams, complete]);

  // Global link listener: hover prefetch & click start
  useEffect(() => {
    const isInternalLink = (element) => {
      const anchor = element.closest('a');
      if (!anchor || !anchor.href) return null;

      // Ignore special targets or external links
      if (anchor.target && anchor.target !== '_self') return null;
      if (anchor.hasAttribute('download')) return null;

      try {
        const url = new URL(anchor.href, window.location.origin);
        if (url.origin !== window.location.origin) return null;

        // Ignore mailto, tel, javascript
        if (!url.protocol.startsWith('http')) return null;

        return { anchor, url };
      } catch {
        return null;
      }
    };

    // Eager prefetch on hover or touch
    const handleMouseOver = (e) => {
      const match = isInternalLink(e.target);
      if (!match) return;

      const { url } = match;
      // Skip if same page hash
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;

      try {
        router.prefetch(url.pathname);
      } catch {
        // Safe fallback
      }
    };

    // Instant trigger on click
    const handleClick = (e) => {
      // Don't intercept modified clicks (Ctrl+Click, etc.)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.defaultPrevented) return;

      const match = isInternalLink(e.target);
      if (!match) return;

      const { url } = match;

      // If it's an on-page anchor link (e.g. /#outcomes), don't trigger loading bar
      if (url.pathname === window.location.pathname) {
        return;
      }

      start();
    };

    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('touchstart', handleMouseOver, { passive: true });
    document.addEventListener('click', handleClick, { capture: true });

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('touchstart', handleMouseOver);
      document.removeEventListener('click', handleClick, { capture: true });
      clearTimers();
    };
  }, [router, start]);

  if (status === 'idle' && progress === 0) {
    return null;
  }

  return (
    <div
      className={`v-nav-loader-bar ${status === 'loading' ? 'active' : ''} ${status === 'completing' ? 'finished' : ''}`}
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    >
      <div className="v-nav-loader-peg" />
    </div>
  );
}
