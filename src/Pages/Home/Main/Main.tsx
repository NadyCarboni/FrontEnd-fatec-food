import React, { useEffect, useState } from "react";

import "./style.css";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";

import api from "../../../service/api";
import Categoria from "./Componentes/Categoria/categorias";
import Header from "./Componentes/header";
import Recomendados from "./Componentes/Recomendados/recomendados";

export default function Main() {
  const [activeKey, setActiveKey] = useState("home");
  const [products, setProducts] = useState<any>();
  const [errorProduct, setErrorProduct] = useState<any>();
  const [comandaId, setComandaId] = useState<number>();
  const [searchTerm, setSearchTerm] = useState("");
  const [categorias, setCategorias] = useState<any>([]);

  function onSearch(value: string) {
    const searchProducts = async () => {
      try {
        const response = await api.get(`/Produto/Nome?nome=${value}`);
        if (response) setProducts(response.data.data);
      } catch (err) {
        setErrorProduct(err);
        setProducts([]);
      }
    };

    searchProducts();
  }

  function onSearchCategoria(value: string) {
    const onSearchCategoria = async () => {
      try {
        const response = await api.get(`/Produto/Categoria?id=${value}`);
        console.log("response: ", response);
        if (response) setProducts(response.data.data);
      } catch (err) {
        setErrorProduct(err);
        setProducts([]);
      }
    };

    onSearchCategoria();
  }

  useEffect(() => {
    const getComandaId = async () => {
      try {
        const response = await api.get("/Comanda");
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

    const getCategoria = async () => {
      try {
        const response = await api.get("/Categoria");
        if (response) setCategorias(response.data.data);
      } catch (err) {
        setErrorProduct(err);
      }
    };

    getCategoria();
    getComandaId();
    getProducts();
  }, []);

  return (
    <div id="main">
      <div id="header">
        <div className="showcase">
          <div className="flex title ">
            <div className="flex column">
              <h3 className="font-weight-700">Especial para você</h3>
              <p className="font-weight-300">
                Deliciosos pratos para você escolher
              </p>
            </div>
            <Link to="/cart">
              <AiOutlineShoppingCart size="2em" />
            </Link>
          </div>
          <div className="inputSearchContainer">
            <input
              type="text"
              placeholder="O que está procurando?"
              className=""
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <button
              className="submit-lente"
              type="submit"
              onClick={() => {
                onSearch(searchTerm);
              }}
            >
              <SearchOutlined className="search-icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="m-4 mb-4">
        <h4 className="title-name mb-3">Categorias</h4>
        <div className="horizontal-scroll">
          {" "}
          {categorias.map((categoria: any) => {
            return (
              <button
                className="categoria-container flex column align-itens-center mt-2"
                key={categoria.id}
                type="submit"
                onClick={() => {
                  onSearchCategoria(categoria.id);
                }}
              >
                <div className="icon flex align-itens-center justify-content-center mb-1">
                  <i className={`fa-solid fa-${categoria.imagem} fa-2x`} />
                </div>
                <div className="nome ">{categoria.nome}</div>
              </button>
            );
          })}
        </div>
      </div>
      <Recomendados productList={products} />
    </div>
  );
}
