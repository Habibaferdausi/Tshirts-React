import React from "react";
import "./main.css";

const TShirt = ({ Tshirt, handleAddToCart }) => {
  const { picture, name, price } = TSirt;
  return (
    <div className="single-tshirt">
      <img src={picture} alt="" />
      <p>Name: {name}</p>
      <p>Price: ${price}</p>
      <button onClick={() => handleAddToCart(TShirt)}>Buy Now</button>
    </div>
  );
};

export default TShirt;
