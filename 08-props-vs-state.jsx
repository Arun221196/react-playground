import React, { useState } from 'react';

// Example of a component demonstrating both props and state
const PropsVsState = ({ initialCount }) => {
  // Using state to manage the count in this component
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h1>Props vs State Example</h1>
      <h2>Current Count (State): {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Initial Count (Props): {initialCount}</h2>
      <p>Props cannot be changed within the component!</p>
    </div>
  );
};

// Usage Example
const App = () => {  
  return <PropsVsState initialCount={0} />;
};

export default App;
