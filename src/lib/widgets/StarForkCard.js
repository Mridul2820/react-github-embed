import React from 'react';
import { IoMdArrowDropleft } from 'react-icons/io';
import PropTypes from 'prop-types';

import GithubIcon from '../svgs/GithubIcon';
import { numberFormatter } from '../helper/formatNumber';

const StarForkCard = ({
  data,
  theme,
  iconText,
  formatNumber,
  slug,
  numbers,
}) => {
  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <div className="flex items-center gap-2">
        <a
          href={data.repository.url}
          target="_blank"
          rel="noopener noreferrer"
          className="star-fork bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800  duration-300"
          title={data.repository.name}
        >
          <GithubIcon />
          {iconText}
        </a>
        <a
          href={`${data.repository.url}${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative star-fork bg-neutral-50 hover:bg-neutral-100 dark:hover:bg-slate-800 duration-300"
          title={`${data.repository.name} stargazers`}
        >
          <span className="absolute top-1/2 -translate-y-1/2 -left-3 z-10">
            <IoMdArrowDropleft
              size={17}
              color={theme === 'dark' ? '#0f172a' : '#e2e8f0'}
            />
          </span>
          {formatNumber ? numberFormatter(numbers, 1) : numbers}
        </a>
      </div>
    </div>
  );
};

StarForkCard.propTypes = {
  data: PropTypes.object.isRequired,
  theme: PropTypes.string,
  slug: PropTypes.string,
  iconText: PropTypes.string,
  formatNumber: PropTypes.bool,
  numbers: PropTypes.number,
};

export default StarForkCard;
