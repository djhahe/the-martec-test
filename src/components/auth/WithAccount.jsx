import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const WithAccount = ({ children }) => {
  const navigate = useNavigate();
  const user = useMemo(() => true, []);

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  return children;
};

export default WithAccount;
