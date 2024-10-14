import React from 'react';

interface OutroTextProps {
  showContent: boolean;
  typedText: string;
}

export const OutroText: React.FC<OutroTextProps> = ({ showContent, typedText }) => {
  return (
    <div className={`right-0 text-center transition-all duration-1000 ease-in-out mx-10 ${showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
      <h1 className=" sm:text-lg md:text-xl font-orbitron ">You are on SpaceSlam.</h1>
      <h2 className="sm:text-lg md:text-xl font-orbitron text-blue-400">{typedText}</h2>
    </div>
  );
};
