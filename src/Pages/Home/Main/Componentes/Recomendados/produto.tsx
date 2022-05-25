import React from "react";
import { Link, useParams } from "react-router-dom";

import api from "../../../../../service/api";

interface IProducts {
  name: string;
  price: number;
  image: string;
  id: number;
}

export default function Produto({ name, price, image, id }: IProducts) {
  const { comandId } = useParams<{ comandId?: string }>();
  // const comandId = 1;
  return (
    // TROCAR AQUI
    <Link to={`/product/${id}/${comandId}`}>
      <div className="container-produto flex column pb-1">
        <img src={`http://54.175.22.87${image}`} alt="" />
        <div className="legenda">
          <h4 className="font-weight-500">{name}</h4>
          <p className="font-weight-200">R$ {price}</p>
        </div>
      </div>
    </Link>
  );
}
