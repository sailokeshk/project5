//c.Write a React program with two react components sharing data using Props.
import React from 'react';

export const Student = ({ name, sendMessage }) => {
  const sendToParent = () => {
    sendMessage("Hi Parent, I'm your child " + name + "!");
  };

  return (
    <div>
      <h3>Child Component</h3>
      <p>Hello, I am {name}</p>
      <button onClick={sendToParent}>Send Message to Parent</button>
    </div>
  );
};

//Flow of Data:
//- Parent ➡️ Child via props → sends name and sendMessage function.
//- Child ➡️ Parent via callback → calls sendMessage(...) with a string.

//Why It's Useful:
//This is a basic pattern in React:
//- Parent sends data/functions to children via props.
//- Children use those props to update the parent or pass info back.

//This approach helps manage component interaction, especially in dynamic UIs.