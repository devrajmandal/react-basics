import { useState } from "react";
import "./index.css";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username,
      password,
    };
    console.log(formData);
  };
  return (
    <div className="container">
      <div className="card">
        <h1>Login Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={username}
            onChange={handleInput}
          />

          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            required
            autoComplete="off"
            value={password}
            onChange={handleInput}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
