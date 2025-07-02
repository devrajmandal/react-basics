import { useState } from "react";
import "./EV.css";
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Angles", age: 45 },
// ];

// export const DerivedState = () => {
//   return (
//     <div className="main-div">
//       <h1>Users List</h1>
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

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Angles", age: 45 },
// ];

export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);
  const usersCount = users.length;
  const averageAge = (users.reduce((accum, curElem) => accum+curElem.age,0))/usersCount;
  return (
    <div className="main-div">
        <h1>Users List</h1>
      <ul>
        {users.map((curElem,index) => {
          return (
            <li key={index}>
              {curElem.name} - {curElem.age} years old
            </li>
          );
        })}
      </ul>
      <p>Users: {usersCount}</p>
      <p>Average: {averageAge}</p>
    </div>
  );
};