import React, { useState } from "react";
import productsArray from "./productsArray";
import ProductCardMaker from "./ProductCardMaker";

const ShopPage = () => {
  const [cart, setCart] = useState([]);
  //cart number updates based off number of items in the cart
  //send cart numbers to NavBar?

  //const addToCart = () => {}

  //const deleteFromCart = () => {}

  //handleClick needs to account for duplicate items in the cart
  //if an item is already in the cart, then add another of the same item to the cart
  const handleClick = (product) => {
    if (!cart.includes(product.name)) {
      setCart((cart) => [...cart, product]);
    }
  };

  return (
    <div className="shopPageContainer">
      {productsArray.map((product) => {
        return (
          <div key={product.id} className="gridItem">
            <ProductCardMaker
              image={product.image}
              alt={product.alt}
              name={product.name}
              price={product.price}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ShopPage;
