import React, { useState } from 'react';
import Button from './Components/Button';
import AddTask from './Components/AddTask';
import ViewTask from './Components/ViewTask';
import './App.css';

function App() {
  const [activeButton, setActiveButton] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
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
        isActive={isAddButtonActive}
      />
      <Button
        label="View Task"
        onClick={() => handleClick("view")}
        backgroundColor="#1a5e66"
        isActive={isViewButtonActive}
      />
      {isAddButtonActive && <AddTask addTask={addTask} />}
      {isViewButtonActive && <ViewTask viewTodo={tasks} removeTask={removeTask}/>}
    </div>
  );
}

export default App