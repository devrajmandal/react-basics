import { createContext } from "react";

// 1st step
export const BioContext = createContext();

// 2nd step
export const BioProvider = ({ children }) => {
  const myName = "Devraj";
  const myAge = 21;
  return (
    <BioContext.Provider value={{ myName: myName, myAge: myAge }}>
      {children}
    </BioContext.Provider>
  );
};