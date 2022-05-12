import { gql } from '@apollo/client';

export const GET_ALL_SERVICES = gql`
  query GetAllServices {
    getAllServices {
      _id
      available
      images
      name
      price
      salePrice
    }
  }
`;

export const GET_SERVICE = gql`
  query GetService($serviceID: ID!) {
    getService(getServiceData: { serviceId: $serviceID }) {
      available
      description
      duration
      _id
      images
      name
      options
      price
      salePrice
    }
  }
`;
