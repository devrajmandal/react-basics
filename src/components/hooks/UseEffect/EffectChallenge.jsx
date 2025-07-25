import { useEffect, useState } from "react";
import "./index.css";
export const EffectChallenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const handleInput = (e) => {
    const { name, value } = e.target;
    setName(value);
  };

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  return (
    <div className="container effect-container">
      <h1>useEffect Challenge</h1>
      <p>
        Count: <span>{count}</span>
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>
        Name: <span>{name}</span>
      </p>
      <input type="text" name="txt" value={name} onChange={handleInput} />
    </div>
  );
};
