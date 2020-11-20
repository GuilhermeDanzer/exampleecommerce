import React, { useEffect } from "react";
import { Input } from "./Input";
import { Label } from "./Label";
import { Button } from "./Button";
import "./css/payment.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const Payment = (props) => {
  // <h4>Total: {valor.toFixed(2)}</h4>
  let history = useHistory();
  const itens = useSelector((state) => state.cart.cartItems);
  var valor = 0;
  itens.map((produtos) => {
    console.log(produtos);
    valor += produtos.preco;
  });

  const handleChange = (prop) => (event) => {
    props.setValues({ ...props.value, [prop]: event.target.value });
  };
  console.log(props.value);

  return (
    <>
      <div className="paymentForm">
        <div className="formContent">
          <h2>Pagamento</h2>
          <div className="inputcontainer">
            <Label>Nome Completo</Label>
            <Input onChange={handleChange("nome")} />
          </div>
          <div className="inputcontainer">
            <Label>Email</Label>
            <Input onChange={handleChange("email")} />
          </div>
          <div className="inputcontainer">
            <Label>Data de validade</Label>
            <Input
              onChange={handleChange("validade")}
              mask="99/99"
              maskPlaceholder="mm/yy"
            />
          </div>
          <div className="inputcontainer">
            <Label>Numero cartão</Label>
            <Input
              onChange={handleChange("cartao")}
              mask="9999-9999-9999-9999"
            />
          </div>
          <div className="inputcontainer">
            <Label>Código CV</Label>
            <Input onChange={handleChange("CV")} mask="999" />
          </div>
          <div className="inputcontainer">
            <Label>Total: {valor} R$</Label>
          </div>

          <Button
            onClick={() => {
              history.push("/");
              alert("Compra Finalizada");
            }}
          >
            Finalizar
          </Button>
        </div>
      </div>
    </>
  );
};
