import styles from "./ToDoForm.module.css";
import addIcon from "./addIcon.svg";

export default function ToDoForm({ inputValue, handleChange, handleSubmit }) {
  return (
    <form className={styles.toDoForm}>
      <input
        className={styles.toDoFormInput}
        value={inputValue}
        onChange={handleChange}
        placeholder="Введите задачу"
      ></input>
      <button className={styles.toDoFormButton} onClick={handleSubmit}>
        <img src={addIcon} alt="add" />
      </button>
    </form>
  );
}
