import React from "react";

import AppRoutes from "./AppRoutes";
import Menu from "./Componentes Gerais/Menu/Menu";
import "./Reset.css";

import "./Util.css";

function App() {
  return (
    <>
      <Menu />
      <AppRoutes />
    </>
  );
}

export default App;
