import styles from "./Calendar.module.css";
import { Calendar as CalendarNav } from "react-calendar";
import "./Calendar.css";
import { useEffect, useState } from "react";

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const [userNotes, setUserNotes] = useState(new Array(21).fill(""));
  const [weekDays, setWeekDays] = useState([]);
  const [weekNumbers, setWeekNumbers] = useState([]);

  useEffect(() => {
    const todayDate = new Date();
    const todayDayIndex = todayDate.getDay();
    const todayWeekArray = shiftArray(todayDayIndex - 1);
    setWeekDays(todayWeekArray);

    const todayWeekNumbers = shiftNumbers(todayDate);
    setWeekNumbers(todayWeekNumbers);
  }, []);

  function shiftNumbers(day) {
    const currentYear = day.getFullYear();
    const currentMonth = day.getMonth();
    const currentDay = day.getDate();

    let newWeekNumbers = [];
    for (let i = -3; i <= 3; i++) {
      const newDate = new Date(currentYear, currentMonth, currentDay + i);
      newWeekNumbers.push(newDate.getDate());
    }
    return newWeekNumbers;
  }

  function shiftArray(index) {
    const standardWeekOrder = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    const shift = index - 3;
    const leftPart = standardWeekOrder.slice(shift);
    const rightPart = standardWeekOrder.slice(0, shift);
    return leftPart.concat(rightPart);
  }
  function setDateNav(eventDate) {
    setDate(eventDate);
    const clickedWeekDay = eventDate.getDay();
    let newArrayWeek = shiftArray(clickedWeekDay - 1);
    setWeekDays(newArrayWeek);

    let newShiftedWeekNumbers = shiftNumbers(eventDate);
    setWeekNumbers(newShiftedWeekNumbers);
  }
  return (
    <main className={styles.calendar}>
      <div className={styles.calendarNotes}>
        {weekDays.map((weekDay, index) => (
          <span key={index} id={index}>
            {weekDay} <br />
            {weekNumbers[index]}
          </span>
        ))}
        {userNotes.map((userNote, index) => (
          <span key={index + 7} id={index + 7}>
            {userNote}
          </span>
        ))}
      </div>
      <div className={styles.calendarNavigation}>
        <CalendarNav onChange={setDateNav} value={date} />
      </div>
    </main>
  );
}
