"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function KineticPrism() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#2563EB"
          emissive="#080A0F"
          roughness={0.1}
          metalness={0.8}
          distort={0.35}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <div className="w-full h-full absolute inset-0 -z-10 opacity-70 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#2563EB" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#F59E0B" />
        <KineticPrism />
      </Canvas>
    </div>
  );
}
