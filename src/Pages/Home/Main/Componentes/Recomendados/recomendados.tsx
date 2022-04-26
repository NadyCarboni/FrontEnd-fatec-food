import React from "react";

import Produto from "./produto";

export default function Recomendados() {
  return (
    <div>
      <div className="m-4 mt-0">
        <h4 className="title-name">Recomendados</h4>
        <div className="produtos">
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
        </div>
      </div>
    </div>
  );
}
