import "./EV.css";
// function handleButtonClick(event) {
//   console.log(event);

//   alert("Hello I am learning React");
// }

const handleButtonClick = (event) => {
    alert("Hello welcome here");
}
const handleWelcomeUser = (user) => {
    alert(`Welcome to our course ${user}`)
}
export const EventHandling = () => {
  return (
    <>
      <button onClick={handleButtonClick}>Click Me</button>
      <br />
      <button onClick={(event) => handleButtonClick(event)}>Click me 2</button>
      <br />
      <button onClick={() => console.log("Heloo")}>Inline button</button>
      <br />
      <button onClick={() => handleWelcomeUser("Devraj")}>Join</button>
    </>
  );
};



// import "./EV.css";
// export const EventHandling = () => {
//   // function handleButtonClick(){
//   //     alert("Hey I am onclick event");
//   // }

//   const handleButtonClick = (event) => {
//     console.log(event);
//     console.log(event.target);
//     console.log(event.type);
//     alert("Hey I am onclick event");
//   };

//   const handleWelcomeUser = (user) => {
//     console.log(`Hey ${user}, Welcome`);    
//   };
//   return (
//     <>
//       <button onClick={handleButtonClick}>Click Me</button>;
//       <br />
//       <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
//       <br />
//       {/* Inline Event Handlers */}
//       <button onClick={(event) => console.log(event)}>Inline Function</button>
//       <br />
//       {/* function components with inline arrow functions */}
//       <button onClick={() => alert("Hey I am inline arrow function")}>Inline Arrow functions</button>
//       <br />
//       {/* passing arguments to event handlers */}
//       {/* <button onClick={handleWelcomeUser}>Click Me</button>; */}
//       <button onClick={() => handleWelcomeUser("Devraj")}>Click Me</button>;
//     </>
//   );
// };

