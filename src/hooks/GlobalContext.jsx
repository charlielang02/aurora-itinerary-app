import React, { createContext, useState, useContext } from "react";

// Create the context
const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [starRating, setStarRating] = useState(0);
  const [navigateFromEventCard, setNavigateFromEventCard] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        country,
        setCountry,
        date,
        setDate,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        starRating,
        setStarRating,
        navigateFromEventCard,
        setNavigateFromEventCard,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for consuming the context
export const useGlobalContext = () => useContext(GlobalContext);
