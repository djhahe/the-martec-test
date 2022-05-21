import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useUser } from '../hooks/useUser';
import { selectUser } from '../../app/userSlice';

const WithUser = ({ children }) => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user.email) {
      navigate('/login');
    }
  }, [user, navigate]);

  return children;
};

export default WithUser;
