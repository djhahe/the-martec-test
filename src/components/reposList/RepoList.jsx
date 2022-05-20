import React from 'react';
import Button from '../common/Button';
const MOCK_REPOS = [
  {
    name: 'CKMnemonic',
    url: 'https://api.github.com/repos/djhahe/CKMnemonic',
  },
  {
    name: 'CKMnemonic1',
    url: 'https://api.github.com/repos/djhahe/CKMnemonic',
  },
  {
    name: 'CKMnemonic2',
    url: 'https://api.github.com/repos/djhahe/CKMnemonic',
  },
];

const RepoList = () => {
  return (
    <div>
      <div className="bg-background rounded-lg text-grey-700 flex py-3 px-2">
        <div className="w-[200px]">Name</div>
        <div className="w-[400px]">URL</div>
        <div />
      </div>
      <div>
        {MOCK_REPOS.map(({ name, url }) => {
          return (
            <div
              key={name}
              className="h-[50px] flex items-center"
            >
              <div className="w-[200px]">{name}</div>
              <div className="w-[400px]">{url}</div>
              <div>
                <Button label="Share" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RepoList;
