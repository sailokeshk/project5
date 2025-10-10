//b. Write a React program to implement a counter button using react functional components
import React, { useState } from 'react';

//Step 1: Global variable to store the count
let counter = 0;
// Step 2: Class component to force re-rendering
export class ForceUpdateWrapperfuncomp extends React.Component {
  state = {}; // dummy state
  // Method to force re-render by updating dummy state
  forceReRender = () => {
    this.setState({}); // Triggers a re-render
  };
  render() {
    return (
      <CounterWithoutHooks rerender={this.forceReRender} />
    );
  }
}
// Step 3: Functional component with counter logic
 const CounterWithoutHooks = ({ rerender }) => {
  // This function runs every time the component re-renders
  const handleClick = () => {
    //Update global counter
    counter += 1;
    //Ask the parent class component to re-render
    rerender();
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2> Functional Comp Without Hooks - Counter</h2>
      <p>Count: {counter}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};


// Step 1: JavaScript Loads and ReactDOM.render is Called
// When the page loads, the script executes ReactDOM.render(...).
// React looks for the element with id="root" in the HTML.
// It mounts the ForceUpdateWrapperfuncomp component into that DOM element.

// Step 2: React Instantiates <ForceUpdateWrapperfuncomp /> (Class Component)
// React creates an instance of ForceUpdateWrapperfuncomp, which is a class-based component.
// The constructor (in this case, implicit) and the render method are triggered.
// Inside its render() method, it renders the child: <CounterWithoutHooks rerender={this.forceReRender} />.

// Step 3: Functional Component <CounterWithoutHooks /> Renders
// React calls CounterWithoutHooks function.
// Since it's a function component, it executes the function body.
// Inside, it reads the global counter variable (which starts at 0) and returns JSX showing:
// <p>Count: 0</p>
// <button onClick={handleClick}>Increment</button>

// Step 4: User Clicks the Button
// When the button is clicked, handleClick is triggered.
// It increments the global variable counter by 1.
// Then it calls the rerender function passed from the parent — which is forceReRender().

// Step 5: forceReRender() Triggers a Re-render
// The ForceUpdateWrapperfuncomp class calls this.setState({}), updating its dummy state.
// This causes React to re-render the ForceUpdateWrapperfuncomp, which re-renders CounterWithoutHooks.

// Step 6: Functional Component Re-renders with New Global State
// On re-render, CounterWithoutHooks reads the updated global counter (now 1, 2, etc.).
// It returns updated JSX reflecting the new count.


// function Funcntrbtn() {
//   const [count, setCount] = useState(0); // Initialize count to 0

//   const handleIncrement = () => {
//     setCount(count + 1); // Increment count
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Counter using Functional Component</h2>
//       <p>Current Count: {count}</p>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   );
// }
// export default Funcntrbtn;
