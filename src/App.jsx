import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CityPageFood from "./pages/CityPageFood";
import Favorite from "./pages/Favorite";
import Restaurant from "./pages/Restaurant";
import NotFound from "./pages/404";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import LocationPage from "./pages/locationPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/address/restaurants" element={<LocationPage/>} />
        <Route path="/checkout/payment-opening/place-order" element={<PlaceOrder />} />
        <Route path="/checkout/payment-opening" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/city/:slug" element={<CityPageFood />} />
        <Route path="/restaurant/:slug" element={<Restaurant />} />
      </Routes>
    </>
  );
};

export default App;
