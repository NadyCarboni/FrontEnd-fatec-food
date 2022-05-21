import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import { FaTimesCircle } from "@react-icons/all-files/fa/FaTimesCircle";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../../service/api";

import "./cart.css";

function Cart() {
  const [requestList, setRequestList] = useState<any[]>(
    JSON.parse(localStorage.getItem("itens")!)
  );

  const precos = requestList.map((p) => p.produto.preco * p.quantidade);
  const somar = (acumulado: number, x: number) => acumulado + x;
  const total = precos.reduce(somar).toFixed(2);

  const navigate = useNavigate();

  function arrayRemove(arr: any, value: any) {
    return arr.filter(function (ele: any) {
      return ele !== value;
    });
  }
  const removeItem = (item: any) => {
    // requestList.forEach((element, index) => {
    //   if (item === element) {
    //     let aux: any = JSON.parse(localStorage.getItem("itens")!);
    //     aux = aux.splice(index, 0);
    //     localStorage.setItem("itens", JSON.stringify(aux));
    //     if (aux.length === 0) {
    //       localStorage.removeItem("itens");
    //       navigate("/emptyCart");
    //     } else {
    //       console.log(JSON.parse(localStorage.getItem("itens")!));
    //     }
    //     // localStorage.setItem("itens", JSON.stringify(requestList));
    //     // if (requestList.length === 0) {
    //     //   localStorage.removeItem("itens");
    //     //   navigate("/emptyCart");
    //     // } else {
    //     //   console.log(requestList);
    //     // }
    //   }
    // });

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < requestList.length; i++) {
      if (item === requestList[i]) {
        const aux: any = JSON.parse(localStorage.getItem("itens")!);
        console.log("aux atual: ", aux);
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
  return (
    <>
      <div className="cart">
        <div className="cart-container">
          <h2 className="cart__title">Seu Carrinho</h2>
          {Array.isArray(requestList) &&
            requestList.map((item) => {
              console.log(item);

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
                      <p className="cart__info-quantity">{item.quantidade}</p>
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
                console.log("goi");
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
          <p className="cart__request-info-p">{`R$ ${parseFloat(total)
            .toFixed(2)
            .toString()
            .replace(".", ",")}`}</p>
        </div>
      </div>
    </>
  );
}

export default Cart;
