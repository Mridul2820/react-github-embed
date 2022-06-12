import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import RepoIcon from '../svgs/RepoIcon';
import StarIcon from '../svgs/StarIcon';
import ForkIcon from '../svgs/ForkIcon';

import { GET_REPOSITORY } from '../graphql/Query';
import { numberFormatter } from '../helper/formatNumber';

const RepositoryCard = ({
  username,
  repository,
  theme,
  showStarCount,
  showForkCount,
  showLanguage,
  showDescription,
  showType,
}) => {
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { username, repository },
  });

  if (loading) return <div className="bg-gray-200 w-80 h-44 rounded-md"></div>;
  if (error) return <div className="bg-gray-200 w-80 h-44 rounded-md"></div>;

  const getType = () => {
    if (!data.repository.isPrivate && data.repository.isTemplate) {
      return 'Public template';
    } else if (data.repository.isPrivate && data.repository.isTemplate) {
      return 'Private template';
    } else if (data.repository.isPrivate) {
      return 'Private';
    } else if (!data.repository.isPrivate) {
      return 'Public';
    } else if (data.repository.isFork) {
      return 'Forked';
    }
  };

  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <div className="flex justify-between flex-col rounded-md p-4 w-80 h-44 border-[1px] border-border-default dark:border-border-dark bg-canvas-default dark:bg-canvas-dark">
        <div>
          <div className="flex items-center gap-2">
            <RepoIcon theme={theme} />
            <a
              href={data.repository.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-default dark:text-accent-dark hover:underline text-sm font-semibold"
              title={data.repository.url}
            >
              <p className="leading-5">{data.repository.name}</p>
            </a>
            {showType && (
              <span className="px-2 py-0.5 border-[1px] border-border-default dark:border-border-dark text-xs text-muted-default dark:text-muted-dark rounded-full font-medium">
                {getType()}
              </span>
            )}
          </div>
          {showDescription && (
            <p className="text-xs text-muted-default dark:text-muted-dark mt-2 leading-5">
              {data.repository.description}
            </p>
          )}
        </div>
        <p className="flex items-center gap-4 mt-2">
          {showLanguage && data.repository.languages.nodes.length > 0 && (
            <>
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  background: data.repository.languages.nodes[0].color,
                }}
              />
              <span className="text-xs text-muted-default dark:text-muted-dark leading-5 -ml-3">
                {data.repository.languages.nodes[0].name}
              </span>
            </>
          )}
          {showStarCount && (
            <a
              href={`${data.repository.url}/stargazers`}
              className="flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StarIcon theme={theme} />
              <span className="text-xs text-muted-default dark:text-muted-dark leading-5">
                {numberFormatter(data.repository.stargazers.totalCount, 1)}
              </span>
            </a>
          )}
          {showForkCount && (
            <a
              href={`${data.repository.url}/network/members`}
              className="flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ForkIcon theme={theme} />
              <span className="text-xs text-muted-default dark:text-muted-dark leading-5">
                {numberFormatter(data.repository.forks.totalCount, 1)}
              </span>
            </a>
          )}
        </p>
      </div>
    </div>
  );
};

RepositoryCard.propTypes = {
  username: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  theme: PropTypes.string,
  showStarCount: PropTypes.bool,
  showForkCount: PropTypes.bool,
  showLanguage: PropTypes.bool,
  showDescription: PropTypes.bool,
  showType: PropTypes.bool,
};

export default RepositoryCard;
