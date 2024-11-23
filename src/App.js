import React, { useState } from 'react';
import Button from './Components/Button';
import AddTask from './Components/AddTask';
import './App.css';

function App() {
  const [activeButton, setActiveButton] = useState("");
  const [showAddTask, setShowAddTask] = useState(false); // initially addtask is hidden as showaddtask is false
  const [tasks, setTasks] = useState([]);

  const handleClick = (button) => {
    setActiveButton(button);
    if (button === "add") {
      setShowAddTask(true); // showaddtask will be opposite of previous value
    }
    if (button === "view") {
      setShowAddTask(false);
    }
  };

  const addTask = (task) => {
    console.log(task);
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <div className="todo-container">
      <h1>TODO APP</h1>
      <Button
        label="Add Task"
        onClick={() => handleClick("add")}
        backgroundColor="#1a5e66"
        isActive={activeButton === "add"}
        isDisabled={false}
      />
      <Button
        label="View Task"
        onClick={() => handleClick("view")}
        backgroundColor="#1a5e66"
        isActive={activeButton === "view"}
        isDisabled={false}
      />
      {activeButton === "add" && <AddTask addTask={addTask} />}
    </div>
  );
}

export default App