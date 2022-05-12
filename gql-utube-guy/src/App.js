import { useMutation, useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_ALL_USERS } from './GraphQL/Queries';
import './app.css';
import { CREATE_NEW_USER } from './GraphQL/Mutations';

function App() {
  const { data: userData, refetch } = useQuery(GET_ALL_USERS);
  const [createUser, { data }] = useMutation(CREATE_NEW_USER);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [id, setID] = useState('');

  useEffect(() => {
    if (userData) {
      const _data = userData.getAllUsers.slice(
        userData.getAllUsers.length - 20
      );
      setUsers(_data);
    }
  }, [userData]);

  const addUser = () => {
    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });
    console.log(data);
  };

  return (
    <div className="App">
      <div style={{ maxHeight: '100' }}>
        <input
          placeholder="Enter your ID"
          type="number"
          onChange={(e) => {
            setID(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            refetch({ id: parseInt(id) });
          }}
        >
          Find Me
        </button>
      </div>
      <div>
        {users.map((item) => {
          return (
            <h1>
              Hi {item.firstName} {item.lastName}!
            </h1>
          );
        })}
      </div>
      <div>
        <input
          placeholder="First Name"
          name="firstName"
          type="text"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <input
          placeholder="Last Name"
          type="text"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button onClick={addUser}>Submit Form</button>
      </div>
    </div>
  );
}

export default App;
