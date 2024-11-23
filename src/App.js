import React, { useState } from 'react';
import Button from './Components/Button';
import './App.css';

function App() {
  const [activeButton, setActiveButton] = useState("")

  const handleClick = (button) => {
    setActiveButton(button)
  };
                             
  return (
    <div className='todo-container'>
      <h1>TODO APP</h1>   
      <Button 
        label="Add Task" 
        onClick={() => handleClick("add")}
        backgroundColor="#1a5e66"
        isActive= {activeButton === "add"}
      />
      <Button 
        label="View Task" 
        onClick={() => handleClick("view")}
        backgroundColor="#1a5e66"
        isActive={activeButton === "view"}
      />
    </div>
  );
}

export default App;
