import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const onSearch = (value: any) => console.log(value);
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
            className="poppins"
          />
          <button className="submit-lente" type="submit">
            <SearchOutlined className="search-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
