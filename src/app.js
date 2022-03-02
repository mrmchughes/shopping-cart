import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";

import ContactPage from "./components/ContactPage";

import productsArray from "./components/productsArray";
import ProductCardMaker from "./components/ProductCardMaker";

const App = () => {
  const [cart, setCart] = useState([]);

  const incrementProduct = (product) => {
    console.log(typeof cart);
    setCart({ ...product, quantity: +1 });
  };

  const decrementProduct = (product) => {
    setCart({ ...product, quantity: -1 });
  };

  //const cartProducts = cart.map((product) => {
  //  return (
  //    <div key={product.id} className="cartItem">
  //      <p>
  //        {product.name} ({product.quantity})
  //      </p>{" "}
  //      <p>{product.price}gp</p>
  //      <button type="button" onClick={incrementProduct.bind(this, product)}>
  //        +
  //      </button>
  //      <button type="button" onClick={decrementProduct.bind(this, product)}>
  //        -
  //      </button>
  //    </div>
  //  );
  //});

  const numberOfProducts = () => {
    //cart.reduce((sum, product) => sum + product.quantity, 0);
  };

  const totalPrice = () => {
    //cart.reduce(
    //  (total, product) => total + product.quantity * product.price,
    //  0
    //);
  };

  const addProductToCart = (product) => {
    const isItemInCart = cart.map((product) => product.id).includes(product.id);

    if (isItemInCart) {
      incrementProduct();
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <BrowserRouter>
      <NavBar
        numberOfProducts={numberOfProducts()}
        totalPrice={totalPrice()}
        cart={cart}
        incrementProduct={incrementProduct}
        decrementProduct={decrementProduct}
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
