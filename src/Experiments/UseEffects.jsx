//a.	Write a React program to implement a counter button using React use State hook
import React, { useState,useEffect } from 'react';
export function UseEffectsfun() {
  // Declare a state variable "count" with initial value 0
  const [count, setCount] = useState(0);
  // Increase - Function to handle button click
  const Increase = () => { setCount(count + 1);};
  // Decrease - Function to handle button click
  const Decrease = () => { setCount(count-1);};

  useEffect(() => console.log(count),[count]);
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={Increase}> + </button>
      <h1>{count}</h1>
      <button onClick={Decrease}> - </button>
    </div>
  );
}
//export default Hookscounterbtn;
