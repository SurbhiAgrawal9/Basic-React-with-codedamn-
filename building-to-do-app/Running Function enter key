//adding functionality of enter key 
import "./styles.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState(["tony", "marvel", "ironmen", "tom"]);
  function createTodo() {
    if (task) {
      setTodo((oldTodos) => {
        setTask("");
        return [...oldTodos, task];
      });
    }
    //  console.log(task)
  }
//for entering the list by enter keywords 
  function enterKey(e) {
    // console.log("Event", e)  //by this we can find the keyCode
    if (e.keyCode === 13) {  //keyCode is getting from browser, appear in console there keyCode: 13 and key: "Enter" 
      createTodo();
    }
  }
  return (
    <div className="App">
      <input
        type="text"
        onKeyDown={enterKey} // for enter the task by enter keywords
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={createTodo}>add todo</button>
      <ul>
        {todos.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
export default App;
