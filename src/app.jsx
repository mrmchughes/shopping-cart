"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const NavBar_1 = __importDefault(require("./components/NavBar"));
const HomePage_1 = __importDefault(require("./components/HomePage"));
const ShopPage_1 = __importDefault(require("./components/ShopPage"));
const CartPage_1 = __importDefault(require("./components/CartPage"));
const productsArray_1 = __importDefault(require("./components/productsArray"));
require("./styles/global.css");
function App() {
    const [cart, setCart] = (0, react_1.useState)([]);
    const incrementProduct = (product) => {
        setCart(cart.map((x) => x.id === product.id
            ? Object.assign(Object.assign({}, x), { quantity: x.quantity + 1 }) : x));
    };
    const decrementProduct = (product) => {
        if (product.quantity === 1) {
            setCart(cart.filter((x) => x !== product));
        }
        else {
            setCart(cart.map((x) => x.id === product.id
                ? Object.assign(Object.assign({}, x), { quantity: x.quantity - 1 }) : x));
        }
    };
    const cartLength = cart.reduce((total, product) => (total += product.quantity), 0);
    const totalPrice = cart.reduce((total, product) => total + product.quantity * product.price, 0);
    const addProductToCart = (product) => {
        const isItemInCart = cart.map((product) => product.id).includes(product.id);
        if (isItemInCart) {
            incrementProduct(product);
        }
        else {
            setCart([...cart, product]);
        }
    };
    const checkout = () => {
        alert("Thank you for checking out my Shopping Cart project!");
    };
    return (<react_router_dom_1.BrowserRouter>
      <NavBar_1.default cartLength={cartLength}/>{" "}
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/shopping-cart" element={<HomePage_1.default />}/>
        <react_router_dom_1.Route path="/shopping-cart/shopPage" element={<ShopPage_1.default productsArray={productsArray_1.default} addProductToCart={addProductToCart}/>}/>
        <react_router_dom_1.Route path="/shopping-cart/cartPage" element={<CartPage_1.default cart={cart} totalPrice={totalPrice} incrementProduct={incrementProduct} decrementProduct={decrementProduct} checkout={checkout}/>}/>
        <react_router_dom_1.Route path="*" element={<p className="errorPage">There is nothing here!</p>}/>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
