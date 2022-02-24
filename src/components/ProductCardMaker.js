import React from "react";

const ProductCardMaker = (props) => {
  const { image, alt, name, price, handleProductClick } = props;

  return (
    <div className="card">
      <img src={image} alt={alt}></img>

      <p>{name}</p>
      <p>{price}</p>

      <button type="button" onClick={handleProductClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCardMaker;
