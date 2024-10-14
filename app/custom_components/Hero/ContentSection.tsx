import React from 'react';

interface ContentSectionProps {
  showContent: boolean;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ showContent }) => {
  return (
    <div className={`relative z-20 text-center transition-all duration-1000 ease-in-out ${showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        Welcome to SpaceSlam
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto px-4">
        Explore the frontiers of AI-powered entrepreneurship and innovation
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
        <a
          href="#explore"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
        >
          Explore AI Tools
        </a>
        <a
          href="#learn"
          className="bg-transparent hover:bg-purple-700 text-purple-500 font-semibold hover:text-white py-3 px-6 border border-purple-500 hover:border-transparent rounded-full transition duration-300 transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};