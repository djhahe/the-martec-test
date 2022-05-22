import React from 'react';
import Button from '../common/Button';

const RepoList = ({ repos = [] }) => {
  return (
    <div>
      <div className="bg-background rounded-lg text-grey-700 flex py-3 px-2">
        <div className="w-[200px]">Name</div>
        <div className="w-[400px]">URL</div>
        <div />
      </div>
      <div>
        {repos.map(({ name, url }) => {
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
