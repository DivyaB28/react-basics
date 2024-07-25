/**
 * A render prop is a prop on a component, which value is a function that returns a JSX element. The component itself does not render anything besides the render prop. Instead, the component
 * simply calls the render prop, instead of implementing its own rendering logic.
 */

import React from "react";

const RenderPropsPattern = () => {
  const Title = (props) => props.render();
  /**
   * The cool thing about render props, is that the component that receives the prop is very reusable.
   * We can use it multiple times, passing different values to the render prop each time.
   */

  return (
    <>
      <Title
        render={() => (
          <h1>
            <span role="img" aria-label="emoji">
              ✨
            </span>
            I'm a render prop1!
            <span role="img" aria-label="emoji">
              ✨
            </span>
          </h1>
        )}
      />
      <Title
        render={() => (
          <h1>
            <span role="img" aria-label="emoji">
              ✨
            </span>
            I'm a render prop2!
            <span role="img" aria-label="emoji">
              ✨
            </span>
          </h1>
        )}
      />
      <Title
        render={() => (
          <h1>
            <span role="img" aria-label="emoji">
              ✨
            </span>
            I'm a render prop3!
            <span role="img" aria-label="emoji">
              ✨
            </span>
          </h1>
        )}
      />
    </>
  );
};

export default RenderPropsPattern;
