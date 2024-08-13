import React from 'react';

const VideoCard = ({ videoSrc, title1, title2 }) => {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <video
          className="w-full h-72 object-cover object-top"
          src={videoSrc}
          autoPlay
          loop
          muted
        />
        {/* Title overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
          <h2 className="text-white text-xl font-bold">{title1}</h2>
          <h3 className="text-white text-lg">{title2}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

