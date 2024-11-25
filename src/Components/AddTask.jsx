
import React , { useState } from "react";
import Button from "./Button";

function AddTask({ addTask }) {
    const [taskName, setTaskName] = useState("");
    const [status, setStatus] = useState("Todo");

    const taskStatuses = ["Todo", "In-Progress", "Completed"];

    const createClick = () => {
        if(taskName.trim()) {
            addTask({task: taskName, status});
            setTaskName(""); // clear after
            setStatus("Todo");
        }
    };

    return (
        <div className="todo-input">
            <input 
                type="text" 
                placeholder="Enter todo" 
                value={taskName} onChange={(e) => setTaskName(e.target.value.trim())} maxLength={25}>
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
                isDisabled={!taskName}
            />
        </div>
    ) ;
}

export default AddTask

