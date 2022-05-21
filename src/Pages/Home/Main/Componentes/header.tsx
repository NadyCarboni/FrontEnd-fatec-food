import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  function onSearch(value: string) {
    console.log(value);
  }

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
          <Link to="/cart">
            <AiOutlineShoppingCart size="2em" />
          </Link>
        </div>
        <div className="inputSearchContainer">
          <input
            type="text"
            placeholder="O que está procurando?"
            className=""
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
            className="submit-lente"
            type="submit"
            onClick={() => {
              onSearch(searchTerm);
            }}
          >
            <SearchOutlined className="search-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
