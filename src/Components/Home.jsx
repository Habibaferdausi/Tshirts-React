import React from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "./TShirt";
import Cart from "./cart";
import "./main.css";
import { useState } from "react";

const Home = () => {
  const tShirts = useLoaderData();

  const [cart, setCart] = useState([]);

  const handleAddToCart = (tShirt) => {
    const newCart = [...cart, tShirt];
    setCart(newCart);
  };
  const handleRemoveToCart = (id) => {
    const exits = cart.filter((ts) => ts._id === tShirt._id);
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tShirts.map((tShirt) => (
          <TShirt
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveToCart={handleRemoveToCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
