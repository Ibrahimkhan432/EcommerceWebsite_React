import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Header from "../component/Header";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";

const RouterPaage = () => {
  return (
    <div>
     <Header/>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RouterPaage;
