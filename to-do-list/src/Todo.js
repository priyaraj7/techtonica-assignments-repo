import React, { useState } from "react";

function Task({ task }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
    </div>
  );
}

function Todo() {
  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
      compleated: true,
    },
    {
      title: "Finish homework",
      compleated: true,
    },
  ]);
  return (
    <div className="todo-container">
      <div className="header">TODO - ITEMS</div>
      <div className="task">
        {tasks.map((task, index) => (
          <Task task={task} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Todo;
