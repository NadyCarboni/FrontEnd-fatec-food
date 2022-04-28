import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

interface INavBar {
  activeKey: string;
}

function NavBar({ activeKey }: INavBar) {
  const [activeKeyNav, setActiveKeyNav] = useState("");

  useEffect(() => {
    setActiveKeyNav(activeKey);
  });

  return (
    <nav className="nav">
      <div className="nav__menu">
        <ul className="nav__list">
          <li>
            <div
              className={`nav__link-container ${
                activeKeyNav === "home" ? "active-link" : ""
              }`}
            >
              <Link
                to="/"
                className="nav__link"
                onClick={() => {
                  setActiveKeyNav("home");
                }}
              >
                <AiOutlineHome />
              </Link>
            </div>
          </li>

          <li>
            <div
              className={`nav__link-container ${
                activeKeyNav === "cart" ? "active-link" : ""
              }`}
            >
              <Link
                to="/cart"
                className="nav__link"
                onClick={() => {
                  setActiveKeyNav("cart");
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
