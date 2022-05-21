import { CloseCircleFilled } from "@ant-design/icons";
import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import { Alert, Checkbox, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../../service/api";
import Loading from "../Home/Loading/Loading";
import "./ProductDetails.css";

const { TextArea } = Input;

interface IProduct {
  adicional: [];
  ativo: boolean;
  categoriaId: number;
  foto: string;
  id: number;
  nome: string;
  preco: number;
  descricao?: string;
  porcao?: number;
}

function ProductDetails() {
  const [quantity, setQuantity] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { productId } = useParams<{ productId?: string }>();
  const [product, setProduct] = useState<IProduct>();
  const [productError, setProductError] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [postError, setPostError] = useState<any>();
  const { comandId } = useParams<{ comandId?: string }>();
  const [observation, setObservation] = useState("");
  const [visible, setVisible] = useState(false);

  const [additionalList, setAdditionalList] = useState<any[]>([]);

  useEffect(() => {
    const getProductsDetails = async () => {
      try {
        const response = await api.get(`/Produto/Individual`, {
          params: { id: productId },
        });
        if (response) setProduct(response.data.data[0]);
        if (response) setAdditionalList(response.data.data[0].adicional);
        setLoading(false);
      } catch (err) {
        setProductError(err);
        setLoading(false);
      }
    };

    getProductsDetails();
  }, [productId]);

  const postPedido = async () => {
    const newData = {
      produtoId: Number(productId),
      observacoes: observation,
      pedidoId: 1,
      quantidade: quantity,
    };

    try {
      // const response = await api.post(`/ItemSelecionado`, newData);
      localStorage.setItem("Item", JSON.stringify(newData));
      localStorage.setItem("Item", JSON.stringify(newData));
      setVisible(true);
      setLoading(false);
    } catch (err) {
      setPostError(err);
      setLoading(false);
    }
  };

  console.log("additionalList: ", additionalList);

  useEffect(() => {
    if (product?.preco) setTotalPrice(quantity * product.preco);
  }, [quantity]);

  if (loading) return <Loading />;

  if (productError)
    return (
      <div className="product-error">
        <div className="product-error-container">
          <CloseCircleFilled className="product-error-icon" />
          <p className="product-error-title">Ops!</p>
          <p>Não foi possível achar o produto</p>
        </div>
      </div>
    );

  return (
    <div className="product">
      <div className="return-button">
        <Link to="/">
          <LeftOutlined className="return-button-icon" />
        </Link>
      </div>
      <div className="product__img-container">
        <div
          className="product-img"
          style={{
            backgroundImage: `url('${
              product?.foto ? `http://54.175.22.87${product?.foto}` : "n/a"
            }')`,
          }}
        />
      </div>
      <div className="product__content-section">
        <div className="product__content-container">
          <div className="product__content-header">
            <h2 className="product__title">{product?.nome}</h2>
            {product?.porcao && (
              <p className="product__serve">{`serve ${product.porcao} ${
                product.porcao > 1 ? "pessoas" : "pessoa"
              }`}</p>
            )}

            <div className="product__price-quantity-container">
              <p className="product__price">{`R$ ${product?.preco.toFixed(
                2
              )}`}</p>
              <div className="product__quantity">
                <div className="product__quantity-container">
                  <button
                    type="button"
                    className="product__quantity-plus"
                    onClick={() => {
                      if (quantity > 0) {
                        setQuantity(quantity - 1);
                      } else {
                        setQuantity(0);
                      }
                    }}
                  >
                    -
                  </button>
                  <span className="product__quantity-number">{quantity}</span>
                  <button
                    type="button"
                    className="product__quantity-plus"
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="product__description-container">
            <p className="product__description">
              {product?.descricao
                ? product.descricao
                : "Produto não possui descrição"}
            </p>
          </div>

          {additionalList.length > 0 && (
            <div className="product__additional-container">
              <p className="section-tittle">Adcionais</p>

              {Array.isArray(additionalList) &&
                additionalList.map((item) => {
                  console.log(item.nome);
                  if (!item.id) return null;
                  return (
                    <div className="product__additional-card">
                      <div className="product__additional-info">
                        <p className="product__additional-name">{item.nome}</p>
                        <p className="product__additional-price">
                          + R$ {item.preco.toFixed(2)}
                        </p>
                      </div>
                      <div className="product__additional-checkbox-container">
                        <Checkbox className="product__additional-checkbox" />
                      </div>
                    </div>
                  );
                })}
            </div>
          )}

          <div className="padding">
            <p className="section-tittle">Observações</p>
          </div>
          <div className="product__observation">
            <TextArea
              className="product__text-area"
              placeholder="Digite sua observação..."
              autoSize={{ minRows: 3, maxRows: 5 }}
              maxLength={100}
              onChange={(e) => {
                setObservation(e.target.value);
              }}
            />
          </div>

          <div className="product__final-section">
            <p className="product__final-price">{`R$ ${totalPrice.toFixed(
              2
            )}`}</p>
            <button
              className="product__add"
              type="button"
              onClick={() => {
                postPedido();
              }}
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
