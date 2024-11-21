import React, { useState } from 'react';
import Button from './Components/Button';
import './App.css';

function App() {
  const [color, setColor] = useState({
    addButton: "rgb(26, 94, 102)", 
    viewButton: "rgb(26, 94, 102)"
  });

  const handleClick = (button) => {
    if(button === "add") {
      setColor({
        addButton: "rgb(10, 177, 173)",
        viewButton: "rgb(26, 94, 102)"
      });
    }
    else if (button === "view") {
      setColor({
        addButton: "rgb(26, 94, 102)",
        viewButton: "rgb(10, 177, 173)"
      });
    }
  };

  return (
    <div className='todo-container'>
      <h1>TODO APP</h1>   
      <Button 
        label="Add Task" 
        onClick={() => handleClick("add")}
        backgroundColor={color.addButton} 
        isDisabled={false} 
      />
      <Button 
        label="View Task" 
        onClick={() => handleClick("view")}
        backgroundColor={color.viewButton} 
        isDisabled={false} 
      />
    </div>
  );
}

export default App;
