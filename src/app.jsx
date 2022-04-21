import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import CartPage from "./components/CartPage";
import productsArray from "./components/productsArray";
import "./styles/global.css";
function App() {
    const [cart, setCart] = useState([]);
    const incrementProduct = (product) => {
        setCart(cart.map((x) => x.id === product.id
            ? {
                ...x,
                quantity: x.quantity + 1,
            }
            : x));
    };
    const decrementProduct = (product) => {
        if (product.quantity === 1) {
            setCart(cart.filter((x) => x !== product));
        }
        else {
            setCart(cart.map((x) => x.id === product.id
                ? {
                    ...x,
                    quantity: x.quantity - 1,
                }
                : x));
        }
    };
    const cartLength = cart.reduce((total, product) => (total += product.quantity), 0);
    const totalPrice = cart.reduce((total, product) => total + product.quantity * product.price, 0);
    const addProductToCart = (product) => {
        const isItemInCart = cart.map((product) => product.id).includes(product.id);
        if (isItemInCart) {
            incrementProduct(product);
        }
        else {
            setCart([...cart, product]);
        }
    };
    const checkout = () => {
        alert("Thank you for checking out my Shopping Cart project!");
    };
    return (<BrowserRouter>
      <NavBar cartLength={cartLength}/>{" "}
      <Routes>
        <Route path="/shopping-cart" element={<HomePage />}/>
        <Route path="/shopping-cart/shopPage" element={<ShopPage productsArray={productsArray} addProductToCart={addProductToCart}/>}/>
        <Route path="/shopping-cart/cartPage" element={<CartPage cart={cart} totalPrice={totalPrice} incrementProduct={incrementProduct} decrementProduct={decrementProduct} checkout={checkout}/>}/>
        <Route path="*" element={<p className="errorPage">There is nothing here!</p>}/>
      </Routes>
    </BrowserRouter>);
}
export default App;
