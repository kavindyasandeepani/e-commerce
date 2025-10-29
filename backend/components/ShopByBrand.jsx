import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

const ShopByBrand = () => {
  const brands = [
    {
      id: 1,
      name: "Anua",
      image: assets.Brand1 // Replace with your actual image asset
    },
    {
      id: 2,
      name: "cosrx",
      image: assets.Brand2 // Replace with your actual image asset
    },
    {
      id: 3,
      name: "LA. Gjrb",
      image: assets.Brand3 // Replace with your actual image asset
    },
    {
      id: 4,
      name: "SKINIO04",
      image: assets.Brand4 // Replace with your actual image asset
    },
    {
      id: 5,
      name: "MAYBELLINE",
      image: assets.Brand5 // Replace with your actual image asset
    },
    {
      id: 6,
      name: "BRAND6", // Replace with actual brand name
      image: assets.Brand6 // Replace with your actual image asset
    }
  ];

  return (
    <div className="my-10"
    style={{
        paddingTop: "",
        paddingBottom: "",
        paddingLeft: "0.5in",
        paddingRight: "0.5in",
      }}>
      {/* Header */}
      <div
        className="flex flex-col py-8 text-3xl"
        style={{ fontFamily: 'Judson, serif' }}
      >
        <Title text1={"Shop By"} text2={"Brand"} />
      </div>

      {/* Brands Grid - Full width without side spacing */}
      <div className="grid grid-cols-6 gap-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="group flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 border-2 border-gray-300 bg-transparent"
          >
            {/* Brand Image */}
            <div className="relative w-28 h-30 overflow-hidden cursor-pointer">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-contain transition duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopByBrand;