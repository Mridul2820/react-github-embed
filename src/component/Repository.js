import React from "react";
import { GET_REPOSITORY } from "../graphql/Query";
import { useQuery } from "@apollo/client";
import RepoIcon from "../svgs/RepoIcon";

const Repository = ({
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

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  console.log(data);

  return (
    <div className="rounded-md p-4 max-w-xs w-full border-2 border-border-default bg-canvas-default">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4">
          <RepoIcon />
        </div>
        <a
          href={data.repository.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-fg-accent hover:underline text-sm font-semibold"
        >
          <p className="leading-5">{data.repository.name}</p>
        </a>
      </div>
    </div>
  );
};

export default Repository;
