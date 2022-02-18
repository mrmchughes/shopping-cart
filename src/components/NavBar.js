import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav>
        <Link to="/">The Invulnerable Vagrant</Link> <Link to="/">Home</Link> |{" "}
        <Link to="/shopPage">Shop Page</Link> |{" "}
        <Link to="/cartPage">Cart Page (0)</Link>
      </nav>
    </div>
  );
};

export default NavBar;
