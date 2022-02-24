import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

//import "./styles/reset.css";
import "./styles/global.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import ShoppingCart from "./components/ShoppingCart";
import ContactPage from "./components/ContactPage";
import ProductCardMaker from "./components/ProductCardMaker";
import productsArray from "./components/productsArray";

const App = () => {
  const [cart, setCart] = useState([]);

  //const addToCart = () => {}

  //const deleteFromCart = () => {}

  //handleClick should account for duplicate items in the cart
  //if an item is already in the cart, then add another of the same item to the cart

  const handleProductClick = (product) => {
    if (!cart.includes(product.name)) {
      setCart((cart) => [...cart, product]);
    }
  };

  //cart number updates based off number of items in the cart

  return (
    <div>
      <NavBar numberOfProducts={cart.length} />{" "}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shopPage"
          element={
            <ShopPage
              productsArray={productsArray}
              ProductCardMaker={ProductCardMaker}
              handleProductClick={handleProductClick}
            />
          }
        />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Routes>
      <ShoppingCart />
    </div>
  );
};

export default App;
