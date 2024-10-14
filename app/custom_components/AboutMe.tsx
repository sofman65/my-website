import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import '../styles/styles.css';

const AboutMe: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`parallax-section flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 ${
        inView ? 'parallax-content' : 'parallax-hidden'
      }`}
    >
<div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-base font-semibold text-white-500">ABOUT SPACE SLAM</h2>
        <h1 className="text-3xl lg:text-5xl font-bold text-white-900 mt-2">
          Welcome, I'm Sofianos.
        </h1>
        <p className="mt-4 text-lg text-white-700">
          At Space Slam, we believe in the power of AI and automation to drive business success. Whether you're an entrepreneur, coder, or tech innovator, this is your space to unlock the full potential of AI. Let us help you **slam through the barriers** holding your business back.
        </p>
        <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-full shadow hover:bg-gray-700">
          Discover Our Vision
        </button>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <Image src="/sofianos-hero.png" alt="Sofianos" className="w-full h-auto" width={1000} height={1000} objectFit='contain' />
      </div>
    </section>
  );
};


export default AboutMe;
