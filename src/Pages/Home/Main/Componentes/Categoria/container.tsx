import React from "react";
import { FaHamburger } from "react-icons/fa";

export default function Container() {
  const categorias = [
    { id: 1, nome: "Culinária Judáica" },
    { id: 2, nome: "Lanches" },
    { id: 3, nome: "Sobremesas" },
    { id: 4, nome: "Comida japonesa" },
    { id: 5, nome: "Doces" },
    { id: 6, nome: "Saladas" },
    { id: 7, nome: "Salgados" },
    { id: 8, nome: "Massas" },
  ];

  return (
    <>
      {" "}
      {categorias.map((categoria) => {
        return (
          <div
            className="categoria-container flex column align-itens-center"
            key={categoria.id}
          >
            <div className="icon flex align-itens-center justify-content-center mb-1">
              <FaHamburger size="2rem" />
            </div>
            <div className="nome ">{categoria.nome}</div>
          </div>
        );
      })}
    </>
  );
}
