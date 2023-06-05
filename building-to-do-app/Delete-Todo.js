import "./styles.css";
import { useState } from "react";

let globalID = 0; //unique id
function App() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState([]);
  function createTodo() {
    if (task) {
      setTodo((oldTodos) => {
        setTask("");
        return [...oldTodos, {todo: task, id: globalID++ }];
                  
      });
    }
    //  console.log(task)
  }
  function deleteItem(itemID){
  setTodo(oldTodos => oldTodos.filter(item => item.id !== itemID))
  }

  //for entering the list by enter keywords
  function enterKey(e) {
    // console.log("Event", e)  //by this we can find the keyCode
    if (e.keyCode === 13) {
      //keyCode is getting from browser, appear in console there keyCode: 13 and key: "Enter"
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
          // key id
          return <div key={item.id}>
          <li>{item.todo} ({item.id})</li>
          {/* item.id that is locally unique id not a globally */}
          <button onClick={() =>deleteItem(item.id)}>delete</button>
                          {/* specify the perticular id  */}
          </div>
        })}
      </ul>
    </div>
  );
}
export default App;
