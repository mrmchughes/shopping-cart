import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

//import "./styles/reset.css";
import "./styles/global.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
//import ShoppingCart from "./components/ShoppingCart";
import ContactPage from "./components/ContactPage";

//import productsArray from "./components/productsArray";

const App = () => {
  const [cart, setCart] = useState([]);

  const numberOfProducts = cart.reduce(
    (sum, product) => sum + parseInt(product.quantity, 10),
    0
  );

  const totalPrice = cart.reduce(
    (total, product) => total + product.quantity * parseInt(product.price, 10),
    0
  );

  const incrementProduct = (product) => {
    //setCart((cart) => [...cart, [product].quantity + 1])

    setCart({ product: product.quantity + 1 });

    //setCart(product.quantity + 1);
  };

  const decrementProduct = () => {
    setCart({ cart: cart.product.quantity - 1 });

    //setCart(product.quantity - 1);
    //maybe base off of addProductToCart?
  };

  const addProductToCart = (product) => {
    console.log("cart includes " + cart);

    if (!cart.includes(product)) {
      setCart((cart) => [...cart, product]);
      incrementProduct();
    } else {
      incrementProduct();
    }
  };

  //calculate price sum + product.quantity * product.price

  //cart number updates based off number of items in the cart

  return (
    <div>
      <NavBar
        numberOfProducts={numberOfProducts}
        totalPrice={totalPrice}
        cart={cart}
        incrementProduct={incrementProduct}
        decrementProduct={decrementProduct}
      />{" "}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shopPage"
          element={<ShopPage addProductToCart={addProductToCart} />}
        />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Routes>
    </div>
  );
};

export default App;
