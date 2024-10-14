"use client"
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import VideoBackground from './VideoBackground';
import { ContentSection } from './ContentSection';
import { OutroText } from './OutroText';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import LogoAnimation from './LogoAnimation';
import { GlobeDemo } from './GlobeDemo';




const Hero: React.FC = () => {



  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white">
    

      <div className={`relative z-20 p-4 text-center transition-opacity duration-1000 mt-[150px] md:mt-[300px]`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">You are on SpaceSlam</h1>
        <p className="text-lg md:text-xl mb-6">Let's Slam the future together.</p>
   
   
        <GlobeDemo />
      </div>
    </section>
  );
};

export default Hero;
