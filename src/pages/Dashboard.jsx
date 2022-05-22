import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getGithubRepos,
  fetchGithubRepos,
} from '../app/githubSlice';
import Button from '../components/common/Button';
import TextField from '../components/common/TextField';
import RepoList from '../components/reposList/RepoList';

const Dashboard = () => {
  const dispatch = useDispatch();
  const repos = useSelector(getGithubRepos);
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
          label="Search"
          className="ml-3"
          onClick={onSearch}
        />
      </div>
      <div className="mt-4">
        <RepoList repos={repos} />
      </div>
    </>
  );
};

export default Dashboard;
