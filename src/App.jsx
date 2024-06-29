import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/header/Navbar";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import ProductDetail from "./components/products/ProductDetail";
import Cart from "./components/cart/Cart";




function App() {
  return (
    <div className="bg-slate-100">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
