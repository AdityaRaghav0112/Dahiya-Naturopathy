import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Working = () => {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const cards = cardsContainerRef.current;
    const container = containerRef.current;

    if (!cards || !container) return;

    // Wait for next frame to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      // Calculate the scroll distance needed
      // Add half the container width to center the last card
      const scrollDistance = cards.scrollWidth - container.clientWidth / 1.2;

      if (scrollDistance <= 0) return;

      // Horizontal scroll animation
      gsap.to(cards, {
        x: -scrollDistance,
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${scrollDistance + 200}`,
          scrub: 1, // Smooth scrubbing
          markers: false, // Set to true for debugging
          pin: true, // Pin the section while scrolling
        },
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen bg-[#0b1d12] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[0.25px] bg-yellow-600" />
      {/* Absolute positioned text */}
      <div className="absolute top-20 left-0 w-full h-full pointer-events-none z-10 flex flex-col items-start px-20">
        <p className="text-secondary text-xs">How it works</p>
        <h1 className="text-5xl font-cormorant font-bold text-white mt-4">
          Five Pathways to <br />
          <span className="text-yellow-600">Natural Balance</span>
        </h1>
        <p className="text-white max-w-xl opacity-45 mt-6">
          Each therapeutic action works in concert with the body's innate
          intelligence — no shortcuts, no synthetic intervention.
        </p>
      </div>

      {/* Horizontal scrolling cards */}
      <div
        ref={cardsContainerRef}
        className="flex items-start justify-start gap-8 pt-86 px-20"
      >
        <div className="flex-shrink-0 bg-white p-6 rounded-lg w-200 h-100">
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Card 1
          </div>
        </div>
        <div className="flex-shrink-0 bg-white p-6 rounded-lg w-200 h-100">
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Card 2
          </div>
        </div>
        <div className="flex-shrink-0 bg-white p-6 rounded-lg w-200 h-100">
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Card 3
          </div>
        </div>
        <div className="flex-shrink-0 bg-white p-6 rounded-lg w-200 h-100">
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Card 4
          </div>
        </div>
        <div className="flex-shrink-0 bg-white p-6 rounded-lg w-200 h-100">
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Card 5
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
