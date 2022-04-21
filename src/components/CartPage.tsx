import React from "react";

interface Product {
  image: string;
  alt: string;
  name: string;
  price: number;
  quantity: number;
  id: string;
}

interface CartPageProps {
  cart: Product[];
  totalPrice: number;
  incrementProduct: (product: Product) => void;
  decrementProduct: (product: Product) => void;
  checkout: () => void;
}

function CartPage({
  cart,
  totalPrice,
  incrementProduct,
  decrementProduct,
  checkout,
}: CartPageProps) {
  return (
    <div id="cartContainer" className="cartContainer">
      <p className="cartText">Your Shopping Cart</p>
      <div className="cartGrid">
        {cart.map((product) => (
          <div key={product.id} className="cartItem">
            <p className="productNameAndQuantity">{product.name}</p>
            <p>
              ${product.price} x ({product.quantity})
            </p>
            <div className="quantityButtonDiv">
              <button
                type="button"
                value="decrementProduct"
                onClick={decrementProduct.bind(null, product)}
              >
                -
              </button>
              <button
                type="button"
                value="incrementProduct"
                onClick={incrementProduct.bind(null, product)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="checkoutContainer">
        <p className="totalPriceP">Your total is: ${totalPrice}</p>
        <button type="button" onClick={checkout} className="checkoutButton">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
