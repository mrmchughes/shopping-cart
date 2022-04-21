import React from "react";
import { BsCartPlus } from "react-icons/bs";

interface Product {
  image: string;
  alt: string;
  name: string;
  price: number;
  quantity: number;
  id: string;
}

interface ShopPageProps {
  productsArray: Product[];
  addProductToCart: (product: Product) => void;
}

const ShopPage = ({ productsArray, addProductToCart }: ShopPageProps) => {
  return (
    <div className="shopPageContainer">
      {productsArray.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.alt} />

            <p className="productText">{product.name}</p>
            <p className="productText">${product.price}</p>

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
