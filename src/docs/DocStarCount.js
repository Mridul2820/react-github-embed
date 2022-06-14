import React, { useState } from 'react';
import { StarCount } from '../lib';
import { copyTextToClipboard } from './helpers/copyTextToClipboard';

const DocStarCount = () => {
  const [username, setUsername] = useState('facebook');
  const [repository, setRepository] = useState('react');
  const [theme, setTheme] = useState('light');
  const [iconText, setIconText] = useState('Star');
  const [formatNumber, setFormatNumber] = useState(true);

  const [copyMsg, setCopyMsg] = useState('Copy');

  setTimeout(() => {
    setCopyMsg('Copy');
  }, 10000);

  return (
    <div className="py-4 border-b-2 border-t-slate-500">
      <h2 className="font-semibold text-normal md:text-lg lg:text-xl text-center mb-5">
        {`<StarCount />`}
      </h2>
      <div className="flex flex-col lg:flex-row-reverse justify-center gap-10">
        <div className="flex flex-col gap-5">
          <StarCount
            username={username}
            repository={repository}
            theme={theme}
            iconText={iconText}
            formatNumber={formatNumber}
          />
          <div>
            <div className="bg-gray-100 p-5 w-80 relative">
              <div className="absolute top-3 right-3">
                <span
                  className="px-2 py-0.5 border-[1px] border-border-default text-xs text-muted-default rounded-full font-medium cursor-pointer select-none"
                  onClick={() =>
                    copyTextToClipboard(
                      `
                    <StarCount
                      username="${username}"
                      repository="${repository}"
                      theme="${theme}"
                      iconText="${iconText}"
                      formatNumber={${formatNumber}}
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
                <span className="text-entity-tag">StarCount</span>
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
                  <span className="text-syntax-constant">iconText</span>
                  <span className="text-syntax-constant">=</span>
                  <span className="text-syntax-string">{`"${iconText}"`}</span>
                </div>

                <div className="block pl-6">
                  <span className="text-syntax-constant">formatNumber</span>
                  <span className="text-syntax-constant">=</span>
                  <span className="text-syntax-string">{`{`}</span>
                  <span className="text-syntax-constant">{`${formatNumber}`}</span>
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
            <label className="text-gray-600">Icon Text</label>
            <input
              className="input"
              value={iconText}
              onChange={(e) => setIconText(e.target.value)}
            />
          </div>
          <div className="input-row">
            <label className="text-gray-600">Format Number</label>
            <input
              className="input"
              type="checkbox"
              checked={formatNumber}
              onChange={() => setFormatNumber(!formatNumber)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocStarCount;
