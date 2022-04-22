import React from "react";

interface Product {
  image: string;
  alt: string;
  name: string;
  price: number;
  quantity: number;
  id: string;
}

interface CartPageProps {
  cart: Product[];
  totalPrice: number;
  incrementProduct: (product: Product) => void;
  decrementProduct: (product: Product) => void;
  checkout: () => void;
}

function CartPage({
  cart,
  totalPrice,
  incrementProduct,
  decrementProduct,
  checkout,
}: CartPageProps) {
  return (
    <div
      id="cartContainer"
      className="border-solid border border-black bg-white m-auto"
    >
      <p className="mb-5 border-solid border border-black text-xl my-1.5 ml-1.5 p-1.5">
        Your Shopping Cart
      </p>
      <div className="grid gap-4 grid-cols-auto-fill-350 justify-center text-center overflow-auto items-center ">
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-center rounded-md border-solid border border-black text-xs bg-white h-40 w-80 ml-5"
          >
            <p className="my-4 text-base border-solid border border-black p-1.5">
              {product.name}
            </p>
            <p className="text-base">
              ${product.price} x ({product.quantity})
            </p>
            <div className="mt-4 mt-2.5">
              <button
                type="button"
                value="decrementProduct"
                onClick={decrementProduct.bind(null, product)}
                className="bg-gray-200 text-black text-center border-solid border border-black p-2 mt-2.5 rounded-md mx-1.5 p-1.5 hover:shadow-lg hover:shadow-slate-500"
              >
                -
              </button>
              <button
                type="button"
                value="incrementProduct"
                onClick={incrementProduct.bind(null, product)}
                className="bg-gray-200 text-black text-center border-solid border border-black p-2 mt-2.5 rounded-md mx-1.5 p-1.5 hover:shadow-lg hover:shadow-slate-500"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col justify-center items-center">
        <p className="totalPriceP">Your total is: ${totalPrice}</p>
        <button
          type="button"
          onClick={checkout}
          className="bg-gray-200 text-black text-center border-solid border border-black p-1.5 my-2.5 rounded-lg hover:shadow-lg hover:shadow-slate-500"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
