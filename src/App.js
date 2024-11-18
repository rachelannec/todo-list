import React, {useState } from "react"
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import './App.css';
import rachelannecIdenticon from './rachelannec-identicon-modified.png';

function App() {
  const [tasks, setTask] = useState([
    
  ]);

  const addTask = (task) => {
    setTask([...tasks, { id: Date.now(), text: task, completed: false }]);
  }

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  }

  const toggleTask = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <div className="header">
        <h1>To-do List</h1>
        <img src={rachelannecIdenticon} alt="rachelannec identicon" />
      </div>
      <TaskInput setTask={addTask} />
      <TaskList tasks={tasks} handleDelete={deleteTask} toggleTask={toggleTask} />
    </div>
  );  
}

export default App;

// start: 20241117

