import React from "react";

export default function ComponentWithRefRead() {
  const [text, setText] = React.useState("Some text ...");

  function handleOnChange(event) {
    setText(event.target.value);
  }

  const ref = React.useRef();

  React.useEffect(() => {
    const { width } = ref.current.getBoundingClientRect();

    document.title = `Width:${width}`;
  }, []);

  return (
    <div>
      <p>
        {" "}
        How to read values from a DOM node with ref. The following example reads
        the size from our element to show it in our browser as title:
      </p>
      <input type="text" value={text} onChange={handleOnChange} />
      <div>
        <span ref={ref}>{text}</span>
      </div>
    </div>
  );
}
