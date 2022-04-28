import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import NavBar from "./Pages/nav-bar/NavBar";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* <NavBar /> */}
    </Router>
  );
}
