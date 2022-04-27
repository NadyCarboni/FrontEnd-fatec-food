import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import React from "react";

export default function Header() {
  console.log("123");
  return (
    <div id="header">
      <div className="showcase">
        <div className="flex title ">
          <div className="flex column">
            <h3 className="font-weight-700">Especial para você</h3>
            <p className="font-weight-300">
              Deliciosos pratos para você escolher
            </p>
          </div>
          <AiOutlineShoppingCart size="2em" />
        </div>
        <input type="text" />
      </div>
    </div>
  );
}
