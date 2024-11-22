import React, { useState } from 'react';
import Button from './Components/Button';
import './App.css';

function App() {
  const [activeBtn, setActiveBtn] = useState("")

  const handleClick = (button) => {
    setActiveBtn(button)
  };
                             
  return (
    <div className='todo-container'>
      <h1>TODO APP</h1>   
      <Button 
        label="Add Task" 
        onClick={() => handleClick("add")}
        backgroundColor="#1a5e66"
        isActive= {activeBtn === "add"}
        isDisabled={false}
      />
      <Button 
        label="View Task" 
        onClick={() => handleClick("view")}
        backgroundColor="#1a5e66"
        isActive={activeBtn === "view"}
        isDisabled={false}
      />
    </div>
  );
}

export default App;
