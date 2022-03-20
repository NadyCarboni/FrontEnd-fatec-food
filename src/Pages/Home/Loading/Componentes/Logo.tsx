import React from "react";

import logoImg from "./img/Logo.png";

export default function Logo() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logoImg} alt="Fatec Food" />
      </div>
    </div>
  );
}
