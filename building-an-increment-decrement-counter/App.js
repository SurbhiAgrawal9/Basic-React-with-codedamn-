import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  function increse() {
    setCounter( counter+1);
  }
  function dicrese() {
    setCounter(counter-1);
  }

  return (
    <div className="App">
      <h1>conter:{counter}</h1>
      <button onClick={increse}>increse</button>
      <button onClick={dicrese}>dicrese</button>
    </div>  
  );
}
