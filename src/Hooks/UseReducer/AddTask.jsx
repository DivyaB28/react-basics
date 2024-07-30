import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add Task"
      />
      <button
        role="button"
        onClick={() => {
          setTask("");
          onAddTask(task);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
