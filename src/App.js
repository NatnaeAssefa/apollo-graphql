import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Define GraphQL query to get all users
const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
      age
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.users.map(user => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
