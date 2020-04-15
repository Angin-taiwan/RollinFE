import React from "react";

import CartStep from "../components/Cart/CartStep";
import CartTable from "../components/Cart/CartTable";

function Cart() {
  return (
    <>
      <CartStep />
      <div className="container">
        <CartTable />
      </div>
    </>
  );
}

export default Cart;
