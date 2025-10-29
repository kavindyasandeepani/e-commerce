import React from "react";
import { assets } from "../assets/assets"; // make sure japanees.png is imported here

const JapaneseHairCare = () => {
  return (
    


    <section className="w-full max-w-[18000px] mx-auto max-h-screen bg-white py-90 px-4 md:px-8 lg:px-16 xl:px-12 flex flex-col md:flex-row md:items-center md:justify-between md:space-x-20 rounded-2xl"
    
      style={{
        paddingTop: "1in",
        paddingBottom: "1in",
        paddingLeft: "0.5in",
        paddingRight: "0.5in",
      }}
    
    >
      {/* Left Text Section */}
      <div className="md:w-2/5 space-y-3 z-10">
        <p className="text-gray-500 uppercase tracking-wide text-sm">
          Japanese Hair Care
        </p>
        <h2 className="text-2xl md:text-3xl font-serif text-gray-800 leading-snug">
          GLOSSY HAIR STARTS <br /> HERE
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Transform dry, color treated, or unmanageable hair with our bestselling
          repair set powered by Royal Jelly and deep moisture-lock technology.
          Tame frizz, restore shine, and enjoy salon-soft results with zero salon
          appointments and zero stress. Trusted by 100,000+ women worldwide.
        </p>

        <button className="bg-[#ebb9b9] text-gray-800 font-medium tracking-wide px-6 py-5 rounded-sm hover:bg-[#f48b8b] transition cursor-pointer">
          SHOP THE SET AND FALL IN LOVE WITH YOUR HAIR AGAIN!
        </button>
      </div>

      {/* Right Image Section */}
      <div className="md:w-3/5 mt-10 md:mt-0 flex justify-center">
        <img
          src={assets.japanees}
          alt="Japanese Hair Care"
          className="w-full h-full max-h-[500px] object-contain scale-125"
        />
      </div>
    </section>
  );
};

export default JapaneseHairCare;