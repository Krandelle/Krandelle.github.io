import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, Environment } from '@react-three/drei';

function LaserPixEnclosure() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }
  });

  const brushedSilver = { color: "#e2e8f0", roughness: 0.4, metalness: 0.6 };
  const darkerSilver = { color: "#cbd5e1", roughness: 0.5, metalness: 0.5 };
  const glossyDark = { color: "#1e293b", roughness: 0.3, metalness: 0.5 };

  return (
    <group position={[0, -1.8, 0]}>
      <group ref={groupRef}>
        <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial {...brushedSilver} />
        </mesh>

        <mesh position={[0, 1.5, 1.52]}>
          <boxGeometry args={[2.4, 2.2, 0.04]} />
          <meshStandardMaterial {...glossyDark} />
        </mesh>

        <mesh position={[0, 1.5, 1.54]}>
          <boxGeometry args={[2.0, 1.8, 0.02]} />
          <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.6} transparent opacity={0.9} />
        </mesh>

        <mesh position={[-0.9, 1.5, 1.57]} castShadow>
          <boxGeometry args={[0.06, 0.8, 0.06]} />
          <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.7} />
        </mesh>

        <mesh position={[0, 0.65, 1.54]}>
          <boxGeometry args={[0.6, 0.3, 0.02]} />
          <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.5} />
        </mesh>

        <mesh position={[0, 3.02, 0]}>
          <boxGeometry args={[3, 0.05, 3]} />
          <meshStandardMaterial {...darkerSilver} />
        </mesh>

        <mesh position={[0, 3.1, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.08, 32]} />
          <meshStandardMaterial color="#f59e0b" roughness={0.4} metalness={0.3} />
        </mesh>

        <mesh position={[0, 3.35, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.5, 16]} />
          <meshStandardMaterial color="#334155" roughness={0.4} metalness={0.6} />
        </mesh>

        <mesh position={[0, 3.65, 0]}>
          <torusGeometry args={[0.6, 0.08, 16, 100]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} emissive="#ffffff" emissiveIntensity={0.8} />
        </mesh>

        <mesh position={[0, 3.1, 0.65]}>
          <cylinderGeometry args={[0.12, 0.12, 0.1, 32]} />
          <meshStandardMaterial color="#fbbf24" roughness={0.4} metalness={0.3} />
        </mesh>

        <mesh position={[0, 3.25, 0.65]}>
          <boxGeometry args={[0.06, 0.2, 0.06]} />
          <meshStandardMaterial color="#334155" roughness={0.4} metalness={0.6} />
        </mesh>

        <mesh position={[0, 3.4, 0.65]}>
          <boxGeometry args={[0.35, 0.15, 0.2]} />
          <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.5} />
        </mesh>

        <mesh position={[0, 3.4, 0.76]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.03, 32]} />
          <meshStandardMaterial color="#000000" roughness={0.2} metalness={0.8} />
        </mesh>

        <mesh position={[0, 2.25, -1.52]}>
          <boxGeometry args={[2.4, 1.4, 0.04]} />
          <meshStandardMaterial {...glossyDark} />
        </mesh>

        <mesh position={[0.8, 2.25, -1.55]}>
          <boxGeometry args={[0.05, 0.5, 0.05]} />
          <meshStandardMaterial color="#334155" roughness={0.3} metalness={0.7} />
        </mesh>

        <mesh position={[0, 1.1, -1.52]}>
          <boxGeometry args={[2.4, 1.1, 0.04]} />
          <meshStandardMaterial {...glossyDark} />
        </mesh>

        <mesh position={[0.5, 1.1, -1.54]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.04, 32]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} metalness={0.3} />
        </mesh>

        <mesh position={[-0.6, 1.1, -1.55]}>
          <boxGeometry args={[0.15, 0.1, 0.04]} />
          <meshStandardMaterial color="#dc2626" roughness={0.4} metalness={0.3} />
        </mesh>

        <mesh position={[-1.52, 1.5, 0]}>
          <boxGeometry args={[0.04, 0.8, 0.8]} />
          <meshStandardMaterial {...glossyDark} />
        </mesh>

        <mesh position={[0, 0.48, 0]}>
          <boxGeometry args={[3, 0.05, 3]} />
          <meshStandardMaterial {...darkerSilver} />
        </mesh>

        {[[-1.2, -0.05, 1.2], [1.2, -0.05, 1.2], [-1.2, -0.05, -1.2], [1.2, -0.05, -1.2]].map((pos, i) => (
          <mesh key={`foot-${i}`} position={pos}>
            <cylinderGeometry args={[0.15, 0.15, 0.1, 32]} />
            <meshStandardMaterial color="#0f172a" roughness={0.9} />
          </mesh>
        ))}

        {[[-1.35, 2.9, 1.35], [1.35, 2.9, 1.35], [-1.35, 2.9, -1.35], [1.35, 2.9, -1.35],
          [-1.35, 0.6, 1.35], [1.35, 0.6, 1.35], [-1.35, 0.6, -1.35], [1.35, 0.6, -1.35]].map((pos, i) => (
          <mesh key={`screw-${i}`} position={pos}>
            <cylinderGeometry args={[0.03, 0.03, 0.02, 16]} />
            <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={['#bfdbfe']} />
      <Environment preset="studio" />
      <PerspectiveCamera makeDefault position={[0, 0.5, 10]} fov={45} />
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={2}
        maxDistance={12}
        autoRotate
        autoRotateSpeed={0.8}
      />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 7]} intensity={1.2} castShadow />
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <LaserPixEnclosure />
      </Float>
    </>
  );
}

export default function LaserPixModel() {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Force re-render after mount to ensure proper sizing
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full" 
      style={{ background: '#bfdbfe', minHeight: '400px' }}
    >
      <Canvas
        shadows
        gl={{ antialias: true, alpha: false }}
        style={{ width: '100%', height: '100%', background: '#bfdbfe' }}
        onCreated={() => setIsLoaded(true)}
      >
        <Scene />
      </Canvas>
    </div>
  );
}