import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  isLoadingRepos,
  getGithubRepos,
  fetchGithubRepos,
} from '../app/githubSlice';
import Button from '../components/common/Button';
import TextField from '../components/common/TextField';
import RepoList from '../components/reposList/RepoList';

const Dashboard = () => {
  const dispatch = useDispatch();
  const repos = useSelector(getGithubRepos);
  const isLoading = useSelector(isLoadingRepos);
  const [searchTerm, setSearchTerm] = useState('');
  const onSearch = () => {
    dispatch(fetchGithubRepos(searchTerm));
  };
  return (
    <>
      <div className="text-2xl font-semibold">
        Github Repos
      </div>
      <div className="mt-8 flex items-center">
        <div className="text-sm">
          Total <b>{repos.length}</b> repos
        </div>
        <TextField
          placeholder="Search by username"
          className="ml-3"
          value={searchTerm}
          onChange={setSearchTerm}
        />
        <Button
          label="Load Repos"
          className="ml-3"
          onClick={onSearch}
          disabled={isLoading}
        />
      </div>
      <div className="mt-4 flex-1 overflow-auto flex flex-col">
        <RepoList repos={repos} isLoading={isLoading} />
      </div>
    </>
  );
};

export default Dashboard;
