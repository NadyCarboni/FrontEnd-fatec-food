import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import { Checkbox, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductDetails.css";

const { TextArea } = Input;

function ProductDetails() {
  const [quantity, setQuantity] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const product = {
    serve: 1,
    price: 20.99,
    name: "Panquecas de toucinho",
    description:
      "Cras nunc purus, sollicitudin id bibendum nec, tincidunt ultrices est. Morbi id erat id augue rutrum iaculis a eu eros. Nunc sedfringilla orci. Aenean porta feugiat diam vel dictum. Proinsodales consequat lorem, in rhoncus arcu ultricies a. Fusceblandit suscipit tellus vel lacinia. Ut malesuada interdum ex atrutrum.",
  };
  const [additionalList, setAdditionalList] = useState<any[]>([
    {
      id: "1",
      name: "panquecas de toucinho",
      price: 10.99,
    },
    {
      id: "2",
      name: "panquecas de toucinho 2",
      price: 20.99,
    },
    {
      id: "3",
      name: "panquecas de toucinho 3",
      price: 30.99,
    },
    {
      id: "4",
      name: "panquecas de toucinho 4",
      price: 40.99,
    },
    {
      id: "5",
      name: "panquecas de toucinho 5",
      price: 50.99,
    },
  ]);

  useEffect(() => {
    setTotalPrice(quantity * product.price);
  }, [quantity]);

  return (
    <div className="product">
      <div className="return-button">
        <Link to="/">
          <LeftOutlined className="return-button-icon" />
        </Link>
      </div>
      <div className="product__img-container">
        <div className="product-img" />
      </div>
      <div className="product__content-section">
        <div className="product__content-container">
          <div className="product__content-header">
            <h2 className="product__title">{product.name}</h2>
            <p className="product__serve">{`serve ${product.serve} pessoa`}</p>

            <div className="product__price-quantity-container">
              <p className="product__price">{`R$ ${product.price}`}</p>
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
            <p className="product__description">{product.description}</p>
          </div>

          <div className="product__additional-container">
            <p className="section-tittle">Adcionais</p>

            {Array.isArray(additionalList) &&
              additionalList.map((item) => {
                if (!item.id) return null;
                return (
                  <div className="product__additional-card">
                    <div className="product__additional-info">
                      <p className="product__additional-name">{item.name}</p>
                      <p className="product__additional-price">+ R$ 2,00</p>
                    </div>
                    <div className="product__additional-checkbox-container">
                      <Checkbox className="product__additional-checkbox" />
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="padding">
            <p className="section-tittle">Observações</p>
          </div>
          <div className="product__observation">
            <TextArea
              className="product__text-area"
              placeholder="Digite sua observação..."
              autoSize={{ minRows: 3, maxRows: 5 }}
              maxLength={100}
            />
          </div>

          <div className="product__final-section">
            <p className="product__final-price">{`R$ ${totalPrice}`}</p>
            <button className="product__add" type="button">
              Adcionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
