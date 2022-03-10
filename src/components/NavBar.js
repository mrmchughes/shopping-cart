import React from "react";
import { Link } from "react-router-dom";

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
    //handleProductQuantityChange,
  } = props;

  return (
    <div className="navBar">
      <header>
        <div className="logoLink">
          <Link to="/">The Invulnerable Vagrant</Link>
        </div>

        <div className="navBarRight">
          <Link to="/">Home</Link> |{" "}
          <Link to="/shopPage">Shop Page ({cartLength})</Link> |{" "}
          <button type="button" onClick={toggleCart}>
            Cart
          </button>
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
                    <p>{product.price}gp</p>
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
            <p>Your total is: {totalPrice}gp</p>
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

//<input
//type="number"
//name="{product.name}"
//step="1"
//value={product.quantity}
//onChange={handleProductQuantityChange}
// />
