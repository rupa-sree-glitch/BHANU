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
        <h1>Welcome to Our Store</h1>
        <p>Find the best products here</p>
        <a href="#shop" className="hero-btn">Shop Now</a>
      </div>
    </div>
  );
};

export default Hero;
