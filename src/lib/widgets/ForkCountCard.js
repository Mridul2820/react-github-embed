import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/Query';
import StarForkCard from './StarForkCard';

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

  if (loading)
    return <div className="bg-gray-200 w-32 h-[26px] rounded-sm3"></div>;
  if (error)
    return <div className="bg-gray-200 w-32 h-[26px] rounded-sm3"></div>;

  return (
    <StarForkCard
      data={data}
      theme={theme}
      iconText={iconText}
      formatNumber={formatNumber}
      slug="/network/members"
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
