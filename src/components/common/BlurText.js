import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * BlurText - ReactBits Style Animated Text Component
 * Animates text word-by-word or letter-by-letter with a blur-in effect.
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

    // Reset properties to initial state just in case of re-renders
    gsap.set(elements, { filter: 'blur(15px)', opacity: 0, y: yOffset });

    gsap.to(elements, {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.1, // Delay between each word
      delay: delay / 1000, // Convert ms to seconds
      ease: 'power3.out',
      onComplete: () => {
        if (onAnimationComplete) onAnimationComplete();
      }
    });

    // Cleanup not strictly necessary here, but good practice
    return () => gsap.killTweensOf(elements);
  }, [text, delay, direction, onAnimationComplete]);

  // Parse text into tokens: keep newlines and spaces intact
  let parts = [];
  if (animateBy === 'words') {
    // Split by whitespace but keep the whitespace tokens
    parts = text.split(/(\s+)/);
  } else {
    parts = text.split('');
  }

  return (
    <div ref={containerRef} className={`blur-text ${className}`} style={{ ...style, display: 'block', maxWidth: '100%', overflow: 'hidden' }}>
      {parts.map((part, index) => {
        // Handle explicit newlines
        if (part === '\n') return <br key={index} />;
        
        // Handle pure whitespace (spaces, tabs)
        if (part.trim() === '') {
          return <span key={index} style={{ whiteSpace: 'pre' }}>{part}</span>;
        }
        
        // Animatable text
        return (
          <span 
            key={index} 
            className="blur-part"
            style={{ 
              display: 'inline-block', 
              opacity: 0, // Hidden until GSAP fires
              filter: 'blur(15px)' 
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
