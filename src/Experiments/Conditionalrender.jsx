
import React, { useState } from 'react';

function Conditionalrender() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div>
            {isAuthenticated ? (
                <h1>User Profile</h1>
            ) : (
                <button onClick={ () => 
                    setIsAuthenticated(true)}>Log In</button>
            )}
        </div>
    );
}
//export default Conditionalrender;



// const Conditionalrender = ({ user, isLoading, theme }) => {
//   // 1. if statement
//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   // 2. if-else statement
//   if (!user) {
//     return <p>User not logged in.</p>;
//   }

//   // 3. Function-based conditional rendering
//   const renderGreeting = () => {
//     if (user.isAdmin) {
//       return <h2>Welcome, Admin {user.name}!</h2>;
//     }
//     return <h2>Welcome, {user.name}!</h2>;
//   };

//   // 4. Switch-case style rendering
//   const renderTheme = (theme) => {
//     switch (theme) {
//       case 'dark':
//         return <div style={{ backgroundColor: 'black', color: 'white' }}>Dark Mode</div>;
//       case 'light':
//         return <div style={{ backgroundColor: 'white', color: 'black' }}>Light Mode</div>;
//       case 'blue':
//         return <div style={{ backgroundColor: 'blue', color: 'white' }}>Blue Theme</div>;
//       default:
//         return <div>Default Theme</div>;
//     }
//   };

//   return (
//     <div>
//       {/* 5. Function call (from above) */}
//       {renderGreeting()}

//       {/* 6. Ternary Operator */}
//       <p>{user.isVerified ? 'Account Verified' : 'Please verify your account ❗'}</p>

//       {/* 7. Logical AND (&&) */}
//       {user.notifications.length > 0 && (
//         <div>
//           <h4>🔔 Notifications:</h4>
//           <ul>
//             {user.notifications.map((n, index) => (
//               <li key={index}>{n}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* 8. Optional chaining (?.) with conditional */}
//       <p>Your bio: {user.profile?.bio ?? 'No bio available'}</p>

//       {/* 9. Switch-like rendering */}
//       {renderTheme(theme)}
//     </div>
//   );
// };

export default Conditionalrender;
