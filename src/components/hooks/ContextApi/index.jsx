import { Children, createContext } from "react";

// 1st step
export const BioContext = createContext();

// 2nd step
export const BioProvider = ({ children }) => {
  const myName = "Devraj";
  const myAge = 20;
  return (
    <BioContext.Provider value={{myName, myAge}}>
      {children}
    </BioContext.Provider>
  );
};
