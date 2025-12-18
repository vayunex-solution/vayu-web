import React, { Suspense, useRef, useMemo } from "react";
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
        return new THREE.TubeGeometry(path, 64, 0.05, 8, false);
    }, []);
    
    useFrame(({ clock }) => {
        meshRef.current.rotation.z = clock.getElapsedTime() * 0.1;
    });

    return (
        <mesh ref={meshRef} geometry={tubeGeo} rotation={rotation}>
            <meshStandardMaterial 
                color={color} 
                emissive={color} 
                emissiveIntensity={2} 
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
    // Camera ko right side par focus rakhte hue move karein
    camera.position.lerp(vec.set(groupXPosition + mouse.x * 2, mouse.y * 1, 7), 0.02);
    camera.lookAt(groupXPosition, 0, 0); // Hamesha right side ke center par dekhein
  });
};

const Scene = () => {
  const { viewport } = useThree();
  // Animation ko dynamically screen ke right-half ke center mein position karein
  const groupXPosition = viewport.width / 4;

  return (
    <>
      <color attach="background" args={["#0d0d22"]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff"/>
      
      {/* Group ko dynamically calculated position par set karein */}
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
  return (
    <div className="hero-canvas-container">
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
        <Suspense fallback={null}>
          <Scene />
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.1}
              luminanceSmoothing={0.1}
              intensity={0.4}
              mipmapBlur
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroCanvas;

