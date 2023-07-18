import React, { useState } from 'react';

const App = () => {
  const [user, setUser] = useState({
    name: 'Koushal',
    age: 15,
    email: 'koushal@example.com'
  });

  return (
    <div>
      <h1>Local State Application</h1>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default App;
