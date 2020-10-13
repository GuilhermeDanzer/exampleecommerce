import React, { useState } from "react";
import "./css/product.scss";
import { Button } from "./Button";
import { SizeClothes } from "./SizeClothes";
import { useDispatch } from 'react-redux';

export const Product = ({ img }) => {
  const [state, setState] = useState({nome:'Red Hoodie',preco:19.99,tamanho:''});


  const dispatch = useDispatch();


  const addCart = () =>{

    let item = {
      id:Math.random(),
      nome:state.nome ,
      preco:state.preco,
      tamanho:state.tamanho
      
    }
    dispatch({type:'ADD_ITEM',payload:item})
  }
  return (
    <div style={{ marginLeft: 200, marginRight: 200 }}>
      <div className="box">
        <div>
          <div>
            <img src={img} className="imagem" alt="imagem" />
          </div>
        </div>

        <div className="content">
          <h2 className="titulo">{state.nome}</h2>
          <div>
            <p className="descricao">
              Donec pharetra eros ac eros suscipit cursus. Sed non congue neque.
              Sed varius fringilla dui et volutpat. Curabitur sit amet tellus
              tempor diam blandit consectetur id et lacus. Quisque id ex vel
              purus eleifend molestie. Quisque vestibulum non urna in hendrerit.
              Aenean porta nibh nisl, id luctus erat lacinia eu. Proin
              tincidunt, nulla ac tempor tempus, odio enim mattis dui, in
              interdum felis massa ut augue. Sed vitae lorem ut lacus faucibus
              elementum vel sit amet erat. Duis eros nunc, bibendum id venenatis
              vitae, dictum ac enim. Maecenas tempus ac enim et finibus.
            </p>
          </div>
          <SizeClothes value={state} setValue={setState} />
          <div className="divBotao">
            <Button
              onClick={() => addCart()}
              texto="Adicione ao carrinho"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
