import { useTimers } from "../context/WorkoutContext";
import style from "./Form.module.css";

export function Form() {
  const { sets, dispatch, fast, breakTime, workout } = useTimers();

  function handleSets(e) {
    dispatch({ type: "set", payload: e.target.value });
  }

  function handleFast(e) {
    dispatch({ type: "fast", payload: e.target.value });
  }

  function handleBreak(e) {
    dispatch({ type: "break", payload: e.target.value });
  }

  function handleSelect(e) {
    dispatch({ type: "workout", payload: e.target.value });
  }
  return (
    <form className={style.container}>
      <div className={style.grid}>
        <label>Types of workout</label>
        <select value={workout} onChange={(e) => handleSelect(e)}>
          <option value={8}>Full-body workout (9 exercises)</option>
          <option value={5}>Push day (5 exercises)</option>
          <option value={6}>Pull day (6 exercises)</option>
          <option value={4}>Leg day (5 exercises)</option>
          <option value={3}>Core and cardio (2-3 exercises)</option>
        </select>
      </div>
      <div className={style.grid}>
        <label>How many sets?</label>
        <input
          type="range"
          min={1}
          max={5}
          value={sets}
          onChange={(e) => handleSets(e)}
        />
        <p>{sets}</p>
      </div>
      <div className={style.grid}>
        <label>How fast are you?</label>
        <input
          type="range"
          min={30}
          max={180}
          step={10}
          value={fast}
          onChange={(e) => handleFast(e)}
        />
        <p>{fast} sec/exercises</p>
      </div>
      <div className={style.grid}>
        <label>Break length</label>
        <input
          type="range"
          min={1}
          max={10}
          step={1}
          value={breakTime}
          onChange={(e) => handleBreak(e)}
        />
        <p>{breakTime} minutes/break</p>
      </div>
    </form>
  );
}
