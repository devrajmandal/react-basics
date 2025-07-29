import { useState } from "react";
import "./Pokemon.css";

export const HowNotToFetchApi = () => {
  const [apiData, setApiData] = useState([]);
  fetch("https://dummy-json.mock.beeceptor.com/continents")
    .then((res) => res.json())
    .then((data) => setApiData(data))
    .catch((error) => console.log(error));
  return (
    <div className="container effect-container">
      <ul>
        data:
        {apiData.map((curElem) => {
          return <li key={curElem.id}>{curElem.name}</li>;
        })}
      </ul>
    </div>
  );
};
