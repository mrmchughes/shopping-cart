import React from "react";

const ShopPage = (props) => {
  const { productsArray, addProductToCart } = props;

  return (
    <div className="shopPageContainer">
      {productsArray.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.alt}></img>

            <p>{product.name}</p>
            <p>$ {product.price}</p>

            <button
              type="button"
              onClick={addProductToCart.bind(this, product)}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShopPage;
