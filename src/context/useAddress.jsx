import { useState, useEffect, useContext, createContext } from "react";
const AddressContext = createContext();
const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState({
    

  });


  return (
    <AddressContext.Provider
      value={{ address, setAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
};
const useAddress = () => useContext(AddressContext);
export { AddressProvider, useAddress };
