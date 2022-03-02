import React from "react";

const ProductCardMaker = (props) => {
  const {
    image,
    alt,
    name,
    price,
    incrementProduct,
    decrementProduct,
    quantity,
  } = props;

  return (
    <div className="card">
      <img src={image} alt={alt}></img>

      <p>{name}</p>
      <p>{price}gp</p>

      <button type="button" onClick={incrementProduct}>
        +
      </button>
      <button type="button" onClick={decrementProduct}>
        -
      </button>
    </div>
  );
};

export default ProductCardMaker;
