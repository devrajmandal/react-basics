import { useEffect, useState } from "react";
import { MdDeleteForever, MdCheck } from "react-icons/md";
import "./Todo.css";
export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");
  const handleInput = (value) => {
    setInputValue(value);
  };
  const handleButtonClick = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };

  const getDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    setDateTime(`${date} - ${time}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getDateTime();
    }, 1000);
    return () => clearInterval();
  }, []);

  const handleDeleteTodo = (value) => {
    console.log(task);
    console.log(value);
    const updatedTask = task.filter((curElem) => curElem !== value)
    setTask(updatedTask);
  };

  const handleClearTodoData = () =>{
    setTask([]);
  }
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>
      <section className="form">
        <form onSubmit={handleButtonClick}>
          <div>
            <input
              type="text"
              className="todo-input"
              value={inputValue}
              onChange={(event) => {
                handleInput(event.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="myUnOrdList">
        <ul>
          {task.map((curElem, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{curElem}</span>
                <button className="check-btn">
                  <MdCheck />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteTodo(curElem)}
                >
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
      </section>
    </section>
  );
};