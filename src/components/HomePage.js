import React from "react";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <NavBar />
      <div className="homePage">
        <h2>The Invulnerable Vagrant</h2>
        <a href="http://localhost:3000/shopPage">Browse Our Wares</a>
      </div>
    </div>
  );
};

export default HomePage;
