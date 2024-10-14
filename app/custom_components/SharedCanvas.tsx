"use client"
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import LogoAnimation from './Hero/LogoAnimation';

const SharedCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 transition-opacity duration-1000">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <LogoAnimation />
        <OrbitControls enableZoom={false} enablePan={true} />
      </Canvas>
    </div>
  );
};

export default SharedCanvas;
