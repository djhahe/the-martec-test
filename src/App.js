import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import Layout from './components/layout/Layout';
import WithAccount from './components/auth/WithAccount';

const routesConfig = {
  authRoutes: [
    {
      name: 'Home',
      route: '/',
      component: Dashboard,
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
            <WithAccount>
              <Layout />
            </WithAccount>
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
