import React from 'react';
import { useInView } from 'react-intersection-observer';

const ParallaxWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`parallax-section ${inView ? 'parallax-content' : 'parallax-hidden'}`}
    >
      {children}
    </div>
  );
};

export default ParallaxWrapper;

