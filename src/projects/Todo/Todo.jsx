import { TodoDate } from "./TodoDate";
import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import "./Todo.css";
export const Todo = () => {
  const [task, setTask] = useState([]);

  const handleSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;
    // if (task.includes(inputValue)) return;
    const ifTodoContentMatched = task.find(
      (curElem) => curElem.content === content
    );

    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curElem) => curElem.content != value);
    setTask(updatedTask);
  };

  const handleClearTodoData = () => {
    setTask([]);
  };

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curElem) => {
      if (curElem.content === content) {
        return { ...curElem, checked: !curElem.checked };
      } else {
        return curElem;
      }
    });
    setTask(updatedTask);
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
                key={curElem.id}
                data={curElem.content}
                checked={curElem.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
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