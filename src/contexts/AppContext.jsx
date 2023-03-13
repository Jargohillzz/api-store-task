import React, { createContext, useState } from "react";

export const appContext = createContext();

const AppContext = ({ children }) => {
  const [storedData, setStoredData] = useState();
  const value = {
    storedData,
    setStoredData,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export default AppContext;
