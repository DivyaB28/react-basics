import React from "react";
import UsernameForm from "./1.Composition/UsernameForm";
import CurrencyConverter from "./2.RenderProps/CurrencyConverter";
import CurrencyConverterHOC from "./3.HOC/CurrencyConverterHOC";
import FeedbackForm from "./4.state/Form";
import Gallery from "./4.state/Gallery";
import TravelPlans from "./5.State_Structure/TravelPlan";

const textAreaStyles = {
  width: 235,
  margin: 5,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todoList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }
  handleSubmit() {
    const itemsList = this.state.userInput.split(",");
    this.setState({
      todoList: [...itemsList],
    });
  }
  render() {
    const { input, todoList } = this.state;
    const onSubmit = (username) => console.log(username);
    return (
      <div>
        <textarea
          placeholder="Add separate Items with commas"
          value={input}
          onChange={this.handleChange}
          style={textAreaStyles}
        />
        <button onClick={this.handleSubmit}>Create List</button>
        <ul>
          {todoList.map((item, index) => {
            console.log(index);
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "10px",
            width: "400px",
            flexFlow: "wrap",
          }}
        >
          <UsernameForm onSubmit={onSubmit} />
          <CurrencyConverter />
          <CurrencyConverterHOC />
          <FeedbackForm />
          <Gallery />
          <TravelPlans />
        </div>
      </div>
    );
  }
}

export default App;
