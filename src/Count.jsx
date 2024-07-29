import React, { useState } from "react";
import "./Count.css";

const Count = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter-container">
      <h1 className="counter-display">{counter}</h1>
      <div className="button-container">
        <button
          className="counter-button decrease"
          onClick={() => setCounter(counter - 1)}
        >
          Decrease
        </button>
        <button className="counter-button reset" onClick={() => setCounter(0)}>
          Reset
        </button>
        <button
          className="counter-button increase"
          onClick={() => setCounter(counter + 1)}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Count;
