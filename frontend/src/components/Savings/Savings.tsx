import React from "react";
import BasicButton from "../BasicButton/BasicButton";
import "./Savings.css";

function Savings() {
  return (
    <div className="Savings">
      <div>
        <h3>olá</h3>
      </div>

      <div className="account-menu">
        <BasicButton label="Open Account" size="small" appearence="primary" />
      </div>
    </div>
  );
}

export default Savings;
