import React, { useState } from 'react';
import TextField from '../components/common/TextField';
import Button from '../components/common/Button';
import { useUser } from '../components/hooks/useUser';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const navigate = useNavigate();
  const { doLogin } = useUser();

  const onLogin = () => {
    try {
      doLogin(email, password);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center m-auto">
      <div className="text-2xl font-semibold ">
        Welcome to The Martec
      </div>
      <div className="text-grey-700 text-sm mt-4">
        Input your email to log in
      </div>
      <TextField
        label="Email"
        className="mt-10"
        placeholder="Email"
        value={email}
        onChange={setEmail}
      />
      <TextField
        label="Password"
        type="password"
        className="mt-10"
        placeholder="Password"
        value={password}
        onChange={setPassword}
      />
      {error && (
        <div className="text-red-800 mt-3 text-xs w-[350px]">
          {error}
        </div>
      )}
      <div className="text-sm text-grey-700 mt-2">
        Do not have account yet ?{' '}
        <a href="/registration" className="text-primary">
          Register
        </a>
      </div>
      <Button
        label="Login"
        className="mt-10 w-[360px]"
        onClick={onLogin}
      />
    </div>
  );
};

export default Login;
