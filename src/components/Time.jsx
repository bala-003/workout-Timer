import { useEffect } from "react";
import { useTimers } from "../context/WorkoutContext";
import style from "./Time.module.css";

function formateDate(date) {
  return Intl.DateTimeFormat("en", {
    month: "long",
    day: "2-digit",
  }).format(new Date(date));
}

const hour = new Date().getHours();
const minus = new Date().getMinutes();
const sec = new Date().getSeconds();

export function Time() {
  const { dispatch, time } = useTimers();

  let dateTime = new Date(time);
  let hour = dateTime.getHours();
  let mins = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  let ampm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12;
  hour = hour ? hour : 12;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "timer" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className={style.container}>
      <p className={style.box}>
        For your workout on {formateDate(new Date().toDateString())}{" "}
        {hour < 10 ? `0${hour}` : `${hour}`}:
        {mins < 10 ? `0${mins}` : `${mins}`}:{sec < 10 ? `0${sec}` : `${sec}`}{" "}
        {ampm}
      </p>
    </div>
  );
}
