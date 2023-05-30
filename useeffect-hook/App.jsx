import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [say, setSay] = useState("");
  function handle() {
    setCounter(2000);
setSay("ON")

}
function decrese(){
  
  setSay("OFF")
    setCounter(2000 -1);
  }

  useEffect(() => {
    console.log("I am going to shopping" ,counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <h1>{say}</h1>
      <button onClick={handle}>increse </button>
      <button onClick={decrese}>decrese</button>
    </div>
  );
}
