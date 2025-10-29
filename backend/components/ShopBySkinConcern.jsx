// ShopBySkinConcern.jsx
import React from 'react';
import Title from './Title';
import { assets } from '../assets/assets'; // ✅ Import from assets.js

const ShopBySkinConcern = () => {
  const skinConcerns = [
    { id: 1, name: 'Acne', image: assets.acne },
    { id: 2, name: 'Anti-Aging', image: assets.antiaging },
    { id: 3, name: 'Hyperpigmentation', image: assets.hyperpigmentation },
    { id: 4, name: 'Brightening', image: assets.brightening },
    { id: 5, name: 'Dark Circles', image: assets.darkcircles },
    { id: 6, name: 'Pores', image: assets.pores },
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
      <div className=" py-8 text-3xl"
      style={{ fontFamily: "Judson, serif" }}
      >
        <Title text1={'Shop by'} text2={'Skin Concern'} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skinConcerns.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer hover:scale-105 transition-transform duration-300 text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 font-medium text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopBySkinConcern;
