import axios from "axios";
import {Restaurants} from '../db/Restaurants'
import { createContext, useContext, useEffect, useState } from "react";
const URL = import.meta.env.VITE_REACT_Products_API;

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const { data } = await axios.get(`${URL}`);
    setProducts(data.products);
  };

  useEffect(() => {
    // getProduct();
    Restaurants?setProducts(Restaurants):""
    //  console.log(Restaurants)
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
const useProducts = () => useContext(ProductContext);
export { ProductProvider, useProducts };
