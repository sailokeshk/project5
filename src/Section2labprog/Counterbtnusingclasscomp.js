//a.	Write a React program to implement a counter button using react class components
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
class CounterButtonclasscomp extends Component {
  constructor(props) {
    super(props);
    // Step 1: Initialize state
    this.state = {
      count: 0,
    };
  }
  // Step 2: Define a method to handle the button click
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  // Step 3: Render the component
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Counter using Class Component</h2>
        <p>Count: {this.state.count  }</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}
export default CounterButtonclasscomp;

// Execution Sequence of Steps
// Step 1: ReactDOM Starts Execution
// createRoot(container).render(<CounterButton />) is called.
// React creates an instance of the CounterButton class.

//Step 2: Constructor Runs
// The constructor(props) is executed:
// Initializes state: this.state = { count: 0 }
// Binds or defines any necessary methods (like handleIncrement)
//At this point, the component has internal state with count = 0.

//Step 3: Initial Render
// The render() method is called.
// JSX is returned:
// <p>Count: 0</p>
// <button onClick={this.handleIncrement}>Increment</button>
// React converts the JSX to actual DOM and displays it on the page.

//Step 4: User Clicks "Increment" Button
// onClick={this.handleIncrement} is triggered.

//Step 5: handleIncrement Executes
// This line runs:
// this.setState({ count: this.state.count + 1 });
// React schedules a re-render with the updated state:
// count is now increased by 1.
// setState is asynchronous — it tells React "state has changed, please update."

// Step 6: Component Re-renders
// React calls the render() method again, now with the new state.
// Updated JSX is returned:
// <p>Count: 1</p>
// <button onClick={this.handleIncrement}>Increment</button>

// The DOM is updated efficiently by React's virtual DOM diffing.
