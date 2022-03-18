import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { cartLength } = props;

  return (
    <div className="navBar">
      <header>
        <div className="logoLink">
          <Link to="/">Friendly Local Game Store</Link>
        </div>

        <div className="navBarRight">
          <Link to="/">Home</Link>
          <Link to="/shopPage">Shop Page</Link>
          <Link to="/cartPage">Cart ({cartLength})</Link>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
