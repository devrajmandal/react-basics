import { useRef } from "react";
import "./index.css";
export const UseRef = () => {
  const username = useRef(null);
  const password = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="username" ref={username} />
      <br />
      <input type="text" id="password" ref={password} />
      <br />
      <button>Submit</button>
    </form>
  );
};
