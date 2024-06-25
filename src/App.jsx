import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";






function App() {
  return (
    <Router>
      <Navbar />

      
      <Routes>
        <Route path="/" element={<Home />}/>
    
      </Routes>
     <Footer/>
    </Router>
  );
}

export default App;
