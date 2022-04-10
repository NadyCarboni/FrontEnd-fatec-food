import React from "react";

export default function Produto() {
  return (
    <div className="container-produto flex column">
      <img
        src="https://images.unsplash.com/photo-1649000475401-6bc57e7ecf48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="legenda">
        <h4>Nome</h4>
        <p>R$ 00,00</p>
      </div>
    </div>
  );
}
