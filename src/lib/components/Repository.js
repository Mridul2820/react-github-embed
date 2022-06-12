import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';

import { client } from '../client';
import RepositoryCard from '../widgets/RepositoryCard';

const Repository = ({
  username,
  repository,
  theme = 'light',
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

Repository.propTypes = {
  username: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  theme: PropTypes.string,
  showStarCount: PropTypes.bool,
  showForkCount: PropTypes.bool,
  showLanguage: PropTypes.bool,
  showDescription: PropTypes.bool,
  showType: PropTypes.bool,
};

export default Repository;
