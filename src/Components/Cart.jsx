import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <h4 className="text">Please add some products</h4>;
  } else {
    message = (
      <div>
        <h3>You have succesfully added this </h3>
      </div>
    );
  }
  return (
    <div>
      <h2 className={cart.length === 1 ? "blue " : " red"}>
        Order Summary: {cart.length}
      </h2>
      <p
        className={`bold bordered ${cart.length === 3 ? "yellow" : "purple"}`}
      ></p>
      {cart.length > 2 ? <span className="purple"></span> : <span></span>}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
      {cart.length === 2 && <p></p>}
      {cart.length === 3 || <h3> </h3>}
    </div>
  );
};
export default Cart;
