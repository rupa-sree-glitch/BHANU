import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white bg-black/50">
        <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
        <p className="text-lg mt-4">Find the best products at the best prices.</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
