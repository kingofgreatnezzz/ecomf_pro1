import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/header/Navbar";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import ProductDetail from "./components/products/ProductDetail";
import Cart from "./components/cart/Cart";
import Paymentgateway from "./pages/Paymentgateway";
import ShippingInfo from "./pages/ShippingInfo";
import ConfirmationPage from "./pages/ConfirmationPage";
import Notifications from "./pages/Notifications";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import { ErrorPageLoading } from "./services/svgs";
import LoadingPage from "./components/common/LoadingPage";


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay for demonstration, adjust as needed
  }, []);



  return (
    <>
    {
      loading ? <LoadingPage /> :  
      <div className="bg-slate-100">
  
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Paymentgateway />} />
          <Route path="/shipping" element={<ShippingInfo />} />
          <Route path="/confirmationpage" element={<ConfirmationPage />} />
          <Route path="/notification" element={<Notifications />} />

          <Route path="/error" element={<ErrorPageLoading/>}/>
          {/* Authentication route*/}
          <Route path="/login" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        <Footer />
   
    </div>}
    
    </>
  );
}

export default App;
