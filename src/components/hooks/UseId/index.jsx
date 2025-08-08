import { useId } from "react";

export const UseId = () => {

  const usernameId=useId();
  const emailId=useId();
  const passwordId=useId();

  return (
    <form>
      <div>
        <label htmlFor={usernameId}>Username:</label>
        <input type="text" id="username" name="name" />
      </div>
      <div>
        <label htmlFor={passwordId}>Password:</label>
        <input type="text" id="password" name="password" />
      </div>
      <div>
        <label htmlFor={emailId}>Email:</label>
        <input type="email" name="email" id="email"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};