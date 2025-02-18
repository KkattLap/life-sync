import styles from "./DiaryButton.module.css";
import arrowIcon from "./arrow.svg";
import "../../../fonts.css";
export default function DiaryButton() {
  return (
    <button className={styles.diaryButton}>
      <span className={`${styles.diaryButton__text} diaryButton__text_font32`}>
        Начать дневник
      </span>
      <button className={styles.arrowButton}>
        <img
          className={styles.arrowButton__arrow}
          src={arrowIcon}
          alt="arrow"
        ></img>
      </button>
    </button>
  );
}
