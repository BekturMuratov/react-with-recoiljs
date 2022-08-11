import "./styles.css";
import { TodoMain } from "./components/TodoMain";

export default function App() {
  return (
    <>
      <header className="header">
        <h1>FCC ToDo</h1>
      </header>
      <TodoMain />
    </>
  );
}
