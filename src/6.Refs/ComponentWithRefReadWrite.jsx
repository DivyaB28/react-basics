import React from "react";

export default function ComponentWithRefReadWrite() {
  const [text, setText] = React.useState("Some text ...");

  function handleOnChange(event) {
    setText(event.target.value);
  }

  const ref = (node) => {
    if (!node) return;

    const { width } = node.getBoundingClientRect();

    if (width >= 150) {
      node.style.color = "red";
    } else {
      node.style.color = "blue";
    }
  };

  return (
    <div>
      <h3>REACT REF FOR READ/WRITE OPERATIONS </h3>
      <p>
        So far, we have used the DOM ref only for read operations (e.g. reading
        the size of a DOM node). It's also possible to modify the referenced DOM
        nodes (write operations). The next example shows us how to apply style
        with React's ref without managing any extra React state for it:
      </p>

      <input type="text" value={text} onChange={handleOnChange} />
      <div>
        <span ref={ref}>{text}</span>
      </div>
    </div>
  );
}
