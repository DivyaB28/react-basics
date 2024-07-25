import React, { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {props.render(value)}
    </>
  );
};

function Kelvin({ value }) {
  return <div>{value + 273.15}K</div>;
}

function Fahrenheit({ value }) {
  return <div>{(value * 9) / 5 + 32}℉</div>;
}
export default function TemperatureConverter() {
  return (
    <>
      <h1>
        <span role="img" aria-label="emoji">
          ✨
        </span>
        Temperature Converter{" "}
        <span role="img" aria-label="emoji">
          ✨
        </span>
      </h1>
      <Input
        render={(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
    </>
  );
}
