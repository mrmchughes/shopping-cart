import React from "react";
import { Link } from "react-router-dom";
//import uniqid from "uniqid";

const NavBar = (props) => {
  const {
    cart,
    numberOfProducts,
    totalPrice,
    incrementProduct,
    decrementProduct,
  } = props;

  return (
    <div className="navBar">
      <nav>
        <div className="logoLink">
          <Link to="/">The Invulnerable Vagrant</Link>
        </div>

        <div className="navBarRight">
          <Link to="/">Home</Link> |{" "}
          <Link to="/shopPage">Shop Page ({numberOfProducts})</Link> |{" "}
          <Link to="/contactPage">Contact</Link>
        </div>
      </nav>

      <div className="cartContainer">
        {cart.map((product) => {
          return (
            <div key={product.id} className="cartItem">
              <p>{product.name}</p> <p>{product.price}gp</p>
              <button type="button" onClick={incrementProduct}>
                +
              </button>
              <button type="button" onClick={decrementProduct}>
                -
              </button>
            </div>
          );
        })}
        <p>Your total is: {totalPrice}gp</p>
      </div>
    </div>
  );
};

export default NavBar;
