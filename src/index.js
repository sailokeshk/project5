import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Apple from './Apple';


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*let course1="React";
let course2="Lokesh";

let access = document.getElementById('root');
//what to transfer
let content=<h1> Hello {course1} + {course2} </h1>

//{variable-name}

ReactDOM.createRoot(access).render(content);
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*<header>
    <ul>
      <li> Home</li>
      <li> About</li>
      <li> Contact me</li>
    </ul>
  </header>
  */

