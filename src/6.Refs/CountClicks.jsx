import React, { useEffect, useRef, useState } from "react";

export default function CountClicks() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function focus() {
    console.log(inputRef.current);
    inputRef.current.focus();
  }
  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>

      <button onClick={focus}>Focus</button>
    </>
  );
}

/**
 *
 * Rule of thumb:
 * Whenever you need to track state in your React component which shouldn't trigger a re-render of
 * your component, you can use React's useRef Hooks to create an instance variable for it.
 */
