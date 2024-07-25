// src/components/AnimatedVideo.jsx
import React from "react";

const AnimatedVideo = () => (
  <div className="video-container">
    <video
      autoPlay
      loop
      muted
      className="video-background"
      src="https://cdn.dribbble.com/userupload/6001819/file/original-90e4d6cf3edd4355d5a27990a501529f.mp4" // Path to your video file in the public folder
      type="video/mp4"
    />
  </div>
);

export default AnimatedVideo;
