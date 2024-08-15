import { useEffect } from "react";
import { useTimers } from "../context/WorkoutContext";
import style from "./SetTimer.module.css";

export function SetTimer() {
  const { workout, sets, fast, breakTime, dispatch, totalTime } = useTimers();

  useEffect(() => {
    const exerciseTime = workout * sets * fast;
    const breakTimeTotal = (workout - 1) * breakTime * 60;
    const newTotalTime = exerciseTime + breakTimeTotal;
    dispatch({ type: "setTotalTime", payload: newTotalTime });
  }, [workout, sets, fast, breakTime, dispatch]); // Add sets, fast, and workout here

  let min = totalTime > 0 ? Math.floor(totalTime / 60) : 0;
  let sec = totalTime > 0 ? totalTime % 60 : 0;

  return (
    <p className={style.time}>
      {min < 10 ? `0${min}` : `${min}`}:{sec < 10 ? `0${sec}` : `${sec}`}
    </p>
  );
}
