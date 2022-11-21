import React from "react";
import { store } from "../Redux/store";

const CounterButtons = () => {


  const { dispatch, getState } = store



  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton">ADD</button>
      <button data-testid="reduceButton">REDUCE</button>
    </div>
  );
};

export default CounterButtons;
