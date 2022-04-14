import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import React, { useState } from "react";
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
              <a
                href="/"
                className="nav__link"
                onClick={() => {
                  setActiveKey("home");
                }}
              >
                <AiOutlineHome />
              </a>
            </div>
          </li>

          <li>
            <div
              className={`nav__link-container ${
                activeKey === "search" ? "active-link" : ""
              }`}
            >
              <a
                href="/"
                className="nav__link"
                onClick={() => {
                  setActiveKey("search");
                }}
              >
                <AiOutlineSearch />
              </a>
            </div>
          </li>

          <li>
            <div
              className={`nav__link-container ${
                activeKey === "cart" ? "active-link" : ""
              }`}
            >
              <a
                href="/"
                className="nav__link"
                onClick={() => {
                  setActiveKey("cart");
                }}
              >
                <AiOutlineShoppingCart />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
