import React from "react";
import GlideGallery from "./GlideGallery";

const Ingredient = () => {
  return (
    <div className="bg-primary h-screen w-full flex relative">
      
      <div className="flex flex-col items-start px-20 pt-25 h-full gap-4">
        <div className="flex gap-2">
          <p className="text-xs text-secondary">SINGLE INGREDIENT PURITY</p>
          <div className="w-15 h-[0.25px] bg-yellow-600 mt-2" />
        </div>

        <h1 className="text-5xl font-cormorant font-bold text-white">
          The Power of <br />
          <span className="text-yellow-600">One Ingredient</span>
        </h1>
        <p className="text-white text-sm max-w-3xl opacity-45">
          In a world of complex formulations, we chose radical simplicity. The pumpkin alone — in its most complete, unaltered form — carries everything the body needs.
        </p>

        <div className="flex flex-col gap-6 mt-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-yellow-600 flex items-center justify-center flex-shrink-0 cursor-default">
              <span className="text-yellow-600 text-lg">🌿</span>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">No Additives</h3>
              <p className="text-gray-400 text-sm">Free from any chemical additions, preservatives, or stabilisers.</p>
            </div>
          </div>
          <hr className="border-yellow-600 opacity-25" />

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-yellow-600 flex items-center justify-center flex-shrink-0">
              <span className="text-yellow-600 text-lg">✨</span>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">No Preservatives</h3>
              <p className="text-gray-400 text-sm">Formulated for fresh consumption — no shelf-life chemistry required.</p>
            </div>
          </div>

          <hr className="border-yellow-600 opacity-25" />

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-yellow-600 flex items-center justify-center flex-shrink-0">
              <span className="text-yellow-600 text-lg">◆</span>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">No Artificial Enhancers</h3>
              <p className="text-gray-400 text-sm">Colour, flavour, and texture arise entirely from the pumpkin itself.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen pt-20" >
        <GlideGallery/>

      </div>
      <div className="absolute top-1 left-0 w-full h-1 z-50">
        <div className="flex items-center justify-between px-20 h-full">
          <div className="h-[0.25px] bg-yellow-600 w-3xl opacity-25" />
          <p>⭐</p>
          <div className="h-[0.25px] bg-yellow-600 w-3xl opacity-25" />
        </div>
      </div>
      <div className="absolute bottom-1 left-0 w-full h-1 z-50">
        <div className="flex items-center justify-between px-20 h-full">
          <div className="h-[0.25px] bg-yellow-600 w-3xl opacity-25" />
          {/* <p>⭐</p> */}
          <div className="h-[0.25px] bg-yellow-600 w-3xl opacity-25" />
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
