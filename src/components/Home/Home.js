import styles from "./Home.module.css";
import "../../fonts.css";
import timeManagmentImg from "./timeManagment.jpg";
import DiaryButton from "./DiaryButton/DiaryButton";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainBlock}>
        <div className={styles.textBlock}>
          <h1 className={`${styles.textHeader} textHeader_font_64`}>
            Синхронизируй
            <br /> Свой Хаос
            <br /> И Обрети
            <br /> Свой Порядок
          </h1>
          <p className={`${styles.textBlock__p} textBlock__p_font_16`}>
            Открой для себя идеальный помощник для организации своих мыслей и
            планов! Все записи в одном месте. Упрощай повседневные задачи и
            фокусируйся на главном, чтобы каждый день приближаться к своим
            целям!
          </p>
          <DiaryButton></DiaryButton>
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
