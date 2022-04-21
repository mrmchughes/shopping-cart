import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import CartPage from "./components/CartPage";
import productsArray from "./components/productsArray";
import "./styles/global.css";

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  interface Product {
    image: string;
    alt: string;
    name: string;
    price: number;
    quantity: number;
    id: string;
  }

  const incrementProduct = (product: Product): void => {
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

  const decrementProduct = (product: Product): void => {
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

  const cartLength = cart.reduce(
    (total, product): number => (total += product.quantity),
    0
  );

  const totalPrice = cart.reduce(
    (total, product): number => total + product.quantity * product.price,
    0
  );

  const addProductToCart = (product: Product): void => {
    const isItemInCart = cart.map((product) => product.id).includes(product.id);

    if (isItemInCart) {
      incrementProduct(product);
    } else {
      setCart([...cart, product]);
    }
  };

  const checkout = (): void => {
    alert("Thank you for checking out my Shopping Cart project!");
  };

  return (
    <BrowserRouter>
      <NavBar cartLength={cartLength} />{" "}
      <Routes>
        <Route path="/shopping-cart" element={<HomePage />} />
        <Route
          path="/shopping-cart/shopPage"
          element={
            <ShopPage
              productsArray={productsArray}
              addProductToCart={addProductToCart}
            />
          }
        />
        <Route
          path="/shopping-cart/cartPage"
          element={
            <CartPage
              cart={cart}
              totalPrice={totalPrice}
              incrementProduct={incrementProduct}
              decrementProduct={decrementProduct}
              checkout={checkout}
            />
          }
        />
        <Route
          path="*"
          element={<p className="errorPage">There is nothing here!</p>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
