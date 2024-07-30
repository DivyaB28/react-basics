import React, { useState } from "react";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((item) => (
        <li key={item.id}>
          <TaskItem
            item={item}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
};

const TaskItem = ({ item, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  let TaskContent;
  if (isEditing) {
    TaskContent = (
      <>
        <input
          value={item.text}
          onChange={(e) => {
            onChange({
              ...item,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    TaskContent = (
      <>
        {item.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => {
          onChange({
            ...item,
            done: e.target.checked,
          });
        }}
      />
      {TaskContent}
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </label>
  );
};
export default TaskList;

/**
 * 
 * migrate from useState to useReducer in three steps:

Move from setting state to dispatching actions.
Write a reducer function.
Use the reducer from your component.
 */
