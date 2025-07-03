import { useState } from "react";

export const TodoForm = ({onAddTodo}) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const handleSubmit = (event) =>{
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue("");
  }
  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            value={inputValue}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add Task</button>
        </div>
      </form>
    </section>
  );
};
