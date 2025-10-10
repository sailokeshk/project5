import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function ButtonClickHandler() {
  // Step 1: Initialize the count state
  const [count, setCount] = useState(0);

  // Step 2: Define event handler functions
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  // Step 3: Return JSX with buttons
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Button Click Events - Functional Component</h2>
      <p>Current Count: {count}</p>

      <button onClick={handleIncrement} style={{ marginRight: '10px' }}>
        Increment
      </button>

      <button onClick={handleDecrement} style={{ marginRight: '10px' }}>
        Decrement
      </button>

      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default ButtonClickHandler;
