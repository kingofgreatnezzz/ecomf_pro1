// src/components/AnimatedBackground.jsx
import React from "react";
import {
  FaShopify,
  FaShoppingCart,
  FaTag,
  FaCreditCard,
  FaBoxOpen,
} from "react-icons/fa";

const AnimatedBackground = () => {
  const icons = [
    <FaShopify />,
    <FaShoppingCart />,
    <FaTag />,
    <FaCreditCard />,
    <FaBoxOpen />,
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="relative w-full h-full">
        {Array.from({ length: 11 }).map((_, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div
              key={index}
              className="absolute animate-dangle"
              style={{
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              <div className="w-12 h-12 text-white  bg-slate-400 rounded-full opacity-75 flex items-center justify-center">
                {Icon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedBackground;
