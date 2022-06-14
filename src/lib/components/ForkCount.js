import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';

import { client } from '../client';
import ForkCountCard from '../widgets/ForkCountCard';

const ForkCount = ({
  username,
  repository,
  theme = 'light',
  iconText = 'Fork',
  formatNumber = true,
}) => {
  return (
    <ApolloProvider client={client}>
      <ForkCountCard
        username={username}
        repository={repository}
        theme={theme}
        iconText={iconText}
        formatNumber={formatNumber}
      />
    </ApolloProvider>
  );
};

ForkCount.propTypes = {
  username: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  theme: PropTypes.string,
  iconText: PropTypes.string,
  formatNumber: PropTypes.bool,
};

export default ForkCount;
