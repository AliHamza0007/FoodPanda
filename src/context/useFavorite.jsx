import { useState, useEffect, useContext, createContext } from "react";
const FavoriteContext = createContext();
const FavoriteProvider = ({ children }) => {
  const [isFavorited, setIsFavorited] = useState([]);
  const handleFavourite = (id) => {
    const foundItemIndex = isFavorited.findIndex((item) => item.id === id);

    if (foundItemIndex !== -1) {
      const updatedFav = [...isFavorited];
      updatedFav.splice(foundItemIndex, 1);
      // console.log(`Removed ${id} Restuarant from Favorite `);
      setIsFavorited(updatedFav);
    } else {
      // console.log(`Added ${id} Restuarant to Favorite `);
      setIsFavorited([...isFavorited, { id, checked: "checked" }]);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{ isFavorited, setIsFavorited, handleFavourite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
const useFavorite = () => useContext(FavoriteContext);
export { FavoriteProvider, useFavorite };
