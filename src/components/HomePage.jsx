import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
    return (<div className="homePageContainer">
      <div className="homePageHeader">
        <p>Friendly Local Game Store</p>
      </div>
      <div className="homePageBrowse">
        <Link to="/shopPage">Browse Our Products </Link>
      </div>
    </div>);
};
export default HomePage;
