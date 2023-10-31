import { useState } from "react";
import AddTaskForm from "./Components/AddTaskForm";
import Task from "./Components/Task";
import Icon from "./Images/Icon.png";

function App() {
  const [ToDos, setTodos] = useState([
    { title: "Buy milk", id: Math.random().toString(36).substring(2, 9) },
    { title: "Walk with dog", id: Math.random().toString(36).substring(2, 9) },
    { title: "Do homework", id: Math.random().toString(36).substring(2, 9) },
  ])

  const removeTask = (id) => {
    setTodos([...ToDos.filter((todo) => todo.id !== id)])
  }

  return (
    <div className="App">
      <AddTaskForm ToDos={ToDos} setTodos={setTodos}  />
      {ToDos.map((ToDo) => {
        return (
          <Task
            title={ToDo.title}
            image={Icon}
            key={ToDo.id}
            delete={() => { removeTask(ToDo.id) }} />
        )
      })}
    </div>
  );
}

export default App;
