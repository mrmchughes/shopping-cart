import React from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCartArrowRight } from "@mdi/js";

const NavBar = (props) => {
  const {
    cart,
    cartLength,
    totalPrice,
    incrementProduct,
    decrementProduct,
    checkout,
    toggleCart,
    navBarCart,
  } = props;

  return (
    <div className="navBar">
      <header>
        <div className="logoLink">
          <Link to="/">Friendly Local Game Store</Link>
        </div>

        <div className="navBarRight">
          <Link to="/">Home</Link> |{" "}
          <Link to="/shopPage">Shop Page ({cartLength})</Link> |{" "}
          <Icon
            path={mdiCartArrowRight}
            size={0.7}
            onClick={toggleCart}
            className="cartIcon"
          />
          <div
            id="cartContainer"
            className="cartContainer"
            style={{ display: navBarCart.isHidden ? "none" : "block" }}
          >
            <div>
              {cart.map((product) => {
                return (
                  <div key={product.id} className="cartItem">
                    <p>
                      {product.name} ({product.quantity})
                    </p>{" "}
                    <p>$ {product.price}</p>
                    <button
                      type="button"
                      value="decrementProduct"
                      onClick={decrementProduct.bind(this, product)}
                    >
                      -
                    </button>
                    <button
                      type="button"
                      value="incrementProduct"
                      onClick={incrementProduct.bind(this, product)}
                    >
                      +
                    </button>
                  </div>
                );
              })}
            </div>
            <p>Your total is: $ {totalPrice}</p>
            <button type="button" onClick={checkout}>
              Checkout
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
