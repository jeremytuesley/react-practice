import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GET_CHARACTERS {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        episode {
          id
          name
          air_date
          episode
          created
        }
        created
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query GET_CHARACTER($id: ID!) {
    character(id: $id) {
      name
      status
      species
      type
      gender
      image
      episode {
        name
        episode
        air_date
        id
      }
    }
  }
`;
