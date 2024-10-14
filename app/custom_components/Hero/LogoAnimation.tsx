import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Mesh } from 'three';
import { Stars, OrbitControls } from '@react-three/drei';

const SpinningLogo = () => {
  const logoRef = useRef<Mesh>(null);
  
  // Load the texture
  const texture = useLoader(TextureLoader, '/assets/BRAND LOGO.png');
  
  // Animation logic
  useFrame(() => {
    if (logoRef.current) {
      logoRef.current.rotation.z += 0.01;  // Spin along the Z-axis
      logoRef.current.rotation.x += 0.005; // Additional X-axis rotation for extra effect
    }
  });

  return (
    <mesh ref={logoRef}>
      <planeGeometry args={[5, 5]} />
      <meshBasicMaterial map={texture} transparent={true} />
    </mesh>
  );
};

const LogoAnimation: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars />
      {/* <SpinningLogo /> */}
      <OrbitControls enableZoom={false} enablePan={true} />
    </>
  );
};

export default LogoAnimation;