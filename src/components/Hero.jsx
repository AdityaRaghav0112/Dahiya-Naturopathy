import React from "react";
import bgVideo from "../assets/background/bg-1.mp4";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center">
        <p className="text-xs tracking-widest text-center text-gray-400 mb-8">
          THERAPEUTIC FORMULATION
        </p>
        <h1 className="text-7xl font-cormorant font-bold text-white mb-2 leading-tight">
          Pumpkin-Based
        </h1>
        <h2 className="text-6xl font-cormorant italic text-yellow-600 mb-6 leading-tight">
          Therapeutic Soup
        </h2>
        <p className="text-sm text-gray-400 max-w-md mx-auto">
          A naturopathic approach to metabolic balance and digestive efficiency
        </p>
      </div>
      <div className="absolute bottom-1.5 left-0 w-full z-30">
        <div className="flex items-end justify-between px-20">
          <div className="text-center h-[0.25px] bg-yellow-600 z-20 w-3xl opacity-25" />
          {/* <p>⭐</p> */}
          <div className="text-center h-[0.25px] bg-yellow-600 z-20 w-3xl opacity-25" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
