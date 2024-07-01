import React from "react";
import Header from "../components/common/header/Header";
import Hero from "../components/common/header/Hero";
import ProductList from "../components/products/ProductList";
import AnimatedBackground from "../components/common/AnimatedBackground";

export default function Home() {
  return (
    <div className=" mx-auto mt-3">
      <AnimatedBackground />
      <div className="relative z-0">
        <Header />
        <Hero />
        <ProductList />
      </div>
    </div>
  );
}
