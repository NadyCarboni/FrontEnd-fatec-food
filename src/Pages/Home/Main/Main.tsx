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

  const getProducts = async () => {
    try {
      const response = await api.get("/Produto");
      console.log(response.data.data);
      if (response) setProducts(response.data.data);
    } catch (err) {
      setErrorProduct(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log("products: ", products);

  return (
    <div id="main">
      <Header />
      <Categoria />
      <Recomendados productList={products} />
    </div>
  );
}
