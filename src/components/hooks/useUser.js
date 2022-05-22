import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectUser,
  logOut,
  setUser,
} from '../../app/userSlice';
import UserService from '../../services/user/user';

export const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const createUser = (userInfo) => {
    UserService.creatUser(userInfo);
    dispatch(setUser(userInfo));
  };

  const updateUser = (email, userInfo) => {
    UserService.updateUser(email, userInfo);
    dispatch(setUser(userInfo));
  };

  const doLogOut = () => {
    dispatch(logOut());
  };

  const doLogin = async (email, password) => {
    const user = UserService.login(email, password);
    dispatch(setUser(user));
    navigate('/');
  };

  return {
    user,
    createUser,
    doLogOut,
    doLogin,
    updateUser,
  };
};
