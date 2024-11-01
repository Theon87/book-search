import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query userInfo {
        Users {
                _id
                username
                email
                bookCount
                savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;

export const QUERY_SINGLE_USER = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
            _id
            username
            email
            }
        }
    }
`;