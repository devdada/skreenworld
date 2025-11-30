"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Model() {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/skreen.glb");

  // slow rotation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={ref} object={scene} scale={1.3} />;
}

export default function SkreenModel() {
  return (
    <div style={{ width: "100%", height: "800px" }}>
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1} />
        <directionalLight intensity={2} position={[3, 3, 3]} />
        <Model />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/skreen.glb");
