import React from "react";

import logoImg from "./img/Logo.png";

export default function Logo() {
  return (
    <div className="container ">
      <div className="logo flex column text-center align-itens-center justify-content-center p-2">
        <img src={logoImg} alt="Fatec Food" />
        <h1 className="font-weight-300 ">
          <span className="font-weight-600 red">Fatec</span> Food
        </h1>
        <p className="small">
          Making your food <span className="red">smarter</span>
        </p>
      </div>
    </div>
  );
}
