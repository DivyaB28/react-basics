import { useState } from "react";

const Form = ({ onSubmit, children }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

const InputField = ({ value, onChange, children }) => {
  return (
    <label>
      {children}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type="text"
      />
    </label>
  );
};

const Button = ({ type = "button", onClick, children }) => {
  return (
    <button type="submit" onClick={onClick}>
      {children}
    </button>
  );
};

const UsernameForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <h2>React Component composition</h2>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(username);
        }}
      >
        <InputField value={username} onChange={setUsername}>
          {" "}
          Your Name:{" "}
        </InputField>

        <Button type="submit">Send</Button>
      </Form>
    </div>
  );
};

export default UsernameForm;
