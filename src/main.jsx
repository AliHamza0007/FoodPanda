import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";  import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from "./Auth/UseAuth.jsx";
import { ProductProvider } from "./context/useProducts.jsx";
import { FavoriteProvider } from "./context/useFavorite.jsx";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./context/useCart.jsx";
import { AddressProvider } from "./context/useAddress.jsx";
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <ProductProvider>
  <FavoriteProvider>
  <AddressProvider>
  <CartProvider>
  <BrowserRouter>
  
    <AuthProvider>
      <ToastContainer/>
      <App />
    </AuthProvider>
    

  </BrowserRouter>
  </CartProvider>
  </AddressProvider>
  </FavoriteProvider>
  </ProductProvider>
  </React.StrictMode>
);
