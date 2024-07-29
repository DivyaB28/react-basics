import React from "react";

export default function ComponentWithDomApi({ label, value, isFocus }) {
  const ref = React.useRef(); // (1)

  React.useEffect(() => {
    if (isFocus) {
      ref.current.focus(); // (3)
    }
  }, [isFocus]);

  return (
    <>
      <h4>REACT USEREF HOOK: DOM REFS</h4>
      <p>
        Let's get to React's ref speciality: the DOM. Most often you will use
        React's ref whenever you have to interact with your HTML elements. React
        by nature is declarative, but sometimes you need to read values from
        your HTML elements, interact with the API of your HTML elements, or even
        have to write values to your HTML elements. For these rare cases, you
        have to use React's refs for interacting with the DOM with an imperative
        and not declarative approach.
      </p>
      <label>
        {label}: <input type="text" value={value} ref={ref} />
      </label>
    </>
  );
}
