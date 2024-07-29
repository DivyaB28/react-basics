import React, { Children } from "react";

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const PlayButton = ({ movieName }) => {
  function handlePlayClick() {
    alert(`Playing ${movieName}`);
  }
  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
};

const UploadButton = () => {
  return <Button onClick={() => alert("Uploading...")}>Upload Image</Button>;
};
const EventAsProps = () => {
  return (
    <div>
      <PlayButton movieName={"Jake's Delivery Services"}></PlayButton>
      <UploadButton />
    </div>
  );
};

export default EventAsProps;
