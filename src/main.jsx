import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RenderPropsPattern from "./2.RenderProps/RenderPropsPattern";
import TemperatureConverter from "./2.RenderProps/TemperatureConverter";
import CountClicks from "./6.Refs/CountClicks";
import ComponentWithRefInstanceVariable from "./6.Refs/RefInstanceVariable";
import ComponentWithDomApi from "./6.Refs/ComponentWithDomApi";
import ComponentWithRefRead from "./6.Refs/ComponentWithRedRead";
import EventAsProps from "./7.Events/EventAsProps";
import ChatApp from "./8.Lifecycle/ChatApp";
import PointerMoveApp from "./8.Lifecycle/PointerMove";
import TodoListApp from "./3.HOC/TodoList";
import TaskApp from "./Hooks/UseReducer/TaskApp";

// import "../dist/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RenderPropsPattern />
    <TemperatureConverter />
    <CountClicks />
    <ComponentWithRefInstanceVariable />
    <ComponentWithDomApi label="Label" value="Value" isFocus />
    <ComponentWithRefRead />
    <EventAsProps />
    <ChatApp />
    <PointerMoveApp />
    <TodoListApp />
    <br />
    <TaskApp />
  </React.StrictMode>
);
