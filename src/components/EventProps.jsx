import "./EV.css";
export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    console.log(`Welcome ${user}`);
  }
  const handleHover = () => {
    console.log("Thanks for hovering me");    
  }
  return (
    <>
      <WelcomeUser onClick={() => {HandleWelcomeUser("Devraj")}} onMouseEnter={handleHover}/>
    </>
  );
}

const WelcomeUser = (props) => {
  const handleGreeting = () => {
    console.log(`Hello`);
    props.onClick();
  }
  return (
    <>
      <button onClick = {props.onClick}>Click me</button>
      <button onMouseEnter={props.onMouseEnter}>Hover me</button>
      <button onClick={handleGreeting}>Greet me</button>
    </>
  );
}