import React from "react";

const CartPage = (props) => {
  const {
    cart,
    totalPrice,
    incrementProduct,
    decrementProduct,
    checkout,
  } = props;

  return (
    <div id="cartContainer" className="cartContainer">
      <p className="cartText">Your Shopping Cart</p>
      <div className="cartGrid">
        {cart.map((product) => {
          return (
            <div key={product.id} className="cartItem">
              <p className="productNameAndQuantity">{product.name}</p>
              <p>
                ${product.price} x ({product.quantity})
              </p>
              <div className="quantityButtonDiv">
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
            </div>
          );
        })}
      </div>
      <div className="checkoutContainer">
        <p className="totalPriceP">Your total is: $ {totalPrice}</p>
        <button type="button" onClick={checkout} className="checkoutButton">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
