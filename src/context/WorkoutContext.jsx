import { createContext, useContext, useReducer } from "react";

const WorkoutContext = createContext();
const sec = new Date().getSeconds();
const min = new Date().getMinutes();
const hours = new Date().getHours();

const date = new Date().getTime();

const initialState = {
  time: date,
  sets: 1,
  fast: 30,
  breakTime: 1,
  workout: 9,
  totalTime: 0,
};

const COUNT = 1;

function reducer(state, action) {
  switch (action.type) {
    case "timer":
      return { ...state, time: new Date().getTime() };
    case "set":
      return { ...state, sets: action.payload };
    case "fast":
      return { ...state, fast: action.payload };
    case "break":
      return { ...state, breakTime: action.payload };
    case "setTotalTime":
      return { ...state, totalTime: action.payload };
    case "workout":
      return { ...state, workout: action.payload };
    case "increment":
      return {
        ...state,
        totalTime: state.totalTime + 60, // Increment totalTime by 60 seconds (1 minute)
      };
    case "decrement":
      return {
        ...state,
        totalTime:
          state.totalTime > 60 ? state.totalTime - 60 : state.totalTime, // Decrement totalTime by 60 seconds (1 minute), but not less than 0
      };
    default:
      throw new Error("Something went wrong");
  }
}

function WorkoutProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { time, sets, fast, breakTime, workout, totalTime } = state;

  return (
    <WorkoutContext.Provider
      value={{ time, dispatch, sets, fast, breakTime, workout, totalTime }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

function useTimers() {
  const context = useContext(WorkoutContext);
  if (context === undefined)
    throw new Error("Context is used outside its scope");
  return context;
}

export { useTimers, WorkoutProvider };
