import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmount, increment, reset } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);

  const mydispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          mydispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          mydispatch(reset());
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          mydispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          mydispatch(increaseByAmount(5));
        }}
      >
        IncrementBy5
      </button>
    </div>
  );
};

export default CounterView;
