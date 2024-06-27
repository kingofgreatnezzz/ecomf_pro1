import React from "react";
import data from "../../services/dummies";
import ProductCard from "../common/Productcard";
import { Link } from "react-router-dom";

export default function ProductList() {
  return (
    <div className="mx-2 bg-transparent">
      <h1 className="font-bold text-3xl pl-2 md:pl-4 md:text-4xl mt-8 text-black">New Products</h1>

      <div className="container mx-auto px-3 py-8 md:py-16 bg-transparent">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-transparent">
          {data.products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="outline outline-[0.5px] shadow-lg">
              <ProductCard
                id={product.id}
                title={product.title}
                details={product.details}
                price={product.price}
                image={product.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
