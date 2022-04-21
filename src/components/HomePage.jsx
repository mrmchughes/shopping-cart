"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const HomePage = () => {
    return (<div className="homePageContainer">
      <div className="homePageHeader">
        <p>Friendly Local Game Store</p>
      </div>
      <div className="homePageBrowse">
        <react_router_dom_1.Link to="/shopPage">Browse Our Products </react_router_dom_1.Link>
      </div>
    </div>);
};
exports.default = HomePage;
