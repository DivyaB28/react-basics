import { useState } from "react";

const Euro = ({ amount }) => <p>Euro : {amount}</p>;
const Pound = ({ amount }) => <p>Pound: {amount}</p>;

const withAmount = (CurrencyComponents) => {
  return () => {
    const [amount, setAmount] = useState(0);
    const onIncrement = () => {
      setAmount(amount + 1);
    };
    const onDecrement = () => {
      setAmount(amount - 1);
    };
    return (
      <div>
        <h2>Higher order component</h2>
        <span>US Dollar : ${amount}</span>
        <button type="button" onClick={onIncrement}>
          {" "}
          +{" "}
        </button>
        <button type="button" onClick={onDecrement}>
          {" "}
          -{" "}
        </button>

        {CurrencyComponents.map((CurrencyComponent) => (
          <CurrencyComponent amount={amount} key={CurrencyComponent} />
        ))}
      </div>
    );
  };
};

const CurrencyConverterHOC = withAmount([Euro, Pound]);

export default CurrencyConverterHOC;
