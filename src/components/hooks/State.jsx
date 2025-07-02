import { useState } from "react";
import "../EV.css";
export const State = () => {
  const [count, setCount] = useState(0);
  console.log("Parent component rendered");
  
  const handleButtonClick = () => {
    setCount(() => count + 1);
  };
  return (
    <>
      <div className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
      </div>
      <ChildComponent count={count}/>
    </>
  );
};

function ChildComponent({count}) {
  console.log("Child component rendered");
  return (
    <div className="main-div">
      <h2>Child component {count}</h2>
    </div>
  );
}