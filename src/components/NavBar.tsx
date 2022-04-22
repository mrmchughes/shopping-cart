import React from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  cartLength: number;
}

const NavBar = ({ cartLength }: NavBarProps) => {
  return (
    <div className="overflow-hidden bg-zinc-800 p-6 mb-6 text-white text-center">
      <header>
        <div className="float-left my-5 ml-3.5">
          <Link
            to="/shopping-cart"
            className="text-xl hover:text-shadow hover:shadow-white hover:tracking-wide"
          >
            Friendly Local Game Store
          </Link>
        </div>

        <div className="float-right my-5 mr-3.5">
          <Link
            to="/shopping-cart"
            className="mr-6 text-xl hover:text-shadow hover:shadow-white hover:tracking-wide"
          >
            Home
          </Link>
          <Link
            to="/shopping-cart/shopPage"
            className="mr-6 text-xl hover:text-shadow hover:shadow-white hover:tracking-wide"
          >
            Shop Page
          </Link>
          <Link
            to="/shopping-cart/cartPage"
            className="mr-6 text-xl hover:text-shadow hover:shadow-white hover:tracking-wide"
          >
            Cart ({cartLength})
          </Link>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
