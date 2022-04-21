"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const NavBar = ({ cartLength }) => {
    return (<div className="navBar">
      <header>
        <div className="logoLink">
          <react_router_dom_1.Link to="/shopping-cart">Friendly Local Game Store</react_router_dom_1.Link>
        </div>

        <div className="navBarRight">
          <react_router_dom_1.Link to="/shopping-cart">Home</react_router_dom_1.Link>
          <react_router_dom_1.Link to="/shopping-cart/shopPage">Shop Page</react_router_dom_1.Link>
          <react_router_dom_1.Link to="/shopping-cart/cartPage">Cart ({cartLength})</react_router_dom_1.Link>
        </div>
      </header>
    </div>);
};
exports.default = NavBar;
