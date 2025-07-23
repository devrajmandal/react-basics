import { useState } from "react";
import "./Pokemon.css";

export const HowNotToFetchApi = () => {
  const [apiData, setApiData] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setApiData(data))
    .catch((error) => console.log(error));
  return (
    <div className="container effect-container">
      <ul>
        Data:
        {apiData.map((curData) => {
          return <li key={curData.id}>{curData.body}</li>;
        })}
      </ul>
    </div>
  );
};
