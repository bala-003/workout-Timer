import { Form } from "./components/Form";
import { Logo } from "./components/Logo";
import { Time } from "./components/Time";
import { TotalTime } from "./components/TotalTime";
import { WorkoutProvider } from "./context/WorkoutContext";
import "./App.css";
export default function App() {
  return (
    <WorkoutProvider>
      <div className="container">
        <Logo />
        <Time />
        <Form />
        <TotalTime />
      </div>
    </WorkoutProvider>
  );
}
