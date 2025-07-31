import { useEffect, useState } from "react";
import "./pokemon.css";

export const HowNotToFetchApi = () => {
  const [apiData, setApiData] = useState([]);
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchPokemon = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="container effect-container">
      <ul>
        {apiData.map((curElem) => {
          return <li key={curElem.id}>{curElem.body}</li>;
        })}
      </ul>
    </div>
  );
};
