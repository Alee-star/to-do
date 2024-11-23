import React , { useState} from "react";
import Button from "./Button";

function AddTask({ addTask }) {
    const [taskInput, setTaskInput] = useState("");
    const [status, setStatus] = useState("Todo");

    const taskStatuses = ["Todo", "In-Progress", "Completed"];
    
    const createClick = () => {
        if(taskInput.trim()) {
            addTask({task: taskInput, status});
            setTaskInput(""); // clear after
            setStatus("Todo");
        }
    }
    return (
        <div className="todo-input">
            <input 
                type="text" 
                placeholder="Enter todo" 
                value={taskInput} onChange={(e) => setTaskInput(e.target.value)} maxLength={25}>
            </input>
            <div className="status">
                <label htmlFor="taskStatus">Task Status: </label>
                <select 
                    id="taskStatus" 
                    value={status} 
                    onChange={(e) => setStatus(e.target.value)}
                >
                    {taskStatuses.map((taskStatus, index) => (
                        <option key={index} value={taskStatus}>{taskStatus}</option>
                    ))}
                </select>
            </div>
            <Button className="button-create"
                label="Create Todo"
                onClick={createClick}
                backgroundColor="#1a5e66"
                isDisabled={!taskInput.trim()}
            />
        </div>
    );
}

export default AddTask
