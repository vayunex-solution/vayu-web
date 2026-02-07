import React, { Suspense, useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// --- BINARY RAIN (010101) ---
const BinaryRain = ({ count = 60 }) => {
    const geo = useMemo(() => new THREE.BoxGeometry(0.05, 0.1, 0.01), []);
    const meshRef = useRef();
    const dummy = useMemo(() => new THREE.Object3D(), []);
    
    const rainState = useMemo(() => {
        const streams = [];
        for (let i = 0; i < count; i++) {
             const streamLen = Math.floor(Math.random() * 8 + 4);
             streams.push({
                 x: (Math.random() - 0.5) * 16,
                 y: Math.random() * 12,
                 z: -3 - Math.random() * 5,
                 speed: Math.random() * 0.05 + 0.02,
                 bits: Array.from({ length: streamLen }, (_, j) => ({ offsetY: j * 0.25 }))
             });
        }
        return streams;
    }, [count]);

    useFrame(() => {
        let idx = 0;
        rainState.forEach(stream => {
            stream.y -= stream.speed;
            if (stream.y < -6) stream.y = 10;
            stream.bits.forEach((bit, i) => {
                dummy.position.set(stream.x, stream.y + bit.offsetY, stream.z);
                dummy.updateMatrix();
                if (meshRef.current) {
                    meshRef.current.setMatrixAt(idx, dummy.matrix);
                    const alpha = (1 - (i / stream.bits.length)) * 0.6;
                    const color = new THREE.Color("#00d4ff").multiplyScalar(alpha);
                    meshRef.current.setColorAt(idx, color);
                    idx++;
                }
            });
        });
        if (meshRef.current) {
            meshRef.current.instanceMatrix.needsUpdate = true;
            if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
        }
    });

    return (
        <instancedMesh ref={meshRef} args={[geo, null, count * 12]}>
            <meshBasicMaterial color="#00d4ff" transparent opacity={0.5} />
        </instancedMesh>
    );
};

// --- FLOATING TECH LABELS ---
const FloatingTechLabels = () => {
    const groupRef = useRef();
    
    const labels = [
        // Tech Labels
        { text: "React", color: "#61dafb", pos: [-2, 1.2, 0.5], size: 0.12 },
        { text: "Python", color: "#ffd43b", pos: [2.2, 1, 0.3], size: 0.11 },
        { text: "GitHub", color: "#ffffff", pos: [-1.8, -0.8, 0.4], size: 0.1 },
        { text: "APK", color: "#3ddc84", pos: [2, -0.5, 0.5], size: 0.11 },
        { text: "Node.js", color: "#68a063", pos: [-2.3, 0.2, 0.3], size: 0.1 },
        { text: "AWS", color: "#ff9900", pos: [2.4, 0.3, 0.4], size: 0.1 },
        // Document Types
        { text: "PDF", color: "#ff3333", pos: [-1.5, 1.5, 0.2], size: 0.09, isDoc: true },
        { text: "DOC", color: "#2b5797", pos: [1.8, 1.4, 0.3], size: 0.09, isDoc: true },
        { text: "XLS", color: "#217346", pos: [-2.5, -0.3, 0.3], size: 0.08, isDoc: true },
        { text: "JSON", color: "#f5a623", pos: [2.6, -0.8, 0.4], size: 0.08, isDoc: true },
        { text: "TXT", color: "#888888", pos: [-1.2, -1.3, 0.3], size: 0.08, isDoc: true },
        { text: "PPT", color: "#d24726", pos: [1.5, -1.1, 0.35], size: 0.08, isDoc: true },
    ];

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        groupRef.current.children.forEach((child, i) => {
            child.position.y = labels[i].pos[1] + Math.sin(t * 0.8 + i * 0.5) * 0.15;
            child.rotation.y = Math.sin(t * 0.3 + i) * 0.1;
        });
    });

    // Simple text representation with boxes
    return (
        <group ref={groupRef}>
            {labels.map((label, i) => (
                <group key={i} position={label.pos}>
                    {/* Background pill */}
                    <mesh>
                        <boxGeometry args={[label.text.length * 0.08, 0.15, 0.02]} />
                        <meshBasicMaterial color="#1a1a2e" transparent opacity={0.8} />
                    </mesh>
                    {/* Text bar (simulating text) */}
                    <mesh position={[0, 0, 0.015]}>
                        <boxGeometry args={[label.text.length * 0.065, 0.06, 0.01]} />
                        <meshBasicMaterial color={label.color} />
                    </mesh>
                    {/* Glow */}
                    <pointLight position={[0, 0, 0.1]} intensity={0.3} distance={1} color={label.color} />
                </group>
            ))}
        </group>
    );
};

// --- ROTATING RINGS (SLOWER SPEED) ---
const RotatingRings = () => {
    const ring1Ref = useRef();
    const ring2Ref = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        ring1Ref.current.rotation.x = t * 0.15;
        ring1Ref.current.rotation.z = t * 0.1;
        ring2Ref.current.rotation.y = t * 0.12;
        ring2Ref.current.rotation.x = t * 0.08;
    });

    return (
        <>
            <mesh ref={ring1Ref}>
                <torusGeometry args={[1.8, 0.025, 16, 64]} />
                <meshStandardMaterial 
                    color="#00d4ff" 
                    metalness={0.9} 
                    roughness={0.1}
                    emissive="#00d4ff"
                    emissiveIntensity={0.4}
                />
            </mesh>
            
            <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2.1, 0.02, 16, 64]} />
                <meshStandardMaterial 
                    color="#a78bfa" 
                    metalness={0.9} 
                    roughness={0.1}
                    emissive="#a78bfa"
                    emissiveIntensity={0.3}
                />
            </mesh>
        </>
    );
};

// --- LIGHT COLORED LAPTOP WITH RGB KEYBOARD ---
const LightLaptop = () => {
    const groupRef = useRef();
    const keyboardRef = useRef();
    const rgbStripRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        
        // Rotate left-right
        groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.35;
        groupRef.current.position.y = Math.sin(t * 0.5) * 0.08;
        
        // Rainbow keyboard - cycling through colors
        const hue = (t * 0.15) % 1;
        if (keyboardRef.current) {
            keyboardRef.current.material.color.setHSL(hue, 1, 0.5);
        }
        if (rgbStripRef.current) {
            rgbStripRef.current.material.color.setHSL((hue + 0.5) % 1, 1, 0.5);
            rgbStripRef.current.material.emissive.setHSL((hue + 0.5) % 1, 1, 0.4);
        }
    });

    // Code lines for screen
    const codeLines = [
        { width: 0.3, color: "#61dafb", x: -0.1 },
        { width: 0.22, color: "#ffd43b", x: -0.12 },
        { width: 0.35, color: "#68a063", x: -0.08 },
        { width: 0.18, color: "#2496ed", x: -0.15 },
        { width: 0.28, color: "#ff9900", x: -0.1 },
    ];

    return (
        <group ref={groupRef} rotation={[0.15, 0, 0]} scale={0.7}>
            {/* Laptop Base - LIGHT SILVER */}
            <mesh position={[0, -0.1, 0.3]}>
                <boxGeometry args={[2.4, 0.08, 1.5]} />
                <meshStandardMaterial 
                    color="#e8e8f0" 
                    metalness={0.9} 
                    roughness={0.1}
                />
            </mesh>
            
            {/* RGB Strip - Color changing */}
            <mesh ref={rgbStripRef} position={[0, -0.08, 1]}>
                <boxGeometry args={[2.2, 0.025, 0.04]} />
                <meshStandardMaterial 
                    color="#ff0000" 
                    emissive="#ff0000"
                    emissiveIntensity={0.8}
                />
            </mesh>
            
            {/* Keyboard Area - Rainbow glow */}
            <mesh position={[0, -0.05, 0.35]}>
                <boxGeometry args={[1.9, 0.02, 1.1]} />
                <meshStandardMaterial color="#d0d0d8" metalness={0.7} roughness={0.2} />
            </mesh>
            
            {/* RGB Keyboard Glow - Color changing */}
            <mesh ref={keyboardRef} position={[0, -0.03, 0.35]}>
                <boxGeometry args={[1.8, 0.008, 1]} />
                <meshBasicMaterial color="#ff00ff" transparent opacity={0.5} />
            </mesh>
            
            {/* Trackpad */}
            <mesh position={[0, -0.04, 0.7]}>
                <boxGeometry args={[0.5, 0.01, 0.3]} />
                <meshStandardMaterial color="#c8c8d0" metalness={0.8} roughness={0.15} />
            </mesh>
            
            {/* Screen Frame - Light color */}
            <group position={[0, 0.8, -0.5]} rotation={[-0.25, 0, 0]}>
                {/* Screen Back - Light reflective */}
                <mesh position={[0, 0, -0.03]}>
                    <boxGeometry args={[2.4, 1.5, 0.05]} />
                    <meshStandardMaterial 
                        color="#e0e0e8" 
                        metalness={1} 
                        roughness={0.05}
                    />
                </mesh>
                
                {/* Logo on back */}
                <mesh position={[0, 0, -0.055]}>
                    <boxGeometry args={[0.25, 0.06, 0.01]} />
                    <meshBasicMaterial color="#6366f1" />
                </mesh>
                
                {/* Screen Bezel */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[2.3, 1.4, 0.015]} />
                    <meshStandardMaterial color="#f0f0f5" metalness={0.3} roughness={0.5} />
                </mesh>
                
                {/* Screen Display */}
                <mesh position={[0, 0, 0.01]}>
                    <planeGeometry args={[2.1, 1.25]} />
                    <meshBasicMaterial color="#0d1117" />
                </mesh>
                
                {/* Code Lines on Screen */}
                {codeLines.map((line, i) => (
                    <mesh key={i} position={[line.x, 0.4 - i * 0.15, 0.015]}>
                        <boxGeometry args={[line.width, 0.04, 0.001]} />
                        <meshBasicMaterial color={line.color} />
                    </mesh>
                ))}
                
                {/* Screen Glow */}
                <pointLight position={[0, 0, 0.5]} intensity={1} distance={3} color="#00d4ff" />
            </group>
            
            {/* Laptop Hinge */}
            <mesh position={[0, 0.02, -0.45]} rotation={[Math.PI/2, 0, 0]}>
                <cylinderGeometry args={[0.035, 0.035, 2.2, 16]} />
                <meshStandardMaterial color="#c0c0c8" metalness={0.9} roughness={0.1} />
            </mesh>
        </group>
    );
};

// --- SUN REFLECTION LIGHT ---
const SunLight = () => {
    const lightRef = useRef();
    
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        const angle = t * 0.4;
        lightRef.current.position.x = Math.sin(angle) * 6;
        lightRef.current.intensity = 1.5 + Math.sin(angle) * 0.8;
    });

    return (
        <directionalLight 
            ref={lightRef}
            position={[5, 5, 5]} 
            intensity={1.5} 
            color="#ffffff"
        />
    );
};

// --- WELCOME MESSAGE ---
const WelcomeMessage = ({ visible }) => {
    const groupRef = useRef();
    
    useFrame(({ clock }) => {
        if (groupRef.current) {
            const t = clock.getElapsedTime();
            groupRef.current.position.y = 1.6 + Math.sin(t * 2) * 0.08;
        }
    });

    if (!visible) return null;

    return (
        <group ref={groupRef} position={[0, 1.6, 0]} scale={0.55}>
            <mesh position={[0, 0, -0.05]}>
                <boxGeometry args={[2.2, 0.55, 0.08]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={0.95} />
            </mesh>
            
            <mesh position={[0, -0.38, -0.05]} rotation={[0, 0, Math.PI]}>
                <coneGeometry args={[0.12, 0.2, 3]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={0.95} />
            </mesh>
            
            {/* W E L C O M E in rainbow */}
            <mesh position={[-0.8, 0, 0]}><boxGeometry args={[0.035, 0.2, 0.015]} /><meshBasicMaterial color="#ff3366" /></mesh>
            <mesh position={[-0.73, -0.03, 0]} rotation={[0, 0, 0.15]}><boxGeometry args={[0.035, 0.16, 0.015]} /><meshBasicMaterial color="#ff3366" /></mesh>
            <mesh position={[-0.67, 0, 0]}><boxGeometry args={[0.035, 0.12, 0.015]} /><meshBasicMaterial color="#ff3366" /></mesh>
            <mesh position={[-0.61, -0.03, 0]} rotation={[0, 0, -0.15]}><boxGeometry args={[0.035, 0.16, 0.015]} /><meshBasicMaterial color="#ff3366" /></mesh>
            <mesh position={[-0.54, 0, 0]}><boxGeometry args={[0.035, 0.2, 0.015]} /><meshBasicMaterial color="#ff3366" /></mesh>
            
            <mesh position={[-0.38, 0, 0]}><boxGeometry args={[0.035, 0.2, 0.015]} /><meshBasicMaterial color="#ff9900" /></mesh>
            <mesh position={[-0.32, 0.08, 0]}><boxGeometry args={[0.1, 0.035, 0.015]} /><meshBasicMaterial color="#ff9900" /></mesh>
            <mesh position={[-0.32, 0, 0]}><boxGeometry args={[0.08, 0.035, 0.015]} /><meshBasicMaterial color="#ff9900" /></mesh>
            <mesh position={[-0.32, -0.08, 0]}><boxGeometry args={[0.1, 0.035, 0.015]} /><meshBasicMaterial color="#ff9900" /></mesh>
            
            <mesh position={[-0.12, 0, 0]}><boxGeometry args={[0.035, 0.2, 0.015]} /><meshBasicMaterial color="#ffd43b" /></mesh>
            <mesh position={[-0.06, -0.08, 0]}><boxGeometry args={[0.1, 0.035, 0.015]} /><meshBasicMaterial color="#ffd43b" /></mesh>
            
            <mesh position={[0.1, 0, 0]}><boxGeometry args={[0.035, 0.2, 0.015]} /><meshBasicMaterial color="#3ddc84" /></mesh>
            <mesh position={[0.15, 0.08, 0]}><boxGeometry args={[0.08, 0.035, 0.015]} /><meshBasicMaterial color="#3ddc84" /></mesh>
            <mesh position={[0.15, -0.08, 0]}><boxGeometry args={[0.08, 0.035, 0.015]} /><meshBasicMaterial color="#3ddc84" /></mesh>
            
            <mesh position={[0.32, 0, 0]}><torusGeometry args={[0.08, 0.02, 8, 16]} /><meshBasicMaterial color="#61dafb" /></mesh>
            
            <mesh position={[0.5, 0, 0]}><boxGeometry args={[0.035, 0.2, 0.015]} /><meshBasicMaterial color="#2496ed" /></mesh>
            <mesh position={[0.56, 0.02, 0]} rotation={[0, 0, 0.2]}><boxGeometry args={[0.035, 0.12, 0.015]} /><meshBasicMaterial color="#2496ed" /></mesh>
            <mesh position={[0.62, 0.02, 0]} rotation={[0, 0, -0.2]}><boxGeometry args={[0.035, 0.12, 0.015]} /><meshBasicMaterial color="#2496ed" /></mesh>
            <mesh position={[0.68, 0, 0]}><boxGeometry args={[0.035, 0.2, 0.015]} /><meshBasicMaterial color="#2496ed" /></mesh>
            
            <mesh position={[0.85, 0, 0]}><boxGeometry args={[0.035, 0.2, 0.015]} /><meshBasicMaterial color="#a78bfa" /></mesh>
            <mesh position={[0.91, 0.08, 0]}><boxGeometry args={[0.1, 0.035, 0.015]} /><meshBasicMaterial color="#a78bfa" /></mesh>
            <mesh position={[0.91, 0, 0]}><boxGeometry args={[0.08, 0.035, 0.015]} /><meshBasicMaterial color="#a78bfa" /></mesh>
            <mesh position={[0.91, -0.08, 0]}><boxGeometry args={[0.1, 0.035, 0.015]} /><meshBasicMaterial color="#a78bfa" /></mesh>
        </group>
    );
};

// --- MAIN SCENE ---
const Scene = ({ isMobile }) => {
    const { viewport } = useThree();
    const groupXPosition = isMobile ? 0 : Math.min(viewport.width / 8, 0.8);
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowWelcome(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <color attach="background" args={["#0a0a12"]} />
            <fog attach="fog" args={["#0a0a12", 6, 18]} />
            
            <ambientLight intensity={0.5} />
            <SunLight />
            <pointLight position={[-5, 3, 0]} intensity={0.5} color="#a78bfa" />
            <pointLight position={[0, -2, 2]} intensity={0.4} color="#00d4ff" />

            <group position={[groupXPosition, -0.2, 0]}>
                <LightLaptop />
                <RotatingRings />
                <WelcomeMessage visible={showWelcome} />
            </group>
            
            {/* Floating Tech Labels */}
            <FloatingTechLabels />
            
            <BinaryRain count={50} />
        </>
    );
};

const HeroCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="hero-canvas-container">
            <Canvas
                dpr={[1, 2]}
                camera={{ position: [0, 0.5, 5], fov: 50 }}
                gl={{ 
                    antialias: true, 
                    toneMapping: THREE.ACESFilmicToneMapping, 
                    toneMappingExposure: 1.3,
                    outputColorSpace: THREE.SRGBColorSpace
                }}
            >
                <Suspense fallback={null}>
                    <Scene isMobile={isMobile} />
                    {!isMobile && (
                        <EffectComposer disableNormalPass>
                            <Bloom luminanceThreshold={0.4} luminanceSmoothing={0.8} intensity={1} />
                        </EffectComposer>
                    )}
                </Suspense>
            </Canvas>
        </div>
    );
};

export default HeroCanvas;
