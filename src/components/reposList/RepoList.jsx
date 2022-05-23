import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseShare } from '../../app/githubSlice';
import BarLoader from '../common/BarLoader';
import Button from '../common/Button';

const RepoList = ({ repos = [], isLoading, isError }) => {
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
    <>
      <div className="bg-background rounded-lg text-grey-700 flex py-3 px-2">
        <div className="w-[200px]">Name</div>
        <div className="w-[400px]">URL</div>
        <div className="w-[100px]">Shared</div>
        <div />
      </div>
      <div className="flex flex-col mt-2 flex-1 overflow-auto">
        {!isLoading &&
          !isError &&
          repos.length &&
          repos.map(
            ({ name, html_url, id, sharedCount }) => {
              return (
                <div
                  key={name}
                  className="h-[50px] mt-2 flex items-center"
                >
                  <div className="w-[200px]">{name}</div>
                  <div className="w-[400px]">
                    {html_url}
                  </div>
                  <div className="w-[100px]">
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
        {isLoading && <BarLoader />}
        {isError ||
          (!repos.length && (
            <div>Can not find any repos</div>
          ))}
      </div>
    </>
  );
};

export default RepoList;
