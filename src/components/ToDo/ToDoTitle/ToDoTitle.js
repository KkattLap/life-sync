import styles from "./ToDoTitle.module.css";

export default function ToDoTitle({ title }) {
  return (
    <div className={styles.toDoTitle}>
      <h1 className={styles.toDoTitleHeader}>{title}</h1>
    </div>
  );
}
