import { useEffect, useState } from "react";
import "./index.css";
export const CleanUp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);
  return (
    <div className="container">
      <div className="counter">
        <p>Live Count</p>
        <div className="odometer" id="odometer">
          {count}
        </div>
        <h3 className="title">
          Subscribers <br /> Realtime Counter
        </h3>
      </div>
    </div>
  );
};
