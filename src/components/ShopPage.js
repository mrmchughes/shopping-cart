import React from "react";

const ShopPage = (props) => {
  const { productsArray, ProductCardMaker, handleProductClick } = props;

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
              handleProductClick={handleProductClick}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ShopPage;
