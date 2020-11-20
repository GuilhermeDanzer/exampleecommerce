import React from "react";
import "./css/button.scss";

export const Button = ({ children, ...props }) => {
  return (
    <button className="botao" {...props}>
      {children}
    </button>
  );
};
