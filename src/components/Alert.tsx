import {
  CloseCircleFilled,
  ExclamationCircleFilled,
  CheckCircleFilled,
  CloseOutlined,
} from "@ant-design/icons";
import React from "react";
import "./Alert.css";

interface IProps {
  closeAlert: any;
  message: any;
  status: string;
}

function Alert({ closeAlert, message, status }: IProps) {
  return (
    <div className={`alert ${status}`}>
      <div className="alert-icon">
        {status === "error" && <CloseCircleFilled />}
        {status === "succes" && <CheckCircleFilled />}
        {status === "warning" && <ExclamationCircleFilled />}
      </div>
      <div className="alert-message">{message}</div>
      <button
        type="button"
        className="alert-close"
        onClick={() => {
          closeAlert(false);
        }}
      >
        <CloseOutlined />
      </button>
    </div>
  );
}

export default Alert;
