import React, { useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCounterValue(counterValue - 1);
        }}
      >
        Decrease
      </button>
      <div>{counterValue}</div>
      <button
        onClick={() => {
          setCounterValue(counterValue + 1);
        }}
      >
        Incrrease
      </button>
    </div>
  );
};

export default Counter;
