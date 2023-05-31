//Another way for enter and submit the list by onSubmit event
import "./styles.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState(["tony", "marvel", "ironmen", "tom"]);
  function createTodo(e) {
    e.preventDefault(); //form not refresh entire page
    setTask("");
    if (task) {
      setTodo((oldTodos) => {
        return [...oldTodos, task];
      });
    }
    //  console.log(task)
  }

  return (
    <div className="App">
      <form onSubmit={createTodo}> 
    {/* for behave submit the form  enter and submit */}
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>add todo</button>
        <ul>
          {todos.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </form>
    </div>
  );
}
export default App;
