import React from 'react';
import TextField from '../components/common/TextField';
import Button from '../components/common/Button';

const Login = () => {
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
        placeHolder="Email"
      />
      <TextField
        label="Password"
        type="password"
        className="mt-10"
        placeHolder="Password"
      />
      <Button label="Login" className="mt-10 w-[360px]" />
    </div>
  );
};

export default Login;
