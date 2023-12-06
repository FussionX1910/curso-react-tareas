import { createContext, useContext, useState, useEffect } from "react";

const TotalContext = createContext();

export const useTotalContext = () => useContext(TotalContext);

export const TotalProvider = ({ children }) => {
  const [totalProducts, setTotalProducts] = useState(0);

  const increment = () => {
    setTotalProducts(totalProducts+1);
  };

  const decrement = () => {
    setTotalProducts(totalProducts-1);
  };

  return (
    <TotalContext.Provider value={{ increment, decrement, totalProducts }}>
      {children}
    </TotalContext.Provider>,
  );
};
