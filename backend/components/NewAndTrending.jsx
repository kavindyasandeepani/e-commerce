import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const NewAndTrending = () => {
  const { products } = useContext(ShopContext);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const navigate = useNavigate();

  

  const trendingItems = [
    {
      id: 1,
      title: "VT Cosmetics Reedle Shot",
      description: "The VT Cosmetics Reedle Shot 100 offers an at-home micro needling experience, delivering targeted benefits for smoother, radiant skin.",
      buttonText: "SHOP NOW",
      image: assets.new01
    },
    {
      id: 2,
      title: "Blush Me Beauty",
      description: "Unleash your beauty with our top-notch products at unbeatable prices! Dive into the fabulous world of Blush Me and see what we have in store for you!",
      buttonText: "SHOP NOW",
      image: assets.new02
    },
    {
      id: 3,
      title: "Sunscreen Glossary",
      description: "Helping you find the only SPF you want to wear. Every. Single. Day. Click the button below and discover our wide range of sunscreens now!",
      buttonText: "SHOP NOW",
      image: assets.new03
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
      {/* Header - Centered without View All button */}
      <div
        className="flex flex-col items-center text-center py-8 text-3xl"
        style={{ fontFamily: 'Judson, serif' }}
      >
        <Title text1={"NEW &"} text2={"TRENDING"} />
      </div>

      {/* Trending Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trendingItems.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl overflow-hidden  transition-all duration-300   "
          >
            {/* Product Image - Increased Height */}
            <div className="relative h-160 overflow-hidden"> {/* Using h-96 for better height */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105 cursor-pointer"
              />
            </div>

            {/* Product Info */}
            <div className="p-6">
              <h3 className="text-2xl font-serif text-center  text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {item.description}
              </p>
              {/* White and Black Outline Button with decreased length */}
              <button className="bg-white text-gray-500 font- py-1 px-4 rounded-sm border-1 cursor-pointer  hover:text-black transition duration-300 w-auto mx-auto block">
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewAndTrending;