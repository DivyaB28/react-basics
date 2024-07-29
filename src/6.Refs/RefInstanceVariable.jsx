import React, { useEffect, useRef, useState } from "react";

export default function ComponentWithRefInstanceVariable() {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);
  function onClick() {
    setCount(count + 1);
  }
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      console.log(
        `
            I am a useEffect hook's logic
            which runs for a component's
            re-render.
          `
      );
    }
  });
  return (
    <div>
      <h3>REACT REF AS INSTANCE VARIABLE</h3>
      <p>
        The ref can be used as instance variable for a function component in
        React whenever we need to track some kind of state without using React's
        re-render mechanism. For example, we can track whether a component has
        been rendered for the first time or whether it has been re-rendered:
      </p>
      <p>State value of count: {count}</p>
      <button type="button" onClick={onClick}>
        Increase
      </button>
      {/*
        Only works because setCount triggers a re-render.
        Just changing the ref's current value doesn't trigger a re-render.
      */}
      <p>{isFirstRender.current ? "First render" : "Re-render"}</p>
    </div>
  );
}
