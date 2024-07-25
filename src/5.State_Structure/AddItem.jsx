import { useState } from "react";

const AddItem = ({ onAddItem = () => {} }) => {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        placeholder="Add Item"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          onAddItem(e.target.value);
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddItem;
