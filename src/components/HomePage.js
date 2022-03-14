import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <div className="homePageHeader">
        <h2>Friendly Local Game Store</h2>
      </div>
      <div className="homePageBrowse">
        <Link to="/shopPage">Browse Our Products </Link>
      </div>
    </div>
  );
};

export default HomePage;
