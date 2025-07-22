// import { useEffect, useState } from "react";
// import "./index.css";

// export const ReactUseEffect = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Count: ", count);
//   }, [count]);
//   return (
//     <div className="container effect-container">
//       <h1>useEffect Hook</h1>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

import { useEffect, useState } from "react";
import "./index.css";

export const ReactUseEffect = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
        const data = new Date();
        const updatedDate = data.toLocaleTimeString();
        setDate(`${updatedDate}`);
    },1000)
  },[])
  return (
    <div className="container effect-container">
      <h1>Date: {date}</h1>
    </div>
  );
};
