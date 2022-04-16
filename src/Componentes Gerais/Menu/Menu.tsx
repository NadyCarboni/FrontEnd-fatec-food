import React from "react";
import "./style.css";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

export default function Menu() {
  return (
    <nav className="flex justify-content-center ">
      <div className="navbar p-3 flex justify-content-center align-itens-center">
        <AiOutlineHome size="3rem" className="active p-2" />
        <AiOutlineSearch size="3rem" className="mx-5 p-2" />
        <AiOutlineShoppingCart size="3rem" className="p-2" />
      </div>
    </nav>
  );
}
