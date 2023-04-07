import React from "react";

const Cart = ({ cart, handleRemoveToCart }) => {
  return (
    <div>
      <h4>Total Order :{cart.length}</h4>

      {cart.map((tShirt) => (
        <p key={tShirt._id}>
          {tShirt.name}
          <button onClick={() => handleRemoveToCart(tShirt)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
