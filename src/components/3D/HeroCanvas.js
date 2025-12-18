import React, { Suspense, useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// --- Custom Curve for the Ribbon ---
class CustomCurve extends THREE.Curve {
	constructor(scale = 1) {
		super();
		this.scale = scale;
	}
	getPoint(t, optionalTarget = new THREE.Vector3()) {
		const tx = t * 3 - 1.5;
		const ty = Math.sin(2 * Math.PI * t);
		const tz = Math.cos(2 * Math.PI * t);
		return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
	}
}

// --- The main Flowing Ribbon Component ---
const FlowingRibbon = ({ color, rotation }) => {
    const meshRef = useRef();
    const tubeGeo = useMemo(() => {
        const path = new CustomCurve(2);
        // Reduced segments from 64/8 to 32/4 for better performance
        return new THREE.TubeGeometry(path, 32, 0.05, 4, false);
    }, []);
    
    useFrame(({ clock }) => {
        if (meshRef.current) {
             meshRef.current.rotation.z = clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <mesh ref={meshRef} geometry={tubeGeo} rotation={rotation}>
            <meshStandardMaterial 
                color={color} 
                emissive={color} 
                emissiveIntensity={1.5} 
                side={THREE.DoubleSide} 
                wireframe={true}
            />
        </mesh>
    );
};

// --- Camera Rig for Mouse Interaction ---
const Rig = ({ groupXPosition }) => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(groupXPosition + mouse.x * 2, mouse.y * 1, 7), 0.02);
    camera.lookAt(groupXPosition, 0, 0);
  });
};

const Scene = () => {
  const { viewport } = useThree();
  const groupXPosition = viewport.width / 4;

  return (
    <>
      <color attach="background" args={["#0d0d22"]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff"/>
      
      <group position={[groupXPosition, 0, 0]}>
        <FlowingRibbon color="#8A2BE2" rotation={[0, Math.PI / 4, 0]} />
        <FlowingRibbon color="#4facfe" rotation={[0, -Math.PI / 4, 0.5]} />
        <FlowingRibbon color="#ffffff" rotation={[0, Math.PI / 2, 1]} />
      </group>

      <Rig groupXPosition={groupXPosition} />
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
      {/* Cap Pixel Ratio to 2 to prevent lag on high-res screens like S23 (which has dpr ~3-4) */}
      <Canvas 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 7], fov: 60 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Scene />
          {/* Disable heavy post-processing on mobile */}
          {!isMobile && (
            <EffectComposer disableNormalPass>
              <Bloom
                luminanceThreshold={0.2}
                luminanceSmoothing={0.9}
                intensity={0.4}
                mipmapBlur={false} 
              />
            </EffectComposer>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroCanvas;

