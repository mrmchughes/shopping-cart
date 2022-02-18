import { BrowserRouter, Routes, Route } from "react-router-dom";

//import "./styles/reset.css";
import "./styles/global.css";
//import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import CartPage from "./components/CartPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/shopPage" element={<ShopPage />} />
        <Route path="/cartPage" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
