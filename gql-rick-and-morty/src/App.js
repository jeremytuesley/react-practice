import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_CHARACTER, GET_CHARACTERS } from './GraphQL/Queries';

function App() {
  const { data } = useQuery(GET_CHARACTERS);
  const { data: singleChar, refetch } = useQuery(GET_CHARACTER);
  const [ID, setID] = useState('');

  useEffect(() => {
    if (singleChar) {
      console.log(singleChar);
    }
  }, [singleChar]);
  console.log(data);

  const charResults = data?.characters?.results;

  return (
    <div className="App" style={{ margin: 50 }}>
      <input
        placeholder="Enter your ID"
        type="number"
        onChange={(e) => {
          setID(e.target.value);
        }}
      ></input>
      <button onClick={() => refetch({ id: ID })}>Find Character</button>
      <div>
        <h1>{singleChar?.character?.name}</h1>
        <img src={singleChar?.character?.image} alt="characterPortrait" />
      </div>
      {charResults?.map((item, key) => {
        return (
          <div
            key={key}
            style={{
              margin: 20,
              padding: 20,
              border: '2px solid red',
              width: 400,
            }}
          >
            <h3>
              {item.name} - ID:{item.id}
            </h3>
            <h4>{item.species}</h4>
            <h4>{item.status}</h4>
            <img src={item.image} alt="characterPortrait" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
