import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { ImNpm } from 'react-icons/im';
import DocRepository from './docs/DocRepository';
import DocStarCount from './docs/DocStarCount';
import DocForkCount from './docs/DocForkCount';

const App = () => {
  return (
    <div className="max-w-3xl mx-auto px-5 py-6">
      <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-center">
        React Github Embade Playground
      </h1>

      <DocRepository />
      <DocStarCount />
      <DocForkCount />

      <div className="flex gap-5 items-center justify-center">
        <a
          href="https://github.com/Mridul2820/react-github-embed"
          className="flex items-center gap-1 font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
          GITHUB
        </a>
        <a
          href="https://www.npmjs.com/package/react-github-embed"
          className="flex items-center gap-1 font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImNpm />
          NPM
        </a>
      </div>
    </div>
  );
};

export default App;
