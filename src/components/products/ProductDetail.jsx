import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../services/dummies";

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export default function ProductDetail() {
  const [liked, setLiked] = useState(false);

  const handleLiked = () => {
    setLiked(!liked);
  };
  const { id } = useParams();
  const product = data.products.find((product) => product.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto p-4 md:flex md:space-x-8 lg:space-x-16">
      <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
        <img
          className="w-full h-64 md:h-72 lg:h-96 object-cover rounded-lg"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col justify-center space-y-4 pt-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-stone-950 font-bold">
          {product.title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
          {product.price}
        </p>
        <p className="text-gray-700 text-base md:text-lg">{product.details}</p>
        <button
          onClick={handleLiked}
          className="flex justify-center items-center w-full bg-zinc-900 hover:bg-zinc-700 p-3 mt-4 text-white transition"
        >
          {liked ? (
            <FaHeart className="h-6 w-6 mr-2"/>
          ) : (
            <CiHeart className="h-6 w-6 mr-2"/>
          )}
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
