import React from "react";
import "./main.css";

const TShirt = ({ tShirt, handleAddToCart }) => {
  const { picture, name, price } = tShirt;
  return (
    <div className="single-tshirt">
      <img src={picture} alt="" />
      <p>Name: {name}</p>
      <p>Price: ${price}</p>
      <button onClick={() => handleAddToCart(tShirt)}>Buy Now</button>
    </div>
  );
};

export default TShirt;
