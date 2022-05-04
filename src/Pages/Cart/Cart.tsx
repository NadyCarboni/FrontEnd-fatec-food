import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./cart.css";

function Cart() {
  const [requestList, setRequestList] = useState<any[]>([
    {
      id: "1",
      name: "panquecas de toucinho",
      description: "Panqueca feita de toucinho muito boa",
      price: 10.99,
      quantity: 1,
      image:
        "https://cdn.discordapp.com/attachments/691792050831622174/964349691422711838/chad-montano-eeqbbemH9-c-unsplash.jpg",
    },
    {
      id: "2",
      name: "panquecas de toucinho 2",
      description: "Panqueca feita de toucinho muito boa 2",
      price: 20.99,
      quantity: 2,
      image:
        "https://cdn.discordapp.com/attachments/691792050831622174/966798477654896692/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg",
    },
    {
      id: "3",
      name: "panquecas de toucinho 3",
      description: "Panqueca feita de toucinho muito boa 3",
      price: 30.99,
      quantity: 3,
      image:
        "https://cdn.discordapp.com/attachments/691792050831622174/966798701932711946/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg",
    },
    {
      id: "4",
      name: "panquecas de toucinho 4",
      description: "Panqueca feita de toucinho muito boa 5",
      price: 40.99,
      quantity: 3,
      image:
        "https://cdn.discordapp.com/attachments/691792050831622174/966798962168332289/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg",
    },
    {
      id: "5",
      name: "panquecas de toucinho 5",
      description: "Panqueca feita de toucinho muito boa 4",
      price: 50.99,
      quantity: 3,
      image:
        "https://cdn.discordapp.com/attachments/691792050831622174/966799270655184926/herson-rodriguez-odouHPr0Lqw-unsplash.jpg",
    },
  ]);

  return (
    <>
      <div className="cart">
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
                          item.image
                            ? item.image
                            : "https://corevisionbucket.s3.sa-east-1.amazonaws.com/NewsNegcios/unauth/bgpadropng13-12-2021-112927-m61644d0bceb66318d818b1dc-u61644d0bceb66318d818b1dc-authproducts6197f92b00c03058f0da46ec.png"
                        }')`,
                      }}
                    />
                  </div>
                  <div className="cart__info-container">
                    <div className="cart__info-superior">
                      <p className="cart__info-name">{item.name}</p>
                      <p className="cart__info-description">
                        {item.description}
                      </p>
                    </div>
                    <div className="cart__info-bottom">
                      <p className="cart__info-price">R$ {item.price}</p>
                      <p className="cart__info-quantity">{item.quantity}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="cart__request-container">
        <div className="cart__request-info">
          <p className="cart__request-info-p">Total</p>
          <p className="cart__request-info-p">R$ 100.00</p>
        </div>

        <button type="button" className="cart__request-button">
          Pedir
        </button>
      </div>
    </>
  );
}

export default Cart;
