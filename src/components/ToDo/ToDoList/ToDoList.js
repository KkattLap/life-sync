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
          <li key={index} className={styles.toDoList__item}>
            <input
              id={`toDoItemSelect${index}`}
              type="checkbox"
              className={styles.toDoList__checkbox}
              onChange={() => handleChecked(index)}
              checked={checked[index]}
            ></input>
            <label htmlFor={`toDoItemSelect${index}`}></label>
            <span
              className={`${styles.toDoList__itemText} ${
                checked[index] ? styles.toDoList__toDoItemText_checked : ""
              }`}
            >
              {todoItem}
            </span>
            <button
              className={styles.toDoList__itemDelete}
              onClick={() => handleDelete(index)}
            >
              <img src={deleteIcon} alt="delete" />
            </button>
          </li>
        ))}
    </ul>
  );
}
