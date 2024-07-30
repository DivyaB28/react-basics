import React from "react";

const TODOS = [
  { id: "1", task: "Do this", completed: true },
  { id: "2", task: "Do that", completed: false },
];

const withHigherOrderComponent =
  ({ loadingFeedback, noDataFeedback, dataEmptyFeedback }) =>
  (OriginalComponent) =>
  (props) => {
    if (props.isLoading) return <div>{loadingFeedback || "Loading data."}</div>;
    if (!props.data)
      return <div>{noDataFeedback || "No data loaded yet."}</div>;
    if (!props.data.length)
      return <div>{dataEmptyFeedback || "Data is empty."}</div>;
    return <OriginalComponent {...props} />;
  };

const BaseTodoList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const TodoItem = ({ item }) => {
  return (
    <li>
      {item.task} {item.completed}
    </li>
  );
};

const TodoList = withHigherOrderComponent({
  loadingFeedback: "Loading Todos.",
  noDataFeedback: "No Todos loaded yet.",
  dataEmptyFeedback: "Todos are empty.",
})(BaseTodoList);

const TodoListApp = () => {
  return <TodoList data={TODOS} />;
};
export default TodoListApp;
