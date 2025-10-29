import React from "react";
import { assets } from "../assets/assets";

const BeautyOfJoseon = () => {
  return (
    <section className="relative w-full h-[100vh] md:h-[90vh]  ">
      {/* Background Image */}
      <img
        src={assets.joseon}
        alt="Beauty of Joseon"
        className="w-full h-full object-cover"
      />

      {/* Text Box Overlay */}
      <div className="absolute top-1/2 left-8 md:left-16 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-4 md:p-5 rounded-2xl w-[80%] sm:w-[55%] md:w-[38%] lg:w-[28%] shadow-lg">
        <p className="text-gray-500 text-sm mb-1 tracking-wide">
          Beauty of Joseon
        </p>
        <h2 className="text-2xl md:text-3xl font-serif text-gray-600 mb-2 leading-snug">
          ROOTED IN TRADITION, <br /> CRAFTED FOR TODAY
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
          Inspired by the Hanbang rituals, Beauty of Joseon formulas blend
          time-honored herbal ingredients with modern skincare science. Each
          product is thoughtfully made to nourish, soothe, and bring out your
          skin’s natural glow — gently and effectively.
        </p>
        <button className="bg-[#F7B7B2] text-gray-800 px-5 py-2.5 rounded-sm font-medium hover:bg-[#f59c95] transition text-sm md:text-base">
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default BeautyOfJoseon;
