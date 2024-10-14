import React from 'react';

interface VideoBackgroundProps {
  videoEnded: boolean;
  setVideoEnded: (ended: boolean) => void;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoEnded, setVideoEnded }) => {
  return (
    <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${videoEnded ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          onEnded={() => setVideoEnded(true)}
        >
          <source src="/videos/welcome.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default VideoBackground;
