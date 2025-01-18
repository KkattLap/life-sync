import { useEffect, useState } from "react";
import styles from "./ToDo.module.css";
import ToDoTitle from "./ToDoTitle/ToDoTitle";
import ToDoForm from "./ToDoForm/ToDoForm";
import ToDoList from "./ToDoList/ToDoList";

export default function ToDo() {
  const title = "To-Do List";

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState([]);
  useEffect(() => {
    console.log(checked);
  }, [checked]);
  function handleChecked(index) {
    const updatedCheckedState = checked.map((item, pos) =>
      pos === index ? !item : item
    );
    console.log(index);
    setChecked(updatedCheckedState);
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setChecked([...checked, false]);
    setInputValue("");
  }
  function handleDelete(index) {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);

    let newChecked = [...checked];
    newChecked.splice(index, 1);
    setChecked(newChecked);
  }

  return (
    <div className={styles.toDo}>
      <ToDoTitle title={title} />
      <ToDoForm
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ToDoList
        todos={todos}
        handleDelete={handleDelete}
        handleChecked={handleChecked}
        checked={checked}
      />
    </div>
  );
}
