import React from "react";
import { Link } from "react-router-dom";

interface IProducts {
  name: string;
  price: number;
  description: string;
  image: string;
  id: string;
}

export default function Produto({
  name,
  price,
  description,
  image,
  id,
}: IProducts) {
  return (
    <Link to={`/product/${id}`}>
      <div className="container-produto flex column pb-1">
        <img src={image} alt="" />
        <div className="legenda">
          <h4 className="font-weight-500">{name}</h4>
          <p className="font-weight-200">R$ {price}</p>
        </div>
      </div>
    </Link>
  );
}
