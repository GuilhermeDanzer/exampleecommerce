import React, { useState } from "react";
import { Payment } from "../components/Payment";
export const Pagamento = () => {
  const [value, setValues] = useState("");
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Payment value={value} setValues={setValues} />
    </div>
  );
};
