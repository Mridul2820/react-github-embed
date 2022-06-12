import React from "react";
import { ApolloProvider } from "@apollo/client";

import { client } from "../client";
import RepositoryCard from "../widgets/RepositoryCard";

const Repository = ({
  username,
  repository,
  theme = "light",
  showStarCount = true,
  showForkCount = true,
  showLanguage = true,
  showDescription = true,
  showType = true,
}) => {
  return (
    <ApolloProvider client={client}>
      <RepositoryCard
        username={username}
        repository={repository}
        theme={theme}
        showStarCount={showStarCount}
        showForkCount={showForkCount}
        showLanguage={showLanguage}
        showDescription={showDescription}
        showType={showType}
      />
    </ApolloProvider>
  );
};

export default Repository;
