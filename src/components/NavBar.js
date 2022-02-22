import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  return (
    <div className="navBar">
      <nav>
        <div className="logoLink">
          <Link to="/">The Invulnerable Vagrant</Link>
        </div>

        <div className="navBarRight">
          <Link to="/">Home</Link> |{" "}
          <Link to="/shopPage">Shop Page ({numberOfProducts})</Link> |{" "}
          <Link to="/contactPage">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
