import { useContext } from "react";
import { BioContext } from ".";

export const About = () => {
  const { myName, myAge } = useContext(BioContext);
  return (
    <h1>
      Hello Context API (About). My name is {myName}. I am {myAge} years old
    </h1>
  );
};
