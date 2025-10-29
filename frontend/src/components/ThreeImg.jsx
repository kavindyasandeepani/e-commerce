import React from "react";
import { assets } from "../assets/assets";

const ThreeImg = () => {
  const imageItems = [
    {
      id: 1,
      title: "BRAZILIAN CUSIN CHEROSA X2 HAIR & BODY FRAGRANCE MIST",
      image: assets.new04 // Replace with your actual image asset
    },
    {
      id: 2,
      title: "DISCOVER MINCE",
      image: assets.new05 // Replace with your actual image asset
    },
    {
      id: 3,
      title: "BOTH OTHER",
      image: assets.new06 // Replace with your actual image asset
    }
  ];

  return (
    <div className="my-10"
    style={{
        paddingTop: "",
        paddingBottom: "",
        paddingLeft: "0.5in",
        paddingRight: "0.5in",
      }}
    >
      {/* Three Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {imageItems.map((item) => (
          <div
            key={item.id}
            className="group relative  overflow-hidden transition-all duration-300"
          >
            {/* Product Image - Increased Height */}
            <div className="relative h-100 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThreeImg;