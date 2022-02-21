import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav>
        <div className="logoLink">
          <Link to="/">The Invulnerable Vagrant</Link>
        </div>

        <div className="navBarRight">
          <Link to="/">Home</Link> | <Link to="/shopPage">Shop Page</Link> |{" "}
          <Link to="/cartPage">Cart Page (0)</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
