//b.	Write a React program to fetch the data from an API using React use Effect hook
import React, { useState, useEffect } from 'react';

const ApiUseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data when component mounts
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means it runs once on mount

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiUseEffect;
