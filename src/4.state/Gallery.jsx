import { sculptureList } from "./data.js";
import { useState } from "react";
export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showmore, setShowmore] = useState(false);

  const hasPrev = index > 0;
  const hasNext = index < sculptureList.length - 1;
  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }
  function handleMore() {
    setShowmore(!showmore);
  }
  function handlePrevious() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePrevious} disabled={!hasPrev}>
        Previous
      </button>
      <button onClick={handleClick} disabled={!hasNext}>
        Next
      </button>

      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMore}>{showmore ? "Hide" : "Show"} details</button>
      {showmore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
