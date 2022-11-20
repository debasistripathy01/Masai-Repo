import React from "react";
import { store } from "../Redux/store";

const CounterValue = () => {
  const { counter } = store.getState();
  // const counter = 0; //get the counter value from the Redux store
  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;
