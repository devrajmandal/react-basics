import { useState } from "react";
import "./index.css";
export const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phone":
        setPhoneNumber(value);
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    };
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter firstName"
            required
            value={firstName}
            onChange={handleInputChange}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter lastName"
            required
            value={lastName}
            onChange={handleInputChange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={email}
            onChange={handleInputChange}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            required
            value={password}
            onChange={handleInputChange}
          />

          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>
          <input
            type="phone"
            name="phone"
            placeholder="9886428433"
            required
            value={phoneNumber}
            onChange={handleInputChange}
          />

          <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Conditions
            </a>
          </p>

          <div className="clearfix">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>

      <section
        className="summary"
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        <p>
          Hello, my name is{" "}
          <span>
            {firstName} {lastName}
          </span>
          . My email address is <span>{email}</span> and my phone number is{" "}
          <span>{phoneNumber}</span>.
        </p>
      </section>
    </>
  );
};
