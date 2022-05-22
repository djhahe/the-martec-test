import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Dashboard from '../pages/Dashboard';
import UserDetail from '../pages/UserDetail';
import UpdatePassword from '../pages/UpdatePassword';
import UpdateInfo from '../pages/UpdateInfo';

export const routesConfig = {
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
    {
      name: 'Update Password',
      route: '/updatePassword',
      component: UpdatePassword,
    },
    {
      name: 'Update Info',
      route: '/updateInfo',
      component: UpdateInfo,
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
