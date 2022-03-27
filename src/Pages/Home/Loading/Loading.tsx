import React from "react";

import Logo from "./Componentes/Logo";
import "./style.css";

export default function Loading() {
  return (
    <div className="container p-4 " id="loading">
      <div className="border  full-page">
        <Logo />
      </div>
    </div>
  );
}
