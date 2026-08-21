"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, PerspectiveCamera } from "@react-three/drei";

export default function HeroCanvas() {
  return (
    <Canvas className="w-full h-full bg-black/90">
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
      
      {/* Iluminación base */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#00ffff" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#ff00ff" />
      
      {/* Geometría Flotante */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]} position={[3, 0, -2]}>
          <icosahedronGeometry args={[2, 1]} />
          {/* Modo wireframe para ese look de ingeniería */}
          <meshStandardMaterial 
            color="#06b6d4" 
            wireframe 
            transparent 
            opacity={0.3} 
          />
        </mesh>
      </Float>

      {/* Controles: Permitimos rotar pero bloqueamos el zoom para no arruinar el layout */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.8}
        maxPolarAngle={Math.PI / 2 + 0.2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}
