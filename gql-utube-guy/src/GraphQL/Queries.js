import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
  query getAllUsers($id: Int) {
    getAllUsers(id: $id) {
      id
      firstName
      lastName
      email
      password
    }
  }
`;
