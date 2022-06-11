import React from "react";
import { GET_REPOSITORY } from "../graphql/Query";
import { useQuery } from "@apollo/client";

const Repository = ({ username, repository }) => {
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { username, repository },
  });

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  console.log(data);

  return <div></div>;
};

export default Repository;
