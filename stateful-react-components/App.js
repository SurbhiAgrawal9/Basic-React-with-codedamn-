import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(100);
  function buttonclicked() {
    setCounter(-2500);
  }

  return (
    <div className="App">
      <h1>conter:{counter}</h1>
      <button onClick={buttonclicked}>increse</button>
      <button onClick={buttonclicked}>increse</button>
    </div>
  );
}
