import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getProducts } from "../products";

const ShopPage = () => {
  let products = getProducts();

  return (
    <div className="shopPageContainer">
      <nav>
        {products.map((product) => (
          <Link to={`/products/${product.name}`} key={product.name}>
            {product.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default ShopPage;
