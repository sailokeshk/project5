//d.Write a React program to conditionally render a component in the browser
import React, { useState } from 'react';
//import ReactDOM from 'react-dom/client';
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }
  render() {
    if (this.state.isLoggedIn) {
      return <h1>Welcome back, User!</h1>;
    } else {
      return <h1>Please log in.</h1>;
    }
  }
}
export default Greeting;






// // A simple component that renders when the user is logged in
// const WelcomeMessage = ({ onLogout }) => (
//   <div style={{ textAlign: 'center' }}>
//     <h2>Welcome, User!</h2>
//     <button onClick={onLogout}>Logout</button>
//   </div>
// );

// // Main App component with conditional rendering
// export const Mainlogincomp = () => {
//   // State to track if user is logged in
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Handler functions
//   const handleLogin = () => setIsLoggedIn(true);
//   const handleLogout = () => setIsLoggedIn(false);

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Conditional Rendering Example</h1>

//       {/* Conditional Rendering Starts Here */}
//       {isLoggedIn ? (
//         <WelcomeMessage onLogout={handleLogout} />
//       ) : (
//         <button onClick={handleLogin}>Login</button>
//       )}
//     </div>
//   );
// };


