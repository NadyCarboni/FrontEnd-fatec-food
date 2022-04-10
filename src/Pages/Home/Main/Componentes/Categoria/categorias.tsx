import React, { useEffect } from "react";
import { FaHamburger } from "react-icons/fa";

import Container from "./container";

export default function Categoria() {
  return (
    <div className="m-4 mb-0">
      <h4 className="title-name">Categorias</h4>
      <div className="horizontal-scroll">
        <Container />
      </div>
    </div>
  );
}
