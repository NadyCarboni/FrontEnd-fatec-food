import React, { useState } from "react";

import "./style.css";
import Categoria from "./Componentes/Categoria/categorias";
import Header from "./Componentes/header";
import Recomendados from "./Componentes/Recomendados/recomendados";

export default function Main() {
  const [activeKey, setActiveKey] = useState("home");

  return (
    <div id="main">
      <Header />
      <Categoria />
      <Recomendados />
    </div>
  );
}
