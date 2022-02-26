import React from "react";
import ProductCardMaker from "./ProductCardMaker";
import productsArray from "./productsArray";

const ShopPage = (props) => {
  const { addProductToCart } = props;

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
              addProductToCart={addProductToCart.bind(this, product)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ShopPage;
