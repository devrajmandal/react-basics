import { use, useContext } from "react";
import { BioContext, useBioContext } from ".";

export const Services = () => {
//   const { myName, myAge } = useContext(BioContext);
  //   const { myName, myAge } = useBioContext();
  const { myName, myAge } = use(BioContext);
  return (
    <h1>
      Hello Context API(services). My name is {myName}. I am {myAge} years old.
    </h1>
  );
};
