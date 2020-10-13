import React from "react";
import "./css/size.scss";
import { Button } from "./Button";

export const SizeClothes = ({ value, setValue }) => {
  const Tamanhos = [
    {
      tamanho: "PP",
      selected: false,
    },
    {
      tamanho: "P",
      selected: false,
    },
    {
      tamanho: "M",
      selected: false,
    },
    {
      tamanho: "G",
      selected: false,
    },
    {
      tamanho: "GG",
      selected: false,
    },
  ];

  const someFunct = (tamanho) => {
    setValue({ ...value, tamanho });
  };
  return (
    <div className="sizeGrid">
      {Tamanhos.map((tamanho, i) => {
        return (
          <Button
            className={
              value.tamanho === tamanho.tamanho ? "botao active" : "botao"
            }
            key={i}
            texto={tamanho.tamanho}
            style={{ fontSize: 13 }}
            onClick={() => someFunct(tamanho.tamanho)}
          />
        );
      })}
    </div>
  );
};
