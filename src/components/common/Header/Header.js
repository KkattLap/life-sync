import styles from "./Header.module.css";
import "../../../fonts.css";
import { Link } from "react-router";
import homeIcon from "./home-icon.svg";
export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerNavigation}>
        <Link to="/">
          <img
            className={styles.headerNavigation__homeIcon}
            src={homeIcon}
            alt="home icon"
          ></img>
        </Link>
        <div
          className={`${styles.headerNavigation__links} headerNavigation__links_font_18`}
        >
          <Link to="/calendar">Календарь</Link>
          <Link to="/todo">To-do</Link>
          <Link to="/notes">Заметки</Link>
          <Link to="/diary">Дневник</Link>
        </div>
      </nav>
    </header>
  );
}
