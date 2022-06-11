import { gql } from "@apollo/client";

export const GET_REPOSITORY = gql`
  query searchUser($username: String!, $repository: String!) {
    repository(name: $repository, owner: $username) {
      isPrivate
      isFork
      isTemplate
      isArchived
      url
      forks {
        totalCount
      }
      stargazers {
        totalCount
      }
      name
      description
      languages(orderBy: { field: SIZE, direction: DESC }, first: 1) {
        nodes {
          color
          id
          name
        }
      }
    }
  }
`;
