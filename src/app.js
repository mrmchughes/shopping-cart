import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";

import ContactPage from "./components/ContactPage";

import productsArray from "./components/productsArray";

const App = () => {
  const [cart, setCart] = useState({
    products: productsArray.map((product) => ({ ...product, quantity: 0 })),
  });

  const numberOfProducts = () =>
    cart.products.reduce((sum, product) => sum + product.quantity, 0);

  const totalPrice = () =>
    cart.products.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );

  const incrementProduct = (product) => {
    //setCart((cart) => [...cart, [product].quantity + 1])

    //setCart({ product: product.quantity + 1 });

    setCart({ ...product, quantity: +1 });
    //setCart(product.quantity + 1);
  };

  const decrementProduct = (product) => {
    //setCart({ cart: cart.product.quantity - 1 });

    setCart({ ...product, quantity: -1 });

    //setCart(product.quantity - 1);
    //maybe base off of addProductToCart?
  };

  const addProductToCart = (product) => {
    console.log("cart includes " + cart);

    setCart([...cart, { product }]);

    incrementProduct(product);

    //if (!cart.includes(product)) {
    //  setCart((cart) => [...cart, product]);
    //  incrementProduct();
    //} else {
    //  incrementProduct();
    //}
  };

  return (
    <BrowserRouter>
      <NavBar
        numberOfProducts={numberOfProducts()}
        totalPrice={totalPrice()}
        products={cart.products}
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
    </BrowserRouter>
  );
};

export default App;
