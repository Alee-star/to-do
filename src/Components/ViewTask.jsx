import React from "react";
import Button from "./Button";

function ViewTask({ viewTodo, removeTask }) {
  return (
    <div>
      <h3>Todo List</h3>
      <ul id="taskList">
        {!viewTodo.length ? (
          <p>No Tasks Available</p>
        ) : (
          viewTodo.map((todo, index) => (
            <li key={index} className={`${todo.status.toLowerCase()}`}>
              {todo.task}
              <Button
                onClick={() => removeTask(index)}
                label={"x"}
                className="button-close"
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ViewTask;
