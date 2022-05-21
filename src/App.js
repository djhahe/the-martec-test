import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import UserDetail from './pages/UserDetail';
import Layout from './components/layout/Layout';
import WithUser from './components/auth/WithUser';

const routesConfig = {
  authRoutes: [
    {
      name: 'Home',
      route: '/',
      component: Dashboard,
    },
    {
      name: 'User Details',
      route: '/userDetails',
      component: UserDetail,
    },
  ],
  publicRoutes: [
    {
      name: 'Registration',
      route: '/registration',
      component: Registration,
    },
    {
      name: 'Login',
      route: '/login',
      component: Login,
    },
  ],
};

const getRoutes = (routes) => {
  return routes.map((route) => {
    const Component = route.component;
    return (
      <Route
        key={`route_${route.name}`}
        exact
        path={route.route}
        element={<Component />}
      />
    );
  });
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <WithUser>
              <Layout />
            </WithUser>
          }
        >
          {getRoutes(routesConfig.authRoutes)}
        </Route>
        <Route>
          {getRoutes(routesConfig.publicRoutes)}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
