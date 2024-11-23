import React from "react";
import Button from "./Button";

function ViewTask({ viewTodo, removeTask }) {
    return (
        <div>
            <h3>Todo List</h3>
            <ul id="taskList">
                {viewTodo.length === 0 ? (
                    <p>No Tasks Available</p>
                ) : (
                    viewTodo.map((todo, index) => (
                        <li key={index} className={`${todo.status.toLowerCase()}`}> 
                            {todo.task} <br />
                            <Button onClick={() => removeTask(index)} label={'x'} className="button-close" ></Button>
                        </li>
                    ))
                )}
            </ul>                                                                        
        </div>
    );
}

export default ViewTask