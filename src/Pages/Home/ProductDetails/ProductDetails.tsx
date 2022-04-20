import React, { useEffect, useState } from "react";
import "./ProductDetails.css";

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

  useEffect(() => {
    setTotalPrice(quantity * product.price);
  }, [quantity]);

  return (
    <div className="product">
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
