import React from 'react'
import {Input} from './Input'
import "./css/payment.scss";
import { useSelector,useDispatch } from "react-redux";
export const Payment = () => {
  const itens = useSelector((state) => state.cart.cartItems);
  var valor = 0
  itens.map((produtos)=>{
    valor += produtos.preco
  })
  return (
    <div style={{display:"flex",justifyContent:'center'}}>
      <div className='paymentForm'>
        <h4>Total: {valor}</h4>
        <div className='arroundInput'>
          <Input palceholder='Nome'/>
        </div>
        <div className='arroundInput'>
          <Input/>
        </div>
        <div className='arroundInput'>
          <Input/>
        </div>
        <div className='arroundInput'>
          <Input/>
        </div>
        <div className='arroundInput'>
          <Input/>
        </div>
        <div className='arroundInput'>
          <Input/>
        </div>
      </div>
    
    </div>
  )
}
