import React, { useState } from "react";
import "./ProductDetails.css";

function ProductDetails() {
  return (
    <div className="product">
      <div className="product__img-container">
        <div className="product-img" />
      </div>
      <div className="product__content-section">
        <div className="product__content-container">
          <div className="product__content-header">
            <h2 className="product__title">Panquecas de toucinho</h2>
            <p className="product__serve">serve 1 pessoa</p>

            <div className="product__price-quantity-container">
              <p className="product__price">R$20,99</p>
              <p className="product__quantity">02</p>
            </div>
          </div>

          <div className="product__description-container">
            <p className="product__description">
              Cras nunc purus, sollicitudin id bibendum nec, tincidunt ultrices
              est. Morbi id erat id augue rutrum iaculis a eu eros. Nunc sed
              fringilla orci. Aenean porta feugiat diam vel dictum. Proin
              sodales consequat lorem, in rhoncus arcu ultricies a. Fusce
              blandit suscipit tellus vel lacinia. Ut malesuada interdum ex at
              rutrum.
            </p>
          </div>

          <div className="product__final-section">
            <p className="product__final-price">R$ 40,99</p>
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
