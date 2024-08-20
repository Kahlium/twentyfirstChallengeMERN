import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query users {
    tech {
        _id
        username
        email
        password
        savedBooks {

        }
    }
  }
`;

