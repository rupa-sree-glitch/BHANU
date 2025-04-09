import React from "react";
import "./Hero.css"; // Make sure to create this CSS file

const Hero = () => {
  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/videos/your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
    
      </div>
    </div>
  );
};

export default Hero;
