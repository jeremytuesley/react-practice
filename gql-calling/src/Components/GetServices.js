import { useQuery } from '@apollo/client';
import { GET_ALL_SERVICES } from '../graphQL/Queries';
import { useState } from 'react';
import GetService from './GetService';

const GetServices = () => {
  const { data } = useQuery(GET_ALL_SERVICES);
  const [id, setID] = useState();

  const handleOnClick = (itemID) => {
    setID(itemID);
    console.log('itemID', itemID);
    return '11';
  };

  return (
    <div>
      {console.log('id', id)}
      <div>
        {data?.getAllServices.map((item, key) => {
          return (
            <div
              key={key}
              style={{ border: '2px solid red', width: 400, margin: 24 }}
              onClick={() => handleOnClick(item._id)}
            >
              <h3>{item.name}</h3>
              <img
                src={item.images[0]}
                alt="serviceThumbnail"
                style={{ width: 150 }}
              />
              <p>${item.price}</p>
            </div>
          );
        })}
        {id ? <GetService serviceID={id} /> : ''}
      </div>
    </div>
  );
};

export default GetServices;
