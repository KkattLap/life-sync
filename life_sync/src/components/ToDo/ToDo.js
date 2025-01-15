import { useState } from "react";
import styles from "./ToDo.module.css";
import ToDoTitle from "./ToDoTitle/ToDoTitle";
import ToDoForm from "./ToDoForm/ToDoForm";
import ToDoList from "./ToDoList/ToDoList";

export default function ToDo() {
  const title = "ToDo";

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  }
  function handleDelete(index) {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className={styles.toDo}>
      <ToDoTitle title={title} />
      <ToDoForm
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ToDoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
}
