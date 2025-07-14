import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    // const handleButtonClick = () => {
    //     setCount(count+1);
    // }
    return(
        <div>
            <h1>useState Hook</h1>
            <br/>
            <p>{count}</p>
            {/* <button onClick={handleButtonClick}>Increment</button> */}
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
    );
}