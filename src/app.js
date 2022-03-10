import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";

import ContactPage from "./components/ContactPage";

import productsArray from "./components/productsArray";
//import ProductCardMaker from "./components/ProductCardMaker";

const App = () => {
  const [cart, setCart] = useState([]);
  const [navBarCart, setNavBarCart] = useState({ isHidden: true });

  const incrementProduct = (product) => {
    console.log(product.name + " quantity = " + product.quantity);

    setCart(
      cart.map((x) =>
        x.id === product.id
          ? {
              ...x,
              quantity: x.quantity + 1,
            }
          : x
      )
    );
  };

  const decrementProduct = (product) => {
    console.log(product.name + " quantity = " + product.quantity);

    if (product.quantity === 1) {
      setCart(cart.filter((x) => x !== product));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id
            ? {
                ...x,
                quantity: x.quantity - 1,
              }
            : x
        )
      );
    }
  };

  // switch Case?
  // const handleProductQuantityChange = (e) => {
  //  const { product, quantity } = e.target;
  //  setCart((prevCart) => ({
  //    ...prevCart,
  //    [product]: quantity,
  //  }));
  //};

  const cartLength = cart.reduce(
    (total, product) => (total = total + product.quantity),
    0
  );

  const totalPrice = cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

  const addProductToCart = (product) => {
    const isItemInCart = cart.map((product) => product.id).includes(product.id);

    console.log(
      "addProductToCart " + product.name + " quantity = " + product.quantity
    );

    if (isItemInCart) {
      incrementProduct(product);
    } else {
      setCart([...cart, product]);
    }
  };

  const checkout = () => {
    alert("Checkout confirmed!");
  };

  const toggleCart = () => {
    setNavBarCart({ isHidden: !navBarCart.isHidden });
  };

  return (
    <BrowserRouter>
      <NavBar
        cartLength={cartLength}
        totalPrice={totalPrice}
        cart={cart}
        incrementProduct={incrementProduct}
        decrementProduct={decrementProduct}
        checkout={checkout}
        toggleCart={toggleCart}
        navBarCart={navBarCart}
        //handleProductQuantityChange={handleProductQuantityChange}
      />{" "}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shopPage"
          element={
            <ShopPage
              productsArray={productsArray}
              addProductToCart={addProductToCart}
            />
          }
        />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
