import React from "react";

const CounterButtons = () => {
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton">ADD</button>
      <button data-testid="reduceButton">REDUCE</button>
    </div>
  );
};

export default CounterButtons;
