import { useState } from 'react';

/*
  * React Related Technical Task
  * There is an issue in this code below.
  * Identify the issue: <Issue>
  * What causes the issue: StaticCount re-renders when ParentComponent re-renders,
  * even though StaticCount has no dependency on ParentComponent's state.
  * What is the best practice needs to be implemented/Followed to avoid this issue: 
  * Use React.memo to memoize StaticCount to prevent unnecessary re-renders.
  * Best of Luck
*/

const StaticCount: React.FC = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  console.log("StaticCount re-rendered."); // Debug log for rendering
  return (
    <div>
      <div>{count}</div> { }
      <button onClick={() => setCount(count + 1)}>Increment StaticCount</button>
    </div>
  );
};

const ParentComponent: React.FC = (): JSX.Element => {
  const [count, setCount] = useState<number>(0); // Parent state for managing count

  return (
    <div>
      <div>Parent Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment Parent</button>
    </div>
  );
};

function App() {
  return (
    <div>
      <StaticCount /> {/* StaticCount is now at the top level of the App */}
      <ParentComponent /> {/* ParentComponent is separated to avoid unnecessary re-renders in StaticCount */}
    </div>
  );
}

export default App;

