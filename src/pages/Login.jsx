import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '../components/common/TextField';
import Button from '../components/common/Button';
import { useUser } from '../components/hooks/useUser';
import { loginFormValidation } from '../helper/validation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { doLogin } = useUser();

  const errors = useMemo(() => {
    return loginFormValidation({ email, password });
  }, [email, password]);

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
        onChange={(value) => {
          setEmail(value);
          setError('');
        }}
        error={errors.email}
      />
      <TextField
        label="Password"
        type="password"
        className="mt-10"
        placeholder="Password"
        value={password}
        onChange={(value) => {
          setPassword(value);
          setError('');
        }}
        error={errors.password}
      />
      {error && (
        <div className="text-red-800 mt-3 text-xs w-[350px]">
          {error}
        </div>
      )}
      <div className="text-sm text-grey-700 mt-2">
        Do not have account yet ?{' '}
        <Link to="/registration" className="text-primary">
          Register
        </Link>
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
