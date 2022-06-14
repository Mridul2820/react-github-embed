import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/Query';
import StarForkCard from './StarForkCard';
import StarForkLoading from '../loading/StarForkLoading';

const ForkCountCard = ({
  username,
  repository,
  theme,
  iconText,
  formatNumber,
}) => {
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { username, repository },
  });

  if (loading) return <StarForkLoading />;
  if (error) return <StarForkLoading />;

  return (
    <StarForkCard
      data={data}
      theme={theme}
      iconText={iconText}
      formatNumber={formatNumber}
      slug="/network/members"
      numbers={data.repository.forks.totalCount}
    />
  );
};

ForkCountCard.propTypes = {
  username: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  theme: PropTypes.string,
  iconText: PropTypes.string,
  formatNumber: PropTypes.bool,
};

export default ForkCountCard;
