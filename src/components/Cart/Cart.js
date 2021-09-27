import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const card of cart) {
    total = total + card.netWorth;
  }

  return (
    <div>
      <h2>Cart </h2>
      <h3>Total added: {props.cart.length} </h3>
      <h3>Total cost: ${total} billion</h3>
      <h3 className="person-name-list"> Added person's name:</h3>

      {cart.map((Name) => (
        <h2>{Name.name} </h2>
      ))}
    </div>
  );
};

export default Cart;
