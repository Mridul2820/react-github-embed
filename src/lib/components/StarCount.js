import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';

import { client } from '../client';
import StarCountCard from '../widgets/StarCountCard';

const StarCount = ({
  username,
  repository,
  theme = 'light',
  iconText = 'Star',
  formatNumber = true,
}) => {
  return (
    <ApolloProvider client={client}>
      <StarCountCard
        username={username}
        repository={repository}
        theme={theme}
        iconText={iconText}
        formatNumber={formatNumber}
      />
    </ApolloProvider>
  );
};

StarCount.propTypes = {
  username: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  theme: PropTypes.string,
  iconText: PropTypes.string,
  formatNumber: PropTypes.bool,
};

export default StarCount;
