import React from "react";

import Loader from "./Componentes/Loader";
import Logo from "./Componentes/Logo";
import "./style.css";

export default function Loading() {
  return (
    <div className="container " id="loading">
      <div className=" flex justify-content-center align-itens-center full-page">
        <Logo />
        <Loader />
      </div>
    </div>
  );
}
