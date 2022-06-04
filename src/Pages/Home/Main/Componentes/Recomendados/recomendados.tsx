import { ExclamationCircleFilled, LoadingOutlined } from "@ant-design/icons";
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

interface IProductList {
  productList: IProducts[];
  isLoading: boolean;
}

function Recomendados({ productList, isLoading }: IProductList) {
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    if (productList) {
      setProducts(productList.filter((item) => item.ativo));
    }
  }, [productList]);

  return (
    <div>
      {!isLoading && (
        <div className="m-4 mt-0">
          <h4 className="title-name">Produtos</h4>
          {products.length <= 0 ? (
            <div className="produtos-error-container">
              <div className="produtos-error-content">
                <ExclamationCircleFilled className="produtos-error-icon" />
                <p className="produtos-error-title">
                  Nenhum produto encontrado !
                </p>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      )}
    </div>
  );
}

export default Recomendados;
