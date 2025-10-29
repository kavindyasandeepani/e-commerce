import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";


const LatestCollection = () => {
  const { products } = useContext(ShopContext);
     const [LatestProduct, setLatestProducts] = useState([]);
     const navigate = useNavigate();
   
     useEffect(() => {
       setLatestProducts(products.slice(3, 8)); // Show 5 products
     }, [products]);
  


  return (
    <div className="my-10 "
    style={{
        paddingTop: "",
        paddingBottom: "",
        paddingLeft: "0.5in",
        paddingRight: "0.5in",
      }}
    >
      {/* Header */}
      <div
  className="flex justify-between items-center py-8 text-3xl"
  style={{ fontFamily: 'Judson, serif' }}
>
  <Title text1={"New"} text2={"Arrivals"} />
  <button
    onClick={() => navigate("/new-arrivals")}
    style={{ fontFamily: 'Inter, sans-serif' }}
    className="text-[16px] text-gray-600 hover:text-pink-500 transition underline-offset-2 hover:underline"
  >
    View all
  </button>
</div>


      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {LatestProduct.map((item, index) => (
          <div
            key={index}
            className="group relative rounded overflow-hidden shadow-sm hover:shadow-md transition bg-gray-100 cursor-pointer hover:scale-105 duration-300 flex flex-col"
          >
            {/* Product Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-77 object-cover p-4 transition duration-300 group-hover:opacity-90"
              />
              {/* Hover Icons */}
              <div className="absolute top-0 right-0 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition">
                <img
                  src={assets.search_icon}
                  alt="Search"
                  className="w-10 h-10 bg-pink-100 rounded-full p-2 shadow-md hover:scale-110 transition"
                />
                <img
                  src={assets.cart_icon}
                  alt="Add"
                  className="w-10 h-10 bg-pink-100 rounded-full p-2 shadow-md hover:scale-110 transition"
                />
              </div>
            </div>

            {/* Product Info - Name left, price at bottom */}
            <div className="px-4 py-4 text-left mt-auto">
              <h3 className="text-[15px] font-medium text-gray-800">{item.name}</h3>
              <p className="text-gray-500 text-sm">Rs {item.price}.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestCollection
