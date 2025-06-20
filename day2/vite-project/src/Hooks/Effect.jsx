import React, { useEffect, useState } from 'react';

const Effect = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Effect;