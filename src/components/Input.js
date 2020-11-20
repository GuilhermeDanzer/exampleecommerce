import React from "react";
import "./css/input.scss";
import InputMask from "react-input-mask";
export const Input = ({ ...props }) => {
  return (
    <>
      <InputMask {...props} className="input" />
    </>
  );
};
