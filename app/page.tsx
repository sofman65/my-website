"use client"

import Hero from "./custom_components/Hero/Hero";
import AboutMe from "./custom_components/AboutMe";
import { CoreOfferings } from "./custom_components/CoreOfferings/CoreOfferings";
import { SocialProof } from "./custom_components/SocialProof";
import Footer from "./custom_components/Footer";
import Newsletter from "./custom_components/Newsletter";
import Subheadings from "./custom_components/Hero/Subheading";
import ParallaxWrapper from "./styles/ParallaxWrapper";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col text-white">
      <ParallaxWrapper>
        <Hero />
      </ParallaxWrapper>
      <ParallaxWrapper>
        <Subheadings />
      </ParallaxWrapper>
      <ParallaxWrapper>
        <AboutMe />
      </ParallaxWrapper>
      <ParallaxWrapper>
        <CoreOfferings />
      </ParallaxWrapper>
      <ParallaxWrapper>
        <SocialProof />
      </ParallaxWrapper>
      <ParallaxWrapper>
        <Newsletter />
      </ParallaxWrapper>
   
    </main>
  );
}
