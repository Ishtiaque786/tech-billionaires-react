import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Billonaire.css";

const Billonaire = (props) => {
  console.log(props);
  const { name, img, age, netWorth, company, country } = props.card;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="billonaires">
      <img src={img} alt="" height="200px" width="200px" />
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Net worth in Billion: ${netWorth}</h3>
      <h3>Company: {company}</h3>
      <h3>Country: {country}</h3>
      <button
        onClick={() => props.handleAddToCart(props.card)}
        className="btn-regular"
      >
        {cartIcon}Add to cart
      </button>
    </div>
  );
};

export default Billonaire;
