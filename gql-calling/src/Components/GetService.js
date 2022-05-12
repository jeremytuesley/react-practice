import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_SERVICE } from '../graphQL/Queries';

const GetService = ({ serviceID }) => {
  const { data } = useQuery(GET_SERVICE, {
    variables: { serviceID },
  });

  return (
    <div>
      <h1>{data?.getService.name}</h1>
    </div>
  );
};

export default GetService;
