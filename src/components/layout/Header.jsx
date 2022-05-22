import React from 'react';
import { useLocation } from 'react-router-dom';
import { routesConfig } from '../../config/routeConfig';

const Header = () => {
  const location = useLocation();
  const route = routesConfig.authRoutes.find(
    (route) => route.route === location.pathname,
  );
  return (
    <div className="h-[73px] border-b items-center flex shrink-0">
      <span className="ml-4 text-sm">{route.name}</span>
    </div>
  );
};

export default Header;
