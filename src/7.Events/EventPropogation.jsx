function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <Button onClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}
/**
 * All events propagate in React except onScroll, which only works on the JSX tag you attach it to.
 */

/**
 * e.stopPropagation(), preventing the event from bubbling further.
 * 
 * e.stopPropagation() stops the event handlers attached to the tags above from firing.
 * e.preventDefault() prevents the default browser behavior for the few events that have it.

 */
