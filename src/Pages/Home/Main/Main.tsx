import React, { useEffect, useState } from "react";

import "./style.css";
import api from "../../../service/api";
import Categoria from "./Componentes/Categoria/categorias";
import Header from "./Componentes/header";
import Recomendados from "./Componentes/Recomendados/recomendados";

export default function Main() {
  const [activeKey, setActiveKey] = useState("home");
  const [products, setProducts] = useState<any>();
  const [errorProduct, setErrorProduct] = useState<any>();
  const [comandaId, setComandaId] = useState<number>();

  useEffect(() => {
    const getComandaId = async () => {
      try {
        const response = await api.get("/Comanda");
        console.log(response.data.data);
        if (response) setComandaId(response.data.data);
      } catch (err) {
        setErrorProduct(err);
      }
    };

    const getProducts = async () => {
      try {
        const response = await api.get("/Produto");
        if (response) setProducts(response.data.data);
      } catch (err) {
        setErrorProduct(err);
      }
    };

    getComandaId();
    getProducts();
  }, []);

  return (
    <div id="main">
      <Header />
      <Categoria />
      <Recomendados productList={products} />
    </div>
  );
}
