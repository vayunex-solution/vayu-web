import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroCanvas = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Blob 1
            gsap.to(".blob-1", {
                x: "random(-200, 200)",
                y: "random(-200, 200)",
                scale: "random(0.8, 1.2)",
                rotation: "random(-45, 45)",
                duration: "random(10, 15)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // Animate Blob 2
            gsap.to(".blob-2", {
                x: "random(-250, 250)",
                y: "random(-250, 250)",
                scale: "random(0.9, 1.3)",
                duration: "random(12, 18)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // Animate Blob 3
            gsap.to(".blob-3", {
                x: "random(-150, 150)",
                y: "random(-150, 150)",
                scale: "random(0.7, 1.4)",
                rotation: "random(-90, 90)",
                duration: "random(8, 14)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Large glowing blur spheres that simulate fluid mesh gradients
    return (
        <div 
            ref={containerRef} 
            className="hero-gsap-container" 
            style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                overflow: 'hidden',
                backgroundColor: '#050314', // Very dark blue/purple deep space background
                pointerEvents: 'none',
                zIndex: 0
            }}
        >
            {/* Soft global ambient light */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '100vw', height: '100vh',
                background: 'radial-gradient(circle at center, rgba(30, 10, 60, 0.4) 0%, transparent 70%)'
            }} />

            {/* Blob 1: Deep Purple/Pink */}
            <div className="blob-1" style={{
                position: 'absolute',
                top: '20%',
                left: '30%',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(ellipse at center, rgba(159, 85, 255, 0.15) 0%, transparent 60%)',
                filter: 'blur(60px)',
                borderRadius: '50%',
                mixBlendMode: 'screen'
            }} />

            {/* Blob 2: Vibrant Blue/Cyan */}
            <div className="blob-2" style={{
                position: 'absolute',
                top: '40%',
                right: '10%',
                width: '70vw',
                height: '70vw',
                background: 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.1) 0%, transparent 60%)',
                filter: 'blur(80px)',
                borderRadius: '50%',
                mixBlendMode: 'screen'
            }} />

            {/* Blob 3: Accent Magenta/Indigo */}
            <div className="blob-3" style={{
                position: 'absolute',
                bottom: '-10%',
                left: '10%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.08) 0%, transparent 60%)',
                filter: 'blur(50px)',
                borderRadius: '50%',
                mixBlendMode: 'screen'
            }} />
        </div>
    );
};

export default HeroCanvas;
