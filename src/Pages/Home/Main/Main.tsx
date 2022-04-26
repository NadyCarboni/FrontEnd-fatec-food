import React from "react";

import "./style.css";
import Categoria from "./Componentes/Categoria/categorias";
import Header from "./Componentes/header";
import Recomendados from "./Componentes/Recomendados/recomendados";

export default function Main() {
  return (
    <div id="main">
      <Header />
      <Categoria />
      <Recomendados />
    </div>
  );
}
