import { useSelector, useDispatch } from 'react-redux';
import {
  selectUser,
  logOut,
  setUser,
} from '../../app/userSlice';
import { updateUser } from '../../services/user/user';

export const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const createUser = (userInfo) => {
    updateUser(userInfo);
    dispatch(setUser(userInfo));
  };

  const doLogOut = () => {
    dispatch(logOut);
  };

  return { user, createUser, doLogOut };
};
