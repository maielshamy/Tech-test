import React, { useState, memo } from 'react';

// Memoizing StaticCount to prevent unnecessary re-renders
const StaticCount: React.FC = memo((): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  console.log("Please stop fix me.");

  return (
    <div>
      <div>{count}</div> {/* Correctly wrapped {count} inside a <div> */}
      <button onClick={() => setCount(count + 1)}>Increment StaticCount</button>
    </div>
  );
});

const ParentComponent: React.FC = (): JSX.Element => {
  // Correct placement of useState for the ParentComponent
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <StaticCount /> {/* StaticCount will not re-render with Parent due to memoization */}
      <div>Parent Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment Parent</button>
    </div>
  );
};

function App() {
  return (
    <div>
      <ParentComponent />
    </div>
  );
}

export default App;  
