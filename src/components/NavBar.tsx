import React from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  cartLength: number;
}

const NavBar = ({ cartLength }: NavBarProps) => {
  return (
    <div className="navBar">
      <header>
        <div className="logoLink">
          <Link to="/shopping-cart">Friendly Local Game Store</Link>
        </div>

        <div className="navBarRight">
          <Link to="/shopping-cart">Home</Link>
          <Link to="/shopping-cart/shopPage">Shop Page</Link>
          <Link to="/shopping-cart/cartPage">Cart ({cartLength})</Link>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
