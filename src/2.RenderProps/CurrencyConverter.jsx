import { useState } from "react";

const CurrencyConverter = () => {
  return (
    <Amount
      renderAmountOne={(amount) => (
        <div>
          <h2>My one amount</h2>
          <Euro amount={amount} />
          <Pound amount={amount} />
        </div>
      )}
      renderAmountTwo={(amount) => (
        <div>
          <h2>My other amount</h2>
          <Euro amount={amount} />
          <Pound amount={amount} />
        </div>
      )}
    />

    /* {(amount) => (
        <div>
          <h2>My one amount</h2>
          <Euro amount={amount} />
          <Pound amount={amount} />{" "}
        </div>
      )} 
      
     </Amount> */
  );
};

const Amount = ({ renderAmountOne, renderAmountTwo }) => {
  const [amount, setAmount] = useState(0);
  const onIncrement = () => {
    setAmount(amount + 1);
  };
  const onDecrement = () => {
    setAmount(amount - 1);
  };
  return (
    <div>
      <h2>Render prop component</h2>
      <span>US Dollar : ${amount}</span>
      <button type="button" onClick={onIncrement}>
        {" "}
        +{" "}
      </button>
      <button type="button" onClick={onDecrement}>
        {" "}
        -{" "}
      </button>
      {renderAmountOne(amount)}
      {renderAmountTwo(amount)}
      {/* {children(amount)} */}
    </div>
  );
};

const Euro = ({ amount }) => <p>Euro £{Math.floor(amount * 0.86)}</p>;

const Pound = ({ amount }) => <p>Pound {Math.floor(amount * 0.76)}</p>;

export default CurrencyConverter;
