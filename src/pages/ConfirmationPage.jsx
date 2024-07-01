import React from "react";
import { Link } from "react-router-dom";
import AnimatedBackground from "../components/common/AnimatedBackground";

export default function ConfirmationPage() {
  return (
    <div className="flex flex-col items-center justify-center pt-28 p-4 ">
    <AnimatedBackground/>
      <div className="bg-transparent bg-slate-200 backdrop-blur shadow-md rounded-lg p-6 md:p-10">
        <h1 className="text-3xl md:text-5xl font-bold text-green-600 mb-4 text-center">
          Thank You! 🎉
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 text-center mb-6">
          Your order has been successfully placed.
        </p>
        <p className="text-md md:text-lg text-gray-600 text-center mb-6">
          A confirmation email has been sent to you.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
          <Link to="/shop">
            <button className="bg-zinc-800 text-white py-2 px-6 hover:bg-zinc-700 transition duration-300">
              Continue Shopping
            </button>
          </Link>
          {/* 
          
          <Link to="/orders">
            <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-300">
              View Orders
            </button>
          </Link>  
          */}
        </div>
      </div>
    </div>
  );
}
