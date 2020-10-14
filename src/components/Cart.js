import React from "react";
import "./css/cart.scss";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
export const Cart = ({ open }) => {
  const itens = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch()


  const deleteCart = (id) =>{
    return dispatch({type:'REMOVE_ITEM',payload:id})
  }

  console.log(itens);
  return (
    <div className="cart">
      {itens.length < 1 ? (
        <div className="itens">
          <h5>Não há nenhum item no carrinho</h5>
        </div>
      ) : (
        itens.map((produtos) => {
          return (
            <div className="itens" key={produtos.id}>
              <div>
                <h6>
                  {produtos.nome} {produtos.tamanho}
                </h6>
              </div>
              <div style={{display:"flex"}} key={produtos.id}>
                <h6>{produtos.preco}</h6>
                <HighlightOffIcon onClick={()=>deleteCart(produtos.id)} style={{fontSize:15, cursor:'pointer'}}/>
              </div>
            </div>
          );
        })
      )}
      {itens.length < 1 ? null : (
        <Link exact to="/pagamento">
          <Button className="botao cartButton" texto="Finalize sua compra" />
        </Link>
      )}
    </div>
  );
};
