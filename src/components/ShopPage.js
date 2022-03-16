import React from "react";
import { BsCartPlus } from "react-icons/bs";

const ShopPage = (props) => {
  const { productsArray, addProductToCart } = props;

  return (
    <div className="shopPageContainer">
      {productsArray.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.alt}></img>

            <p className="productText">{product.name}</p>
            <p className="productText">$ {product.price}</p>

            <button
              type="button"
              className="addProductButton"
              onClick={addProductToCart.bind(this, product)}
            >
              <BsCartPlus />
              <span className="iconText">Add to Cart</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShopPage;
