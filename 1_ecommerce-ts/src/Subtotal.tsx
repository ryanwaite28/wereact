import React from "react";
import CurrencyFormat from 'react-currency-format';
import "./subtotal.css";

import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue() as any;

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>${value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket) || 0}
        displayType={"text"}
        thousandSeparator={true}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
