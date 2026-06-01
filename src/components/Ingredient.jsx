import React from "react";
import GlideGallery from "./GlideGallery";

const Ingredient = () => {
  return (
    <div className="bg-primary h-screen w-full flex">
      <div className="flex flex-col items-start px-20 pt-25 h-full gap-4">
        <div className="flex gap-2">
          <p className="text-xs text-secondary">SINGLE INGREDIENT PURITY</p>
          <div className="w-15 h-[0.25px] bg-yellow-600 mt-2" />
        </div>

        <h1 className="text-5xl font-cormorant font-bold text-white">
          The Power of <br />
          <span className="text-yellow-600">One Ingredient</span>
        </h1>
        <p className="text-white max-w-xl opacity-45">
          In a world of complex formulations, we chose radical simplicity. The pumpkin alone — in its most complete, unaltered form — carries everything the body needs.
        </p>
      </div>
      <div className="w-full h-full pt-20" >
        <GlideGallery/>

      </div>
    </div>
  );
};

export default Ingredient;
