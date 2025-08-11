import { createContext, use, useContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const myName = "Devraj";
  const myAge = 20;
  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};

// custom hooks
export const useBioContext = () => {
//   const context = useContext(BioContext);
  const context = use(BioContext);
  if (context === undefined) {
    throw new Error("Component must be wrapped with BioProvider");
  }
  return context;
};
