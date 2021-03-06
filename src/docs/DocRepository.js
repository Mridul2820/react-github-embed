import React, { useState } from 'react';
import { Repository } from '../lib';
import { copyTextToClipboard } from './helpers/copyTextToClipboard';

const DocRepository = () => {
  const [username, setUsername] = useState('facebook');
  const [repository, setRepository] = useState('react');
  const [theme, setTheme] = useState('light');
  const [showStarCount, setShowStarCount] = useState(true);
  const [showForksCount, setShowForksCount] = useState(true);
  const [showLanguage, setShowLanguage] = useState(true);
  const [showDescription, setShowDescription] = useState(true);
  const [showType, setShowType] = useState(true);

  const [copyMsg, setCopyMsg] = useState('Copy');

  setTimeout(() => {
    setCopyMsg('Copy');
  }, 10000);

  return (
    <div className="py-4 border-b-2 border-t-slate-500">
      <h2 className="font-semibold text-normal md:text-lg lg:text-xl text-center mb-5">
        {`<Repository />`}
      </h2>
      <div className="flex flex-col lg:flex-row-reverse justify-center gap-10">
        <div className="flex flex-col gap-5">
          <Repository
            username={username}
            repository={repository}
            theme={theme}
            showStarCount={showStarCount}
            showForkCount={showForksCount}
            showLanguage={showLanguage}
            showDescription={showDescription}
            showType={showType}
          />
          <div>
            <div className="bg-gray-100 p-5 w-80 relative">
              <div className="absolute top-3 right-3">
                <span
                  className="px-2 py-0.5 border-[1px] border-border-default text-xs text-muted-default rounded-full font-medium cursor-pointer select-none"
                  onClick={() =>
                    copyTextToClipboard(
                      `
                    <Repository
                      username="${username}"
                      repository="${repository}"
                      theme="${theme}"
                      showStarCount={${showStarCount}}
                      showForkCount={${showForksCount}}
                      showLanguage={${showLanguage}}
                      showDescription={${showDescription}}
                      showType={${showType}}
                    />`,
                      setCopyMsg
                    )
                  }
                >
                  {copyMsg}
                </span>
              </div>
              <pre>
                <span className="text-syntax-string">&lt;</span>
                <span className="text-entity-tag">Repository</span>
                <div className="block pl-6">
                  <span className="text-syntax-constant">username</span>
                  <span className="text-syntax-constant">=</span>
                  <span className="text-syntax-string">{`"${username}"`}</span>
                </div>
                <div className="block pl-6">
                  <span className="text-syntax-constant">repository</span>
                  <span className="text-syntax-constant">=</span>
                  <span className="text-syntax-string">{`"${repository}"`}</span>
                </div>
                <div className="block pl-6">
                  <span className="text-syntax-constant">theme</span>
                  <span className="text-syntax-constant">=</span>
                  <span className="text-syntax-string">{`"${theme}"`}</span>
                </div>
                <div className="block pl-6">
                  <span className="text-syntax-constant">showStarCount</span>
                  <span className="text-syntax-constant">=</span>
                  <span className="text-syntax-string">{`{`}</span>
                  <span className="text-syntax-constant">{`${showStarCount}`}</span>
                  <span className="text-syntax-string">{`}`}</span>
                </div>
                <div className="block pl-6">
                  <span className="text-syntax-constant">showForksCount</span>
                  <span className="text-syntax-constant">=</span>
                  <span className="text-syntax-string">{`{`}</span>
                  <span className="text-syntax-constant">{`${showForksCount}`}</span>
                  <span className="text-syntax-string">{`}`}</span>
                </div>
                <div className="block pl-6">
                  <span className="text-syntax-constant">showLanguage</span>
                  <span className="text-syntax-constant">=</span>
                  <span className="text-syntax-string">{`{`}</span>
                  <span className="text-syntax-constant">{`${showLanguage}`}</span>
                  <span className="text-syntax-string">{`}`}</span>
                </div>
                <div className="block pl-6">
                  <span className="text-syntax-constant">showDescription</span>
                  <span className="text-syntax-constant">=</span>
                  <span className="text-syntax-string">{`{`}</span>
                  <span className="text-syntax-constant">{`${showDescription}`}</span>
                  <span className="text-syntax-string">{`}`}</span>
                </div>
                <div className="block pl-6">
                  <span className="text-syntax-constant">showLanguage</span>
                  <span className="text-syntax-constant">=</span>
                  <span className="text-syntax-string">{`{`}</span>
                  <span className="text-syntax-constant">{`${showType}`}</span>
                  <span className="text-syntax-string">{`}`}</span>
                </div>
                <span className="text-syntax-string">/</span>
                <span className="text-syntax-string">&gt;</span>
              </pre>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 select-none">
          <div className="input-row">
            <label className="text-gray-600">Username</label>
            <input
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-row">
            <label className="text-gray-600">Repository</label>
            <input
              className="input"
              value={repository}
              onChange={(e) => setRepository(e.target.value)}
            />
          </div>
          <div className="input-row">
            <label className="text-gray-600">Theme</label>
            <select
              className="input"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className="input-row">
            <label className="text-gray-600">Show Star Count</label>
            <input
              className="input"
              type="checkbox"
              checked={showStarCount}
              onChange={() => setShowStarCount(!showStarCount)}
            />
          </div>
          <div className="input-row">
            <label className="text-gray-600">Show Fork Count</label>
            <input
              className="input"
              type="checkbox"
              checked={showForksCount}
              onChange={() => setShowForksCount(!showForksCount)}
            />
          </div>
          <div className="input-row">
            <label className="text-gray-600">Show Language</label>
            <input
              className="input"
              type="checkbox"
              checked={showLanguage}
              onChange={() => setShowLanguage(!showLanguage)}
            />
          </div>
          <div className="input-row">
            <label className="text-gray-600">Show Description</label>
            <input
              className="input"
              type="checkbox"
              checked={showDescription}
              onChange={() => setShowDescription(!showDescription)}
            />
          </div>
          <div className="input-row">
            <label className="text-gray-600">Show Type</label>
            <input
              className="input"
              type="checkbox"
              checked={showType}
              onChange={() => setShowType(!showType)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocRepository;
