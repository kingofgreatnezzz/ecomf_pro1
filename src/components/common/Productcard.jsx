import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ id, title, details, price, image }) => {
  return (
    <div className="shadow-md overflow-hidden">
      <div className="w-full h-48 md:h-64">
        <img className="w-full h-full object-cover" src={image} alt={title}/>
      </div>
      <div className="p-4 backdrop-blur-sm">
        <h2 className="text-lg md:text-xl font-bold">{title}</h2>
        <p className="text-sm md:text-base text-gray-700">{details}</p>
        <p className="text-base md:text-lg font-semibold">{price}</p>

        <a
          href="#"
          className="flex justify-center items-center w-full bg-slate-600 hover:bg-slate-500 p-2 mt-2 text-white transition"
        >
          <CiHeart className="h-6 w-6 mr-2"/>
          <span>Add to Cart</span>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
