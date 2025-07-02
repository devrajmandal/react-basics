// import { useState } from "react";
// import "./EV.css";
// export const Practice = () => {
//   const [count, setCount] = useState(0);
//   const handleButtonClick = () => {
//     setCount(() => count + 1);
//   };
//   return (
//     <>
//       <div className="main-div">
//         <h1>{count}</h1>
//         <button onClick={handleButtonClick}>Increment</button>
//       </div>
//       <ChildComponent count={count} />
//     </>
//   );
// };

// function ChildComponent({ count }) {
//   return (
//     <div className="main-div">
//       <h2>Child component {count}</h2>
//     </div>
//   );
// }

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Angles", age: 45 },
// ];
// export const Practice = () => {
//   return (
//     <div className="main-div">
//       <h1>Users list</h1>
//       <ul>
//         {users.map((curElem, index) => {
//           return (
//             <li key={index}>
//               {curElem.name} - {curElem.age} years old
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export const Practice = () => {
//   const [users, setUsers] = useState([
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 },
//     { name: "Angles", age: 45 },
//   ]);
//   const userCount = users.length;
//   const averageAge =
//     users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;
//   return (
//     <>
//       <div className="main-div">
//         <h1>Users List</h1>
//         <ul>
//           {users.map((curElem, index) => {
//             return (
//               <li key={index}>
//                 {curElem.name} - {curElem.age} years old
//               </li>
//             );
//           })}
//         </ul>
//         <p>Users: {userCount}</p>
//         <p>Average: {averageAge}</p>
//       </div>
//     </>
//   );
// };

// export const Practice = () => {
//   const [inputValue, setInputValue] = useState("");
//   return (
//     <>
//       <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
//       <DisplayComponent inputValue={inputValue} />
//     </>
//   );
// };

// const InputComponent = ({ inputValue, setInputValue }) => {
//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       ></input>
//     </>
//   );
// };

// const DisplayComponent = ({ inputValue }) => {
//   return <p>The current input value is: {inputValue}</p>;
// };
