import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-5 text-white h-screen">
      <div className="col-start-3 row-start-2 col-span-2 flex justify-center items-center ">
        <p className="text-4xl text-center bg-gray-900 p-2.5">
          Friendly Local Game Store
        </p>
      </div>
      <div className="col-start-3 row-start-4 col-span-2 flex justify-center items-center ">
        <Link
          to="/shopping-cart/shopPage"
          className="text-center text-4xl bg-gray-900 p-2.5 hover:text-shadow hover:shadow-white hover:tracking-wide"
        >
          Browse Our Products{" "}
        </Link>
      </div>
    </div>
  );
};
//grid positioning and height need work

export default HomePage;
