import React from "react";
import images from "../../services/dummies";

export default function ProductList() {
  return (
    <div className="">
      <h1 className="font-bold text-2xl pl-4 mt-8 text-black">New Products</h1>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {Object.values(images.products).map((image, index) => (
            <div key={index}>
              <img src={image} alt={`product ${index + 1}`} />
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}
