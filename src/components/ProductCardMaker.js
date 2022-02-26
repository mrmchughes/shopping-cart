import React from "react";

const ProductCardMaker = (props) => {
  const { image, alt, name, price, addProductToCart } = props;

  return (
    <div className="card">
      <img src={image} alt={alt}></img>

      <p>{name}</p>
      <p>{price}gp</p>

      <button type="button" onClick={addProductToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCardMaker;
