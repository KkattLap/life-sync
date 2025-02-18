import styles from "./Home.module.css";
import "../../fonts.css";
import timeManagmentImg from "./timeManagment.jpg";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainBlock}>
        <div className={styles.textBlock}>
          <h1 className={`${styles.textHeader} textHeader_font_48`}>
            <span
              className={`${styles.textHeader__word1} 
              ${styles.textHeader__word1_rotate} 
              ${styles.textHeader__word1_position}`}
            >
              Синхронизируй
            </span>
            <span
              className={`${styles.textHeader__word2} 
              ${styles.textHeader__word2_rotate}  
              ${styles.textHeader__word2_position}`}
            >
              Свой
            </span>
            <span
              className={`${styles.textHeader__word3} 
                ${styles.textHeader__word3_rotate}  
                ${styles.textHeader__word3_position} 
                ${styles.textHeader__word3_red}`}
            >
              Хаос
            </span>
            <br />
            <div className={styles.otherHeaderWords}>
              <span className={styles.otherHeaderWords__word_noShrink}>
                Обрети Свой
              </span>
              <span
                className={`${styles.otherHeaderWords__word3} ${styles.otherHeaderWords__word3_accentColor}`}
              >
                Порядок
              </span>
            </div>
          </h1>
          <p className={`${styles.textBlock__p} textBlock__p_font_16`}>
            Открой для себя идеальный помощник для организации своих мыслей и
            планов! Все записи в одном месте. Упрощай повседневные задачи и
            фокусируйся на главном, чтобы каждый день приближаться к своим
            целям!
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img
            className={styles.imgContainer__img}
            src={timeManagmentImg}
            alt="time managment"
          ></img>
        </div>
      </div>
    </div>
  );
}
