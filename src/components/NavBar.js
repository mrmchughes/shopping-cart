import React from "react";
import { Link } from "react-router-dom";
//import uniqid from "uniqid";

const NavBar = (props) => {
  const {
    cart,
    cartLength,
    priceSummary,
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
          <Link to="/shopPage">Shop Page ({cartLength})</Link> |{" "}
          <Link to="/contactPage">Contact</Link>
        </div>
      </nav>

      <div className="cartContainer">
        <div>
          {cart.map((product) => {
            <div key={product.id} className="cartItem">
              <p>
                {product.name} ({product.quantity})
              </p>{" "}
              <p>{product.price}gp</p>
              <button
                type="button"
                onClick={incrementProduct.bind(this, product)}
              >
                +
              </button>
              <button
                type="button"
                onClick={decrementProduct.bind(this, product)}
              >
                -
              </button>
            </div>;
          })}
        </div>
        <p>Your total is: {priceSummary}gp</p>
      </div>
    </div>
  );
};

export default NavBar;
