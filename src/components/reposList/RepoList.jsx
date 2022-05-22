import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseShare } from '../../app/githubSlice';
import Button from '../common/Button';

const RepoList = ({ repos = [] }) => {
  const dispatch = useDispatch();
  const onShare = (id, url) => {
    window.open(
      `http://www.linkedin.com/shareArticle?mini=true&url=${url}`,
      'Share on linkedin',
      'height=500,width=500',
    );
    dispatch(increaseShare(id));
  };
  return (
    <div>
      <div className="bg-background rounded-lg text-grey-700 flex py-3 px-2">
        <div className="w-[200px]">Name</div>
        <div className="w-[400px]">URL</div>
        <div className="w-[100px]">Shared</div>
        <div />
      </div>
      <div>
        {repos.map(
          ({ name, html_url, id, sharedCount }) => {
            return (
              <div
                key={name}
                className="h-[50px] flex items-center"
              >
                <div className="w-[200px]">{name}</div>
                <div className="w-[400px]">{html_url}</div>
                <div className="w-[400px]">
                  {sharedCount || 0}
                </div>
                <div>
                  <Button
                    label="Share"
                    onClick={() => onShare(id, html_url)}
                  />
                </div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default RepoList;
