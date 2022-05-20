import React from 'react';
import Button from '../components/common/Button';
import TextField from '../components/common/TextField';
import RepoList from '../components/reposList/RepoList';

const Dashboard = () => {
  return (
    <div className="my-8 mx-6">
      <div className="text-2xl font-semibold">
        Github Repos
      </div>
      <div className="mt-8 flex items-center">
        <div className="text-sm">
          Total <b>10</b> repos
        </div>
        <TextField
          placeholder="Search by username"
          className="ml-3"
        />
        <Button label="Search" className="ml-3" />
      </div>
      <div className="mt-4">
        <RepoList />
      </div>
    </div>
  );
};

export default Dashboard;
