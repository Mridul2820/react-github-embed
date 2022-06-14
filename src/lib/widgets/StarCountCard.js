import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { IoMdArrowDropleft } from 'react-icons/io';

import GithubIcon from '../svgs/GithubIcon';

import { GET_REPOSITORY } from '../graphql/Query';
import { numberFormatter } from '../helper/formatNumber';

const StarCountCard = ({
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
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <div className="flex items-center gap-2">
        <a
          href={data.repository.url}
          target="_blank"
          rel="noopener noreferrer"
          className="star-fork bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800  duration-300"
          title={repository}
        >
          <GithubIcon />
          {iconText}
        </a>
        <a
          href={`${data.repository.url}/stargazers`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative star-fork bg-neutral-50 hover:bg-neutral-100 dark:hover:bg-slate-800 duration-300"
          title={`${repository} stargazers`}
        >
          <span className="absolute top-1/2 -translate-y-1/2 -left-3 z-10">
            <IoMdArrowDropleft
              size={17}
              color={theme === 'dark' ? '#0f172a' : '#e2e8f0'}
            />
          </span>
          {formatNumber
            ? numberFormatter(data.repository.stargazers.totalCount, 1)
            : data.repository.stargazers.totalCount}
        </a>
      </div>
    </div>
  );
};

StarCountCard.propTypes = {
  username: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  theme: PropTypes.string,
  iconText: PropTypes.string,
  formatNumber: PropTypes.bool,
};

export default StarCountCard;
