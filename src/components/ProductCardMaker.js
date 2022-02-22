import React from "react";

const ProductCardMaker = (props) => {
  const { image, alt, name, price } = props;

  return (
    <div className="card">
      <img src={image} alt={alt}></img>

      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductCardMaker;
