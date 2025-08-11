import { useContext } from "react";
import { BioContext } from ".";

export const Home = () => {
  const { myName, myAge } = useContext(BioContext);
  return (
    <h1>
      Hello Context API. My name is {myName}. I am {myAge} years old
    </h1>
  );
};
