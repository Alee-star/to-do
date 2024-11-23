import React, { useState } from 'react';
import Button from './Components/Button';
import AddTask from './Components/AddTask';
import './App.css';

function App() {
  const [activeButton, setActiveButton] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  const addTask = (task) => {
    console.log(task);
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const isAddButtonActive = activeButton === "add";
  const isViewButtonActive = activeButton === "view";

  return (
    <div className="todo-container">
      <h1>TODO APP</h1>
      <Button
        label="Add Task"
        onClick={() => handleClick("add")}
        backgroundColor="#1a5e66"
        isActive={ isAddButtonActive }
        isDisabled={false}
      />
      <Button
        label="View Task"
        onClick={() => handleClick("view")}
        backgroundColor="#1a5e66"
        isActive={ isViewButtonActive }
        isDisabled={false}
      />
      { isAddButtonActive && <AddTask addTask={addTask} />}
    </div>
  );
}

export default App
