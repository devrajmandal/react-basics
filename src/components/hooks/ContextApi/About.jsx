import { use, useContext } from "react";
import { BioContext, useBioContext } from ".";

export const About = () => {
  //   const { myName, myAge } = useContext(BioContext);
  //   const { myName, myAge } = useBioContext();
//   const { myName, myAge } = use(BioContext);

    const newHook = true;
    let myName,myAge;
    if(newHook){
        ({ myName, myAge } = use(BioContext));
    }

  return (
    <h1>
      Hello Context API(about). My name is {myName}. I am {myAge} years old.
    </h1>
  );
};
