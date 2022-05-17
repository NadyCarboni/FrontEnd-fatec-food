import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/:comandId" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:productId/:comandId"
          element={<ProductDetails />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
