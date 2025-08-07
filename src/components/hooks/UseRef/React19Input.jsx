import e from "cors";
import { useRef } from "react";

export const React19Input = () => {
  const username = useRef();
  const password = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <NewReact19Input label="username" ref={username} />
      <NewReact19Input label="password" ref={password} />
      <button>Submit</button>
    </form>
  );
};

const NewReact19Input = ({ label, ref }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="text" ref={ref} />
    </div>
  );
};
