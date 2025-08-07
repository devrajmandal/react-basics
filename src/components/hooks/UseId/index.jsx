export const UseId = () => {
  return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};