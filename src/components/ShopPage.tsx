import React from "react";

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
    <div className="grid gap-5 grid-cols-auto-fill-295 ml-3">
      {productsArray.map((product) => {
        return (
          <div
            className="w-72 h-96 bg-slate-50 flex flex-col items-center text-center shadow-md shadow-black rounded-md border-solid border border-gray-600"
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.alt}
              className="mt-1.5 w-52 h-64 object-cover"
            />

            <p className="mt-2.5 text-sm">{product.name}</p>
            <p className="mt-2.5 text-sm">${product.price}</p>

            <button
              type="button"
              className="bg-gray-200 text-black text-center border-solid border border-black p-2 mt-2.5 rounded-md mx-1.5 p-1.5 hover:shadow-lg hover:shadow-slate-500"
              onClick={addProductToCart.bind(this, product)}
            >
              <span className="ml-1.5">Add to Cart</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShopPage;
