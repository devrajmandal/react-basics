import { TodoDate } from "./TodoDate";
import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import "./Todo.css";
export const Todo = () => {
  const [task, setTask] = useState([]);

  const handleSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      return;
    }
    setTask((prevTask) => [...prevTask, inputValue]);
  };

  const handleDeleteTodo = (value) => {
    console.log(value);
    const updatedTask = task.filter((curElem) => curElem != value);
    setTask(updatedTask);
  };

  const handleClearTodoData = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curElem, index) => {
            return (
              <TodoList
                key={index}
                data={curElem}
                onHandleDeleteTodo={handleDeleteTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear All
        </button>
      </section>
    </section>
  );
};
