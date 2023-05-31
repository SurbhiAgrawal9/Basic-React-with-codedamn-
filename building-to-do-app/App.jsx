import "./styles.css";
import {useState} from 'react'


function App(){
  const [task, setTask] = useState("")
  const [todos,setTodo] = useState(["tony","marvel","ironmen","tom"])
function createTodo(){
  if(task){
    setTodo(oldTodos => {
      setTask('')
        return [...oldTodos, task]
    })
  }
//  console.log(task)
}
return(
   <div className="App" >
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={createTodo}>add todo</button> 
      <ul>
       {
         todos.map((item) => {
           return <li>{item}</li>
         })
     }
     </ul>
     </div>
   );
}
export default App
