//e. Write a React program to implement the iterative rendering using map() function.
import React from 'react';
const Iterativerender = () => {
  const students = ['Aarav', 'Bharath', 'Charan', 'Diya', 'Eesha'];
  return (
    <div>
      <h2>Student List</h2>
      <ul >
        {students.map((student, index) => (
          <li  key={index} >{index}.{student}</li>
        ))}
      </ul>
    </div>
  );
};

export default Iterativerender;



//- This program demonstrates iterative rendering using .map().
//- It turns an array into visible HTML elements (<li>).
//- Very useful in React for showing lists like students, products, users, etc.