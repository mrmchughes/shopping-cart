import { BrowserRouter, Routes, Route } from "react-router-dom";

//import "./styles/reset.css";
import "./styles/global.css";
import NavBar from "./components/NavBar";

import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import ContactPage from "./components/ContactPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shopPage" element={<ShopPage />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
