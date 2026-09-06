'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * BlurText - ReactBits Style Animated Text Component
 * Animates text word-by-word or letter-by-letter with a blur-in effect,
 * and clears filters upon completion for maximum rendering performance.
 */
const BlurText = ({
  text,
  delay = 0,
  animateBy = 'words', // 'words' or 'letters'
  direction = 'bottom', // 'top' or 'bottom'
  onAnimationComplete,
  className = '',
  style = {}
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Select all animatable parts
    const elements = containerRef.current.querySelectorAll('.blur-part');
    const yOffset = direction === 'top' ? -20 : 20;

    // Reset properties to initial state
    gsap.set(elements, { filter: 'blur(12px)', opacity: 0, y: yOffset });

    gsap.to(elements, {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.06,
      delay: delay / 1000,
      ease: 'power3.out',
      clearProps: 'filter,transform', // Frees GPU memory after animation
      onComplete: () => {
        if (onAnimationComplete) onAnimationComplete();
      }
    });

    return () => gsap.killTweensOf(elements);
  }, [text, delay, direction, onAnimationComplete]);

  // Parse text into tokens: keep newlines and spaces intact
  let parts = [];
  if (animateBy === 'words') {
    parts = text.split(/(\s+)/);
  } else {
    parts = text.split('');
  }

  return (
    <div ref={containerRef} className={`blur-text ${className}`} style={{ ...style, display: 'block', maxWidth: '100%', overflow: 'hidden' }}>
      {parts.map((part, index) => {
        if (part === '\n') return <br key={index} />;
        
        if (part.trim() === '') {
          return <span key={index} style={{ whiteSpace: 'pre' }}>{part}</span>;
        }
        
        return (
          <span 
            key={index} 
            className="blur-part"
            style={{ 
              display: 'inline-block', 
              opacity: 0, 
              filter: 'blur(12px)' 
            }}
          >
            {part}
          </span>
        );
      })}
    </div>
  );
};

export default BlurText;
