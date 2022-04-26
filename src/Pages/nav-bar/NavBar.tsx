import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [activeKey, setActiveKey] = useState("home");

  return (
    <nav className="nav">
      <div className="nav__menu">
        <ul className="nav__list">
          <li>
            <div
              className={`nav__link-container ${
                activeKey === "home" ? "active-link" : ""
              }`}
            >
              <Link
                to="/"
                className="nav__link"
                onClick={() => {
                  setActiveKey("home");
                }}
              >
                <AiOutlineHome />
              </Link>
            </div>
          </li>

          <li>
            <div
              className={`nav__link-container ${
                activeKey === "search" ? "active-link" : ""
              }`}
            >
              <Link
                to="/product"
                className="nav__link"
                onClick={() => {
                  setActiveKey("search");
                }}
              >
                <AiOutlineSearch />
              </Link>
            </div>
          </li>

          <li>
            <div
              className={`nav__link-container ${
                activeKey === "cart" ? "active-link" : ""
              }`}
            >
              <Link
                to="/cart"
                className="nav__link"
                onClick={() => {
                  setActiveKey("cart");
                }}
              >
                <AiOutlineShoppingCart />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
