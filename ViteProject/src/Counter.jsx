import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increase} style={{ marginRight: '10px' }}>
        Increase Value
      </button>
      <button onClick={decrease}>Decrease Value</button>
    </div>
  );
}

export default Counter;
