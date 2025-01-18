import styles from "./ToDoList.module.css";
import deleteIcon from "./deleteIcon.svg";

export default function ToDoList({
  todos,
  handleDelete,
  handleChecked,
  checked,
}) {
  return (
    <ul className={styles.toDoList}>
      {todos &&
        todos.map((todoItem, index) => (
          <li key={index} className={styles.toDoItem}>
            <input
              id={`toDoItemSelect${index}`}
              type="checkbox"
              className={styles.ToDoItemSelect}
              onChange={() => handleChecked(index)}
              checked={checked[index]}
            ></input>
            <label htmlFor={`toDoItemSelect${index}`}></label>
            <span className={styles.toDoItemText}>{todoItem}</span>
            <button
              className={styles.toDoItemDelete}
              onClick={() => handleDelete(index)}
            >
              <img src={deleteIcon} alt="delete" />
            </button>
          </li>
        ))}
    </ul>
  );
}
