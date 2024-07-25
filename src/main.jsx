import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RenderPropsPattern from "./2.RenderProps/RenderPropsPattern";
import TemperatureConverter from "./2.RenderProps/TemperatureConverter";

// import "../dist/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RenderPropsPattern />
    <TemperatureConverter />
  </React.StrictMode>
);
