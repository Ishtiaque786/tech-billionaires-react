import React, { useEffect, useState } from "react";
import Billonaire from "../Billonaire/Billonaire";
import Cart from "../Cart/Cart";
import "./Card.css";

const Card = () => {
  const [cards, setCards] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./fakedata.JSON")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleAddToCart = (card) => {
    const newCart = [...cart, card];
    setCart(newCart);
  };

  return (
    <div className="main-container">
      <div className="card-container">
        <h3 className="billinaires">Billinaires </h3>

        {cards.map((card) => (
          <Billonaire
            key={card.key}
            card={card}
            handleAddToCart={handleAddToCart}
          ></Billonaire>
        ))}
      </div>
      <div className="cart-info">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};
export default Card;
