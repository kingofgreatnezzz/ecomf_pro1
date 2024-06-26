import React from "react";
import Header from "../components/common/header/Header";
import Hero from "../components/common/header/Hero";
import ProductList from "../components/products/ProductList";

export default function Home() {
  return (
    <div className=" mx-auto mt-3">
      <Header />
      <Hero/>
      <ProductList/>
    </div>
  );
}
