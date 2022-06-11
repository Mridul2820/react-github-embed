import { gql } from "@apollo/client";

export const GET_REPOSITORY = gql`
  query searchUser($username: String!, $repository: String!) {
    repository(name: $repository, owner: $username) {
      isPrivate
      isFork
      isTemplate
      forks {
        totalCount
      }
      stargazers {
        totalCount
      }
      name
      description
    }
  }
`;
