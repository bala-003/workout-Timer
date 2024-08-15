import { useTimers } from "../context/WorkoutContext";
import { Button } from "./Button";
import { SetTimer } from "./SetTimer";
import style from "./TotalTime.module.css";

export function TotalTime() {
  const { dispatch } = useTimers();
  function handleInc() {
    dispatch({ type: "increment" });
  }
  function handleDec() {
    dispatch({ type: "decrement" });
  }
  return (
    <div className={style.container}>
      <Button onClick={() => handleDec()}>-</Button>
      <SetTimer />
      <Button onClick={() => handleInc()}>+</Button>
    </div>
  );
}
