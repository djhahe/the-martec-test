import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col grow">
        <Header />
        <div className="main-container grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
