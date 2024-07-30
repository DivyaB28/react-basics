import React, { useState, useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import tasksReducer from "./tasksReducer";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

const TaskApp = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const handleAddTask = (text) => {
    dispatch({
      type: "add",
      id: nextId++,
      text: text,
    });
  };

  const handleOnChangeTask = (updatedTask) => {
    dispatch({
      type: "changed",
      task: updatedTask,
    });
  };

  const handleOnDelete = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };
  return (
    <div>
      <h1>Prague Itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleOnChangeTask}
        onDeleteTask={handleOnDelete}
      />
    </div>
  );
};

export default TaskApp;
