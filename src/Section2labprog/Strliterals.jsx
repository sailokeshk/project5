import React from 'react';
import ReactDOM from 'react-dom/client';

export const Stringliterals = () => {
  const firstName = 'John';
  const lastName = 'Doe';
  const age = 30;
  const city = 'New York';

  // Using template literals to create a full sentence
  const message = `Hello, my name is ${firstName} ${lastName}. I am ${age} years old and I live in ${city}.`;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Displaying Text Using String Literals</h1>
      <p>{message}</p>
    </div>
  );
};


