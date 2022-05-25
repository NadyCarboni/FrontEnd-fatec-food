import { CloseCircleFilled } from "@ant-design/icons";
import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import { FaTimesCircle } from "@react-icons/all-files/fa/FaTimesCircle";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import api from "../../service/api";

import "./cart.css";
import EmptyCart from "./EmptyCart";

function Cart() {
  const [requestList, setRequestList] = useState<any[]>();

  const navigate = useNavigate();

  const [adicionalList, setAdcionalList] = useState<any[]>();

  useEffect(() => {
    const listValue = JSON.parse(localStorage.getItem("itens")!);

    if (listValue) {
      setRequestList(listValue);
    }
  }, []);

  const { comandId } = useParams<{ comandId?: string }>();
  const [pedido, setPedido] = useState<any>();
  const precos = requestList?.map((p) => p.produto.preco * p.quantidade);
  const somar = (acumulado: number, x: number) => acumulado + x;
  const total = precos?.reduce(somar).toFixed(2);

  const postOrder = async () => {
    // Criar pedido
    const response = await api.post("/Pedido", { comandaId: comandId });
    // Pegar o código ultimo pedido criado
    const idPedido = Number(response.data.message.replace(/[^\d]+/g, ""));

    requestList?.forEach(async (element) => {
      const newData = {
        produtoId: element.produtoId,
        quantidade: element.quantidade,
        observacoes: element.observacoes,
        pedidoId: idPedido,
      };

      const response = await api.post("/ItemSelecionado", newData);
      console.log("response item selecionado: ", response);

      const idItemSelecionado = Number(
        response.data.message.replace(/[^\d]+/g, "")
      );

      if (Array.isArray(element.adicionais)) {
        element.adicionais?.forEach(async (item: { id: any }) => {
          const state = {
            adicionalId: item.id,
            itemSelecionadoId: idItemSelecionado,
          };

          console.log("state", state);
          const response = await api.post("/AdicionalSelecionado", state);
        });
      }

      console.log("Pedido feito!");
    });

    localStorage.removeItem("itens");
    navigate("/emptyCart");
  };

  const removeItem = (item: any) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < requestList!.length; i++) {
      if (item === requestList![i]) {
        const aux: any = JSON.parse(localStorage.getItem("itens")!);

        aux.splice(i, 1);
        localStorage.setItem("itens", JSON.stringify(aux));
        if (aux.length === 0) {
          localStorage.removeItem("itens");
          navigate("/emptyCart");
        } else {
          setRequestList(aux);
        }
      }
    }
  };

  if (!comandId) {
    return (
      <div className="product-error">
        <div className="product-error-container">
          <CloseCircleFilled className="product-error-icon" />
          <p className="product-error-title">Ops!</p>
          <p>comanda não encontrada</p>
        </div>
      </div>
    );
  }

  console.log("requestList:", requestList);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {requestList ? (
        <>
          <div className="cart">
            <div className="return-button">
              <Link to={`/${comandId}`}>
                <LeftOutlined className="return-button-icon" />
              </Link>
            </div>
            <div className="cart-container">
              <h2 className="cart__title">Seu Carrinho</h2>
              {Array.isArray(requestList) &&
                requestList.map((item) => {
                  if (!item.id) return null;
                  return (
                    <div className="cart__item-card-container">
                      <div className="return-button">
                        <Link to="/">
                          <LeftOutlined className="return-button-icon" />
                        </Link>
                      </div>

                      <div className="cart__img-container">
                        <div
                          className="cart__img"
                          style={{
                            backgroundImage: `url('${
                              item.produto.foto
                                ? `http://54.175.22.87${item.produto.foto}`
                                : "https://corevisionbucket.s3.sa-east-1.amazonaws.com/NewsNegcios/unauth/bgpadropng13-12-2021-112927-m61644d0bceb66318d818b1dc-u61644d0bceb66318d818b1dc-authproducts6197f92b00c03058f0da46ec.png"
                            }')`,
                          }}
                        />
                      </div>
                      <div className="cart__info-container">
                        <div className="cart__info-superior">
                          <div className="cart__delete">
                            <button
                              type="button"
                              onClick={() => {
                                removeItem(item);
                              }}
                            >
                              <FaTimesCircle />
                            </button>
                          </div>
                          <p className="cart__info-name">{item.produto.nome}</p>
                          <p className="cart__info-description">
                            {item.description}
                          </p>
                        </div>
                        <div className="cart__info-bottom">
                          <p className="cart__info-price">
                            R${" "}
                            {parseFloat(item.produto.preco)
                              .toFixed(2)
                              .toString()
                              .replace(".", ",")}
                          </p>
                          <p className="cart__info-quantity">
                            {item.quantidade}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              <div className="cart__order__container">
                <button
                  className="cart__order_button"
                  type="button"
                  onClick={() => {
                    postOrder();
                  }}
                >
                  Enviar pedido
                </button>
              </div>
            </div>
          </div>

          <div className="white-space" />
          <div className="cart__request-container">
            <div className="cart__request-info">
              <p className="cart__request-info-p">Total</p>
              <p className="cart__request-info-p">{`R$ ${parseFloat(total!)
                .toFixed(2)
                .toString()
                .replace(".", ",")}`}</p>
            </div>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default Cart;
