"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const bs_1 = require("react-icons/bs");
const ShopPage = ({ productsArray, addProductToCart }) => {
    return (<div className="shopPageContainer">
      {productsArray.map((product) => {
            return (<div className="card" key={product.id}>
            <img src={product.image} alt={product.alt}/>

            <p className="productText">{product.name}</p>
            <p className="productText">${product.price}</p>

            <button type="button" className="addProductButton" onClick={addProductToCart.bind(this, product)}>
              <bs_1.BsCartPlus />
              <span className="iconText">Add to Cart</span>
            </button>
          </div>);
        })}
    </div>);
};
exports.default = ShopPage;
