import React, { useEffect, useState } from "react";

import Produto from "./produto";

interface IProducts {
  adicional: any[];
  ativo: boolean;
  categoriaId: number;
  foto: string;
  id: number;
  nome: string;
  preco: number;
}

function Recomendados({ productList }: { productList: IProducts[] }) {
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    if (productList) setProducts(productList);
  }, [productList]);

  console.log("products", products);

  return (
    <div>
      <div className="m-4 mt-0">
        <h4 className="title-name">Recomendados</h4>
        <div className="produtos">
          {Array.isArray(products) &&
            products.map((item) => {
              return (
                <Produto
                  name={item.nome}
                  image={item.foto}
                  price={item.preco}
                  id={item.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Recomendados;
