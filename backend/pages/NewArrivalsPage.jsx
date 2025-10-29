import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const NewArrivalsPage = () => {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProducts] = useState([]);

  useEffect(() => {
    // Show all products
    setLatestProducts(products);
  }, [products]);

  return (
    <div className="my-10 px-6">
      <div className="py-8 text-3xl text-center">
        <Title text1={"All"} text2={"New Arrivals"} />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 bg-white p-6 rounded-2xl">
        {latestProduct.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer bg-gray-100"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-contain p-4 transition duration-300 group-hover:opacity-90"
              />
              <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition">
                <img
                  src={assets.search_icon}
                  alt="Search"
                  className="w-10 h-10 bg-white rounded-full p-2 shadow-md hover:scale-110 transition"
                />
                <img
                  src={assets.cart_icon}
                  alt="Add"
                  className="w-10 h-10 bg-white rounded-full p-2 shadow-md hover:scale-110 transition"
                />
              </div>
            </div>
            <div className="px-4 py-4 text-center">
              <h3 className="text-[15px] font-medium text-gray-800">{item.name}</h3>
              <p className="text-gray-500 text-sm">Rs {item.price}.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsPage;
