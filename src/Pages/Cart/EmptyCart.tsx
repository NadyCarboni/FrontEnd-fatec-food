import { ExclamationCircleFilled } from "@ant-design/icons";
import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Alert from "../../components/Alert";

import "./cart.css";

function EmptyCart() {
  const { comandId } = useParams<{ comandId?: string }>();
  const { succes } = useParams<{ succes?: string }>();

  const [alertClosed, setAlertClosed] = useState<boolean>(false);
  const alertMessage = "Pedido enviado com sucesso";

  useEffect(() => {
    if (succes === "true") setAlertClosed(true);
  }, [succes]);
  return (
    <>
      {alertClosed && (
        <Alert
          status="succes"
          message={alertMessage}
          closeAlert={setAlertClosed}
        />
      )}
      <div className="cart">
        <div className="return-button">
          <Link to={`/${comandId}`}>
            <LeftOutlined className="return-button-icon" />
          </Link>
        </div>
        <h2 className="cart__title">Seu Carrinho</h2>

        <div className="cart-error">
          <div className="cart-error-container">
            <ExclamationCircleFilled className="cart-error-icon" />
            <p className="cart-error-title">Ops!</p>
            <p>Seu carrinho está vazio.</p>
          </div>
        </div>
      </div>
      <div className="cart__request-container">
        <div className="cart__request-info">
          <p className="cart__request-info-p">Total</p>
          <p className="cart__request-info-p">R$ 0,00</p>
        </div>
      </div>
    </>
  );
}

export default EmptyCart;
